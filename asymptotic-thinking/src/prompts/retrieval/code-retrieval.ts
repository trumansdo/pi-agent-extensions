import type { Difficulty, ThinkingState } from "../../types";
import { DIFFICULTY_LABELS, TOOL_TRANSITION } from "../../types";

const LABEL = "检索类代码检索";
const HINT = "搜索开源实现参考，关注许可证与维护状态";

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

明确代码需求与约束 → 识别搜索关键词 → 评估许可证兼容性

领域要点：${HINT}`;
    }

    case "DESIGN": {
      switch (diff) {
        case "TRIVIAL":
          return "";
        case "SIMPLE":
          return `确定检索策略和关键来源 → 列出检索词与筛选标准。`;
        case "HARD":
        case "EXTREME":
          return `确定检索策略和关键来源 → 列出检索词与筛选标准 → 设计去重与排序规则。
→ 列出多个检索渠道并对比覆盖范围。`;
        default:
          return `确定检索策略和关键来源 → 列出检索词与筛选标准。`;
      }
    }

    case "EXECUTE": {
      switch (diff) {
        case "TRIVIAL":
          return `快速检索后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "SIMPLE":
          return `搜索GitHub/npm/PyPI等 · 关注star数与更新频率 · 检查许可证 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "HARD":
        case "EXTREME":
          return `搜索GitHub/npm/PyPI等 · 关注star数与更新频率 · 检查许可证 · 每步验证结果 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。
每步必须有明确验证，不可跳过`;
        default:
          return `搜索GitHub/npm/PyPI等 · 关注star数与更新频率 · 检查许可证 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
      }
    }

    case "VERIFY": {
      switch (diff) {
        case "TRIVIAL":
          return "许可证兼容 · 维护活跃 · 代码质量可接受";
        case "HARD":
        case "EXTREME":
          return "逐项对照需求检查 → 许可证兼容 → 维护活跃 → 代码质量。许可证兼容 · 维护活跃 · 代码质量可接受";
        default:
          return "许可证兼容 · 维护活跃 · 代码质量可接受";
      }
    }

    default:
      return "";
  }
}
