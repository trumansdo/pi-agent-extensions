import type { Difficulty, ThinkingState } from "../../types";
import { DIFFICULTY_LABELS, TOOL_TRANSITION } from "../../types";

const LABEL = "检索类文档检索";
const HINT = "优先官方文档与源码，标注版本兼容性";

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

明确技术栈与版本 → 识别官方文档入口 → 评估社区资源质量

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
          return `优先官方文档 · 标注版本号 · 交叉验证社区方案 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "HARD":
        case "EXTREME":
          return `优先官方文档 · 标注版本号 · 交叉验证社区方案 · 每步验证结果 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。
每步必须有明确验证，不可跳过`;
        default:
          return `优先官方文档 · 标注版本号 · 交叉验证社区方案 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
      }
    }

    case "VERIFY": {
      switch (diff) {
        case "TRIVIAL":
          return "版本匹配 · 示例可运行 · 来源可追溯";
        case "HARD":
        case "EXTREME":
          return "逐项对照需求检查 → 版本匹配 → 示例可运行 → 来源可追溯。版本匹配 · 示例可运行 · 来源可追溯";
        default:
          return "版本匹配 · 示例可运行 · 来源可追溯";
      }
    }

    default:
      return "";
  }
}
