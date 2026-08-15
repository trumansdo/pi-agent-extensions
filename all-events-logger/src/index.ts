import { appendFileSync, existsSync, mkdirSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

/** 总开关 */
const IS_ENABLE = false;

/** 日志目录（固定到 ~/.pi/agent/logs/） */
const LOG_DIR = join(homedir(), ".pi", "agent", "logs");

/** 日志目录是否已创建（惰性初始化） */
let logDirReady = false;

/**
 * 高频/大体积事件截断列表
 * - message_update: token 流，每字符触发一次
 * - context: 完整对话历史，体积巨大
 * - before_provider_request: 包含完整请求 payload
 * - message_end: 包含完整消息内容
 * - agent_end: 包含全部消息列表
 */
const TRUNCATE_EVENTS = new Set([
  "message_update",
  "context",
  "before_provider_request",
  "message_end",
  "agent_end",
]);

/** 确保日志目录存在（惰性，仅首次调用时创建） */
function ensureLogDir(): void {
  if (logDirReady) return;
  if (!existsSync(LOG_DIR)) {
    mkdirSync(LOG_DIR, { recursive: true });
  }
  logDirReady = true;
}

/** 安全序列化（处理循环引用 + 截断长字符串） */
function safeStringify(obj: unknown): string {
  try {
    const seen = new WeakSet<object>();
    return JSON.stringify(
      obj,
      (_key: string, value: unknown) => {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) return "[Circular]";
          seen.add(value);
        }
        if (typeof value === "string" && value.length > 300) {
          return value.slice(0, 300) + "...";
        }
        return value;
      },
      2,
    );
  } catch {
    return String(obj);
  }
}

