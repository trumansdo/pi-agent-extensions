import type { Difficulty, ThinkingState } from "../../types";
import { DIFFICULTY_LABELS, TOOL_TRANSITION } from "../../types";

const LABEL = "运维类监控告警";
const HINT = "指标-告警-通知链路完整，告警有处置SOP";

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

明确监控目标与指标 → 识别告警阈值与通知渠道 → 评估覆盖盲区

领域要点：${HINT}`;
    }

    case "DESIGN": {
      switch (diff) {
        case "TRIVIAL":
          return "";
        case "SIMPLE":
          return `确定监控指标和告警规则 → 列出通知渠道与处置流程。`;
        case "HARD":
        case "EXTREME":
          return `确定监控指标和告警规则 → 列出通知渠道与处置流程 → 设计降级方案。
→ 列出多个监控方案并对比覆盖度。`;
        default:
          return `确定监控指标和告警规则 → 列出通知渠道与处置流程。`;
      }
    }

    case "EXECUTE": {
      switch (diff) {
        case "TRIVIAL":
          return `快速配置后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "SIMPLE":
          return `指标采集完整 · 告警规则合理 · 通知链路验证 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
        case "HARD":
        case "EXTREME":
          return `指标采集完整 · 告警规则合理 · 通知链路验证 · 每步验证结果 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。
每步必须有明确验证，不可跳过`;
        default:
          return `指标采集完整 · 告警规则合理 · 通知链路验证 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。`;
      }
    }

    case "VERIFY": {
      switch (diff) {
        case "TRIVIAL":
          return "告警可触发 · 通知可达 · 处置SOP明确";
        case "HARD":
        case "EXTREME":
          return "逐项对照需求检查 → 告警可触发 → 通知可达 → SOP明确。告警可触发 · 通知可达 · 处置SOP明确";
        default:
          return "告警可触发 · 通知可达 · 处置SOP明确";
      }
    }

    default:
      return "";
  }
}
