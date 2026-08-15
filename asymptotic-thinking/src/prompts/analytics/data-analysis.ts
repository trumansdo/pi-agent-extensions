import type { Difficulty, ThinkingState } from "../../types";
import { DIFFICULTY_LABELS, TOOL_TRANSITION } from "../../types";

const LABEL = "分析类数据分析";
const HINT = "明确指标与口径，清洗前置、结论可复现";

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

明确分析目标与指标 → 识别数据源与口径 → 评估数据质量

领域要点：${HINT}`;
    }

    case "DESIGN": {
      switch (diff) {
        case "TRIVIAL":
          return "";
        case "SIMPLE":
          return `确定分析方法和关键指标 → 列出数据源与处理步骤。`;
        case "HARD":
        case "EXTREME":
          return `确定分析方法和关键指标 → 列出数据源与处理步骤 → 设计验证方案。
→ 列出多个分析角度并对比优劣。`;
        default:
          return `确定分析方法和关键指标 → 列出数据源与处理步骤。`;
      }
    }

    case "EXECUTE": {
      switch (diff) {
        case "TRIVIAL":
          return `快速分析后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "SIMPLE":
          return `数据清洗前置 · 口径一致 · 中间结果可审查 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "HARD":
        case "EXTREME":
          return `数据清洗前置 · 口径一致 · 中间结果可审查 · 每步验证结果 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。
每步必须有明确验证，不可跳过`;
        default:
          return `数据清洗前置 · 口径一致 · 中间结果可审查 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
      }
    }

    case "VERIFY": {
      switch (diff) {
        case "TRIVIAL":
          return "结论有数据支撑 · 口径一致 · 分析过程可复现";
        case "HARD":
        case "EXTREME":
          return "逐项对照需求检查 → 结论有据 → 口径一致 → 可复现。结论有数据支撑 · 口径一致 · 分析过程可复现";
        default:
          return "结论有数据支撑 · 口径一致 · 分析过程可复现";
      }
    }

    default:
      return "";
  }
}
