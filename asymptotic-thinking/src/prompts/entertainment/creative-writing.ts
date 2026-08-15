import type { Difficulty, ThinkingState } from "../../types";
import { DIFFICULTY_LABELS, TOOL_TRANSITION } from "../../types";

const LABEL = "娱乐类创意写作";
const HINT = "风格一致、结构完整、原创性优先";

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

明确写作类型与风格 → 识别目标受众与目的 → 评估篇幅与结构要求

领域要点：${HINT}`;
    }

    case "DESIGN": {
      switch (diff) {
        case "TRIVIAL":
          return "";
        case "SIMPLE":
          return `确定写作风格和结构大纲 → 列出关键要素。`;
        case "HARD":
        case "EXTREME":
          return `确定写作风格和结构大纲 → 列出关键要素 → 设计多版本方案。
→ 列出多个风格方案并对比效果。`;
        default:
          return `确定写作风格和结构大纲 → 列出关键要素。`;
      }
    }

    case "EXECUTE": {
      switch (diff) {
        case "TRIVIAL":
          return `快速创作后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "SIMPLE":
          return `风格统一 · 结构完整 · 原创不抄袭 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "HARD":
        case "EXTREME":
          return `风格统一 · 结构完整 · 原创不抄袭 · 每步验证结果 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。
每步必须有明确验证，不可跳过`;
        default:
          return `风格统一 · 结构完整 · 原创不抄袭 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
      }
    }

    case "VERIFY": {
      switch (diff) {
        case "TRIVIAL":
          return "风格一致 · 结构完整 · 内容原创";
        case "HARD":
        case "EXTREME":
          return "逐项对照需求检查 → 风格一致 → 结构完整 → 内容原创。风格一致 · 结构完整 · 内容原创";
        default:
          return "风格一致 · 结构完整 · 内容原创";
      }
    }

    default:
      return "";
  }
}
