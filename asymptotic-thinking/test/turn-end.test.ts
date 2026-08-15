// turn-end.test.ts — turn_end 事件钩子行为级单测（node:test + jiti loader）
// 覆盖 2026-08-08 新增逻辑：
//   1. END + 用户消息等待 → START（任务延续提示词，taskTurnCount 不变）
//   2. hardStop 严重超限 → 强制提升难度 + 强制回退 DEEP_UNDERSTAND
//   3. 非 hardStop + 用户消息等待 → 追加 pendingHint（不提升难度/不强制流转）
// 运行：node --import <jiti-register.mjs> --test test/turn-end.test.ts
import { test, after } from "node:test";
import assert from "node:assert/strict";
import registerMod from "../src/index.ts";
import { stateMachine } from "../src/state-machine.ts";
import { TOOL_TASK_INFO, TOOL_TRANSITION } from "../src/types.ts";
import type { ThinkingState } from "../src/types.ts";

// jiti CJS 转译后 default 嵌套一层（default.default 才是注册函数）
const register = (registerMod as any).default ?? (registerMod as any);

// ── mock pi 环境 ──
type Handler = (event: any, ctx: any) => any;
const handlers: Record<string, Handler[]> = {};
const sent: Array<{ msg: any; opts?: any }> = [];

const mockPi: any = {
  on: (name: string, h: Handler) => {
    (handlers[name] ??= []).push(h);
  },
  sendMessage: (msg: any, opts?: any) => {
    sent.push({ msg, opts });
  },
  registerTool: () => {},
  registerCommand: () => {},
};

register(mockPi);
const turnEnd = handlers["turn_end"];
assert.ok(turnEnd && turnEnd.length > 0, "turn_end 钩子应已注册");

// ── mock ctx / 状态摆位 ──
const TEST_SESSION = "__asym_turn_end_test__";
function makeCtx(hasPending = false): any {
  return {
    sessionManager: { getSessionId: () => TEST_SESSION },
    hasPendingMessages: () => hasPending,
  };
}

/** 直接摆位内存状态（绕开 transition 校验，聚焦 turn_end 行为） */
function seed(
  state: ThinkingState,
  difficulty: any = null,
  stateTurnCount = 0,
  visited: string[] = [],
  taskTurnCount = 0,
): void {
  stateMachine.set(makeCtx(), {
    state,
    difficulty,
    masterTaskType: null,
    subTaskType: null,
    taskTurnCount,
    stateTurnCount,
    lastTransitionTime: Date.now(),
    visited,
  });
}

/** 触发 turn_end 并返回该轮 sendMessage 的消息列表（从上次快照起） */
async function fireTurnEnd(hasPending = false): Promise<any[]> {
  const before = sent.length;
  await turnEnd[turnEnd.length - 1]({ toolResults: [] }, makeCtx(hasPending));
  return sent.slice(before).map((s) => s.msg);
}

after(() => {
  try {
    stateMachine.deleteSession(TEST_SESSION);
  } catch {
    // 忽略清理异常
  }
});

// ═══════════ 1. END + 用户消息等待 → START（任务延续） ═══════════

test("turn_end: END + hasPending → 转 START，taskTurnCount 不变（同任务延续）", async () => {
  seed("END", null, 0, [], 42);
  const msgs = await fireTurnEnd(true);

  assert.equal(stateMachine.getState(TEST_SESSION), "START", "应重置为 START");
  assert.equal(stateMachine.getTaskTurnCount(TEST_SESSION), 42, "taskTurnCount 必须保留（同任务延续语义）");

  assert.equal(msgs.length, 1, "应发送一条延续引导");
  const content = msgs[0].content as string;
  assert.match(content, /任务延续/, "应含'任务延续'语义");
  assert.match(content, /重新审视用户指令/, "应要求重新审视用户指令");
  assert.ok(content.includes(TOOL_TASK_INFO), "应引用 set-task-info 工具");
  assert.ok(content.includes(TOOL_TRANSITION), "应引用 transition 工具");
  assert.doesNotMatch(content, /深度评估调用所有tool工具/, "不应复用 buildTemplate 的'全新任务'模板");
  assert.equal(msgs[0].customType, "asymptotic-thinking-reminder", "customType 不变");
  assert.equal(msgs[0].display, false, "display 保持 false");
});

test("turn_end: END + 无等待消息 → 不发消息，维持 END", async () => {
  seed("END", null, 0, [], 0);
  const msgs = await fireTurnEnd(false);
  assert.equal(msgs.length, 0, "无等待消息时不注入");
  assert.equal(stateMachine.getState(TEST_SESSION), "END", "维持 END");
});

// ═══════════ 2. hardStop 严重超限 → 强制提升难度 + 回退 DEEP_UNDERSTAND ═══════════

