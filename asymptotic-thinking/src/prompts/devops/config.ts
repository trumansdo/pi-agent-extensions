import type { Difficulty, ThinkingState } from "../../types";
import { DIFFICULTY_LABELS, TOOL_TRANSITION } from "../../types";

const LABEL = "运维类环境配置";
const HINT = "环境隔离、敏感信息加密、配置版本化";

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

明确配置范围与环境差异 → 识别敏感配置项 → 评估配置变更影响

领域要点：${HINT}`;
    }

    case "DESIGN": {
      switch (diff) {
        case "TRIVIAL":
          return "";
        case "SIMPLE":
          return `确定配置项和环境映射 → 列出敏感配置与加密方式。`;
        case "HARD":
        case "EXTREME":
          return `确定配置项和环境映射 → 列出敏感配置与加密方式 → 设计回滚方案。
→ 列出多个配置管理方案并对比安全性。`;
        default:
          return `确定配置项和环境映射 → 列出敏感配置与加密方式。`;
      }
    }

    case "EXECUTE": {
      switch (diff) {
        case "TRIVIAL":
          return `快速配置后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "SIMPLE":
          return `环境隔离 · 敏感信息加密存储 · 配置变更可追溯 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "HARD":
        case "EXTREME":
          return `环境隔离 · 敏感信息加密存储 · 配置变更可追溯 · 每步验证结果 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。
每步必须有明确验证，不可跳过`;
        default:
          return `环境隔离 · 敏感信息加密存储 · 配置变更可追溯 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
      }
    }

    case "VERIFY": {
      switch (diff) {
        case "TRIVIAL":
          return "环境配置一致 · 无硬编码敏感信息 · 配置版本可回滚";
        case "HARD":
        case "EXTREME":
          return "逐项对照需求检查 → 环境一致 → 无硬编码 → 可回滚。环境配置一致 · 无硬编码敏感信息 · 配置版本可回滚";
        default:
          return "环境配置一致 · 无硬编码敏感信息 · 配置版本可回滚";
      }
    }

    default:
      return "";
  }
}
