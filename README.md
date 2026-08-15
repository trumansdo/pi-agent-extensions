# pi-agent-extensions

自用 pi-agent 扩展集，按需启用。

## 扩展列表

| 扩展 | 说明 |
|:--|:--|
| add-timestamp | 为每次 tool 调用添加时间戳 |
| all-events-logger | 记录所有 pi 事件 |
| asymptotic-thinking | 渐近式思考框架（六态状态机，引导结构化深度推理） |
| deepseek_add_userid | 以 session id 作为 user_id 隔离不同会话的 KV cache |
| general-tools | 通用工具扩展：技能调度(skill)、读取预警等 |

## 使用

将所需扩展目录放入 `~/.pi/agent/extensions/`，重启 pi-agent 生效。
