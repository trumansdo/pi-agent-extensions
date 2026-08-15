/**
 * general-tools — 通用工具扩展
 *
 * ## 能力清单
 *
 * 1. **skill**（技能调度工具）
 *    将 ~/.pi/agent/skills/<技能名>/SKILL.md 包装为显式可调用工具。
 *    核心设计：
 *    - enum 枚举限制模型选择，零幻觉
 *    - "传送门模式"：Tool 内部读取 SKILL.md 内容直接返回，避免模型二次 read
 *    - 超长内容自动截断 + 提示
 *
 * 2. **ls/find/grep 激活**（session_start 时自动开启）
 *    默认只有 read/bash/edit/write 四件套，本扩展额外激活 ls/find/grep。
 *
 * 3. **tool_result 读取预警**（原 skill-read-guard）
 *    读取 progressive-experience-fs 时提示改用 mempal。
 *
 * 安装位置：~/.pi/agent/extensions/general-tools/
 * 生效方式：重启 pi 或执行 /reload
 *
 *
 * ## pi-agent 扩展 API 参考
 *
 * 以下是从官方示例（D:/code_space/other/pi/packages/coding-agent/examples/extensions/）
 * 和源码中提取的完整 @earendil-works/* 可导入项汇总。
 *
 *
 * ### 包：@earendil-works/pi-coding-agent（核心扩展 API）
 *
 * | 分类 | 导入 | 用途 | 来源示例 |
 * |------|------|------|---------|
 * | **类型** | `ExtensionAPI` | 扩展工厂函数参数类型 | 全部 |
 * | **类型** | `ExtensionContext` | 事件处理器 ctx 类型 | tools, handoff, claude-rules |
 * | **类型** | `ExtensionCommandContext` | 命令处理器 ctx 类型（比 ExtensionContext 多 session 控制） | handoff |
 * | **类型** | `BuildSystemPromptOptions` | systemPromptOptions 类型（含 selectedTools/skills 等） | prompt-customizer |
 * | **类型** | `ToolInfo` | getAllTools() 返回的单个工具信息 | tools |
 * | **类型** | `SessionEntry` | 会话分支中的条目类型 | handoff |
 * | **类型** | `AgentMessage`（从 pi-agent-core 导入） | 消息体类型 | handoff |
 * | **类型** | `Theme` | TUI 主题 | 多个 |
 * | **工具注册** | `registerTool(toolDef)` | 注册一个 LLM 可调用的工具 | 全部 |
 * | **工具注册** | `defineTool(toolDef)` | 类型安全的工具定义工厂 | hello, structured-output |
 * | **工具管理** | `getActiveTools()` | 获取当前激活的工具名数组 | tools, kimi-deferred-tools |
 * | **工具管理** | `setActiveTools(names[])` | 设置激活的工具列表 | tools, kimi-deferred-tools |
 * | **工具管理** | `getAllTools()` | 获取所有已注册的工具信息 | tools |
 * | **事件** | `on("session_start", handler)` | session 初始化/恢复时触发 | 多个 |
 * | **事件** | `on("session_tree", handler)` | 导航会话树后触发 | tools |
 * | **事件** | `on("before_agent_start", handler)` | 每次 LLM 调用前触发，可改 systemPrompt | prompt-customizer, claude-rules |
 * | **事件** | `on("tool_result", handler)` | 工具执行完成后触发，可改返回内容 | tool-override, 本扩展 |
 * | **事件** | `on("input", handler)` | 用户输入时触发，可拦截/转换 | input-transform |
 * | **事件** | `on("resources_discover", handler)` | 扩展可返回额外资源路径（skill/prompt/theme） | dynamic-resources |
 * | **事件** | `on("turn_end", handler)` | 每轮 LLM 工具执行完成后触发 | asymptotic-thinking |
 * | **事件** | `on("message_end", handler)` | 消息结束时触发 | 多个 |
 * | **事件** | `on("context", handler)` | 每次 LLM 调用前，可修改 messages 数组 | asymptotic-thinking |
 * | **命令** | `registerCommand(name, opts)` | 注册 /xxx 命令 | tools, handoff 等 |
 * | **命令** | `registerShortcut(key, opts)` | 注册键盘快捷键 | - |
 * | **命令** | `registerFlag(name, opts)` | 注册 CLI 参数 --xxx | - |
 * | **消息** | `sendMessage(msg, opts?)` | 发送自定义消息到会话（deliverAs: steer/followUp/nextTurn） | asymptotic-thinking |
 * | **消息** | `sendUserMessage(text, opts?)` | 发送用户消息到会话 | - |
 * | **持久化** | `appendEntry(customType, data)` | 追加自定义条目到会话分支（跨 session 恢复） | tools |
 * | **常量** | `getAgentDir()` | 获取 ~/.pi/agent/ 目录路径 | tool-override |
 * | **常量** | `CONFIG_DIR_NAME` | 配置目录名 | - |
 * | **常量** | `VERSION` | pi-agent 版本号 | - |
 * | **工具** | `withFileMutationQueue(path, fn)` | 文件写入互斥队列 | tool-override |
 * | **工具** | `createReadTool / createBashTool / createEditTool / createWriteTool` | 创建内置工具实例（用于覆盖/扩展） | inline-bash |
 * | **UI** | `getSettingsListTheme()` | 设置列表主题 | tools |
 * | **UI** | `getMarkdownTheme()` | Markdown 渲染主题 | - |
 * | **UI** | `DynamicBorder` | 动态边框组件 | - |
 * | **UI** | `CustomEditor` | 自定义编辑器 | - |
 * | **转换** | `convertToLlm(messages)` | 将 AgentMessage[] 转为 LLM Message[] | handoff |
 * | **转换** | `serializeConversation(messages)` | 序列化对话为纯文本 | handoff |
 * | **UI 组件** | `BorderedLoader` | 带边框的加载指示器 | handoff |
 *
 * ### 包：@earendil-works/pi-ai（AI 类型 & Schema）
 *
 * | 导入 | 用途 |
 * |------|------|
 * | `Type` | TypeBox JSON Schema 构建器（用于 tool parameters） |
 * | `StringEnum` | 字符串枚举 Schema 辅助 |
 * | `TextContent`, `ImageContent` | 消息内容类型 |
 * | `AssistantMessage`, `UserMessage` | 消息体类型 |
 * | `Model` | AI 模型接口 |
 *
 * ### 包：@earendil-works/pi-ai/compat（旧兼容 API）
 *
 * | 导入 | 用途 |
 * |------|------|
 * | `complete(model, ctx, opts)` | 直接调用 LLM 获取完整回复 |
 * | `getModel(provider, id)` | 获取模型实例 |
 * | `Message` | 兼容消息类型 |
 *
 * ### 包：@earendil-works/pi-agent-core
 *
 * | 导入 | 用途 |
 * |------|------|
 * | `AgentMessage` | 通用消息类型（含 role/content/toolCallId 等） |
 * | `ThinkingLevel` | 思考深度级别 |
 *
 * ### 包：@earendil-works/pi-tui（终端 UI 组件）
 *
 * | 导入 | 用途 |
 * |------|------|
 * | `Container`, `Text`, `Box` | 基础布局组件 |
 * | `SettingsList`, `SelectList` | 设置/选择列表 |
 * | `Markdown` | Markdown 渲染器 |
 * | `Input` | 输入组件 |
 * | `Key`, `matchesKey` | 键盘事件 |
 * | `truncateToWidth`, `visibleWidth` | 文本截断工具 |
 *
 *
 * ### 关键发现：技能路径查询
 *
 * `@earendil-works/pi-coding-agent` 导出了 **`loadSkillsFromDir`** + **`type Skill`**，
 * 可以使用 pi-agent 自带的技能发现引擎替代手动 `fs.readdirSync`。
 *
 * ```ts
 * import { loadSkillsFromDir, type Skill } from "@earendil-works/pi-coding-agent";
 * const result = loadSkillsFromDir({ dir: "/path/to/skills", source: "my-ext" });
 * // result.skills: Skill[]（含 name, filePath, description 等）
 * ```
 *
 * `Skill` 接口字段：`name`, `description`, `filePath`, `baseDir`, `sourceInfo`, `disableModelInvocation`
 *
 * 其它相关 API：
 * - `BuildSystemPromptOptions.skills` — 包含已加载的技能列表，在 `before_agent_start` 的
 *   `event.systemPromptOptions.skills` 上可达
 * - `getAgentDir()` — 获取 `~/.pi/agent/` 目录路径
 */


import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { registerSkillTool } from "./skill-tool";
import { registerToolsActivator } from "./tools-activator";
import { registerReadGuard } from "./read-guard";

export default function (pi: ExtensionAPI) {
  registerSkillTool(pi);
  registerToolsActivator(pi);
  registerReadGuard(pi);
}
