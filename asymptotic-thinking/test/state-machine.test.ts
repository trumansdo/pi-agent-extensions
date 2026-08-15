// state-machine.test.ts — state-machine.ts 方法级单测（node:test + jiti loader）
// 运行：node --import <jiti-register.mjs> --test src/state-machine.test.ts
import { test, after } from "node:test";
import assert from "node:assert/strict";
import {
  getAllowedTargets,
  classifyTargets,
  formatNextStateHint,
  STATE_ORDER,
  DEFAULT_STATE,
  stateMachine,
} from "../src/state-machine.ts";
import { sessionStore } from "../src/session-store.ts";
import type { ThinkingState } from "../src/types.ts";

// ── mock ctx ──
const TEST_SESSION = "__asym_test_session__";
const ctx: any = { sessionManager: { getSessionId: () => TEST_SESSION } };

// 测后清理测试 session 记录（防污染真实库）
after(() => {
  try {
    stateMachine.deleteSession(TEST_SESSION);
  } catch {
    // 忽略清理异常
  }
});

// ═══════════ getAllowedTargets ═══════════

test("getAllowedTargets: null/START 按难度开放路径", () => {
  assert.deepEqual(getAllowedTargets(null, null), ["DEEP_UNDERSTAND"], "null 默认全流程");
  assert.deepEqual(getAllowedTargets("START", null), ["DEEP_UNDERSTAND"]);
  assert.deepEqual(getAllowedTargets("START", "TRIVIAL"), ["DEEP_UNDERSTAND", "EXECUTE"], "TRIVIAL 直达 EXECUTE");
  assert.deepEqual(getAllowedTargets("START", "SIMPLE"), ["DEEP_UNDERSTAND", "DESIGN", "EXECUTE"], "SIMPLE 可跳部分");
  assert.deepEqual(getAllowedTargets("START", "MODERATE"), ["DEEP_UNDERSTAND"], "MODERATE 全流程");
  assert.deepEqual(getAllowedTargets("START", "EXTREME"), ["DEEP_UNDERSTAND"]);
});

test("getAllowedTargets: 业务态出口", () => {
  assert.deepEqual(getAllowedTargets("DEEP_UNDERSTAND", null), ["DESIGN", "EXECUTE", "VERIFY"]);
  assert.deepEqual(getAllowedTargets("DESIGN", null), ["EXECUTE", "DEEP_UNDERSTAND", "VERIFY"]);
  assert.deepEqual(getAllowedTargets("EXECUTE", null), ["VERIFY", "DESIGN", "DEEP_UNDERSTAND"]);
  assert.deepEqual(getAllowedTargets("VERIFY", null), ["END", "EXECUTE", "DEEP_UNDERSTAND", "DESIGN"], "VERIFY 可进 END");
});

test("getAllowedTargets: END 无合法出口", () => {
  assert.deepEqual(getAllowedTargets("END", null), [], "END 只能 before_agent_start 代码转换");
});

// ═══════════ classifyTargets / formatNextStateHint ═══════════

test("classifyTargets: 向前/回退区分（含 END 特判）", () => {
  const { forward, backward } = classifyTargets("EXECUTE", null);
  assert.deepEqual(forward, ["VERIFY"], "EXECUTE 向前仅 VERIFY");
  assert.deepEqual(backward, ["DESIGN", "DEEP_UNDERSTAND"], "回退重做");

  const vf = classifyTargets("VERIFY", null);
  assert.ok(vf.forward.includes("END"), "VERIFY → END 算向前");
  assert.ok(vf.backward.includes("EXECUTE"), "回退 EXECUTE 算回退");
});

test("formatNextStateHint: 格式与内容", () => {
  const hint = formatNextStateHint("EXECUTE", null);
  assert.ok(hint.includes("只能向前流转至"), "向前提示存在");
  assert.ok(hint.includes("或者回退流转至"), "回退提示存在");
  assert.ok(hint.includes("VERIFY"), "含目标状态");
});

