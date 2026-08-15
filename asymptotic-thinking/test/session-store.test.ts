// session-store.test.ts — session-store.ts 方法级单测（node:test + jiti loader）
import { test, after } from "node:test";
import assert from "node:assert/strict";
import { sessionStore, parseVisited, serializeVisited } from "../src/session-store.ts";
import type { SessionState } from "../src/types.ts";

const TEST_SESSION = "__asym_store_test__";

function mkState(overrides: Partial<SessionState> = {}): SessionState {
  return {
    state: "EXECUTE",
    difficulty: "TRIVIAL",
    masterTaskType: "CODING",
    subTaskType: "BUG_FIX",
    taskTurnCount: 1,
    stateTurnCount: 2,
    lastTransitionTime: Date.now(),
    visited: [],
    ...overrides,
  };
}

after(() => {
  try {
    sessionStore.delete(TEST_SESSION);
  } catch {
    // 忽略清理异常
  }
});

test("save/load visited 往返一致（JSON 序列化）", () => {
  const state = mkState({ visited: ["EXECUTE"] });
  sessionStore.save(TEST_SESSION, state);
  const loaded = sessionStore.load(TEST_SESSION);
  assert.ok(loaded, "load 有记录");
  assert.deepEqual(loaded.visited, ["EXECUTE"], "visited 往返一致");
  assert.equal(loaded.state, "EXECUTE");
  assert.equal(loaded.difficulty, "TRIVIAL");
});

test("多状态路径 visited 往返", () => {
  const state = mkState({
    visited: ["DEEP_UNDERSTAND", "DESIGN", "EXECUTE", "VERIFY"],
    taskTurnCount: 2,
  });
  sessionStore.save(TEST_SESSION, state);
  const loaded = sessionStore.load(TEST_SESSION);
  assert.deepEqual(loaded!.visited, ["DEEP_UNDERSTAND", "DESIGN", "EXECUTE", "VERIFY"], "多状态路径");
  assert.equal(loaded!.taskTurnCount, 2);
});

test("空 visited 存 NULL 读回 []", () => {
  const state = mkState({ visited: [] });
  sessionStore.save(TEST_SESSION, state);
  const loaded = sessionStore.load(TEST_SESSION);
  assert.deepEqual(loaded!.visited, [], "空 visited 安全");
});

test("load 最新一条（同 session 多记录取最新）", () => {
  sessionStore.save(TEST_SESSION, mkState({ visited: ["DEEP_UNDERSTAND"], stateTurnCount: 1 }));
  sessionStore.save(TEST_SESSION, mkState({ visited: ["DEEP_UNDERSTAND", "DESIGN"], stateTurnCount: 5 }));
  const loaded = sessionStore.load(TEST_SESSION);
  assert.deepEqual(loaded!.visited, ["DEEP_UNDERSTAND", "DESIGN"], "取最新记录");
  assert.equal(loaded!.stateTurnCount, 5);
});

test("load 不存在的 session 返回 null", () => {
  assert.equal(sessionStore.load("__nonexistent_session__"), null);
});

// ═══════════ parseVisited 容错（白盒：直接测纯函数） ═══════════

test("parseVisited: 非法 JSON 安全降级 []", () => {
  assert.deepEqual(parseVisited("{invalid json"), []);
  assert.deepEqual(parseVisited("not-json"), []);
});

test("parseVisited: 非数组 JSON 降级 []", () => {
  assert.deepEqual(parseVisited('"string"'), []);
  assert.deepEqual(parseVisited("42"), []);
  assert.deepEqual(parseVisited("{}"), []);
});

test("parseVisited: 合法数组保留字符串元素，过滤非字符串", () => {
  assert.deepEqual(parseVisited('["DEEP_UNDERSTAND","DESIGN"]'), ["DEEP_UNDERSTAND", "DESIGN"]);
  assert.deepEqual(parseVisited('["EXECUTE", 42, null]'), ["EXECUTE"], "过滤非字符串");
  assert.deepEqual(parseVisited(null), []);
  assert.deepEqual(parseVisited(undefined), []);
  assert.deepEqual(parseVisited(""), []);
});

test("serializeVisited: 空数组存 NULL，非空 JSON", () => {
  assert.equal(serializeVisited([]), null);
  assert.equal(serializeVisited(["EXECUTE"]), '["EXECUTE"]');
});

// ═══════════ cleanup / toggle / delete ═══════════

test("cleanup: 清理不在活跃集的会话记录", () => {
  sessionStore.save(TEST_SESSION, mkState());
  const deleted = sessionStore.cleanup(new Set(["active-session-1"]));
  assert.ok(deleted >= 1, "清理了非活跃会话");
  assert.equal(sessionStore.load(TEST_SESSION), null, "测试会话已清理");
});

test("toggle: 默认启用，setEnabled 后生效", () => {
  assert.equal(sessionStore.isEnabled(TEST_SESSION), true, "默认启用");
  sessionStore.setEnabled(TEST_SESSION, false);
  assert.equal(sessionStore.isEnabled(TEST_SESSION), false, "禁用后 false");
  sessionStore.setEnabled(TEST_SESSION, true);
  assert.equal(sessionStore.isEnabled(TEST_SESSION), true, "恢复启用");
});

test("delete: 软删除后 load null", () => {
  sessionStore.save(TEST_SESSION, mkState());
  sessionStore.delete(TEST_SESSION);
  assert.equal(sessionStore.load(TEST_SESSION), null, "删除后无记录");
});
