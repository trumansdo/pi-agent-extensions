/// <reference path="./globals.d.ts" />
// index.ts — 渐近式思考状态机 pi-agent 扩展
//
// 架构：index.ts 是唯一入口，通过 pi.registerTool / pi.on 注册工具和事件钩子。
// 所有状态机逻辑委托给 stateMachine，自身只负责：
//   1. 工具参数校验（TypeBox schema）
//   2. 调用 stateMachine 方法
//   3. 格式化返回给 LLM 的中文提示文本
//   4. 事件钩子中注入引导/提醒内容

import {
  type ExtensionAPI,
  SessionManager,
  type Theme,
  type AgentToolResult,
  type ToolRenderResultOptions,
} from "@earendil-works/pi-coding-agent";
import { Text, type Component } from "@earendil-works/pi-tui";
import { Type } from "typebox";
import path from "node:path";
import fs from "node:fs";
import {
  stateMachine,
  DEFAULT_STATE,
  getAllowedTargets,
  formatNextStateHint,
} from "./state-machine";
import { sessionStore } from "./session-store";
import { buildTemplate } from "./templates";
import {
  TOOL_TRANSITION,
  TOOL_TASK_INFO,
  TOOL_STATUS,
  STATE_META,
  STATE_KEYS,
  DIFFICULTY_LABELS,
  MASTER_TASK_TYPE_LABELS,
  SUB_TASK_TYPE_LABELS,
  TOOL_DESCRIBE_DIFFICULTY,
  TOOL_DESCRIBE_MASTER,
  TOOL_DESCRIBE_SUB,
  INFERENCE_BASE,
  INFERENCE_SUB_TUNING,
  DIFFICULTY_TEMP_SHIFT,
  FLOW_DIAGRAM,
  getMaxStateTurns,
  getReminderInterval,
} from "./types";
import type {
  ThinkingState,
  Difficulty,
  MasterTaskType,
  SubTaskType,
} from "./types";

/** 辅助：从 ctx 获取 sessionId 并查询是否启用 */
function isEnabled(ctx: any): boolean {
  try {
    return sessionStore.isEnabled(ctx.sessionManager.getSessionId());
  } catch {
    return true; // 兜底：无法获取时默认启用
  }
}

// 扩展 SYSTEM.md（静态框架规则）——读取后追加到系统提示词
// 缓存避免每轮重复读文件
let frameworkRulesCache: string | null | undefined;
function loadFrameworkSystemPrompt(): string {
  if (frameworkRulesCache !== undefined) return frameworkRulesCache ?? "";
  const p = path.resolve(__dirname, "..", "SYSTEM.md");
  try {
    frameworkRulesCache = fs.readFileSync(p, "utf-8");
  } catch {
    frameworkRulesCache = null; // 读取失败则不注入（防御）
  }
  return frameworkRulesCache ?? "";
}

// 从 labels 对象提取 key 数组，用于 TypeBox enum 约束
const difficultyKeys = Object.keys(DIFFICULTY_LABELS) as [string, ...string[]];
const masterTaskTypeKeys = Object.keys(MASTER_TASK_TYPE_LABELS) as [
  string,
  ...string[],
];
const subTaskTypeKeys = Object.keys(SUB_TASK_TYPE_LABELS) as [
  string,
  ...string[],
];

