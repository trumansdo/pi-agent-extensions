// state-machine.ts — 六态状态机 + 转移校验 + bumpAndWarn
// 使用 session-store 做持久化，自身维护内存 Map 做运行时
//
// 数据流：每次变更 → memory.set() → persist() → sessionStore.save() → SQLite INSERT
// 恢复流：init() → sessionStore.load() → memory.set()
//
// v2：START（启动起点）+ END（任务终态）
// - state 可为 null（新建会话未初始化），before_agent_start 检测 END/空 → START
// - visited 记录本次任务路径（全链路路径感知），转入 END 清空

import type {
  ThinkingState,
  Difficulty,
  MasterTaskType,
  SubTaskType,
  SessionState,
} from "./types";
import {
  STATE_META,
  getMaxStateTurns,
  TOOL_TASK_INFO,
  TOOL_TRANSITION,
} from "./types";
import { sessionStore } from "./session-store";

// ════════════════════════════════════════════════════════════════
//  状态机核心
// ════════════════════════════════════════════════════════════════

/** 运行时内存存储，key=sessionId，每次变更同步写 SQLite */
const memory = new Map<string, SessionState>();

/** 新会话的初始状态：state=null（未初始化），所有任务画像字段为 null，计数器归零 */
export const DEFAULT_STATE: SessionState = {
  state: null,
  difficulty: null,
  masterTaskType: null,
  subTaskType: null,
  taskTurnCount: 0,
  stateTurnCount: 0,
  lastTransitionTime: 0,
  visited: [],
};

/**
 * 根据当前状态 + 难度，返回允许转移的目标状态集合。
 * START 时根据难度开放不同路径：TRIVIAL 可直达 EXECUTE，SIMPLE 可到 DESIGN/EXECUTE，其余必须先 DEEP_UNDERSTAND。
 * END 无合法出口（只能靠 before_agent_start 代码转换回 START）。
 */
export function getAllowedTargets(
  from: ThinkingState | null,
  difficulty: Difficulty | null,
): ThinkingState[] {
  switch (from) {
    case null:
    case "START":
      if (difficulty === "TRIVIAL") return ["DEEP_UNDERSTAND", "EXECUTE"];
      if (difficulty === "SIMPLE")
        return ["DEEP_UNDERSTAND", "DESIGN", "EXECUTE"];
      return ["DEEP_UNDERSTAND"];
    case "DEEP_UNDERSTAND":
      return ["DESIGN", "EXECUTE", "VERIFY"];
    case "DESIGN":
      return ["EXECUTE", "DEEP_UNDERSTAND", "VERIFY"];
    case "EXECUTE":
      return ["VERIFY", "DESIGN", "DEEP_UNDERSTAND"];
    case "VERIFY":
      return ["END", "EXECUTE", "DEEP_UNDERSTAND", "DESIGN"];
    case "END":
      return []; // 无合法出口，只能 before_agent_start 代码转换
    default:
      // fail-fast：未来新增状态漏 case 立即暴露，而非静默返回 undefined
      throw new Error(`getAllowedTargets: 未知状态 ${from}`);
  }
}

// ════════════════════════════════════════════════════════════════
//  状态流转方向分类（向前 vs 回退）
// ════════════════════════════════════════════════════════════════

/** 状态在自然流程中的顺序索引，用于判断流转方向 */
export const STATE_ORDER: Record<ThinkingState, number> = {
  START: 0,
  DEEP_UNDERSTAND: 1,
  DESIGN: 2,
  EXECUTE: 3,
  VERIFY: 4,
  END: 5,
};

/**
 * 将指定状态下允许的目标区分为"向前"和"回退"两组。
 * - 向前：自然流程中目标顺序大于当前状态（含完成任务进入 END）
 * - 回退：自然流程中目标顺序小于当前状态
 */
export function classifyTargets(
  from: ThinkingState | null,
  difficulty: Difficulty | null,
): {
  forward: ThinkingState[];
  backward: ThinkingState[];
} {
  const targets = getAllowedTargets(from, difficulty);
  const currentOrder = STATE_ORDER[from ?? "START"];
  const forward: ThinkingState[] = [];
  const backward: ThinkingState[] = [];

  for (const target of targets) {
    if (target === "END" && from !== "END") {
      forward.push(target);
    } else if (STATE_ORDER[target] > currentOrder) {
      forward.push(target);
    } else {
      backward.push(target);
    }
  }

  return { forward, backward };
}