export default function (pi: ExtensionAPI) {
  if (!IS_ENABLE) return;

  // ── 日志工具 ──────────────────────────────────────────

  const log = (eventName: string, data?: Record<string, unknown>) => {
    const timestamp = new Date().toISOString();
    const prefix = `[all-events-logger][${timestamp}] ${eventName}`;
    // 截断事件：只记事件名，不记 data
    if (TRUNCATE_EVENTS.has(eventName)) return prefix;
    if (data && Object.keys(data).length > 0) {
      return `${prefix} ${safeStringify(data)}`;
    } else {
      return `${prefix}`;
    }
  };

  /** 写入日志文件（按 sessionId 隔离） */
  const writeLog = (sessionId: string, content: string): void => {
    ensureLogDir();
    const filename = `${sessionId}.log`;
    appendFileSync(join(LOG_DIR, filename), content + "\n", "utf8");
  };

  // ── Project Trust ────────────────────────────────────

  pi.on("project_trust", async (event, ctx) => {
    try {
      const sessionId = ctx.sessionManager.getSessionId();
      writeLog(sessionId, log("project_trust", { cwd: event.cwd }));
      return { trusted: "undecided" };
    } catch (e) {
      console.error("[all-events-logger] project_trust 异常", e);
      return { trusted: "undecided" };
    }
  });

  // ── Session Events ────────────────────────────────────

  pi.on("session_start", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("session_start", { reason: event.reason }),
      );
    } catch (e) {
      console.error("[all-events-logger] session_start 异常", e);
    }
  });
  pi.on("session_shutdown", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("session_shutdown", { reason: event.reason }),
      );
    } catch (e) {
      console.error("[all-events-logger] session_shutdown 异常", e);
    }
  });
  pi.on("session_info_changed", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("session_info_changed", { name: event.name }),
      );
    } catch (e) {
      console.error("[all-events-logger] session_info_changed 异常", e);
    }
  });
  pi.on("session_before_switch", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("session_before_switch", { reason: event.reason }),
      );
    } catch (e) {
      console.error("[all-events-logger] session_before_switch 异常", e);
    }
  });
  pi.on("session_before_fork", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("session_before_fork", { entryId: event.entryId }),
      );
    } catch (e) {
      console.error("[all-events-logger] session_before_fork 异常", e);
    }
  });
  pi.on("session_before_compact", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("session_before_compact", {
          reason: event.reason,
          willRetry: event.willRetry,
        }),
      );
    } catch (e) {
      console.error("[all-events-logger] session_before_compact 异常", e);
    }
  });
  pi.on("session_compact", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("session_compact", { reason: event.reason }),
      );
    } catch (e) {
      console.error("[all-events-logger] session_compact 异常", e);
    }
  });
  pi.on("session_before_tree", async (_event, ctx) => {
    try {
      writeLog(ctx.sessionManager.getSessionId(), log("session_before_tree"));
    } catch (e) {
      console.error("[all-events-logger] session_before_tree 异常", e);
    }
  });
  pi.on("session_tree", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("session_tree", { newLeafId: event.newLeafId }),
      );
    } catch (e) {
      console.error("[all-events-logger] session_tree 异常", e);
    }
  });

  // ── Resource Events ──────────────────────────────────

  pi.on("resources_discover", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("resources_discover", { reason: event.reason }),
      );
    } catch (e) {
      console.error("[all-events-logger] resources_discover 异常", e);
    }
  });

  // ── Context Event ────────────────────────────────────

  pi.on("context", async (_event, ctx) => {
    try {
      writeLog(ctx.sessionManager.getSessionId(), log("context"));
    } catch (e) {
      console.error("[all-events-logger] context 异常", e);
    }
  });

  // ── Agent Events ──────────────────────────────────────

  pi.on("before_agent_start", async (_event, ctx) => {
    try {
      writeLog(ctx.sessionManager.getSessionId(), log("before_agent_start"));
    } catch (e) {
      console.error("[all-events-logger] before_agent_start 异常", e);
    }
  });
  pi.on("agent_start", async (_event, ctx) => {
    try {
      writeLog(ctx.sessionManager.getSessionId(), log("agent_start"));
    } catch (e) {
      console.error("[all-events-logger] agent_start 异常", e);
    }
  });
  pi.on("agent_end", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("agent_end", {
          messages: event.messages as unknown as Record<string, unknown>,
        }),
      );
    } catch (e) {
      console.error("[all-events-logger] agent_end 异常", e);
    }
  });
  pi.on("agent_settled", async (_event, ctx) => {
    try {
      writeLog(ctx.sessionManager.getSessionId(), log("agent_settled"));
    } catch (e) {
      console.error("[all-events-logger] agent_settled 异常", e);
    }
  });
  pi.on("turn_start", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("turn_start", { turnIndex: event.turnIndex }),
      );
    } catch (e) {
      console.error("[all-events-logger] turn_start 异常", e);
    }
  });
  pi.on("turn_end", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("turn_end", { turnIndex: event.turnIndex }),
      );
    } catch (e) {
      console.error("[all-events-logger] turn_end 异常", e);
    }
  });

  // ── Message Events ────────────────────────────────────

  pi.on("message_start", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("message_start", { role: event.message.role }),
      );
    } catch (e) {
      console.error("[all-events-logger] message_start 异常", e);
    }
  });
  pi.on("message_update", async (_event, ctx) => {
    try {
      writeLog(ctx.sessionManager.getSessionId(), log("message_update"));
    } catch (e) {
      console.error("[all-events-logger] message_update 异常", e);
    }
  });
  pi.on("message_end", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("message_end", { role: event.message.role }),
      );
    } catch (e) {
      console.error("[all-events-logger] message_end 异常", e);
    }
  });

  // ── Tool Events ───────────────────────────────────────

  pi.on("tool_execution_start", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("tool_execution_start", { toolName: event.toolName }),
      );
    } catch (e) {
      console.error("[all-events-logger] tool_execution_start 异常", e);
    }
  });
  pi.on("tool_call", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("tool_call", { toolName: event.toolName }),
      );
    } catch (e) {
      console.error("[all-events-logger] tool_call 异常", e);
    }
  });
  pi.on("tool_execution_update", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("tool_execution_update", { toolName: event.toolName }),
      );
    } catch (e) {
      console.error("[all-events-logger] tool_execution_update 异常", e);
    }
  });
  pi.on("tool_result", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("tool_result", { toolName: event.toolName }),
      );
    } catch (e) {
      console.error("[all-events-logger] tool_result 异常", e);
    }
  });
  pi.on("tool_execution_end", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("tool_execution_end", { toolName: event.toolName }),
      );
    } catch (e) {
      console.error("[all-events-logger] tool_execution_end 异常", e);
    }
  });

  // ── Provider Events ───────────────────────────────────

  pi.on("before_provider_headers", async (_event, ctx) => {
    try {
      writeLog(ctx.sessionManager.getSessionId(), log("before_provider_headers"));
    } catch (e) {
      console.error("[all-events-logger] before_provider_headers 异常", e);
    }
  });
  pi.on("before_provider_request", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("before_provider_request", {
          payload: event.payload as Record<string, unknown>,
        }),
      );
    } catch (e) {
      console.error("[all-events-logger] before_provider_request 异常", e);
    }
  });
  pi.on("after_provider_response", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("after_provider_response", { status: event.status }),
      );
    } catch (e) {
      console.error("[all-events-logger] after_provider_response 异常", e);
    }
  });

  // ── Model Events ──────────────────────────────────────

  pi.on("model_select", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("model_select", { model: event.model.id }),
      );
    } catch (e) {
      console.error("[all-events-logger] model_select 异常", e);
    }
  });
  pi.on("thinking_level_select", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("thinking_level_select", { level: event.level }),
      );
    } catch (e) {
      console.error("[all-events-logger] thinking_level_select 异常", e);
    }
  });

  // ── User Bash ─────────────────────────────────────────

  pi.on("user_bash", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("user_bash", { command: event.command }),
      );
    } catch (e) {
      console.error("[all-events-logger] user_bash 异常", e);
    }
  });

  // ── Input ─────────────────────────────────────────────

  pi.on("input", async (event, ctx) => {
    try {
      writeLog(
        ctx.sessionManager.getSessionId(),
        log("input", { text: event.text.slice(0, 120) }),
      );
    } catch (e) {
      console.error("[all-events-logger] input 异常", e);
    }
  });
}
