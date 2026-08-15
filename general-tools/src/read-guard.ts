/**
 * 读取预警模块 — 检测 progressive-experience-fs 文件读取并提示使用 mempal
 */

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

// ════════════════════════════════════════════════════════════════
//  内部逻辑
// ════════════════════════════════════════════════════════════════

function matchesProgressiveFs(testPath: string): boolean {
  const normalized = testPath.replace(/\\/g, "/").toLowerCase();
  return normalized.includes("progressive-experience-fs");
}

function buildWarning(): string {
  return `
<xml>
<warn type="skil_note_read">
  <mesg>检测到正在读取 progressive-experience-fs 技能的学习笔记文件。</mesg>
  <rule>若非"沉淀学习笔记"或"整理经验记录"的目的，禁止直接读取学习笔记文件。</rule>
  <reco>
    请使用 mempal 记忆系统检索相关内容，而非直接读取文件。
    mempal 能提供更结构化的搜索匹配和跨会话的历史上下文，比直接读取笔记文件更高效。
  </reco>
  <usag>
    使用 mempal 技能：输入 "/skill:mempal"、"查一下记忆"、"搜索记忆" 或 "之前怎么做的"
  </usag>
</warn>
</xml>

---
`;
}

// ════════════════════════════════════════════════════════════════
//  公开接口
// ════════════════════════════════════════════════════════════════

export function registerReadGuard(pi: ExtensionAPI) {
  pi.on("tool_result", async (event, _ctx) => {
    try {
      if (event.toolName !== "read") return;
      if (event.isError) return;

      const toolPath = String((event.input as any)?.path ?? "");
      if (!toolPath || !matchesProgressiveFs(toolPath)) return;

      const warning = buildWarning();

      const modifiedContent = event.content.map((contentItem) => {
        if (contentItem.type === "text") {
          return { ...contentItem, text: warning + contentItem.text };
        }
        return contentItem;
      });

      return {
        content: modifiedContent,
        details: event.details,
        isError: event.isError,
      };
    } catch (e) {
      console.error("[general-tools] read_guard tool_result 异常", e);
      // 异常时透传原始事件，不阻断工具结果展示
      return { content: event.content, details: event.details, isError: event.isError };
    }
  });
}