test("STATE_ORDER: 六态顺序", () => {
  assert.equal(STATE_ORDER.START, 0);
  assert.equal(STATE_ORDER.DEEP_UNDERSTAND, 1);
  assert.equal(STATE_ORDER.DESIGN, 2);
  assert.equal(STATE_ORDER.EXECUTE, 3);
  assert.equal(STATE_ORDER.VERIFY, 4);
  assert.equal(STATE_ORDER.END, 5);
});

// ═══════════ DEFAULT_STATE ═══════════

test("DEFAULT_STATE: 新建会话为空状态", () => {
  assert.equal(DEFAULT_STATE.state, null, "state 为 null（未初始化）");
  assert.deepEqual(DEFAULT_STATE.visited, [], "visited 空");
  assert.equal(DEFAULT_STATE.taskTurnCount, 0);
});

// ═══════════ init / setTaskInfo / transition ═══════════

test("init: 新建会话 → DEFAULT_STATE", () => {
  stateMachine.deleteSession(TEST_SESSION);
  stateMachine.init(ctx);
  assert.equal(stateMachine.getState(TEST_SESSION), null, "新会话 state=null");
});

test("setTaskInfo: 仅 START 可设定，设定后难度生效", () => {
  // 新建（null）状态不可设定（应先经 before_agent_start 转 START，这里模拟直接设为 START）
  stateMachine.set(ctx, { ...DEFAULT_STATE, state: "START" });
  const ok = stateMachine.setTaskInfo(ctx, "TRIVIAL", "CODING", "BUG_FIX");
  assert.ok(ok.ok, "START 状态可设定画像");
  assert.equal(stateMachine.getDifficulty(TEST_SESSION), "TRIVIAL");
  assert.equal(stateMachine.getMasterTaskType(TEST_SESSION), "CODING");
  assert.equal(stateMachine.getSubTaskType(TEST_SESSION), "BUG_FIX");
});

test("setTaskInfo: 非 START 拒绝", () => {
  stateMachine.set(ctx, { ...DEFAULT_STATE, state: "EXECUTE", visited: [] });
  const r = stateMachine.setTaskInfo(ctx, "HARD", "CODING", "ARCHITECT");
  assert.ok(!r.ok, "非 START 拒绝");
});

test("setTaskInfo: 超限时允许重估（非 START）", () => {
  // EXECUTE MODERATE maxTurns=12，已 13 轮（超限）→ 允许重估
  stateMachine.set(ctx, { ...DEFAULT_STATE, state: "EXECUTE", difficulty: "MODERATE", stateTurnCount: 13, visited: ["EXECUTE"] });
  const r = stateMachine.setTaskInfo(ctx, "TRIVIAL", "CODING", "BUG_FIX");
  assert.ok(r.ok, "超限允许重估");
  assert.equal(stateMachine.getDifficulty(TEST_SESSION), "TRIVIAL", "难度已重估");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 0, "重估后轮次归零");
});

test("setTaskInfo: 未超限非 START 拒绝（含 END）", () => {
  stateMachine.set(ctx, { ...DEFAULT_STATE, state: "END", visited: [] });
  const r = stateMachine.setTaskInfo(ctx, "HARD", "CODING", "ARCHITECT");
  assert.ok(!r.ok, "END 拒绝重估");
});

test("transition: START→DEEP_UNDERSTAND 任务轮次+1，visited 记录", () => {
  stateMachine.set(ctx, { ...DEFAULT_STATE, state: "START", difficulty: "MODERATE", masterTaskType: "CODING", subTaskType: "BUG_FIX", visited: [] });
  const r = stateMachine.transition(ctx, "DEEP_UNDERSTAND");
  assert.ok(r.ok, "合法流转");
  assert.equal(stateMachine.getState(TEST_SESSION), "DEEP_UNDERSTAND");
  assert.equal(stateMachine.getTaskTurnCount(TEST_SESSION), 1, "START 出发 +1");
  assert.deepEqual(stateMachine.getVisited(TEST_SESSION), ["DEEP_UNDERSTAND"], "visited 记录");
});

