// types.test.ts — types.ts 方法级单测（node:test，Node 26 原生 TS）
import { test } from "node:test";
import assert from "node:assert/strict";
import { getMaxStateTurns, STATE_MAX_TURNS, FLOW_DIAGRAM, STATE_META } from "../src/types.ts";

test("getMaxStateTurns: 难度未设定（START 阶段）", () => {
  assert.equal(getMaxStateTurns("START", null), 1, "START 最低 1 轮");
  assert.equal(getMaxStateTurns("DEEP_UNDERSTAND", null), 0, "其他状态难度未设定防御性 0");
  assert.equal(getMaxStateTurns("END", null), 0);
});

test("getMaxStateTurns: START/END 各难度均为 1", () => {
  for (const diff of ["TRIVIAL", "SIMPLE", "MODERATE", "COMPLEX", "HARD", "EXTREME"] as const) {
    assert.equal(getMaxStateTurns("START", diff), 1, `${diff} START`);
    assert.equal(getMaxStateTurns("END", diff), 1, `${diff} END`);
  }
});

test("getMaxStateTurns: 业务态按难度表（抽查边界）", () => {
  assert.equal(getMaxStateTurns("EXECUTE", "TRIVIAL"), 3, "TRIVIAL 执行 3 轮");
  assert.equal(getMaxStateTurns("EXECUTE", "EXTREME"), 28, "EXTREME 执行 28 轮");
  assert.equal(getMaxStateTurns("DEEP_UNDERSTAND", "MODERATE"), 6);
  assert.equal(getMaxStateTurns("DESIGN", "SIMPLE"), 2);
  assert.equal(getMaxStateTurns("VERIFY", "HARD"), 6);
});

test("STATE_MAX_TURNS: 表完整性（每难度含全部六态）", () => {
  const states = ["START", "DEEP_UNDERSTAND", "DESIGN", "EXECUTE", "VERIFY", "END"] as const;
  for (const diff of Object.keys(STATE_MAX_TURNS) as (keyof typeof STATE_MAX_TURNS)[]) {
    for (const s of states) {
      assert.ok(STATE_MAX_TURNS[diff][s] >= 1, `${diff}.${s} >= 1`);
    }
  }
});

test("FLOW_DIAGRAM: START → ... → END", () => {
  assert.equal(
    FLOW_DIAGRAM,
    `${STATE_META.START.label} → ${STATE_META.DEEP_UNDERSTAND.label} → ${STATE_META.DESIGN.label} → ${STATE_META.EXECUTE.label} → ${STATE_META.VERIFY.label} → ${STATE_META.END.label}`,
  );
  assert.ok(!FLOW_DIAGRAM.includes("空闲"), "不再包含旧 IDLE 标签");
});
