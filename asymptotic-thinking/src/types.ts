// types.ts — 渐近式思考状态机类型定义（双层任务类型 v4）
// 从 OpenCode asymptotic-thinking-plugin 移植到 pi-agent

/* 状态机工具常量 */
export const TOOL_TRANSITION = "asymptotic-think_transition"
export const TOOL_TASK_INFO = "asymptotic-think_set-task-info"
export const TOOL_STATUS = "asymptotic-think_status"

/* 六态状态机（START 起点 + 四业务态 + END 终态） */
export type ThinkingState = "START" | "DEEP_UNDERSTAND" | "DESIGN" | "EXECUTE" | "VERIFY" | "END"
export type Difficulty = "TRIVIAL" | "SIMPLE" | "MODERATE" | "COMPLEX" | "HARD" | "EXTREME"

/* 大任务类型（6 类） */
export type MasterTaskType = "CODING" | "RETRIEVAL" | "ANALYTICS" | "DEVOPS" | "ENTERTAINMENT" | "GENERAL"

/* 小任务类型 */
export type SubTaskType =
  | "JAVA_DEV" | "RUST_DEV" | "PYTHON_DEV" | "JS_DEV" | "GO_DEV"
  | "CRUD_DEV" | "BUG_FIX" | "CODE_REFACTOR" | "TESTING" | "ARCHITECT"
  | "CODE_REVIEW" | "PERF_OPTIMIZE"
  | "PAPER_RETRIEVAL" | "DAILY_RETRIEVAL" | "DOC_RETRIEVAL" | "CODE_RETRIEVAL"
  | "DATA_ANALYSIS" | "CODE_ANALYSIS" | "LOG_ANALYSIS" | "REQUIREMENT_ANALYSIS"
  | "DEPLOY" | "MONITOR" | "CICD" | "CONFIG"
  | "FUN_CHAT" | "CREATIVE_WRITING"
  | "GENERAL"

/* 任务难度标签 */
export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  TRIVIAL: "微不足道", SIMPLE: "简单", MODERATE: "中等",
  COMPLEX: "复杂", HARD: "困难", EXTREME: "极难",
}

/* 大任务类型中文标签 */
export const MASTER_TASK_TYPE_LABELS: Record<MasterTaskType, string> = {
  CODING: "编程类", RETRIEVAL: "检索类", ANALYTICS: "分析类",
  DEVOPS: "运维类", ENTERTAINMENT: "娱乐类", GENERAL: "通用类",
}

/* 小任务类型中文标签 */
export const SUB_TASK_TYPE_LABELS: Record<SubTaskType, string> = {
  JAVA_DEV: "Java开发", RUST_DEV: "Rust开发", PYTHON_DEV: "Python开发",
  JS_DEV: "JavaScript开发", GO_DEV: "Go开发", CRUD_DEV: "增删改查",
  BUG_FIX: "缺陷修复", CODE_REFACTOR: "代码重构", TESTING: "程序测试",
  ARCHITECT: "架构设计", CODE_REVIEW: "代码审查", PERF_OPTIMIZE: "性能优化",
  PAPER_RETRIEVAL: "论文检索", DAILY_RETRIEVAL: "日常检索",
  DOC_RETRIEVAL: "文档检索", CODE_RETRIEVAL: "代码检索",
  DATA_ANALYSIS: "数据分析", CODE_ANALYSIS: "代码分析",
  LOG_ANALYSIS: "日志分析", REQUIREMENT_ANALYSIS: "需求分析",
  DEPLOY: "部署上线", MONITOR: "监控告警", CICD: "CI/CD", CONFIG: "环境配置",
  FUN_CHAT: "休闲聊天", CREATIVE_WRITING: "创意写作", GENERAL: "通用",
}

/* 大类型 → 可用子类型映射 */
export const MASTER_TO_SUB: Record<MasterTaskType, SubTaskType[]> = {
  CODING: ["JAVA_DEV", "RUST_DEV", "PYTHON_DEV", "JS_DEV", "GO_DEV", "CRUD_DEV", "BUG_FIX", "CODE_REFACTOR", "TESTING", "ARCHITECT", "CODE_REVIEW", "PERF_OPTIMIZE"],
  RETRIEVAL: ["PAPER_RETRIEVAL", "DAILY_RETRIEVAL", "DOC_RETRIEVAL", "CODE_RETRIEVAL"],
  ANALYTICS: ["DATA_ANALYSIS", "CODE_ANALYSIS", "LOG_ANALYSIS", "REQUIREMENT_ANALYSIS"],
  DEVOPS: ["DEPLOY", "MONITOR", "CICD", "CONFIG"],
  ENTERTAINMENT: ["FUN_CHAT", "CREATIVE_WRITING"],
  GENERAL: ["GENERAL"],
}