test("transition: START 未设定画像拒绝流转", () => {
  // 画像未设定（difficulty/masterTaskType/subTaskType 为 null）→ 拒绝
  stateMachine.set(ctx, { ...DEFAULT_STATE, state: "START", visited: [] });
  const r = stateMachine.transition(ctx, "DEEP_UNDERSTAND");
  assert.ok(!r.ok, "未设定画像拒绝");
  assert.ok(r.ok || (r as any).reason.includes("set-task-info"), "提示需先设定画像");
  assert.equal(stateMachine.getState(TEST_SESSION), "START", "状态保持 START");
});

test("transition: START 部分画像缺失拒绝", () => {
  stateMachine.set(ctx, { ...DEFAULT_STATE, state: "START", difficulty: "MODERATE", visited: [] });
  const r = stateMachine.transition(ctx, "DEEP_UNDERSTAND");
  assert.ok(!r.ok, "部分画像缺失拒绝");
});

test("transition: TRIVIAL 直达 EXECUTE（跳过前置）", () => {
  stateMachine.set(ctx, { ...DEFAULT_STATE, state: "START", difficulty: "TRIVIAL", masterTaskType: "CODING", subTaskType: "BUG_FIX", visited: [] });
  const r = stateMachine.transition(ctx, "EXECUTE");
  assert.ok(r.ok, "TRIVIAL 可直达 EXECUTE");
  assert.equal(stateMachine.getState(TEST_SESSION), "EXECUTE");
  assert.deepEqual(stateMachine.getVisited(TEST_SESSION), ["EXECUTE"]);
});

test("transition: 非法流转拒绝", () => {
  stateMachine.set(ctx, { ...DEFAULT_STATE, state: "START", difficulty: "TRIVIAL", visited: [] });
  const r = stateMachine.transition(ctx, "DESIGN");
  assert.ok(!r.ok, "TRIVIAL 不能到 DESIGN（不在开放集）");
});

test("transition: 转入 END 清空画像与 visited", () => {
  stateMachine.set(ctx, { ...DEFAULT_STATE, state: "VERIFY", difficulty: "MODERATE", masterTaskType: "CODING", subTaskType: "BUG_FIX", visited: ["DEEP_UNDERSTAND", "DESIGN", "EXECUTE", "VERIFY"] });
  const r = stateMachine.transition(ctx, "END");
  assert.ok(r.ok);
  assert.equal(stateMachine.getState(TEST_SESSION), "END");
  assert.equal(stateMachine.getDifficulty(TEST_SESSION), null, "画像清空");
  assert.deepEqual(stateMachine.getVisited(TEST_SESSION), [], "visited 清空");
});

test("transition: END 状态拒绝任何手动流转", () => {
  stateMachine.set(ctx, { ...DEFAULT_STATE, state: "END", visited: [] });
  const r = stateMachine.transition(ctx, "START");
  assert.ok(!r.ok, "END 无合法出口");
});

test("transition: 自身转移拒绝（from===to）", () => {
  stateMachine.set(ctx, { ...DEFAULT_STATE, state: "EXECUTE", difficulty: "MODERATE", masterTaskType: "CODING", subTaskType: "BUG_FIX", visited: [] });
  const r = stateMachine.transition(ctx, "EXECUTE");
  assert.ok(!r.ok && (r as any).reason.includes("不能转移到自身"), "自身转移拒绝");
});

// 注：null 状态出发的 transition 等价于 START 未设定画像（transition 内 null ?? "START"），
// 已由 "START 未设定画像拒绝流转" 覆盖；此处不重复（set null 会触发 DB NOT NULL）。

test("deleteSession: 删除会话状态", () => {
  stateMachine.set(ctx, { ...DEFAULT_STATE, state: "START", difficulty: "MODERATE", masterTaskType: "CODING", subTaskType: "BUG_FIX", visited: [] });
  assert.equal(stateMachine.getState(TEST_SESSION), "START");
  stateMachine.deleteSession(TEST_SESSION);
  assert.equal(stateMachine.getState(TEST_SESSION), null, "删除后无状态");
  assert.equal(sessionStore.load(TEST_SESSION), null, "DB 记录已删");
});

