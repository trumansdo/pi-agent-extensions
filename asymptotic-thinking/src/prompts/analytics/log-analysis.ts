import type { Difficulty, ThinkingState } from "../../types";
import { DIFFICULTY_LABELS, TOOL_TRANSITION } from "../../types";

const LABEL = "分析类日志分析";
const HINT = "时间线对齐、关联追踪，异常模式识别";

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

明确日志范围与时间窗口 → 识别关键字段与关联ID → 评估日志完整性

领域要点：${HINT}`;
    }

    case "DESIGN": {
      switch (diff) {
        case "TRIVIAL":
          return "";
        case "SIMPLE":
          return `确定分析方法和关键维度 → 列出日志范围与处理步骤。`;
        case "HARD":
        case "EXTREME":
          return `确定分析方法和关键维度 → 列出日志范围与处理步骤 → 设计验证方案。
→ 列出多个分析角度并对比优劣。`;
        default:
          return `确定分析方法和关键维度 → 列出日志范围与处理步骤。`;
      }
    }

    case "EXECUTE": {
      switch (diff) {
        case "TRIVIAL":
          return `快速分析后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "SIMPLE":
          return `时间线对齐 · 关联ID追踪 · 异常模式标注 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "HARD":
        case "EXTREME":
          return `时间线对齐 · 关联ID追踪 · 异常模式标注 · 每步验证结果 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。
每步必须有明确验证，不可跳过`;
        default:
          return `时间线对齐 · 关联ID追踪 · 异常模式标注 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
      }
    }

    case "VERIFY": {
      switch (diff) {
        case "TRIVIAL":
          return "根因定位准确 · 时间线完整 · 无遗漏关键日志";
        case "HARD":
        case "EXTREME":
          return "逐项对照需求检查 → 根因准确 → 时间线完整 → 无遗漏。根因定位准确 · 时间线完整 · 无遗漏关键日志";
        default:
          return "根因定位准确 · 时间线完整 · 无遗漏关键日志";
      }
    }

    default:
      return "";
  }
}