/* 大任务类型提示 */
export const MASTER_TASK_HINTS: Record<MasterTaskType, string> = {
  CODING: "编程类任务——注意代码结构、测试覆盖和错误处理",
  RETRIEVAL: "检索类任务——多渠道并行搜索、信息去重和来源标注",
  ANALYTICS: "分析类任务——数据来源可靠、分析逻辑严谨、结论有据",
  DEVOPS: "运维类任务——环境配置验证、操作影响评估、回滚方案",
  ENTERTAINMENT: "娱乐类任务——风格一致、内容有趣、安全合规",
  GENERAL: "通用任务——根据上下文判定具体侧重点",
}

/* 状态元数据 */
export const STATE_META: Record<ThinkingState, { label: string }> = {
  START: { label: "启动" },
  DEEP_UNDERSTAND: { label: "深度理解" },
  DESIGN: { label: "方案设计" },
  EXECUTE: { label: "执行" },
  VERIFY: { label: "自检验证" },
  END: { label: "结束" },
}

/** 六态流程图（水平箭头），使用 STATE_META 标签 */
export const FLOW_DIAGRAM = [
  STATE_META.START.label,
  STATE_META.DEEP_UNDERSTAND.label,
  STATE_META.DESIGN.label,
  STATE_META.EXECUTE.label,
  STATE_META.VERIFY.label,
  STATE_META.END.label,
].join(" → ");

/** 难度×状态 显式轮次上限表（按难度行看各状态轮次；START/END 最低 1 轮）
 * 调整说明（2026-08-07 v3）：全阶段均衡上调——每个阶段模型都可能调用工具
 * （DEEP_UNDERSTAND 需 read/grep/web_fetch；DESIGN 需 read/bash；VERIFY 需 read/bash/grep），
 * 旧值参考（2026-08-05）：TRIVIAL 3/ SIMPLE 6/ MODERATE 10/ COMPLEX 15/ HARD 18/ EXTREME 22 */
export const STATE_MAX_TURNS: Record<Difficulty, Record<ThinkingState, number>> = {
  TRIVIAL: { START:1, DEEP_UNDERSTAND:200, DESIGN:100, EXECUTE:500,  VERIFY:100, END:1 },
  SIMPLE:  { START:1, DEEP_UNDERSTAND:500, DESIGN:300, EXECUTE:1500, VERIFY:300, END:1 },
  MODERATE:{ START:1, DEEP_UNDERSTAND:1500,DESIGN:1000,EXECUTE:4000, VERIFY:1000,END:1 },
  COMPLEX: { START:1, DEEP_UNDERSTAND:3000,DESIGN:2000,EXECUTE:7000, VERIFY:2000,END:1 },
  HARD:    { START:1, DEEP_UNDERSTAND:5000,DESIGN:3500,EXECUTE:9000, VERIFY:3000,END:1 },
  EXTREME: { START:1, DEEP_UNDERSTAND:7000,DESIGN:5000,EXECUTE:10000,VERIFY:4000,END:1 },
}

/** 根据状态和难度查表获取 maxTurns */
export function getMaxStateTurns(state: ThinkingState, difficulty: Difficulty | null): number {
  if (!difficulty) {
    // 难度未设定（START 阶段）：START 最低 1 轮，其余状态防御性 0
    return state === "START" ? 1 : 0;
  }
  return STATE_MAX_TURNS[difficulty][state];
}

