// state-turn-count.test.ts — SessionState.stateTurnCount 字段全场景测试
//
// 覆盖场景矩阵：
//   A. 初始/默认值        —— DEFAULT_STATE.stateTurnCount === 0
//   B. init 恢复逻辑      —— 新会话 0 / 恢复旧记录保留原值 / 无效状态重置 0
//   C. setTaskInfo 归零   —— START 设定归零 / 超限重估归零 / 拒绝时不变
//   D. transition 归零    —— 合法流转归零 / 非法目标/自身转移/未设画像拒绝时不变
//   E. bumpAndWarn 递增   —— 连续 +1 / 无警告仍 +1 / END 不计数 / 无内存记录不计数
//   F. 持久化往返         —— sessionStore save→load 值一致（非 0 与 0）
//   G. 三级阈值边界矩阵   —— soft/over/hardStop 触发时的精确 stateTurnCount 值
//   H. 只读查询           —— getStateTurnCount 默认与读取
//
// 运行：node --import "file:///<npmRoot>/@earendil-works/pi-coding-agent/node_modules/jiti/lib/jiti-register.mjs" --test test/state-turn-count.test.ts
import { test, after } from "node:test";
import assert from "node:assert/strict";
import {
  DEFAULT_STATE,
  stateMachine,
} from "../src/state-machine.ts";
import { sessionStore } from "../src/session-store.ts";
import type { SessionState, ThinkingState } from "../src/types.ts";

// ── mock ctx（独立测试 session，防污染真实库）──
const TEST_SESSION = "__asym_stc_test__";
const ctx: any = { sessionManager: { getSessionId: () => TEST_SESSION } };

// 测后清理测试 session 记录
after(() => {
  try {
    stateMachine.deleteSession(TEST_SESSION);
  } catch {
    // 忽略清理异常
  }
});

/** 构造指定 state/stateTurnCount/difficulty 的 SessionState（其余字段取默认） */
function mkState(
  state: ThinkingState | null,
  stateTurnCount: number,
  difficulty: any = "MODERATE",
): SessionState {
  return {
    ...DEFAULT_STATE,
    state,
    stateTurnCount,
    difficulty,
    masterTaskType: "CODING",
    subTaskType: "BUG_FIX",
  };
}

// ═══════════ A. 初始/默认值 ═══════════

test("A1: DEFAULT_STATE.stateTurnCount 初始为 0", () => {
  assert.equal(DEFAULT_STATE.stateTurnCount, 0);
});

// ═══════════ B. init 恢复逻辑 ═══════════

test("B1: init 新会话（无 DB 记录）→ stateTurnCount 0", () => {
  stateMachine.deleteSession(TEST_SESSION);
  stateMachine.init(ctx);
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 0);
});

test("B2: init 恢复旧记录 → 保留原 stateTurnCount", () => {
  // 先写入带非 0 计数的记录（set 会同步落库）
  stateMachine.set(ctx, mkState("EXECUTE", 5));
  // init 从 SQLite 恢复，应保留 5
  stateMachine.init(ctx);
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 5, "恢复后保留原值");
  assert.equal(stateMachine.getState(TEST_SESSION), "EXECUTE");
});

test("B3: init 无效状态（不在 STATE_META）→ 重置为 0", () => {
  // 直接向 DB 写入一条 state=BOGUS 的脏记录
  sessionStore.save(TEST_SESSION, { ...mkState("EXECUTE", 7), state: "BOGUS" as any });
  stateMachine.init(ctx);
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 0, "脏记录重置为 0");
  assert.equal(stateMachine.getState(TEST_SESSION), null, "状态重置为 null");
});

// ═══════════ C. setTaskInfo 归零 ═══════════

test("C1: setTaskInfo START 设定画像 → stateTurnCount 归零（前置非 0）", () => {
  stateMachine.set(ctx, mkState("START", 7, "TRIVIAL"));
  const r = stateMachine.setTaskInfo(ctx, "TRIVIAL", "CODING", "BUG_FIX");
  assert.ok(r.ok);
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 0, "设定画像后归零");
});

test("C2: setTaskInfo 超限重估 → stateTurnCount 归零（前置非 0）", () => {
  // EXECUTE MODERATE maxTurns=12，已 13 轮（超限）→ 允许重估
  stateMachine.set(ctx, mkState("EXECUTE", 13, "MODERATE"));
  const r = stateMachine.setTaskInfo(ctx, "SIMPLE", "CODING", "BUG_FIX");
  assert.ok(r.ok, "超限允许重估");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 0, "重估后归零");
});

