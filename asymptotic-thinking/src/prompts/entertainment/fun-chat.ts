import type { Difficulty, ThinkingState } from "../../types";
import { DIFFICULTY_LABELS, TOOL_TRANSITION } from "../../types";

const LABEL = "娱乐类休闲聊天";
const HINT = "风格一致、内容有趣、安全合规";

export function buildPrompt(diff: Difficulty, state: ThinkingState): string {
  const difficultyLabel = DIFFICULTY_LABELS[diff];

  switch (state) {
    case "DEEP_UNDERSTAND": {
      let extra = "";
      switch (diff) {
        case "HARD":
        case "EXTREME":
          extra = " 需深度分析所有边界条件、隐含约束和潜在风险。";
          break;
      }
      return `当前为${LABEL}（${difficultyLabel}难度）。${extra}

明确对话风格与边界 → 识别用户情绪与意图 → 评估安全合规要求

领域要点：${HINT}`;
    }

    case "DESIGN": {
      switch (diff) {
        case "TRIVIAL":
          return "";
        case "SIMPLE":
          return `确定对话风格和内容方向 → 列出安全边界。`;
        case "HARD":
        case "EXTREME":
          return `确定对话风格和内容方向 → 列出安全边界 → 设计多轮互动方案。
→ 列出多个风格方案并对比效果。`;
        default:
          return `确定对话风格和内容方向 → 列出安全边界。`;
      }
    }

    case "EXECUTE": {
      switch (diff) {
        case "TRIVIAL":
          return `快速回应后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "SIMPLE":
          return `风格一致 · 内容有趣不冒犯 · 安全边界内发挥 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "HARD":
        case "EXTREME":
          return `风格一致 · 内容有趣不冒犯 · 安全边界内发挥 · 每步验证结果 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。
每步必须有明确验证，不可跳过`;
        default:
          return `风格一致 · 内容有趣不冒犯 · 安全边界内发挥 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
      }
    }

    case "VERIFY": {
      switch (diff) {
        case "TRIVIAL":
          return "风格符合预期 · 无违规内容 · 用户意图满足";
        case "HARD":
        case "EXTREME":
          return "逐项对照需求检查 → 风格符合 → 无违规 → 意图满足。风格符合预期 · 无违规内容 · 用户意图满足";
        default:
          return "风格符合预期 · 无违规内容 · 用户意图满足";
      }
    }

    default:
      return "";
  }
}