/** turn_end 提醒间隔：stateTurnCount % interval === 0 时才发送，避免稀释正常提示词 */
export const REMINDER_INTERVAL: Record<Difficulty, Record<ThinkingState, number>> = {
  TRIVIAL: { START:0, DEEP_UNDERSTAND:5,  DESIGN:8,  EXECUTE:12, VERIFY:8,  END:0 },
  SIMPLE:  { START:0, DEEP_UNDERSTAND:6,  DESIGN:10, EXECUTE:15, VERIFY:10, END:0 },
  MODERATE:{ START:0, DEEP_UNDERSTAND:8,  DESIGN:12, EXECUTE:18, VERIFY:12, END:0 },
  COMPLEX: { START:0, DEEP_UNDERSTAND:10, DESIGN:15, EXECUTE:20, VERIFY:15, END:0 },
  HARD:    { START:0, DEEP_UNDERSTAND:12, DESIGN:18, EXECUTE:25, VERIFY:18, END:0 },
  EXTREME: { START:0, DEEP_UNDERSTAND:15, DESIGN:20, EXECUTE:30, VERIFY:20, END:0 },
};

/** 根据状态和难度查表获取提醒间隔，未设定时返回 1（每轮提醒） */
export function getReminderInterval(state: ThinkingState, difficulty: Difficulty | null): number {
  if (!difficulty) return 1;
  return REMINDER_INTERVAL[difficulty][state] || 1;
}

export const STATE_KEYS = Object.keys(STATE_META) as [ThinkingState, ...ThinkingState[]]

function buildDescribe<T extends string>(labels: Record<T, string>): string {
  return (Object.keys(labels) as T[]).map(key => `${key}(${labels[key]})`).join(" | ")
}

export const TOOL_DESCRIBE_DIFFICULTY = `任务难度: ${buildDescribe(DIFFICULTY_LABELS)}`
export const TOOL_DESCRIBE_MASTER = `大任务类型: ${buildDescribe(MASTER_TASK_TYPE_LABELS)}`
export const TOOL_DESCRIBE_SUB = `小任务类型: ${buildDescribe(SUB_TASK_TYPE_LABELS)}`

/* 每条 session 的状态记录 */
export interface SessionState {
  /** 当前状态（六态之一；null = 新建会话未初始化） */
  state: ThinkingState | null
  /** 任务难度，START 时由 setTaskInfo 设定，转入 END 时清空 */
  difficulty: Difficulty | null
  /** 大任务类型，与 difficulty 同生命周期 */
  masterTaskType: MasterTaskType | null
  /** 小任务类型，与 difficulty 同生命周期 */
  subTaskType: SubTaskType | null
  /** 任务轮次计数：每次从 START 转移时 +1，即已启动的任务数 */
  taskTurnCount: number
  /** 状态内轮次计数：当前状态内已消耗的 LLM 调用次数，转移时归零 */
  stateTurnCount: number
  /** 最近一次状态转移的时间戳（毫秒） */
  lastTransitionTime: number
  /** 本次任务经过的状态路径（全链路路径感知），转入 END 时清空 */
  visited: ThinkingState[]
}

/* ── LLM 推理参数（三层调优：大类型基础值 + 小类型微调 + 难度温度偏移）── */
export interface InferenceParams { temperature: number; topP: number }

/** 按大任务类型的推理基础参数 */
export const INFERENCE_BASE: Record<MasterTaskType, InferenceParams> = {
  CODING:      { temperature: 0.2, topP: 0.85 },
  RETRIEVAL:   { temperature: 0.1, topP: 0.7 },
  ANALYTICS:   { temperature: 0.3, topP: 0.9 },
  DEVOPS:      { temperature: 0.1, topP: 0.7 },
  ENTERTAINMENT: { temperature: 0.9, topP: 0.95 },
  GENERAL:     { temperature: 0.5, topP: 0.9 },
}

/** 按小任务类型的推理微调参数 */
export const INFERENCE_SUB_TUNING: Partial<Record<SubTaskType, InferenceParams>> = {
  ARCHITECT:     { temperature: -0.05, topP: 0.0 },
  CODE_REVIEW:   { temperature: -0.05, topP: 0.0 },
  BUG_FIX:       { temperature: -0.05, topP: 0.0 },
  PERF_OPTIMIZE: { temperature: -0.05, topP: 0.0 },
  CODE_REFACTOR: { temperature: -0.03, topP: 0.0 },
  CREATIVE_WRITING: { temperature: 0.05, topP: 0.03 },
  FUN_CHAT:      { temperature: 0.0, topP: 0.02 },
}

/** 按难度的温度偏移量 */
export const DIFFICULTY_TEMP_SHIFT: Record<Difficulty, number> = {
  TRIVIAL: 0.05,
  SIMPLE:  0.02,
  MODERATE: 0.0,
  COMPLEX: -0.02,
  HARD:    -0.05,
  EXTREME: -0.08,
}
