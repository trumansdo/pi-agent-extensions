import type { Difficulty, ThinkingState } from "../../types";
import { DIFFICULTY_LABELS, TOOL_TRANSITION } from "../../types";

const LABEL = "分析类需求分析";
const HINT = "拆解需求粒度、明确验收标准、识别隐含约束";

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

拆解需求为可验证单元 → 明确验收标准 → 识别隐含约束与依赖

领域要点：${HINT}`;
    }

    case "DESIGN": {
      switch (diff) {
        case "TRIVIAL":
          return "";
        case "SIMPLE":
          return `确定分析方法和关键维度 → 列出需求范围与拆解方式。`;
        case "HARD":
        case "EXTREME":
          return `确定分析方法和关键维度 → 列出需求范围与拆解方式 → 设计验证方案。
→ 列出多个分析角度并对比优劣。`;
        default:
          return `确定分析方法和关键维度 → 列出需求范围与拆解方式。`;
      }
    }

    case "EXECUTE": {
      switch (diff) {
        case "TRIVIAL":
          return `快速分析后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "SIMPLE":
          return `需求条目化 · 验收标准可测试 · 优先级排序 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "HARD":
        case "EXTREME":
          return `需求条目化 · 验收标准可测试 · 优先级排序 · 每步验证结果 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。
每步必须有明确验证，不可跳过`;
        default:
          return `需求条目化 · 验收标准可测试 · 优先级排序 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
      }
    }

    case "VERIFY": {
      switch (diff) {
        case "TRIVIAL":
          return "需求覆盖完整 · 验收标准明确 · 无歧义";
        case "HARD":
        case "EXTREME":
          return "逐项对照需求检查 → 覆盖完整 → 标准明确 → 无歧义。需求覆盖完整 · 验收标准明确 · 无歧义";
        default:
          return "需求覆盖完整 · 验收标准明确 · 无歧义";
      }
    }

    default:
      return "";
  }
}
