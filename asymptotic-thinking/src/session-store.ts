// session-store.ts — 纯持久化层（Node.js 内置 SQLite）
// 只负责 load/save/delete，不包含任何状态机逻辑

import { getAgentDir } from "@earendil-works/pi-coding-agent";
import { DatabaseSync } from "node:sqlite";
import path from "path";
import type { SessionState, ThinkingState, Difficulty, MasterTaskType } from "./types";

// ════════════════════════════════════════════════════════════════
//  SQLite 初始化
// ════════════════════════════════════════════════════════════════

const DB_PATH = path.join(getAgentDir(), "extension-global.db");
const db = new DatabaseSync(DB_PATH);

db.exec(`
  PRAGMA journal_mode = WAL;
  PRAGMA foreign_keys = ON;
  PRAGMA synchronous = NORMAL;
  PRAGMA busy_timeout = 5000;
  PRAGMA cache_size = -20000;
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS asymptotic_thinking_session_state (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id TEXT NOT NULL,
    state TEXT NOT NULL,
    difficulty TEXT,
    master_task_type TEXT,
    sub_task_type TEXT,
    task_turn_count INTEGER NOT NULL DEFAULT 0,
    state_turn_count INTEGER NOT NULL DEFAULT 0,
    last_transition_time INTEGER NOT NULL DEFAULT 0,
    visited TEXT
  );
  CREATE INDEX IF NOT EXISTS idx_asymptotic_thinking_session_state_sid ON asymptotic_thinking_session_state(session_id);
`);

// 旧库迁移：确保 visited 列存在（CREATE TABLE IF NOT EXISTS 不会给旧表加列）
function ensureVisitedColumn(): void {
  const cols = db.prepare(`PRAGMA table_info(asymptotic_thinking_session_state)`).all() as any[];
  if (!cols.some((c) => c.name === "visited")) {
    db.exec(`ALTER TABLE asymptotic_thinking_session_state ADD COLUMN visited TEXT`);
  }
}
ensureVisitedColumn();

const insertStmt = db.prepare(`
  INSERT INTO asymptotic_thinking_session_state
    (session_id, state, difficulty, master_task_type, sub_task_type, task_turn_count, state_turn_count, last_transition_time, visited)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

const selectLatestStmt = db.prepare(`
  SELECT * FROM asymptotic_thinking_session_state WHERE session_id = ? ORDER BY id DESC LIMIT 1
`);

const getAllSessionIdsStmt = db.prepare(`
  SELECT DISTINCT session_id FROM asymptotic_thinking_session_state
`);

const deleteSessionStmt = db.prepare(`
  DELETE FROM asymptotic_thinking_session_state WHERE session_id = ?
`);

// ════════════════════════════════════════════════════════════════
//  toggle 开关表
// ════════════════════════════════════════════════════════════════

db.exec(`
  CREATE TABLE IF NOT EXISTS asymptotic_thinking_toggle (
    session_id TEXT PRIMARY KEY,
    is_enable INTEGER NOT NULL DEFAULT 1
  );
`);

const getToggleStmt = db.prepare(`
  SELECT is_enable FROM asymptotic_thinking_toggle WHERE session_id = ?
`);

const upsertToggleStmt = db.prepare(`
  INSERT INTO asymptotic_thinking_toggle (session_id, is_enable) VALUES (?, ?)
  ON CONFLICT(session_id) DO UPDATE SET is_enable = excluded.is_enable
`);

// ════════════════════════════════════════════════════════════════
//  序列化
// ════════════════════════════════════════════════════════════════

// visited 序列化：JSON 字符串（TEXT 列）；空数组存 NULL
export function serializeVisited(visited: ThinkingState[]): string | null {
  return visited && visited.length > 0 ? JSON.stringify(visited) : null;
}

// visited 反序列化：JSON 解析，异常/空/脏数据安全降级为 []
export function parseVisited(raw: any): ThinkingState[] {
  if (!raw) return [];
  try {
    const arr = JSON.parse(raw);
    return Array.isArray(arr)
      ? (arr.filter((s: any) => typeof s === "string") as ThinkingState[])
      : [];
  } catch {
    return [];
  }
}

function rowToState(row: any): SessionState {
  return {
    state: row.state as ThinkingState,
    difficulty: row.difficulty as Difficulty | null,
    masterTaskType: row.master_task_type as MasterTaskType | null,
    subTaskType: row.sub_task_type as any,
    taskTurnCount: row.task_turn_count,
    stateTurnCount: row.state_turn_count,
    lastTransitionTime: row.last_transition_time,
    visited: parseVisited(row.visited),
  };
}

function stateToParams(sessionId: string, s: SessionState): (string | number | null)[] {
  return [
    sessionId,
    s.state,
    s.difficulty,
    s.masterTaskType,
    s.subTaskType,
    s.taskTurnCount,
    s.stateTurnCount,
    s.lastTransitionTime,
    serializeVisited(s.visited),
  ];
}

// ════════════════════════════════════════════════════════════════
//  公开接口
// ════════════════════════════════════════════════════════════════

export const sessionStore = {
  /** 加载最新状态，无记录返回 null */
  load(sessionId: string): SessionState | null {
    const row = selectLatestStmt.get(sessionId) as any;
    return row ? rowToState(row) : null;
  },

  /** 追加一条状态记录 */
  save(sessionId: string, state: SessionState): void {
    insertStmt.run(...stateToParams(sessionId, state));
  },

  /** 删除会话所有记录 */
  delete(sessionId: string): void {
    console.warn(`删除会话[${sessionId}]的思考框架 db 数据`)
    deleteSessionStmt.run(sessionId);
  },

  /** 获取数据库中所有有记录的 session_id（去重） */
  getAllSessionIds(): string[] {
    return (getAllSessionIdsStmt.all() as any[]).map(r => r.session_id);
  },

  // ── toggle 开关 ──

  /** 查询 session 是否启用，无记录默认启用 */
  isEnabled(sessionId: string): boolean {
    const row = getToggleStmt.get(sessionId) as any;
    return row ? !!row.is_enable : true;
  },

  /** 设置 session 的启用状态 */
  setEnabled(sessionId: string, enabled: boolean): void {
    upsertToggleStmt.run(sessionId, enabled ? 1 : 0);
  },

  /**
   * 清理已不存在会话的遗留记录。
   * 使用单条 NOT IN 语句而非逐条循环，原子操作无需显式事务。
   * @param activeSessionIds 当前活跃的 session_id 集合
   * @returns 被清理的记录数
   */
  cleanup(activeSessionIds: Set<string>): number {
    if (activeSessionIds.size === 0) return 0;

    const ids = [...activeSessionIds];
    const placeholders = ids.map(() => "?").join(",");
    const stmt = db.prepare(
      `DELETE FROM asymptotic_thinking_session_state WHERE session_id NOT IN (${placeholders})`,
    );
    const result = stmt.run(...ids);
    const deleted = Number(result.changes);

    if (deleted > 0) {
      console.warn(`[asymptotic-thinking] cleanup: 删除了 ${deleted} 个已经不存在的会话记录`);
    }
    return deleted;
  },
};
