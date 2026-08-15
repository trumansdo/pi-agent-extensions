/**
 * 工具激活模块 — session_start 时自动激活 ls/find/grep
 */

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export function registerToolsActivator(pi: ExtensionAPI) {
  pi.on("session_start", async (_event, _ctx) => {
    try {
      const tools = new Set(pi.getActiveTools());
      for (const name of ["ls", "find", "grep"] as const) {
        tools.add(name);
      }
      pi.setActiveTools([...tools]);
    } catch (e) {
      console.error("[general-tools] tools_activator session_start 异常", e);
    }
  });
}