export default function (pi: ExtensionAPI) {
  // ════════════════════════════════════════════════════════════
  //  工具 1：asymptotic-think_transition — 状态流转
  // ════════════════════════════════════════════════════════════

  pi.registerTool({
    name: TOOL_TRANSITION,
    label: "渐近式思考·状态流转",
    description: "渐近式思考状态机工具：变更思考进行中的状态机的当前状态",
    promptSnippet: "变更状态机当前状态",
    promptGuidelines: [
      `完成当前阶段后调用 ${TOOL_TRANSITION} 工具 切换到下一阶段。`,
      "状态：START(启动) → DEEP_UNDERSTAND(深度理解) → DESIGN(设计) → EXECUTE(执行) → VERIFY(验证) → END(结束)",
    ],
    parameters: Type.Object({
      to: Type.String({
        description: "下一个思考目标状态",
        // 限制 LLM 只能传合法状态值
        enum: STATE_KEYS as unknown as string[],
      }),
    }),
    async execute(
      _toolCallId: any,
      params: any,
      _signal: any,
      _onUpdate: any,
      ctx: any,
    ) {
      if (!isEnabled(ctx)) {
        return {
          content: [
            {
              type: "text",
              text: "渐近式思考已禁用，请使用 /asymptotic-toggle 启用",
            },
          ],
          details: {},
        };
      }
      try {
        const sessionId = ctx.sessionManager.getSessionId();

        // 委托 stateMachine 执行转移（含校验 + 持久化）
        const result = stateMachine.transition(ctx, params.to as ThinkingState);

        // ── 成功分支：返回目标状态 + 动态流转方向提示 + 新状态提示词 ──
        if (result.ok) {
          const fromLabel = STATE_META[result.from].label;
          const toLabel = STATE_META[result.to].label;

          // 用 getAllowedTargets 动态获取下一状态，并区分向前/回退
          const difficulty = stateMachine.getDifficulty(sessionId);
          const nextHint = formatNextStateHint(result.to, difficulty);

          // 进入 END 时追加收尾提示
          const endSuffix =
            result.to === "END"
              ? "\n上一任务已完成，保持空闲等待新指令，不执行任何修改操作"
              : "";

          // tool_result 纯数据化：只返回流转结果 + 允许的下一步
          // （新状态完整引导由 before_agent_start / turn_end 提供，不在此重复）
          const text = `✅ 状态流转成功：从【${fromLabel}】转移到【${toLabel}】。
${nextHint + endSuffix}`;

          return {
            content: [{ type: "text", text }],
            details: {},
          };
        }

        // ── 失败分支：告知 LLM 为什么被拒绝 + 当前状态 + 可用的目标状态 ──
        const st = stateMachine.getState(sessionId);
        const currentLabel = st ? STATE_META[st].label : "未初始化";
        const difficulty = stateMachine.getDifficulty(sessionId);
        const nextHint = formatNextStateHint(st, difficulty);
        return {
          content: [
            {
              type: "text",
              text: `ERROR: 状态流转被拒绝：当前处于【${currentLabel}】状态，无法转移到【${STATE_META[params.to as ThinkingState].label}】。
原因：${result.reason}。
${nextHint}`,
            },
          ],
          details: {},
        };
      } catch (e) {
        console.error("[asymptotic-thinking] TOOL_TRANSITION 异常", e);
        return {
          content: [
            {
              type: "text",
              text: `[asymptotic-thinking] 状态流转工具异常，请重试`,
            },
          ],
          details: {},
        };
      }
    },

    renderResult(result: AgentToolResult<{}>, options: ToolRenderResultOptions, _theme: Theme, context: any): Component {
      const contentBlock = result.content?.[0];
      const textContent =
        contentBlock && contentBlock.type === "text"
          ? (contentBlock as { type: "text"; text: string }).text
          : "";

      if (context.isError) {
        return new Text(`\n${textContent}`, 0, 0);
      }

      if (options.expanded) {
        return new Text(`\n${textContent}`, 0, 0);
      }

      return {
        invalidate() {},
        render(width: number) {
          const tempText = new Text(textContent, 0, 0);
          const allVisualLines = tempText.render(width);
          const visualLines = allVisualLines.slice(0, 5);
          const skippedCount = allVisualLines.length - visualLines.length;
          const hint =
            skippedCount > 0
              ? `... (${skippedCount} more lines, ctrl+o to expand)`
              : "";
          return hint ? [hint, ...visualLines] : visualLines;
        },
      };
    },
  });

  // ════════════════════════════════════════════════════════════
  //  工具 2：asymptotic-think_set-task-info — 设定任务画像
  // ════════════════════════════════════════════════════════════

  pi.registerTool({
    name: TOOL_TASK_INFO,
    label: "渐近式思考·设定任务信息",
    description:
      "渐近式思考状态机工具：设定用户指令的任务难度和大任务类型+小任务类型",
    promptSnippet: "设定任务难度/大类型/小类型",
    promptGuidelines: [
      `START 启动阶段先调用 ${TOOL_TASK_INFO} 工具 设定任务画像，再根据难度选择下一状态。`,
    ],
    parameters: Type.Object({
      difficulty: Type.String({
        description: TOOL_DESCRIBE_DIFFICULTY,
        enum: difficultyKeys,
      }),
      masterTaskType: Type.String({
        description: TOOL_DESCRIBE_MASTER,
        enum: masterTaskTypeKeys,
      }),
      subTaskType: Type.String({
        description: TOOL_DESCRIBE_SUB,
        enum: subTaskTypeKeys,
      }),
    }),
    async execute(
      _toolCallId: any,
      params: any,
      _signal: any,
      _onUpdate: any,
      ctx: any,
    ) {
      if (!isEnabled(ctx)) {
        return {
          content: [
            {
              type: "text",
              text: "渐近式思考已禁用，请使用 /asymptotic-toggle 启用",
            },
          ],
          details: {},
        };
      }
      try {
        // 参数值统一转大写匹配枚举（LLM 可能传小写）
        const result = stateMachine.setTaskInfo(
          ctx,
          (params.difficulty as string).toUpperCase() as Difficulty,
          params.masterTaskType as MasterTaskType,
          params.subTaskType as SubTaskType,
        );

        // ── 失败分支：非 START 状态调用时拒绝 ──
        if (!result.ok) {
          const sessionId = ctx.sessionManager.getSessionId();
          const st = stateMachine.getState(sessionId);
          const currentLabel = st ? STATE_META[st].label : "未初始化";
          return {
            content: [
              {
                type: "text",
                text: `X 任务信息设定失败：仅可在 START 阶段或状态超限时设定任务信息，当前处于【${currentLabel}】状态。
原因：${result.reason}。
报告不为START且未超限的原因，立刻继续完成上一轮任务。完成后重新调用本工具。`,
              },
            ],
            details: {},
          };
        }

        // ── 成功分支：查 labels 表转中文展示 ──
        const difficultyLabel =
          DIFFICULTY_LABELS[
            (params.difficulty as string).toUpperCase() as Difficulty
          ];
        const masterLabel =
          MASTER_TASK_TYPE_LABELS[params.masterTaskType as MasterTaskType];
        const subLabel =
          SUB_TASK_TYPE_LABELS[params.subTaskType as SubTaskType];

        // 用 getAllowedTargets 动态获取下一状态，并区分向前/回退
        const nextStateHint = formatNextStateHint(
          "START",
          (params.difficulty as string).toUpperCase() as Difficulty,
        );

        return {
          content: [
            {
              type: "text",
              text: `✅ 任务画像已设定：${masterLabel}-${subLabel} | ${difficultyLabel}难度。
${nextStateHint}
最后调用 ${TOOL_TRANSITION} 工具流转状态。`,
            },
          ],
          details: {},
        };
      } catch (e) {
        console.error(`[asymptotic-thinking] ${TOOL_TASK_INFO} 异常`, e);
        return {
          content: [
            {
              type: "text",
              text: `[asymptotic-thinking] ${TOOL_TASK_INFO} 工具异常，请重试`,
            },
          ],
          details: {},
        };
      }
    },

    renderResult(result: AgentToolResult<{}>, options: ToolRenderResultOptions, _theme: Theme, context: any): Component {
      const contentBlock = result.content?.[0];
      const textContent =
        contentBlock && contentBlock.type === "text"
          ? (contentBlock as { type: "text"; text: string }).text
          : "";

      if (context.isError) {
        return new Text(`\n${textContent}`, 0, 0);
      }

      if (options.expanded) {
        return new Text(`\n${textContent}`, 0, 0);
      }

      return {
        invalidate() {},
        render(width: number) {
          const tempText = new Text(textContent, 0, 0);
          const allVisualLines = tempText.render(width);
          const visualLines = allVisualLines.slice(0, 5);
          const skippedCount = allVisualLines.length - visualLines.length;
          const hint =
            skippedCount > 0
              ? `... (${skippedCount} more lines, ctrl+o to expand)`
              : "";
          return hint ? [hint, ...visualLines] : visualLines;
        },
      };
    },
  });

  // ════════════════════════════════════════════════════════════
  //  工具 3：asymptotic-think_status — 状态查询
  // ════════════════════════════════════════════════════════════

  pi.registerTool({
    name: TOOL_STATUS,
    label: "渐近式思考·状态查询",
    description:
      "渐近式思考状态机工具：查询当前状态机的完整状态(当前阶段、任务画像、轮次计数、允许的下一步转移、五态流程图)",
    promptSnippet: "查询状态机当前状态",
    promptGuidelines: [
      "随时可调用，查看当前任务在状态机中的位置和可用的下一步操作。",
    ],
    // 无参数，纯查询
    parameters: Type.Object({}),
    async execute(
      _toolCallId: any,
      _params: any,
      _signal: any,
      _onUpdate: any,
      ctx: any,
    ) {
      if (!isEnabled(ctx)) {
        return {
          content: [
            {
              type: "text",
              text: "渐近式思考已禁用，请使用 /asymptotic-toggle 启用",
            },
          ],
          details: {},
        };
      }
      try {
        const sessionId = ctx.sessionManager.getSessionId();

        // 从 stateMachine 读取所有运行时状态
        const state = stateMachine.getState(sessionId);
        const difficulty = stateMachine.getDifficulty(sessionId);
        const masterType = stateMachine.getMasterTaskType(sessionId);
        const subType = stateMachine.getSubTaskType(sessionId);
        const taskTurnCount = stateMachine.getTaskTurnCount(sessionId);
        const stateTurnCount = stateMachine.getStateTurnCount(sessionId);

        // 查表获取 maxTurns 和允许的下一步
        const maxTurns = getMaxStateTurns(state ?? "START", difficulty);
        const allowed = getAllowedTargets(state, difficulty);

        // 枚举值 → 中文标签（未设定时显示"未设定"）
        const stateLabel = state ? STATE_META[state].label : "未初始化";
        const diffLabel = difficulty ? DIFFICULTY_LABELS[difficulty] : "未设定";
        const masterLabel = masterType
          ? MASTER_TASK_TYPE_LABELS[masterType]
          : "未设定";
        const subLabel = subType ? SUB_TASK_TYPE_LABELS[subType] : "未设定";

        // 使用 types.ts 中 STATE_META 标签拼接的水平流程图
        const flowDiagram = FLOW_DIAGRAM;

        return {
          content: [
            {
              type: "text",
              text: `## 状态机查询结果
- **当前状态**: ${stateLabel} (${state})
- **任务画像**: ${masterLabel}-${subLabel} | ${diffLabel}难度
- **任务轮次**: 第 ${taskTurnCount} 轮
- **状态内轮次**: ${stateTurnCount}/${maxTurns}
- **允许的下一步**: ${allowed.map((s) => `${STATE_META[s].label}(${s})`).join(" | ")}

### 六态流程图
\`\`\`
${flowDiagram}
\`\`\``,
            },
          ],
          details: {},
        };
      } catch (e) {
        console.error("[asymptotic-thinking] TOOL_STATUS 异常", e);
        return {
          content: [
            {
              type: "text",
              text: `[asymptotic-thinking] 状态查询工具异常，请重试`,
            },
          ],
          details: {},
        };
      }
    },

    renderResult(result: AgentToolResult<{}>, options: ToolRenderResultOptions, _theme: Theme, context: any): Component {
      const contentBlock = result.content?.[0];
      const textContent =
        contentBlock && contentBlock.type === "text"
          ? (contentBlock as { type: "text"; text: string }).text
          : "";

      if (context.isError) {
        return new Text(`\n${textContent}`, 0, 0);
      }

      if (options.expanded) {
        return new Text(`\n${textContent}`, 0, 0);
      }

      return {
        invalidate() {},
        render(width: number) {
          const tempText = new Text(textContent, 0, 0);
          const allVisualLines = tempText.render(width);
          const visualLines = allVisualLines.slice(0, 5);
          const skippedCount = allVisualLines.length - visualLines.length;
          const hint =
            skippedCount > 0
              ? `... (${skippedCount} more lines, ctrl+o to expand)`
              : "";
          return hint ? [hint, ...visualLines] : visualLines;
        },
      };
    },
  });

  // ════════════════════════════════════════════════════════════
  //  事件钩子 1：before_provider_request — 推理参数调优
  // ════════════════════════════════════════════════════════════

  /**
   * 每次 LLM 请求前触发，根据任务画像动态调整 temperature 和 topP。
   *
   * 三层叠加公式：
   *   final = clamp(base(masterType) + tuning(subType) + shift(difficulty), 0, 1)
   *
   * - base: 大任务类型基础值（如 CODING=0.2, ENTERTAINMENT=0.9）
   * - tuning: 小任务类型微调（如 ARCHITECT=-0.05 更确定性, CREATIVE_WRITING=+0.05 更多样）
   * - shift: 难度偏移（越难温度越低，越需要确定性输出）
   */
  pi.on("before_provider_request", async (event: any, ctx: any) => {
    if (!isEnabled(ctx)) return;
    try {
      const sessionId = ctx.sessionManager.getSessionId();
      const masterType = stateMachine.getMasterTaskType(sessionId);
      const subType = stateMachine.getSubTaskType(sessionId);
      const difficulty = stateMachine.getDifficulty(sessionId);

      // 任务画像未设定时不调整（保持默认参数）
      if (!masterType) return;

      // 查三层参数表，缺失时用兜底值
      const baseParams = INFERENCE_BASE[masterType] ?? INFERENCE_BASE.GENERAL;
      const subTuning = subType
        ? (INFERENCE_SUB_TUNING[subType] ?? { temperature: 0, topP: 0 })
        : { temperature: 0, topP: 0 };
      const difficultyShift = difficulty
        ? (DIFFICULTY_TEMP_SHIFT[difficulty] ?? 0)
        : 0;

      // 叠加后 clamp 到 [0, 1]
      const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

      // 直接修改请求 payload（pi-agent 在发送前会读取这些字段）
      const payload = event.payload as Record<string, unknown>;
      payload.temperature = clamp01(
        baseParams.temperature + subTuning.temperature + difficultyShift,
      );
      payload.top_p = clamp01(baseParams.topP + subTuning.topP);
    } catch (e) {
      console.error("[asymptotic-thinking] before_provider_request 异常", e);
    }
  });

  // ════════════════════════════════════════════════════════════
  //  事件钩子 2：before_agent_start — 引导内容注入
  // ════════════════════════════════════════════════════════════

  /**
   * 每轮对话开始前触发，向 LLM 注入当前状态机的引导提示词。
   *
   * 两种注入模式：
   *   START 状态 → 全量注入（buildTemplate）：完整 XML 提示词，含状态说明 + 任务描述 + 约束
   *   非 START → 精简注入（buildTemplate）：仅状态行 + 任务提示，不重复完整 XML
   *
   * 非 START 时额外追加续作提醒，防止 LLM 被用户新消息带偏而放弃当前任务。
   */
  pi.on("before_agent_start", async (event: any, ctx: any) => {
    if (!isEnabled(ctx)) return;
    try {
      const sessionId = ctx.sessionManager.getSessionId();

      // 兜底：如果内存中没有该 session（极端情况），手动初始化
      if (!stateMachine.get(sessionId)) {
        stateMachine.set(ctx, {
          ...DEFAULT_STATE,
          lastTransitionTime: Date.now(),
        });
      }

      // 统一转换：END（任务结束）/ 空（新建会话）→ START
      // 直接 set（不走 transition 校验——END 无合法出口）
      let state = stateMachine.getState(sessionId);
      if (
        state === "END" ||
        state === null ||
        state === undefined
      ) {
        const prev = stateMachine.get(sessionId);
        stateMachine.set(ctx, {
          ...DEFAULT_STATE,
          state: "START",
          taskTurnCount: prev?.taskTurnCount ?? 0, // 保留累计任务数
          lastTransitionTime: Date.now(),
        });
        state = "START";
      }

      const isStart = state === "START";
      const taskTurnCount = stateMachine.getTaskTurnCount(sessionId);
      const difficulty = stateMachine.getDifficulty(sessionId);
      const masterTaskType = stateMachine.getMasterTaskType(sessionId);
      const subTaskType = stateMachine.getSubTaskType(sessionId);
      const visited = stateMachine.getVisited(sessionId);

      // 根据是否 START 选择注入模式
      const guideText = buildTemplate(
        state,
        taskTurnCount,
        masterTaskType,
        subTaskType,
        difficulty,
        visited,
      );

      // 非 START 时追加续作提醒，防止模型被新消息打断
      const finalGuideText = isStart
        ? guideText
        : `${guideText}\n\n> ⚠️ 上一次对话未完成任务，不可中断——请回到当前【${STATE_META[state].label}】状态，继续把未完成的流程推进到底。\n严格遵守人格角色定义，严格遵守用户指令。`;

      const timestamp = new Date().toLocaleString();
      // 追加扩展 SYSTEM.md 框架规则到系统提示词（静态规则，每轮随基础 systemPrompt 注入）
      const rules = loadFrameworkSystemPrompt();
      return {
        message: {
          customType: "asymptotic-guidance",
          content: `[消息时间：${timestamp}] ${finalGuideText}`,
          display: false, // 不展示给用户，仅注入 LLM 上下文
        },
        systemPrompt: rules
          ? `${event.systemPrompt}

========================== 渐近式思考框架START =========================================
来源：${path.resolve(__dirname, "..", "SYSTEM.md")}
---

${rules}

========================== 渐近式思考框架END ===========================================
`
          : event.systemPrompt, // 规则缺失时返回原值，不破坏链式注入
      };
    } catch (e) {
      console.error("[asymptotic-thinking] before_agent_start 异常", e);
      // 兜底返回一条极简引导，保证注入不中断
      return {
        message: {
          customType: "asymptotic-guidance",
          content: `[渐近式思考引导异常] 请继续当前任务`,
          display: false,
        },
      };
    }
  });

  // ════════════════════════════════════════════════════════════
  //  事件钩子 3：turn_end — 状态提醒 + 超限警告
  // ════════════════════════════════════════════════════════════

  /**
   * 每轮对话结束后触发，向 LLM 发送状态提醒。
   *
   * 三级警告机制（全部由 bumpAndWarn 内部实现并返回，本钩子仅消费）：
   *   - soft 软提醒：stateTurnCount+1 >= maxTurns-1 且 maxTurns>2 → 接近上限
   *   - over 超限警告：stateTurnCount+1 > maxTurns → 已超过上限（按难度分档文案）
   *   - hardStop 强制停止：stateTurnCount+1 > maxTurns + max(1, ceil(maxTurns/3)) →
   *       整条替换为强提醒，不拼接任何其他内容
   *
   * END 状态：任务已终结。若用户新消息已在等待（执行中发消息导致 before_agent_start 未触发），
   * 则重置为 START（保留累计任务数）并按 START 提示词引导，确保可设定新任务；否则直接返回。
   */
  pi.on("turn_end", async (event: any, ctx: any) => {
    if (!isEnabled(ctx)) return;
    try {
      const sessionId = ctx.sessionManager.getSessionId();
      const state = stateMachine.getState(sessionId);

      // END 状态：任务已终结。若用户新消息已在等待（执行中发消息，before_agent_start 不会触发），
      // 则重置为 START（保留累计任务数）并按 START 提示词引导，确保可设定新任务；
      // 否则维持 END 直接返回（等 before_agent_start 正常转换）。
      if (state === "END") {
        const hasPending =
          typeof ctx.hasPendingMessages === "function" && ctx.hasPendingMessages();
        if (hasPending) {
          const prev = stateMachine.get(sessionId);
          stateMachine.set(ctx, {
            ...DEFAULT_STATE,
            state: "START",
            taskTurnCount: prev?.taskTurnCount ?? 0,
            lastTransitionTime: Date.now(),
          });
          const guideText = buildTemplate(
            "START",
            stateMachine.getTaskTurnCount(sessionId),
            null,
            null,
            null,
            [],
          );
          pi.sendMessage(
            {
              customType: "asymptotic-thinking-reminder",
              content: `[消息时间：${new Date().toLocaleString()}] ${guideText}`,
              display: false,
            },
            { deliverAs: "steer" },
          );
        }
        return;
      }

      // bumpAndWarn 内部会 stateTurnCount+1 并持久化，返回三级警告（软提醒/超限警告/hardStop 强制停止）
      const warning = stateMachine.bumpAndWarn(ctx);
      const stateTurnCount = stateMachine.getStateTurnCount(sessionId);
      const taskTurnCount = stateMachine.getTaskTurnCount(sessionId);
      const label = state ? STATE_META[state].label : "启动";
      const difficulty = stateMachine.getDifficulty(sessionId);
      const maxTurns = getMaxStateTurns(state ?? "START", difficulty);

      // 严重超时标记：hardStop 始终发送，不受间隔限制
      const isHardStop = warning && warning.includes("<hardStop>");

      // 间隔判断：非 hardStop 且不满足间隔条件时提前返回，避免不必要的字符串拼接
      const interval = getReminderInterval(state ?? "START", difficulty);
      if (!isHardStop && interval > 0 && stateTurnCount % interval !== 0) {
        return;
      }

      // 违规检测：本轮是否调用过 transition（仅未流转时发违规警告）
      const calledTransition = event.toolResults?.some(
        (r: any) => r.toolName === TOOL_TRANSITION,
      );

      let reminder: string;
      if (isHardStop) {
        reminder = warning;
      } else {
        // 常规：stateGuard 命令语（强烈不强制）+ 违规警告（仅未流转）+ soft/over 警告（如有）
        const guard = `<stateGuard>
渐近式思考·强制执行：当前处于【${label}】状态（第${stateTurnCount}/${maxTurns}轮）。
本阶段必须完成该状态职责后，调用 \`${TOOL_TRANSITION}\` 工具流转状态。
未调用前请勿结束回复；若阶段未完成请说明原因后继续推进。
</stateGuard>`;
        const violation = calledTransition
          ? ""
          : `\n<violationWarning>⚠️ 本轮未调用 ${TOOL_TRANSITION} 工具。若状态职责已完成，必须立即流转；若未完成，说明原因后继续。</violationWarning>`;
        reminder = guard + violation + (warning ?? "");
      }

      // 以 steer 方式发送（高优先级注入，不会被用户消息覆盖），用 <task{N}> 包裹隔离上下文
      pi.sendMessage(
        {
          customType: "asymptotic-thinking-reminder",
          content: `<task${taskTurnCount}>\n${reminder}\n</task${taskTurnCount}>`,
          display: false,
        },
        { deliverAs: "steer" },
      );
    } catch (e) {
      console.error("[asymptotic-thinking] turn_end 异常", e);
    }
  });

  // ════════════════════════════════════════════════════════════
  //  生命周期钩子
  // ════════════════════════════════════════════════════════════

  /**
   * session_start：会话开始时触发。
   * 调用 stateMachine.init() → 从 SQLite 恢复最新状态，无记录则新建 DEFAULT_STATE。
   * 随后清理数据库中已不存在的会话的遗留记录。
   */
  pi.on("session_start", async (_event: any, ctx: any) => {
    stateMachine.init(ctx);

    // 清理已不存在的会话：获取所有活跃 pi-agent 会话 ID，删除 DB 中不在此集合的记录
    try {
      const allSessions = await SessionManager.listAll();
      const activeIds = new Set<string>(allSessions.map((s: any) => s.id as string));
      const deleted = sessionStore.cleanup(activeIds);
      if (deleted > 0) {
        console.warn(
          `[asymptotic-thinking] session_start: 清理了 ${deleted} 个已经不存在的会话记录`,
        );
      }
    } catch (e) {
      console.error(
        "[asymptotic-thinking] session_start: 清理遗留会话记录失败",
        e,
      );
    }
  });

  /**
   * session_shutdown：会话关闭时触发。
   * 先清理遗留记录，再调用 shutdown（数据已在每次变更时实时持久化，shutdown 当前为 no-op）。
   */
  pi.on("session_shutdown", async (_event: any, ctx: any) => {
    // 清理已不存在的会话
    try {
      const allSessions = await SessionManager.listAll();
      const activeIds = new Set<string>(allSessions.map((s: any) => s.id as string));
      const deleted = sessionStore.cleanup(activeIds);
      if (deleted > 0) {
        console.warn(
          `[asymptotic-thinking] session_shutdown: 清理了 ${deleted} 个已经不存在的会话记录`,
        );
      }
    } catch (e) {
      console.error(
        "[asymptotic-thinking] session_shutdown: 清理遗留会话记录失败",
        e,
      );
    }

    stateMachine.shutdown(ctx);
  });

  // ════════════════════════════════════════════════════════════
  //  Command：/asymptotic-toggle — 实时开关
  // ════════════════════════════════════════════════════════════

  pi.registerCommand("asymptotic-toggle", {
    description: "切换渐近式思考框架的启用/禁用状态（按 session 隔离）",
    async handler(_args: string, ctx: any) {
      try {
        const sessionId = ctx.sessionManager.getSessionId();
        const current = sessionStore.isEnabled(sessionId);
        const next = !current;
        sessionStore.setEnabled(sessionId, next);
        const statusText = next ? "✅ 已启用" : "⏸️ 已禁用";
        ctx.ui.notify(`渐近式思考框架 ${statusText}`);
      } catch (e) {
        console.error("[asymptotic-thinking] asymptotic-toggle 异常", e);
      }
    },
  });
}