test("get/set: 存取往返", () => {
  const s = { ...DEFAULT_STATE, state: "DESIGN" as any, visited: ["DEEP_UNDERSTAND"] as ThinkingState[] };
  stateMachine.set(ctx, s);
  const got = stateMachine.get(TEST_SESSION);
  assert.equal(got?.state, "DESIGN");
  assert.deepEqual(got?.visited, ["DEEP_UNDERSTAND"]);
  assert.equal(stateMachine.getVisited(TEST_SESSION), got?.visited);
});

test("bumpAndWarn 方向D: 软提醒三档（接近上限）", () => {
  // TRIVIAL EXECUTE maxTurns=3 → 第 2 轮（>=maxTurns-1）软提醒（简单档）
  stateMachine.set(ctx, mkState("EXECUTE", 1, "TRIVIAL"));
  const w1 = stateMachine.bumpAndWarn(ctx);
  assert.ok(w1 && w1.includes("接近上限"), "简单档软提醒");

  // MODERATE EXECUTE maxTurns=12 → 第 11 轮（>=11）软提醒（标准档）
  stateMachine.set(ctx, mkState("EXECUTE", 10, "MODERATE"));
  const w2 = stateMachine.bumpAndWarn(ctx);
  assert.ok(w2 && w2.includes("接近上限"), "标准档软提醒");
  assert.ok(w2.includes("重新评估难度"), "标准档软提醒含重估提示");
  assert.ok(!w2.includes("流程纪律"), "标准档无纪律措辞");

  // EXTREME EXECUTE maxTurns=28 → 第 27 轮（>=27）软提醒（复杂档）
  stateMachine.set(ctx, mkState("EXECUTE", 26, "EXTREME"));
  const w3 = stateMachine.bumpAndWarn(ctx);
  assert.ok(w3 && w3.includes("流程纪律"), "复杂档软提醒");
  assert.ok(w3.includes("重新评估难度"), "复杂档软提醒含重估提示");
});

// ═══════════ bumpAndWarn（三级阈值） ═══════════

function mkState(state: any, stateTurnCount: number, difficulty: any = "MODERATE") {
  return { ...DEFAULT_STATE, state, stateTurnCount, difficulty };
}

test("bumpAndWarn: 上限内不警告", () => {
  // EXECUTE MODERATE maxTurns=10：第 9 轮仍属"接近"前，第 8 轮无警告
  stateMachine.set(ctx, mkState("EXECUTE", 7));
  const w = stateMachine.bumpAndWarn(ctx);
  assert.equal(w, null, "第 8 轮（≤maxTurns-1）不警告");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 8, "计数+1");
});

test("bumpAndWarn: 超过 maxTurns 第一级警告（> 才警告）", () => {
  stateMachine.set(ctx, mkState("EXECUTE", 12)); // maxTurns=12
  const w = stateMachine.bumpAndWarn(ctx);
  assert.ok(w && w.includes("已超过上限"), "第 13 轮（>12）警告");
});

test("bumpAndWarn: 超 1/3 缓冲 hardStop 强制停止", () => {
  // EXECUTE MODERATE maxTurns=12 → excessThreshold = 12 + max(1,ceil(12/3)) = 12+4 = 16
  // 第 17 轮（>16）触发 hardStop
  stateMachine.set(ctx, mkState("EXECUTE", 16));
  const w = stateMachine.bumpAndWarn(ctx);
  assert.ok(w && w.includes("hardStop") && w.includes("强制停止"), "第 15 轮 hardStop");
});

test("bumpAndWarn: START 参与计数（maxTurns=1，超过才警告）", () => {
  // START 无难度（null）：getMaxStateTurns → 1
  stateMachine.set(ctx, mkState("START", 0, null));
  const w1 = stateMachine.bumpAndWarn(ctx);
  assert.equal(w1, null, "第 1 轮（=maxTurns=1）不警告");
  const w2 = stateMachine.bumpAndWarn(ctx);
  assert.ok(w2 && w2.includes("已超过上限"), "第 2 轮（>1）警告");
});

