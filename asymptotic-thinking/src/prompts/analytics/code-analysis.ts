import type { Difficulty, ThinkingState } from "../../types";
import { DIFFICULTY_LABELS, TOOL_TRANSITION } from "../../types";

const LABEL = "分析类代码分析";
const HINT = "AST优先于文本匹配，分析结论标注置信度";

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

明确分析目标与代码范围 → 识别分析维度(结构/依赖/质量) → 评估工具选择

领域要点：${HINT}`;
    }

    case "DESIGN": {
      switch (diff) {
        case "TRIVIAL":
          return "";
        case "SIMPLE":
          return `确定分析方法和关键维度 → 列出分析范围与工具。`;
        case "HARD":
        case "EXTREME":
          return `确定分析方法和关键维度 → 列出分析范围与工具 → 设计验证方案。
→ 列出多个分析角度并对比优劣。`;
        default:
          return `确定分析方法和关键维度 → 列出分析范围与工具。`;
      }
    }

    case "EXECUTE": {
      switch (diff) {
        case "TRIVIAL":
          return `快速分析后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "SIMPLE":
          return `AST解析优先 · 结论标注置信度 · 不确定处明示 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "HARD":
        case "EXTREME":
          return `AST解析优先 · 结论标注置信度 · 不确定处明示 · 每步验证结果 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。
每步必须有明确验证，不可跳过`;
        default:
          return `AST解析优先 · 结论标注置信度 · 不确定处明示 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
      }
    }

    case "VERIFY": {
      switch (diff) {
        case "TRIVIAL":
          return "分析覆盖完整 · 结论有依据 · 边界情况已考虑";
        case "HARD":
        case "EXTREME":
          return "逐项对照需求检查 → 覆盖完整 → 结论有据 → 边界已考虑。分析覆盖完整 · 结论有依据 · 边界情况已考虑";
        default:
          return "分析覆盖完整 · 结论有依据 · 边界情况已考虑";
      }
    }

    default:
      return "";
  }
}