test("C3: setTaskInfo 拒绝（非 START 且未超限）→ stateTurnCount 不变", () => {
  stateMachine.set(ctx, mkState("EXECUTE", 5, "MODERATE"));
  const r = stateMachine.setTaskInfo(ctx, "HARD", "CODING", "ARCHITECT");
  assert.ok(!r.ok, "拒绝设定");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 5, "拒绝后计数不变");
});

// ═══════════ D. transition 归零 ═══════════

test("D1: transition 合法流转 → stateTurnCount 归零（前置非 0）", () => {
  // EXECUTE → VERIFY 合法；EXECUTE MODERATE maxTurns=12
  stateMachine.set(ctx, mkState("EXECUTE", 9, "MODERATE"));
  const r = stateMachine.transition(ctx, "VERIFY");
  assert.ok(r.ok, "合法流转");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 0, "流转后归零");
  assert.equal(stateMachine.getState(TEST_SESSION), "VERIFY");
});

test("D2: transition 拒绝（非法目标）→ stateTurnCount 不变", () => {
  // TRIVIAL START 不能到 DESIGN
  stateMachine.set(ctx, mkState("START", 3, "TRIVIAL"));
  const r = stateMachine.transition(ctx, "DESIGN");
  assert.ok(!r.ok, "非法目标拒绝");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 3, "拒绝后计数不变");
});

test("D3: transition 拒绝（自身转移）→ stateTurnCount 不变", () => {
  stateMachine.set(ctx, mkState("EXECUTE", 4, "MODERATE"));
  const r = stateMachine.transition(ctx, "EXECUTE");
  assert.ok(!r.ok && (r as any).reason.includes("不能转移到自身"), "自身转移拒绝");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 4, "拒绝后计数不变");
});

test("D4: transition 拒绝（START 未设定画像）→ stateTurnCount 不变", () => {
  stateMachine.set(ctx, { ...DEFAULT_STATE, state: "START", stateTurnCount: 2, difficulty: null, masterTaskType: null, subTaskType: null });
  const r = stateMachine.transition(ctx, "DEEP_UNDERSTAND");
  assert.ok(!r.ok, "未设画像拒绝");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 2, "拒绝后计数不变");
});

// ═══════════ E. bumpAndWarn 递增 ═══════════

test("E1: bumpAndWarn 连续调用 → 0→1→2 逐次 +1", () => {
  stateMachine.set(ctx, mkState("EXECUTE", 0, "MODERATE"));
  assert.equal(stateMachine.bumpAndWarn(ctx), null, "第 1 轮无警告");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 1, "第 1 轮后计数 1");
  assert.equal(stateMachine.bumpAndWarn(ctx), null, "第 2 轮无警告（≤maxTurns-1）");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 2, "第 2 轮后计数 2");
});

test("E2: bumpAndWarn 返回警告时计数同样 +1（软提醒）", () => {
  // MODERATE EXECUTE maxTurns=12：第 11 轮（>=11）软提醒
  stateMachine.set(ctx, mkState("EXECUTE", 10, "MODERATE"));
  const w = stateMachine.bumpAndWarn(ctx);
  assert.ok(w && w.includes("接近上限"), "第 11 轮软提醒");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 11, "警告不影响计数+1");
});

test("E3: bumpAndWarn END 不计数 → 保持 0", () => {
  stateMachine.set(ctx, mkState("END", 0, "MODERATE"));
  assert.equal(stateMachine.bumpAndWarn(ctx), null, "END 无警告");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 0, "END 计数不变");
});

test("E4: bumpAndWarn 无内存记录 → 返回 null 不计数", () => {
  stateMachine.deleteSession(TEST_SESSION); // 内存与 DB 均清空
  assert.equal(stateMachine.bumpAndWarn(ctx), null, "无记录直接返回");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 0, "无记录不计数");
});

// ═══════════ F. 持久化往返 ═══════════

test("F1: sessionStore save→load 保留 stateTurnCount（非 0 值）", () => {
  stateMachine.deleteSession(TEST_SESSION);
  sessionStore.save(TEST_SESSION, mkState("DESIGN", 7, "MODERATE"));
  const loaded = sessionStore.load(TEST_SESSION);
  assert.equal(loaded?.stateTurnCount, 7, "DB 往返值一致");
});

