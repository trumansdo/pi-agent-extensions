import type { Difficulty, ThinkingState } from "../../types";
import { DIFFICULTY_LABELS, TOOL_TRANSITION } from "../../types";

const LABEL = "通用类通用";
const HINT = "贴合上下文，保持目标导向";

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

明确任务目标与上下文 → 识别约束条件 → 评估所需资源

领域要点：${HINT}`;
    }

    case "DESIGN": {
      switch (diff) {
        case "TRIVIAL":
          return "";
        case "SIMPLE":
          return `确定实施路径和关键步骤 → 列出涉及资源与验收标准。`;
        case "HARD":
        case "EXTREME":
          return `确定实施路径和关键步骤 → 列出涉及资源与验收标准 → 设计备选方案。
→ 列出多个方案并对比优劣。`;
        default:
          return `确定实施路径和关键步骤 → 列出涉及资源与验收标准。`;
      }
    }

    case "EXECUTE": {
      switch (diff) {
        case "TRIVIAL":
          return `快速执行后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "SIMPLE":
          return `贴合上下文执行 · 保持目标导向 · 灵活调整 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "HARD":
        case "EXTREME":
          return `贴合上下文执行 · 保持目标导向 · 灵活调整 · 每步验证结果 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。
每步必须有明确验证，不可跳过`;
        default:
          return `贴合上下文执行 · 保持目标导向 · 灵活调整 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
      }
    }

    case "VERIFY": {
      switch (diff) {
        case "TRIVIAL":
          return "目标达成 · 上下文一致 · 无越界";
        case "HARD":
        case "EXTREME":
          return "逐项对照需求检查 → 目标达成 → 上下文一致 → 无越界。目标达成 · 上下文一致 · 无越界";
        default:
          return "目标达成 · 上下文一致 · 无越界";
      }
    }

    default:
      return "";
  }
}