test("bumpAndWarn: END 不计数", () => {
  stateMachine.set(ctx, mkState("END", 0));
  const w = stateMachine.bumpAndWarn(ctx);
  assert.equal(w, null, "END 无警告");
  assert.equal(stateMachine.getStateTurnCount(TEST_SESSION), 0, "END 不计数");
});

// ═══════════ bumpAndWarn 三档文案（方向 D） ═══════════

test("bumpAndWarn 方向D: 简单任务超限引导重估难度", () => {
  // TRIVIAL EXECUTE maxTurns=3，第 4 轮（>3）超限
  stateMachine.set(ctx, mkState("EXECUTE", 3, "TRIVIAL"));
  const w = stateMachine.bumpAndWarn(ctx);
  assert.ok(w && w.includes("重估"), "简单任务提示重估难度");
  assert.ok(w && w.includes("误评高难度"), "提示可能难度虚高");
});

test("bumpAndWarn 方向D: 复杂任务超限强调流程纪律（含重估提示）", () => {
  // EXTREME EXECUTE maxTurns=28，第 29 轮（>28）超限
  stateMachine.set(ctx, mkState("EXECUTE", 28, "EXTREME"));
  const w = stateMachine.bumpAndWarn(ctx);
  assert.ok(w && w.includes("流程纪律"), "复杂任务强调纪律");
  assert.ok(w.includes("重新评估难度"), "复杂档超限含重估提示");
});

test("bumpAndWarn 方向D: 中等任务超限标准文案", () => {
  // MODERATE EXECUTE maxTurns=12，第 13 轮（>12）超限
  stateMachine.set(ctx, mkState("EXECUTE", 12, "MODERATE"));
  const w = stateMachine.bumpAndWarn(ctx);
  assert.ok(w && w.includes("已超过上限"), "标准文案");
  assert.ok(w.includes("重新评估难度"), "标准档超限含重估提示");
  assert.ok(!w.includes("流程纪律") && !w.includes("误评高难度"), "无两极端措辞");
});

test("bumpAndWarn 方向D: 复杂任务 hardStop 强调纪律", () => {
  // EXTREME EXECUTE maxTurns=28 → excessThreshold = 28 + max(1,ceil(28/3)) = 28+10 = 38，第 39 轮触发
  stateMachine.set(ctx, mkState("EXECUTE", 38, "EXTREME"));
  const w = stateMachine.bumpAndWarn(ctx);
  assert.ok(w && w.includes("hardStop") && w.includes("流程纪律"), "复杂 hardStop");
  assert.ok(w.includes("重新评估难度"), "复杂档 hardStop 含重估提示");
});

test("detailText: 9 档文案均正向（含重估提示、无否定式措辞）", () => {
  // [level, difficulty, 前置 turn, maxTurns]——EXECUTE 状态触发各层级
  const cases: Array<[string, string, number, number]> = [
    ["soft", "TRIVIAL", 1, 3],
    ["soft", "MODERATE", 10, 12],
    ["soft", "EXTREME", 26, 28],
    ["over", "TRIVIAL", 3, 3],
    ["over", "MODERATE", 12, 12],
    ["over", "EXTREME", 28, 28],
    ["hardStop", "TRIVIAL", 4, 3],
    ["hardStop", "MODERATE", 16, 12],
    ["hardStop", "EXTREME", 38, 28],
  ];
  for (const [level, difficulty, prevTurn] of cases) {
    stateMachine.set(ctx, mkState("EXECUTE", prevTurn, difficulty));
    const w = stateMachine.bumpAndWarn(ctx);
    const label = `${level}/${difficulty}`;
    assert.ok(w, `${label} 有警告`);
    assert.ok(
      w.includes("重估难度") || w.includes("重新评估难度") || w.includes("重估为更低难度"),
      `${label} 含重估提示`,
    );
    assert.ok(!w.includes("禁止"), `${label} 无否定式措辞`);
  }
});