test("turn_end: hardStop(HARD/EXECUTE) → 难度提升至 EXTREME + 强制回 DEEP_UNDERSTAND", async () => {
  // EXECUTE/HARD: maxTurns=20，hardStop 阈值 = 20+ceil(20/3)=27；stateTurnCount=27 → bump 后 28 > 27
  seed("EXECUTE", "HARD", 27, ["DEEP_UNDERSTAND", "EXECUTE"], 5);
  const msgs = await fireTurnEnd(false);

  assert.equal(stateMachine.getState(TEST_SESSION), "DEEP_UNDERSTAND", "强制回 DEEP_UNDERSTAND");
  assert.equal(stateMachine.getDifficulty(TEST_SESSION), "EXTREME", "难度应提升一级 HARD→EXTREME");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 0, "轮次归零（新状态起点）");
  assert.deepEqual(stateMachine.getVisited(TEST_SESSION), ["DEEP_UNDERSTAND", "EXECUTE"], "visited 已有 DEEP_UNDERSTAND 则去重不变");

  assert.equal(msgs.length, 1, "应发送强制回退引导");
  const content = msgs[0].content as string;
  assert.match(content, /严重超限/, "应说明严重超限");
  assert.match(content, /强制回退/, "应提示强制回退");
  assert.match(content, /重新深度理解/, "应要求重新深度理解");
  assert.match(content, /从【困难】提升至【极难】/, "应明示难度提升");
  assert.match(content, /避免进入错误方案路线/, "应提示避免错误路线");
});

test("turn_end: hardStop(EXTREME/EXECUTE) → 难度不再提升，明示已达极难", async () => {
  seed("EXECUTE", "EXTREME", 999, [], 6);
  const msgs = await fireTurnEnd(false);

  assert.equal(stateMachine.getDifficulty(TEST_SESSION), "EXTREME", "最高档不再提升");
  assert.equal(stateMachine.getState(TEST_SESSION), "DEEP_UNDERSTAND", "仍强制回 DEEP_UNDERSTAND");
  const content = msgs[0].content as string;
  assert.match(content, /已达极难，不再提升/, "应明示不再提升");
  assert.doesNotMatch(content, /提升至/, "不应出现提升描述");
});

test("turn_end: hardStop(难度 null) → 防御性置为 TRIVIAL", async () => {
  seed("EXECUTE", null, 999, [], 7);
  const msgs = await fireTurnEnd(false);

  assert.equal(stateMachine.getDifficulty(TEST_SESSION), "TRIVIAL", "null → TRIVIAL 保证计数可用");
  assert.equal(stateMachine.getState(TEST_SESSION), "DEEP_UNDERSTAND", "强制回 DEEP_UNDERSTAND");
});

test("turn_end: hardStop 未含 DEEP_UNDERSTAND 的 visited → 追加", async () => {
  seed("VERIFY", "SIMPLE", 999, ["EXECUTE"], 8);
  const msgs = await fireTurnEnd(false);

  assert.equal(stateMachine.getState(TEST_SESSION), "DEEP_UNDERSTAND");
  assert.equal(stateMachine.getDifficulty(TEST_SESSION), "MODERATE", "SIMPLE → MODERATE");
  assert.deepEqual(
    stateMachine.getVisited(TEST_SESSION),
    ["EXECUTE", "DEEP_UNDERSTAND"],
    "visited 应追加 DEEP_UNDERSTAND",
  );
});

// ═══════════ 3. 非 hardStop：正常路径 + pendingHint ═══════════

test("turn_end: 非 hardStop + hasPending → 追加 pendingHint，不提升难度不强制流转", async () => {
  seed("EXECUTE", "SIMPLE", 1, ["EXECUTE"], 9);
  const msgs = await fireTurnEnd(true);

  assert.equal(msgs.length, 1, "应发送正常 reminder");
  const content = msgs[0].content as string;
  assert.match(content, /<stateGuard>/, "保留 stateGuard");
  assert.match(content, /<pendingHint>/, "应追加 pendingHint");
  assert.match(content, /无需调整难度与状态/, "pendingHint 明示不调整难度/状态");
  // 状态与难度必须原样
  assert.equal(stateMachine.getState(TEST_SESSION), "EXECUTE", "不强制流转");
  assert.equal(stateMachine.getDifficulty(TEST_SESSION), "SIMPLE", "不提升难度");
});

test("turn_end: 非 hardStop + 无等待 → 正常路径无 pendingHint", async () => {
  seed("DEEP_UNDERSTAND", "MODERATE", 2, ["DEEP_UNDERSTAND"], 10);
  const msgs = await fireTurnEnd(false);

  assert.equal(msgs.length, 1, "应发送正常 reminder");
  const content = msgs[0].content as string;
  assert.match(content, /<stateGuard>/, "保留 stateGuard");
  assert.doesNotMatch(content, /<pendingHint>/, "无等待消息时不应追加 pendingHint");
  assert.equal(stateMachine.getState(TEST_SESSION), "DEEP_UNDERSTAND", "正常任务路径状态不变");
});