test("F2: sessionStore save→load 保留 stateTurnCount（0 值）", () => {
  stateMachine.deleteSession(TEST_SESSION);
  sessionStore.save(TEST_SESSION, mkState("START", 0, "TRIVIAL"));
  const loaded = sessionStore.load(TEST_SESSION);
  assert.equal(loaded?.stateTurnCount, 0, "0 值往返一致");
});

// ═══════════ G. 三级阈值边界矩阵 ═══════════

test("G1: MODERATE EXECUTE（maxTurns=12）三级阈值精确计数", () => {
  // soft：nextTurn >= maxTurns-1=11 → 前置 10，bump 后 11
  stateMachine.set(ctx, mkState("EXECUTE", 10, "MODERATE"));
  assert.ok(stateMachine.bumpAndWarn(ctx)?.includes("接近上限"), "@11 soft");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 11);

  // over：nextTurn > 12 → 前置 12，bump 后 13
  stateMachine.set(ctx, mkState("EXECUTE", 12, "MODERATE"));
  assert.ok(stateMachine.bumpAndWarn(ctx)?.includes("已超过上限"), "@13 over");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 13);

  // hard：excessThreshold = 12+max(1,ceil(12/3))=16，nextTurn > 16 → 前置 16，bump 后 17
  stateMachine.set(ctx, mkState("EXECUTE", 16, "MODERATE"));
  const h = stateMachine.bumpAndWarn(ctx);
  assert.ok(h && h.includes("hardStop") && h.includes("强制停止"), "@17 hardStop");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 17);
});

test("G2: TRIVIAL EXECUTE（maxTurns=3）三级阈值精确计数", () => {
  // soft：>= maxTurns-1=2 → 前置 1，bump 后 2
  stateMachine.set(ctx, mkState("EXECUTE", 1, "TRIVIAL"));
  assert.ok(stateMachine.bumpAndWarn(ctx)?.includes("接近上限"), "@2 soft");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 2);

  // over：> 3 → 前置 3，bump 后 4
  stateMachine.set(ctx, mkState("EXECUTE", 3, "TRIVIAL"));
  assert.ok(stateMachine.bumpAndWarn(ctx)?.includes("已超过上限"), "@4 over");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 4);

  // hard：excessThreshold = 3+max(1,ceil(3/3))=4，>4 → 前置 4，bump 后 5
  stateMachine.set(ctx, mkState("EXECUTE", 4, "TRIVIAL"));
  const h = stateMachine.bumpAndWarn(ctx);
  assert.ok(h && h.includes("hardStop") && h.includes("强制停止"), "@5 hardStop");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 5);
});

test("G3: START（difficulty=null，maxTurns=1）阈值精确计数", () => {
  // 第 1 轮 = maxTurns 不警告
  stateMachine.set(ctx, mkState("START", 0, null));
  assert.equal(stateMachine.bumpAndWarn(ctx), null, "@1 不警告");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 1);

  // 第 2 轮 > 1 → over（excessThreshold = 1+max(1,ceil(1/3))=2，>2 才 hard，故 @2 为 over）
  assert.ok(stateMachine.bumpAndWarn(ctx)?.includes("已超过上限"), "@2 over");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 2);

  // 第 3 轮 > 2 → hardStop
  const h = stateMachine.bumpAndWarn(ctx);
  assert.ok(h && h.includes("hardStop") && h.includes("强制停止"), "@3 hardStop");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 3);
});

test("G4: hardStop 之后继续 bump 仍返回 hardStop，计数持续增长", () => {
  stateMachine.set(ctx, mkState("EXECUTE", 16, "MODERATE"));
  assert.ok(stateMachine.bumpAndWarn(ctx)?.includes("hardStop"), "@17 hardStop");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 17);
  const w2 = stateMachine.bumpAndWarn(ctx);
  assert.ok(w2 && w2.includes("hardStop"), "@18 仍 hardStop");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 18, "计数继续增长");
});

// ═══════════ H. 只读查询 ═══════════

test("H1: getStateTurnCount 新会话默认 0", () => {
  stateMachine.deleteSession(TEST_SESSION);
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 0, "无记录返回 0");
});

test("H2: getStateTurnCount 读取当前计数", () => {
  stateMachine.set(ctx, mkState("VERIFY", 2, "MODERATE"));
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 2);
});
