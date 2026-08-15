import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
  pi.on("before_provider_request", async (event: any, ctx: any) => {
    try {
      const sessionId = ctx.sessionManager.getSessionId();
      const payload = event.payload as Record<string, unknown>;
      // 把session id当成user_id隔离不同会话的kv cache
      payload.user_id = sessionId;
    } catch (e) {
      console.error("[deepseek_add_userid] before_provider_request 异常", e);
    }
  });
}