/**
 * 格式化状态流转提示文本。
 * 格式："本阶段完成可前移至[xxx(XXX)、yyy(YYY)]，本阶段不足可回退至[zzz(ZZZ)]"
 */
export function formatNextStateHint(
  from: ThinkingState | null,
  difficulty: Difficulty | null,
): string {
  const { forward, backward } = classifyTargets(from, difficulty);

  const fmt = (states: ThinkingState[]) =>
    states.map((s) => `${STATE_META[s].label}(${s})`).join("、");

  const parts: string[] = [];
  if (forward.length > 0) {
    parts.push(`本阶段完成可前移至[${fmt(forward)}]状态；`);
  }
  if (backward.length > 0) {
    parts.push(`本阶段不足可回退至[${fmt(backward)}]状态。`);
  }

  return parts.join("");
}

function getSessionId(ctx: any): string {
  return ctx.sessionManager.getSessionId();
}

/** 将内存中的当前状态写入 SQLite（append-only INSERT） */
function persist(sessionId: string): void {
  const state = memory.get(sessionId);
  if (state) sessionStore.save(sessionId, state);
}

// ════════════════════════════════════════════════════════════════
//  公开接口
// ════════════════════════════════════════════════════════════════

// ── 轮次警告文案（三档难度差异点集中于此）──
// 所有档位统一包含"重新评估难度"含义；措辞正向引导（告知该做什么），避免否定式命令。

/** 难度档位 */
type WarnTier = "simple" | "standard" | "hard";

/** 将难度布尔标志映射为档位 */
function tierOf(isSimple: boolean, isHard: boolean): WarnTier {
  if (isSimple) return "simple";
  if (isHard) return "hard";
  return "standard";
}

/** 文案表：层级 × 难度档位 → 提示文案（查表替代嵌套三元） */
const WARN_TEXT: Record<
  "soft" | "over" | "hardStop",
  Record<WarnTier, string>
> = {
  soft: {
    simple: `若任务比预期简单，可调用 ${TOOL_TASK_INFO} 工具 重估难度；否则请尽快完成并流转状态。`,
    standard: `可调用 ${TOOL_TASK_INFO} 工具 重新评估难度，或尽快完成当前阶段并流转状态，以顺利推进任务。`,
    hard: `请遵循流程纪律，专注推进，完成后立即流转状态；若难度评估有误，可调用 ${TOOL_TASK_INFO} 工具 重新评估难度。`,
  },
  over: {
    simple: `任务可能被误评高难度——调用 ${TOOL_TASK_INFO} 工具重估为更低难度，或立即调用 ${TOOL_TRANSITION} 工具流转状态。`,
    standard: `请调用 ${TOOL_TRANSITION} 工具流转状态，或调用 ${TOOL_TASK_INFO} 工具 重新评估难度，及时推进任务。`,
    hard: `请遵循流程纪律，立即调用 ${TOOL_TRANSITION} 工具流转状态；若难度评估有误，可调用 ${TOOL_TASK_INFO} 工具 重新评估难度。`,
  },
  hardStop: {
    simple: `请立即调用 ${TOOL_TRANSITION} 工具流转状态；若任务实际简单，调用 ${TOOL_TASK_INFO} 工具 重估难度，以高效完成。`,
    standard: `请停止当前操作，立即调用 ${TOOL_TRANSITION} 工具流转状态，或调用 ${TOOL_TASK_INFO} 工具 重新评估难度，或等待用户新指令。`,
    hard: `请遵循流程纪律，停止当前操作并立即调用 ${TOOL_TRANSITION} 工具流转状态；若难度评估有误，可调用 ${TOOL_TASK_INFO} 工具 重新评估难度。`,
  },
};

function detailText(
  level: "soft" | "over" | "hardStop",
  isSimple: boolean,
  isHard: boolean,
): string {
  return WARN_TEXT[level][tierOf(isSimple, isHard)];
}

// ── 三级阈值骨架模板（共用）──
function softWarning(
  label: string,
  turn: number,
  max: number,
  d: string,
): string {
  return `\n<turnWarning>你已处于【${label}】状态 ${turn} 轮（上限 ${max}），接近上限。${d}</turnWarning>`;
}
function overWarning(
  label: string,
  turn: number,
  max: number,
  d: string,
): string {
  return `\n<turnWarning>你已处于【${label}】状态 ${turn} 轮（上限 ${max}），已超过上限。${d}</turnWarning>`;
}
function hardStop(label: string, turn: number, max: number, d: string): string {
  return `\n<hardStop>⛔ 强制停止：你已在【${label}】状态停留 ${turn} 轮（上限 ${max}），严重超时。${d}</hardStop>`;
}

