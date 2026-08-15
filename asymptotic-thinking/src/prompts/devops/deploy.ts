import type { Difficulty, ThinkingState } from "../../types";
import { DIFFICULTY_LABELS, TOOL_TRANSITION } from "../../types";

const LABEL = "运维类部署上线";
const HINT = "灰度发布、健康检查、回滚方案前置";

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

明确部署目标与环境 → 识别依赖服务与配置 → 评估回滚策略

领域要点：${HINT}`;
    }

    case "DESIGN": {
      switch (diff) {
        case "TRIVIAL":
          return "";
        case "SIMPLE":
          return `确定部署步骤和验证方式 → 列出涉及服务与配置。`;
        case "HARD":
        case "EXTREME":
          return `确定部署步骤和验证方式 → 列出涉及服务与配置 → 设计回滚方案。
→ 列出多个部署策略并对比风险。`;
        default:
          return `确定部署步骤和验证方式 → 列出涉及服务与配置。`;
      }
    }

    case "EXECUTE": {
      switch (diff) {
        case "TRIVIAL":
          return `快速部署后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "SIMPLE":
          return `灰度/分批发布 · 健康检查验证 · 回滚方案就绪 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "HARD":
        case "EXTREME":
          return `灰度/分批发布 · 健康检查验证 · 回滚方案就绪 · 每步验证结果 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。
每步必须有明确验证，不可跳过`;
        default:
          return `灰度/分批发布 · 健康检查验证 · 回滚方案就绪 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
      }
    }

    case "VERIFY": {
      switch (diff) {
        case "TRIVIAL":
          return "服务健康 · 监控告警正常 · 回滚方案可执行";
        case "HARD":
        case "EXTREME":
          return "逐项对照需求检查 → 服务健康 → 告警正常 → 回滚可执行。服务健康 · 监控告警正常 · 回滚方案可执行";
        default:
          return "服务健康 · 监控告警正常 · 回滚方案可执行";
      }
    }

    default:
      return "";
  }
}
