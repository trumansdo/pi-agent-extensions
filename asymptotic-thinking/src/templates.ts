// templates.ts — 六态提示词组装（v3：START/END 重构 + 全链路路径感知 + 输出精简）
// 动态加载 .ts 提示词模块，difficulty 动态控制约束强度

import type {
  ThinkingState,
  MasterTaskType,
  SubTaskType,
  Difficulty,
} from "./types";
import {
  STATE_META,
  MASTER_TASK_TYPE_LABELS,
  SUB_TASK_TYPE_LABELS,
  DIFFICULTY_LABELS,
  MASTER_TASK_HINTS,
  TOOL_TASK_INFO,
  TOOL_TRANSITION,
  TOOL_STATUS,
  getMaxStateTurns,
} from "./types";
import { formatNextStateHint } from "./state-machine";

// ── 提示词模块接口 ──
interface PromptModule {
  buildPrompt(diff: Difficulty, state: ThinkingState): string;
}

// ── 路径构建 ──
function masterEnumToKebab(master: MasterTaskType): string {
  return master.toLowerCase();
}

function subEnumToKebab(sub: SubTaskType): string {
  return sub.toLowerCase().replace(/_/g, "-");
}

// ── 动态加载 .ts 提示词模块（jiti 处理 TypeScript）──
function loadPromptModule(
  master: MasterTaskType | null,
  sub: SubTaskType | null,
): PromptModule | null {
  if (!master || !sub) return null;

  const tryRequire = (mPath: string): PromptModule | null => {
    try {
      // jiti hooks into require(), handles .ts transparently
      return require(mPath) as PromptModule;
    } catch {
      return null;
    }
  };

  // 1. 精确匹配
  const exactPath = `./prompts/${masterEnumToKebab(master)}/${subEnumToKebab(sub)}`;
  const exact = tryRequire(exactPath);
  if (exact) return exact;

  // 2. 同大类通用子类型
  if (sub !== "GENERAL") {
    const generalSubPath = `./prompts/${masterEnumToKebab(master)}/general`;
    const generalSub = tryRequire(generalSubPath);
    if (generalSub) return generalSub;
  }

  // 3. 全通用兜底
  return tryRequire("./prompts/general/general");
}

// ── 任务描述 ──
function taskDesc(
  master: MasterTaskType | null,
  sub: SubTaskType | null,
  diff: Difficulty | null,
): string {
  if (!master || !diff) return "尚未设定";
  const masterLabel = MASTER_TASK_TYPE_LABELS[master];
  const subLabel = sub ? `-${SUB_TASK_TYPE_LABELS[sub]}` : "";
  const diffLabel = DIFFICULTY_LABELS[diff];
  return `${masterLabel}${subLabel} · ${diffLabel}`;
}

function taskHint(master: MasterTaskType | null): string {
  if (!master) return "";
  return MASTER_TASK_HINTS[master] ?? "";
}

// ── 获取提示词内容 ──
export function getPromptContent(
  master: MasterTaskType | null,
  sub: SubTaskType | null,
  diff: Difficulty | null,
  state: ThinkingState,
): string {
  if (!master || !sub || !diff)
    return `等待模型调用 ${TOOL_TASK_INFO} 工具 设定任务信息...`;

  const mod = loadPromptModule(master, sub);
  if (!mod) return "(未找到匹配的提示词模块)";

  try {
    return mod.buildPrompt(diff, state);
  } catch {
    return "(提示词生成失败)";
  }
}

// ── 全链路路径感知：按 visited 动态生成适配段（纯函数，可单测）──
export function pathAdapter(state: ThinkingState, visited: ThinkingState[]): string {
  // 直达 EXECUTE：无前置理解/设计（TRIVIAL 最短路径）
  if (state === "EXECUTE" && !visited.includes("DESIGN")) {
    return "> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。";
  }
  // 跳理解到 DESIGN（SIMPLE 跳 DEEP_UNDERSTAND）
  if (state === "DESIGN" && !visited.includes("DEEP_UNDERSTAND")) {
    return "> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。";
  }
  // 回退到 DESIGN（曾进入 EXECUTE 后回退重做）
  if (state === "DESIGN" && visited.includes("EXECUTE")) {
    return "> ⚡ 曾进入 EXECUTE 后回退。方案需覆盖已执行部分的调整与修正。";
  }
  return "";
}

// ── 核心函数：buildTemplate ──
export function buildTemplate(
  state: ThinkingState,
  turn: number,
  master: MasterTaskType | null,
  sub: SubTaskType | null,
  diff: Difficulty | null,
  visited: ThinkingState[] = [],
): string {
  const maxTurns = getMaxStateTurns(state, diff);
  const stateLabel = STATE_META[state]?.label ?? state;
  const statusLine = `第${turn}/${maxTurns}轮 ${stateLabel}阶段`;
  const statusLineWithTask = `第${turn}/${maxTurns}轮 ${stateLabel}阶段 · ${taskDesc(master, sub, diff)}`;

  // ── START（启动：评估 + 设定画像）──
  if (state === "START") {
    const taskTurnLine = `第task${turn}轮任务启动`;
    return `<task${turn}>

<instruction spec="markdown">
${statusLine}
${taskTurnLine}

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 \`${TOOL_TRANSITION}\` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 \`${TOOL_TASK_INFO}\` 工具设定任务画像
</actions>

</task${turn}>`.trim();
  }

  // ── END（任务终态：极简）──
  if (state === "END") {
    return `<task${turn}>

<instruction spec="markdown">
${statusLine}

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task${turn}>`.trim();
  }

  const hint = taskHint(master);
  const promptContent = getPromptContent(master, sub, diff, state)
    // 去掉各模块自带的 "当前为xxx（xxx难度）。" 开头，避免与 taskBlock 重复
    .replace(/^当前为.+?（.+?难度）。[^\n]*\n\n?/, "")
    // 去掉各模块自带的 transition 流转指令，统一由 actions 管理
    .replace(/[^\n]*asymptotic-think_transition[^\n]*\n?/g, "")
    .trim();

  // 全链路路径感知适配段
  const pathSegment = pathAdapter(state, visited);

  // ── 公共结构 ──
  // 动态流转提示：基于 getAllowedTargets 的可用目标（含向前/回退，非写死）
  const flowHint = formatNextStateHint(state, diff);
  const taskBlock = `<instruction spec="markdown">
${statusLineWithTask}
遵守《渐近式思考状态机操作规范》
${hint ? `\n> ${hint}` : ""}${pathSegment ? `\n${pathSegment}` : ""}
${promptContent ? `\n\n${promptContent}` : ""}

> 🔄 可用流转：${flowHint}
</instruction>`;

  switch (state) {
    case "DEEP_UNDERSTAND":
      return `<task${turn}>

${taskBlock}

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 \`${TOOL_TRANSITION}\` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task${turn}>`.trim();

    case "DESIGN":
      return `<task${turn}>

${taskBlock}

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 \`${TOOL_TRANSITION}\` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task${turn}>`.trim();

    case "EXECUTE":
      return `<task${turn}>

${taskBlock}

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 \`${TOOL_TRANSITION}\` 工具流转状态
</actions>

</task${turn}>`.trim();

    case "VERIFY":
      return `<task${turn}>

${taskBlock}

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 \`${TOOL_TRANSITION}\` 工具流转状态
</actions>

</task${turn}>`.trim();

    default:
      return "";
  }
}