export const stateMachine = {
  // ── 生命周期 ──

  /**
   * session_start 时调用。
   * 先从 SQLite 恢复最新状态；
   * 无效状态（state 不在 STATE_META）→ 直接丢弃重置为 DEFAULT_STATE；
   * 无记录则仅内存放置 DEFAULT_STATE（state=null，**不写库**——保持"无记录"，DB 层 state NOT NULL 不受影响；
   * 首次流转/设定后才持久化，此时 state 必有值）。
   * visited 缺失（旧记录）补默认 []。
   */
  init(ctx: any): void {
    const sessionId = getSessionId(ctx);
    const saved = sessionStore.load(sessionId);
    if (saved) {
      // 无效状态（state 不在 STATE_META）→ 直接丢弃重置
      if (!STATE_META[saved.state ?? "START"]) {
        memory.set(sessionId, {
          ...DEFAULT_STATE,
          lastTransitionTime: Date.now(),
        });
        return;
      }
      memory.set(sessionId, { ...saved, visited: saved.visited ?? [] });
      return;
    }
    memory.set(sessionId, { ...DEFAULT_STATE, lastTransitionTime: Date.now() });
  },

  /** session_shutdown 时调用，当前为 no-op（数据已实时持久化） */
  shutdown(_ctx: any): void {
    // no-op
  },

  /** 删除会话：清 SQLite 所有记录 + 内存 */
  deleteSession(sessionId: string): void {
    sessionStore.delete(sessionId);
    memory.delete(sessionId);
  },

  // ── setTaskInfo ──

  /**
   * TOOL_TASK_INFO 调用 → 设定 difficulty + masterTaskType + subTaskType。
   * 允许条件：START 状态（正常设定）或当前状态超限（防御难度虚高，允许重估）。
   * 设定后 stateTurnCount 归零（新难度新起点），taskTurnCount 保持不变。
   */
  setTaskInfo(
    ctx: any,
    difficulty: Difficulty,
    masterTaskType: MasterTaskType,
    subTaskType: SubTaskType,
  ): { ok: true } | { ok: false; reason: string } {
    const sessionId = getSessionId(ctx);
    const current = memory.get(sessionId);
    const state = current?.state ?? null;

    // 允许条件：START 或超限重估
    const overLimit =
      current && state !== null && state !== "END"
        ? current.stateTurnCount > getMaxStateTurns(state, current.difficulty)
        : false;
    if (state !== "START" && !overLimit) {
      return { ok: false, reason: "仅可在 START 阶段或状态超限时设定任务信息" };
    }

    const next: SessionState = {
      ...current!,
      difficulty,
      masterTaskType,
      subTaskType,
      lastTransitionTime: Date.now(),
      taskTurnCount: current?.taskTurnCount ?? 0,
      stateTurnCount: 0,
    };
    memory.set(sessionId, next);
    persist(sessionId);
    return { ok: true };
  },

  // ── transition ──

  /**
   * TOOL_TRANSITION 调用 → 状态流转。
   * - 校验转移合法性（getAllowedTargets）
   * - END 状态拒绝任何手动流转（只能 before_agent_start 代码转换）
   * - 转入 END 时清空 difficulty/masterTaskType/subTaskType 与 visited
   * - 从 START 出发时 taskTurnCount +1
   * - stateTurnCount 每次转移归零
   * - visited 记录每次流转的目标状态（全链路路径感知）
   */
  transition(
    ctx: any,
    to: ThinkingState,
  ):
    | { ok: true; from: ThinkingState; to: ThinkingState }
    | { ok: false; reason: string } {
    const sessionId = getSessionId(ctx);
    const current = memory.get(sessionId);
    const from = current?.state ?? "START";
    if (from === to)
      return { ok: false, reason: `不能转移到自身（${from}→${to}）` };

    // START 出发：必须先设定任务画像（set-task-info），否则拒绝流转
    if (from === "START" || from === null) {
      if (
        !current?.difficulty ||
        !current?.masterTaskType ||
        !current?.subTaskType
      ) {
        return {
          ok: false,
          reason: `START 流转前必须调用 ${TOOL_TASK_INFO} 工具设定任务画像（难度/大类型/小类型），当前画像未设定`,
        };
      }
    }

    const allowed = getAllowedTargets(from, current?.difficulty ?? null);
    if (!allowed.includes(to)) {
      return {
        ok: false,
        reason: `${from ?? "START"} 状态下不能转移到 ${to}。可转移: ${allowed.length ? allowed.join(", ") : "无（END 需用户发消息自动转换）"}`,
      };
    }

    const ending = to === "END";
    const next: SessionState = {
      state: to,
      // 转入 END 时清空任务画像，否则保留
      difficulty: ending ? null : (current?.difficulty ?? null),
      masterTaskType: ending ? null : (current?.masterTaskType ?? null),
      subTaskType: ending ? null : (current?.subTaskType ?? null),
      // 从 START 出发时任务轮次 +1
      taskTurnCount:
        from === "START"
          ? (current?.taskTurnCount ?? 0) + 1
          : (current?.taskTurnCount ?? 0),
      // 状态内轮次归零
      stateTurnCount: 0,
      lastTransitionTime: Date.now(),
      // visited 记录路径；转入 END 清空
      visited: ending ? [] : [...(current?.visited ?? []), to],
    };
    memory.set(sessionId, next);
    persist(sessionId);
    return { ok: true, from, to };
  },

  // ── bumpAndWarn ──

  /**
   * turn_end 时调用 → stateTurnCount +1，返回轮次警告（如有）。
   * 三级阈值：软提醒（接近 maxTurns）/ 超限警告（> maxTurns）/ hardStop 强制停止（> maxTurns+1/3）。
   * 文案按难度分级（方向 D），所有档位统一包含"重新评估难度"提示：
   *   - TRIVIAL/SIMPLE：温和（引导重估难度——可能是难度虚高）
   *   - MODERATE：标准
   *   - COMPLEX+：严厉（强调流程纪律，仍保留重估难度提示）
   * END 不计数；null 视为 START 参与计数。
   */
  bumpAndWarn(ctx: any): string | null {
    const sessionId = getSessionId(ctx);
    const current = memory.get(sessionId);
    if (!current || current.state === "END") return null;

    const state: ThinkingState = current.state ?? "START";
    const nextTurn = current.stateTurnCount + 1;
    const maxTurns = getMaxStateTurns(state, current.difficulty);
    memory.set(sessionId, { ...current, stateTurnCount: nextTurn });
    persist(sessionId);

    const label = STATE_META[state].label;
    const diff = current.difficulty;
    const isSimple = diff === "TRIVIAL" || diff === "SIMPLE";
    const isHard = diff === "COMPLEX" || diff === "HARD" || diff === "EXTREME";
    const excessThreshold = maxTurns + Math.max(1, Math.ceil(maxTurns / 3));

    // 严重超时：hardStop 强制停止（超 1/3 缓冲）
    if (nextTurn > excessThreshold) {
      return hardStop(
        label,
        nextTurn,
        maxTurns,
        detailText("hardStop", isSimple, isHard),
      );
    }
    // 超过上限：第一级警告
    if (nextTurn > maxTurns) {
      return overWarning(
        label,
        nextTurn,
        maxTurns,
        detailText("over", isSimple, isHard),
      );
    }
    // 接近上限：软提醒
    if (nextTurn >= maxTurns - 1 && maxTurns > 2) {
      return softWarning(
        label,
        nextTurn,
        maxTurns,
        detailText("soft", isSimple, isHard),
      );
    }
    return null;
  },

  // ── 只读查询 ──

  get: (sessionId: string) => memory.get(sessionId),
  set: (ctx: any, state: SessionState) => {
    const sessionId = getSessionId(ctx);
    memory.set(sessionId, state);
    persist(sessionId);
  },
  getState: (sessionId: string) => memory.get(sessionId)?.state ?? null,
  getTaskTurnCount: (sessionId: string) =>
    memory.get(sessionId)?.taskTurnCount ?? 0,
  getStateTurnCount: (sessionId: string) =>
    memory.get(sessionId)?.stateTurnCount ?? 0,
  getDifficulty: (sessionId: string) =>
    memory.get(sessionId)?.difficulty ?? null,
  getMasterTaskType: (sessionId: string) =>
    memory.get(sessionId)?.masterTaskType ?? null,
  getSubTaskType: (sessionId: string) =>
    memory.get(sessionId)?.subTaskType ?? null,
  getVisited: (sessionId: string) => memory.get(sessionId)?.visited ?? [],

  // ── 流转方向分类 ──

  /** 将允许的目标区分为向前和回退两组 */
  classifyTargets,

  /** 格式化状态流转提示文本 */
  formatNextStateHint,
};
