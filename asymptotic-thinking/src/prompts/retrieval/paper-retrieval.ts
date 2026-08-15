import type { Difficulty, ThinkingState } from "../../types";
import { DIFFICULTY_LABELS, TOOL_TRANSITION } from "../../types";

const LABEL = "检索类论文检索";
const HINT = "优先权威学术源，标注发表时间与引用量";

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

明确检索主题与范围 → 识别关键作者与会议/期刊 → 评估时效性要求

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
          return `多渠道并行检索(arxiv/semantic scholar/Google Scholar) · 标注来源与时间 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "HARD":
        case "EXTREME":
          return `多渠道并行检索(arxiv/semantic scholar/Google Scholar) · 标注来源与时间 · 每步验证结果 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。
每步必须有明确验证，不可跳过`;
        default:
          return `多渠道并行检索(arxiv/semantic scholar/Google Scholar) · 标注来源与时间 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
      }
    }

    case "VERIFY": {
      switch (diff) {
        case "TRIVIAL":
          return "来源权威 · 时效符合要求 · 关键论文无遗漏";
        case "HARD":
        case "EXTREME":
          return "逐项对照需求检查 → 来源权威 → 时效符合 → 覆盖完整。来源权威 · 时效符合要求 · 关键论文无遗漏";
        default:
          return "来源权威 · 时效符合要求 · 关键论文无遗漏";
      }
    }

    default:
      return "";
  }
}
