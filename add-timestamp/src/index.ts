import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
  // ── 输入时：在用户消息前加上时间戳（TUI 可见）──
  pi.on("input", async (event, _ctx) => {
    try {
      if (event.text.startsWith("/")) return { action: "continue" };

      const timestamp = new Date().toLocaleString();
      return {
        action: "transform",
        text: `[消息时间: ${timestamp}]\n${event.text}`,
      };
    } catch (e) {
      console.error("[add-timestamp] input 异常", e);
      return { action: "continue" };
    }
  });

  // ── Agent 启动前：注入时间戳上下文消息（TUI 隐藏，session 持久化）──
  // pi.on("before_agent_start", async (_event, _ctx) => {
  //   const timestamp = new Date().toLocaleString();
  //   return {
  //     message: {
  //       customType: "add-timestamp",
  //       content: `[消息时间: ${timestamp}]`,
  //       display: false,
  //     },
  //   };
  // });
}
