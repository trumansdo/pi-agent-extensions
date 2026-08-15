import type { Difficulty, ThinkingState } from "../../types";
import { DIFFICULTY_LABELS, TOOL_TRANSITION } from "../../types";

const LABEL = "编程类Rust开发";
const HINT = "所有权与借用检查 · 生命周期标注 · unsafe边界控制";

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

明确Rust版本与edition → 识别所有权模型与生命周期约束 → 评估unsafe使用必要性

领域要点：${HINT}

严格遵守《编程与架构准则》`;
    }

    case "DESIGN": {
      switch (diff) {
        case "TRIVIAL":
          return "";
        case "SIMPLE":
          return `确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》`;
        case "HARD":
        case "EXTREME":
          return `确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》`;
        default:
          return `确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》`;
      }
    }

    case "EXECUTE": {
      switch (diff) {
        case "TRIVIAL":
          return `快速完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。

严格遵守《编程与架构准则》`;
        case "SIMPLE":
          return `错误分析根因后修正 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。
所有权转移明确 · 生命周期标注完整 · unsafe块最小化

严格遵守《编程与架构准则》`;
        case "HARD":
        case "EXTREME":
          return `每步完成后验证结果 → 错误分析根因后修正 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。
所有权转移明确 · 生命周期标注完整 · unsafe块最小化
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》`;
        default:
          return `错误分析根因后修正 → 完成目标后 ${TOOL_TRANSITION} 进入 VERIFY。
所有权转移明确 · 生命周期标注完整 · unsafe块最小化

严格遵守《编程与架构准则》`;
      }
    }

    case "VERIFY": {
      switch (diff) {
        case "TRIVIAL":
          return `无clippy警告 · 所有权正确 · unsafe有文档说明

严格遵守《编程与架构准则》`;
        case "HARD":
        case "EXTREME":
          return `逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
无clippy警告 · 所有权正确 · unsafe有文档说明

严格遵守《编程与架构准则》`;
        default:
          return `无clippy警告 · 所有权正确 · unsafe有文档说明

严格遵守《编程与架构准则》`;
      }
    }

    default:
      return "";
  }
}
