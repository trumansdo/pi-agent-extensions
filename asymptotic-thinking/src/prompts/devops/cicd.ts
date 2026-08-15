import type { Difficulty, ThinkingState } from "../../types";
import { DIFFICULTY_LABELS, TOOL_TRANSITION } from "../../types";

const LABEL = "运维类CI/CD";
const HINT = "流水线幂等可重复，构建产物版本化";

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

明确流水线阶段与触发条件 → 识别构建依赖与环境 → 评估制品管理

领域要点：${HINT}`;
    }

    case "DESIGN": {
      switch (diff) {
        case "TRIVIAL":
          return "";
        case "SIMPLE":
          return `确定流水线阶段和触发条件 → 列出构建环境与制品。`;
        case "HARD":
        case "EXTREME":
          return `确定流水线阶段和触发条件 → 列出构建环境与制品 → 设计回滚方案。
→ 列出多个流水线方案并对比效率。`;
        default:
          return `确定流水线阶段和触发条件 → 列出构建环境与制品。`;
      }
    }

    case "EXECUTE": {
      switch (diff) {
        case "TRIVIAL":
          return `快速配置后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "SIMPLE":
          return `流水线幂等 · 构建产物版本化 · 失败快速反馈 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "HARD":
        case "EXTREME":
          return `流水线幂等 · 构建产物版本化 · 失败快速反馈 · 每步验证结果 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。
每步必须有明确验证，不可跳过`;
        default:
          return `流水线幂等 · 构建产物版本化 · 失败快速反馈 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
      }
    }

    case "VERIFY": {
      switch (diff) {
        case "TRIVIAL":
          return "流水线可重复执行 · 产物可追溯 · 测试全部通过";
        case "HARD":
        case "EXTREME":
          return "逐项对照需求检查 → 可重复 → 可追溯 → 测试通过。流水线可重复执行 · 产物可追溯 · 测试全部通过";
        default:
          return "流水线可重复执行 · 产物可追溯 · 测试全部通过";
      }
    }

    default:
      return "";
  }
}
