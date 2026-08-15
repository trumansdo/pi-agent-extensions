
# 编程类-Java开发 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 编程类-Java开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确技术栈（纯Java/Spring Boot/Android/其他）及JDK版本
→ 识别类型层级与泛型约束
→ 评估异常策略（checked/unchecked）与null安全处理

领域要点：显式标注泛型类型参数 · 权衡checked/unchecked异常策略

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-Java开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-Java开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-Java开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-Java开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 编程类-Java开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无raw type · null安全处理到位 · 异常处理策略一致

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Java开发 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 编程类-Java开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确技术栈（纯Java/Spring Boot/Android/其他）及JDK版本
→ 识别类型层级与泛型约束
→ 评估异常策略（checked/unchecked）与null安全处理

领域要点：显式标注泛型类型参数 · 权衡checked/unchecked异常策略

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-Java开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-Java开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-Java开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


警惕NPE风险点 · 泛型类型标注完整 · 异常处理策略一致

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-Java开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


警惕NPE风险点 · 泛型类型标注完整 · 异常处理策略一致

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 编程类-Java开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无raw type · null安全处理到位 · 异常处理策略一致

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Java开发 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 编程类-Java开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确技术栈（纯Java/Spring Boot/Android/其他）及JDK版本
→ 识别类型层级与泛型约束
→ 评估异常策略（checked/unchecked）与null安全处理

领域要点：显式标注泛型类型参数 · 权衡checked/unchecked异常策略

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-Java开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-Java开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-Java开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


警惕NPE风险点 · 泛型类型标注完整 · 异常处理策略一致

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-Java开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


警惕NPE风险点 · 泛型类型标注完整 · 异常处理策略一致

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 编程类-Java开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无raw type · null安全处理到位 · 异常处理策略一致

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Java开发 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 编程类-Java开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确技术栈（纯Java/Spring Boot/Android/其他）及JDK版本
→ 识别类型层级与泛型约束
→ 评估异常策略（checked/unchecked）与null安全处理

领域要点：显式标注泛型类型参数 · 权衡checked/unchecked异常策略

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-Java开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-Java开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-Java开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


警惕NPE风险点 · 泛型类型标注完整 · 异常处理策略一致

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-Java开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


警惕NPE风险点 · 泛型类型标注完整 · 异常处理策略一致

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 编程类-Java开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无raw type · null安全处理到位 · 异常处理策略一致

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Java开发 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 编程类-Java开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确技术栈（纯Java/Spring Boot/Android/其他）及JDK版本
→ 识别类型层级与泛型约束
→ 评估异常策略（checked/unchecked）与null安全处理

领域要点：显式标注泛型类型参数 · 权衡checked/unchecked异常策略

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-Java开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-Java开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-Java开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


警惕NPE风险点 · 泛型类型标注完整 · 异常处理策略一致
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-Java开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


警惕NPE风险点 · 泛型类型标注完整 · 异常处理策略一致
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 编程类-Java开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
无raw type · null安全处理到位 · 异常处理策略一致

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Java开发 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 编程类-Java开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确技术栈（纯Java/Spring Boot/Android/其他）及JDK版本
→ 识别类型层级与泛型约束
→ 评估异常策略（checked/unchecked）与null安全处理

领域要点：显式标注泛型类型参数 · 权衡checked/unchecked异常策略

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-Java开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-Java开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-Java开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


警惕NPE风险点 · 泛型类型标注完整 · 异常处理策略一致
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-Java开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


警惕NPE风险点 · 泛型类型标注完整 · 异常处理策略一致
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 编程类-Java开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
无raw type · null安全处理到位 · 异常处理策略一致

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Rust开发 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 编程类-Rust开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确Rust版本与edition → 识别所有权模型与生命周期约束 → 评估unsafe使用必要性

领域要点：所有权与借用检查 · 生命周期标注 · unsafe边界控制

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-Rust开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-Rust开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-Rust开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-Rust开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 编程类-Rust开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无clippy警告 · 所有权正确 · unsafe有文档说明

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Rust开发 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 编程类-Rust开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确Rust版本与edition → 识别所有权模型与生命周期约束 → 评估unsafe使用必要性

领域要点：所有权与借用检查 · 生命周期标注 · unsafe边界控制

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-Rust开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-Rust开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-Rust开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


所有权转移明确 · 生命周期标注完整 · unsafe块最小化

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-Rust开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


所有权转移明确 · 生命周期标注完整 · unsafe块最小化

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 编程类-Rust开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无clippy警告 · 所有权正确 · unsafe有文档说明

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Rust开发 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 编程类-Rust开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确Rust版本与edition → 识别所有权模型与生命周期约束 → 评估unsafe使用必要性

领域要点：所有权与借用检查 · 生命周期标注 · unsafe边界控制

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-Rust开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-Rust开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-Rust开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


所有权转移明确 · 生命周期标注完整 · unsafe块最小化

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-Rust开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


所有权转移明确 · 生命周期标注完整 · unsafe块最小化

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 编程类-Rust开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无clippy警告 · 所有权正确 · unsafe有文档说明

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Rust开发 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 编程类-Rust开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确Rust版本与edition → 识别所有权模型与生命周期约束 → 评估unsafe使用必要性

领域要点：所有权与借用检查 · 生命周期标注 · unsafe边界控制

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-Rust开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-Rust开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-Rust开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


所有权转移明确 · 生命周期标注完整 · unsafe块最小化

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-Rust开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


所有权转移明确 · 生命周期标注完整 · unsafe块最小化

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 编程类-Rust开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无clippy警告 · 所有权正确 · unsafe有文档说明

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Rust开发 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 编程类-Rust开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确Rust版本与edition → 识别所有权模型与生命周期约束 → 评估unsafe使用必要性

领域要点：所有权与借用检查 · 生命周期标注 · unsafe边界控制

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-Rust开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-Rust开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-Rust开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


所有权转移明确 · 生命周期标注完整 · unsafe块最小化
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-Rust开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


所有权转移明确 · 生命周期标注完整 · unsafe块最小化
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 编程类-Rust开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
无clippy警告 · 所有权正确 · unsafe有文档说明

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Rust开发 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 编程类-Rust开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确Rust版本与edition → 识别所有权模型与生命周期约束 → 评估unsafe使用必要性

领域要点：所有权与借用检查 · 生命周期标注 · unsafe边界控制

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-Rust开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-Rust开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-Rust开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


所有权转移明确 · 生命周期标注完整 · unsafe块最小化
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-Rust开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


所有权转移明确 · 生命周期标注完整 · unsafe块最小化
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 编程类-Rust开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
无clippy警告 · 所有权正确 · unsafe有文档说明

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Python开发 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 编程类-Python开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确Python版本与虚拟环境 → 识别类型注解覆盖 → 评估依赖兼容性

领域要点：Pythonic风格 · 类型注解完整 · 虚拟环境与依赖管理

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-Python开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-Python开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-Python开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-Python开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 编程类-Python开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无mypy错误 · 无裸except · 依赖声明完整

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Python开发 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 编程类-Python开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确Python版本与虚拟环境 → 识别类型注解覆盖 → 评估依赖兼容性

领域要点：Pythonic风格 · 类型注解完整 · 虚拟环境与依赖管理

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-Python开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-Python开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-Python开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


PEP 8风格一致 · 类型注解完整 · 依赖锁定到版本

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-Python开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


PEP 8风格一致 · 类型注解完整 · 依赖锁定到版本

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 编程类-Python开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无mypy错误 · 无裸except · 依赖声明完整

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Python开发 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 编程类-Python开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确Python版本与虚拟环境 → 识别类型注解覆盖 → 评估依赖兼容性

领域要点：Pythonic风格 · 类型注解完整 · 虚拟环境与依赖管理

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-Python开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-Python开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-Python开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


PEP 8风格一致 · 类型注解完整 · 依赖锁定到版本

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-Python开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


PEP 8风格一致 · 类型注解完整 · 依赖锁定到版本

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 编程类-Python开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无mypy错误 · 无裸except · 依赖声明完整

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Python开发 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 编程类-Python开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确Python版本与虚拟环境 → 识别类型注解覆盖 → 评估依赖兼容性

领域要点：Pythonic风格 · 类型注解完整 · 虚拟环境与依赖管理

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-Python开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-Python开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-Python开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


PEP 8风格一致 · 类型注解完整 · 依赖锁定到版本

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-Python开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


PEP 8风格一致 · 类型注解完整 · 依赖锁定到版本

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 编程类-Python开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无mypy错误 · 无裸except · 依赖声明完整

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Python开发 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 编程类-Python开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确Python版本与虚拟环境 → 识别类型注解覆盖 → 评估依赖兼容性

领域要点：Pythonic风格 · 类型注解完整 · 虚拟环境与依赖管理

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-Python开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-Python开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-Python开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


PEP 8风格一致 · 类型注解完整 · 依赖锁定到版本
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-Python开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


PEP 8风格一致 · 类型注解完整 · 依赖锁定到版本
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 编程类-Python开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
无mypy错误 · 无裸except · 依赖声明完整

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Python开发 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 编程类-Python开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确Python版本与虚拟环境 → 识别类型注解覆盖 → 评估依赖兼容性

领域要点：Pythonic风格 · 类型注解完整 · 虚拟环境与依赖管理

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-Python开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-Python开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-Python开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


PEP 8风格一致 · 类型注解完整 · 依赖锁定到版本
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-Python开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


PEP 8风格一致 · 类型注解完整 · 依赖锁定到版本
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 编程类-Python开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
无mypy错误 · 无裸except · 依赖声明完整

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-JavaScript开发 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 编程类-JavaScript开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确运行时(Node/Deno/Bun/浏览器) → 识别模块系统(ESM/CJS) → 评估异步模式

领域要点：ES模块规范 · TypeScript类型安全 · 异步错误处理

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-JavaScript开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-JavaScript开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-JavaScript开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-JavaScript开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 编程类-JavaScript开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无any类型 · 无未处理的Promise · 模块导入路径正确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-JavaScript开发 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 编程类-JavaScript开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确运行时(Node/Deno/Bun/浏览器) → 识别模块系统(ESM/CJS) → 评估异步模式

领域要点：ES模块规范 · TypeScript类型安全 · 异步错误处理

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-JavaScript开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-JavaScript开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-JavaScript开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


async/await一致 · Promise错误处理完整 · 类型标注准确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-JavaScript开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


async/await一致 · Promise错误处理完整 · 类型标注准确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 编程类-JavaScript开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无any类型 · 无未处理的Promise · 模块导入路径正确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-JavaScript开发 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 编程类-JavaScript开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确运行时(Node/Deno/Bun/浏览器) → 识别模块系统(ESM/CJS) → 评估异步模式

领域要点：ES模块规范 · TypeScript类型安全 · 异步错误处理

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-JavaScript开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-JavaScript开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-JavaScript开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


async/await一致 · Promise错误处理完整 · 类型标注准确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-JavaScript开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


async/await一致 · Promise错误处理完整 · 类型标注准确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 编程类-JavaScript开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无any类型 · 无未处理的Promise · 模块导入路径正确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-JavaScript开发 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 编程类-JavaScript开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确运行时(Node/Deno/Bun/浏览器) → 识别模块系统(ESM/CJS) → 评估异步模式

领域要点：ES模块规范 · TypeScript类型安全 · 异步错误处理

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-JavaScript开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-JavaScript开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-JavaScript开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


async/await一致 · Promise错误处理完整 · 类型标注准确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-JavaScript开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


async/await一致 · Promise错误处理完整 · 类型标注准确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 编程类-JavaScript开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无any类型 · 无未处理的Promise · 模块导入路径正确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-JavaScript开发 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 编程类-JavaScript开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确运行时(Node/Deno/Bun/浏览器) → 识别模块系统(ESM/CJS) → 评估异步模式

领域要点：ES模块规范 · TypeScript类型安全 · 异步错误处理

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-JavaScript开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-JavaScript开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-JavaScript开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


async/await一致 · Promise错误处理完整 · 类型标注准确
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-JavaScript开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


async/await一致 · Promise错误处理完整 · 类型标注准确
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 编程类-JavaScript开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
无any类型 · 无未处理的Promise · 模块导入路径正确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-JavaScript开发 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 编程类-JavaScript开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确运行时(Node/Deno/Bun/浏览器) → 识别模块系统(ESM/CJS) → 评估异步模式

领域要点：ES模块规范 · TypeScript类型安全 · 异步错误处理

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-JavaScript开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-JavaScript开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-JavaScript开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


async/await一致 · Promise错误处理完整 · 类型标注准确
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-JavaScript开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


async/await一致 · Promise错误处理完整 · 类型标注准确
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 编程类-JavaScript开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
无any类型 · 无未处理的Promise · 模块导入路径正确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Go开发 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 编程类-Go开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确Go版本与模块路径 → 识别接口抽象层级 → 评估并发模型

领域要点：显式错误处理 · 接口隔离 · 并发安全

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-Go开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-Go开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-Go开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-Go开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 编程类-Go开发 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无未处理error · 无数据竞争 · defer资源释放完整

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Go开发 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 编程类-Go开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确Go版本与模块路径 → 识别接口抽象层级 → 评估并发模型

领域要点：显式错误处理 · 接口隔离 · 并发安全

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-Go开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-Go开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-Go开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


错误不忽略 · 接口小而专注 · goroutine泄漏检查

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-Go开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


错误不忽略 · 接口小而专注 · goroutine泄漏检查

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 编程类-Go开发 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无未处理error · 无数据竞争 · defer资源释放完整

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Go开发 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 编程类-Go开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确Go版本与模块路径 → 识别接口抽象层级 → 评估并发模型

领域要点：显式错误处理 · 接口隔离 · 并发安全

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-Go开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-Go开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-Go开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


错误不忽略 · 接口小而专注 · goroutine泄漏检查

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-Go开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


错误不忽略 · 接口小而专注 · goroutine泄漏检查

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 编程类-Go开发 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无未处理error · 无数据竞争 · defer资源释放完整

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Go开发 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 编程类-Go开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确Go版本与模块路径 → 识别接口抽象层级 → 评估并发模型

领域要点：显式错误处理 · 接口隔离 · 并发安全

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-Go开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-Go开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-Go开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


错误不忽略 · 接口小而专注 · goroutine泄漏检查

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-Go开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


错误不忽略 · 接口小而专注 · goroutine泄漏检查

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 编程类-Go开发 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无未处理error · 无数据竞争 · defer资源释放完整

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Go开发 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 编程类-Go开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确Go版本与模块路径 → 识别接口抽象层级 → 评估并发模型

领域要点：显式错误处理 · 接口隔离 · 并发安全

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-Go开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-Go开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-Go开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


错误不忽略 · 接口小而专注 · goroutine泄漏检查
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-Go开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


错误不忽略 · 接口小而专注 · goroutine泄漏检查
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 编程类-Go开发 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
无未处理error · 无数据竞争 · defer资源释放完整

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-Go开发 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 编程类-Go开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确Go版本与模块路径 → 识别接口抽象层级 → 评估并发模型

领域要点：显式错误处理 · 接口隔离 · 并发安全

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-Go开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-Go开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-Go开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


错误不忽略 · 接口小而专注 · goroutine泄漏检查
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-Go开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


错误不忽略 · 接口小而专注 · goroutine泄漏检查
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 编程类-Go开发 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
无未处理error · 无数据竞争 · defer资源释放完整

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-增删改查 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 编程类-增删改查 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确数据模型与关系 → 识别CRUD操作范围 → 评估并发与幂等性

领域要点：参数校验前置 · SQL注入防护 · 事务边界明确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-增删改查 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-增删改查 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-增删改查 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-增删改查 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 编程类-增删改查 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无SQL拼接 · 空值处理完整 · 批量操作有上限

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-增删改查 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 编程类-增删改查 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确数据模型与关系 → 识别CRUD操作范围 → 评估并发与幂等性

领域要点：参数校验前置 · SQL注入防护 · 事务边界明确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-增删改查 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-增删改查 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-增删改查 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


输入校验前置 · 参数化查询 · 事务粒度合理

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-增删改查 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


输入校验前置 · 参数化查询 · 事务粒度合理

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 编程类-增删改查 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无SQL拼接 · 空值处理完整 · 批量操作有上限

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-增删改查 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 编程类-增删改查 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确数据模型与关系 → 识别CRUD操作范围 → 评估并发与幂等性

领域要点：参数校验前置 · SQL注入防护 · 事务边界明确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-增删改查 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-增删改查 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-增删改查 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


输入校验前置 · 参数化查询 · 事务粒度合理

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-增删改查 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


输入校验前置 · 参数化查询 · 事务粒度合理

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 编程类-增删改查 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无SQL拼接 · 空值处理完整 · 批量操作有上限

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-增删改查 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 编程类-增删改查 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确数据模型与关系 → 识别CRUD操作范围 → 评估并发与幂等性

领域要点：参数校验前置 · SQL注入防护 · 事务边界明确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-增删改查 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-增删改查 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-增删改查 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


输入校验前置 · 参数化查询 · 事务粒度合理

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-增删改查 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


输入校验前置 · 参数化查询 · 事务粒度合理

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 编程类-增删改查 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


无SQL拼接 · 空值处理完整 · 批量操作有上限

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-增删改查 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 编程类-增删改查 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确数据模型与关系 → 识别CRUD操作范围 → 评估并发与幂等性

领域要点：参数校验前置 · SQL注入防护 · 事务边界明确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-增删改查 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-增删改查 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-增删改查 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


输入校验前置 · 参数化查询 · 事务粒度合理
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-增删改查 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


输入校验前置 · 参数化查询 · 事务粒度合理
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 编程类-增删改查 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
无SQL拼接 · 空值处理完整 · 批量操作有上限

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-增删改查 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 编程类-增删改查 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确数据模型与关系 → 识别CRUD操作范围 → 评估并发与幂等性

领域要点：参数校验前置 · SQL注入防护 · 事务边界明确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-增删改查 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-增删改查 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-增删改查 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


输入校验前置 · 参数化查询 · 事务粒度合理
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-增删改查 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


输入校验前置 · 参数化查询 · 事务粒度合理
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 编程类-增删改查 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
无SQL拼接 · 空值处理完整 · 批量操作有上限

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-缺陷修复 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 编程类-缺陷修复 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


复现步骤明确 → 定位根因而非症状 → 评估影响范围

领域要点：先复现再定位根因，最小改动修复并补回归测试

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-缺陷修复 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-缺陷修复 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-缺陷修复 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-缺陷修复 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 编程类-缺陷修复 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


原bug复现失败 · 回归测试通过 · 无副作用

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-缺陷修复 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 编程类-缺陷修复 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


复现步骤明确 → 定位根因而非症状 → 评估影响范围

领域要点：先复现再定位根因，最小改动修复并补回归测试

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-缺陷修复 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-缺陷修复 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-缺陷修复 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


最小改动修复 · 补回归测试 · 不引入新问题

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-缺陷修复 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


最小改动修复 · 补回归测试 · 不引入新问题

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 编程类-缺陷修复 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


原bug复现失败 · 回归测试通过 · 无副作用

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-缺陷修复 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 编程类-缺陷修复 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


复现步骤明确 → 定位根因而非症状 → 评估影响范围

领域要点：先复现再定位根因，最小改动修复并补回归测试

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-缺陷修复 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-缺陷修复 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-缺陷修复 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


最小改动修复 · 补回归测试 · 不引入新问题

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-缺陷修复 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


最小改动修复 · 补回归测试 · 不引入新问题

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 编程类-缺陷修复 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


原bug复现失败 · 回归测试通过 · 无副作用

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-缺陷修复 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 编程类-缺陷修复 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


复现步骤明确 → 定位根因而非症状 → 评估影响范围

领域要点：先复现再定位根因，最小改动修复并补回归测试

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-缺陷修复 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-缺陷修复 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-缺陷修复 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


最小改动修复 · 补回归测试 · 不引入新问题

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-缺陷修复 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


最小改动修复 · 补回归测试 · 不引入新问题

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 编程类-缺陷修复 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


原bug复现失败 · 回归测试通过 · 无副作用

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-缺陷修复 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 编程类-缺陷修复 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


复现步骤明确 → 定位根因而非症状 → 评估影响范围

领域要点：先复现再定位根因，最小改动修复并补回归测试

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-缺陷修复 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-缺陷修复 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-缺陷修复 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


最小改动修复 · 补回归测试 · 不引入新问题
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-缺陷修复 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


最小改动修复 · 补回归测试 · 不引入新问题
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 编程类-缺陷修复 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
原bug复现失败 · 回归测试通过 · 无副作用

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-缺陷修复 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 编程类-缺陷修复 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


复现步骤明确 → 定位根因而非症状 → 评估影响范围

领域要点：先复现再定位根因，最小改动修复并补回归测试

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-缺陷修复 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-缺陷修复 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-缺陷修复 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


最小改动修复 · 补回归测试 · 不引入新问题
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-缺陷修复 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


最小改动修复 · 补回归测试 · 不引入新问题
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 编程类-缺陷修复 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
原bug复现失败 · 回归测试通过 · 无副作用

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-代码重构 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 编程类-代码重构 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


识别重构目标与范围 → 补足测试覆盖 → 评估依赖影响

领域要点：先补测试再重构，小步提交、保持功能等价

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-代码重构 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-代码重构 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-代码重构 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-代码重构 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 编程类-代码重构 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


测试全绿 · 功能等价 · 代码更清晰

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-代码重构 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 编程类-代码重构 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


识别重构目标与范围 → 补足测试覆盖 → 评估依赖影响

领域要点：先补测试再重构，小步提交、保持功能等价

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-代码重构 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-代码重构 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-代码重构 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


小步提交 · 每步验证功能等价 · 不混入新功能

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-代码重构 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


小步提交 · 每步验证功能等价 · 不混入新功能

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 编程类-代码重构 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


测试全绿 · 功能等价 · 代码更清晰

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-代码重构 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 编程类-代码重构 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


识别重构目标与范围 → 补足测试覆盖 → 评估依赖影响

领域要点：先补测试再重构，小步提交、保持功能等价

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-代码重构 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-代码重构 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-代码重构 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


小步提交 · 每步验证功能等价 · 不混入新功能

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-代码重构 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


小步提交 · 每步验证功能等价 · 不混入新功能

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 编程类-代码重构 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


测试全绿 · 功能等价 · 代码更清晰

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-代码重构 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 编程类-代码重构 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


识别重构目标与范围 → 补足测试覆盖 → 评估依赖影响

领域要点：先补测试再重构，小步提交、保持功能等价

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-代码重构 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-代码重构 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-代码重构 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


小步提交 · 每步验证功能等价 · 不混入新功能

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-代码重构 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


小步提交 · 每步验证功能等价 · 不混入新功能

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 编程类-代码重构 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


测试全绿 · 功能等价 · 代码更清晰

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-代码重构 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 编程类-代码重构 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


识别重构目标与范围 → 补足测试覆盖 → 评估依赖影响

领域要点：先补测试再重构，小步提交、保持功能等价

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-代码重构 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-代码重构 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-代码重构 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


小步提交 · 每步验证功能等价 · 不混入新功能
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-代码重构 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


小步提交 · 每步验证功能等价 · 不混入新功能
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 编程类-代码重构 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
测试全绿 · 功能等价 · 代码更清晰

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-代码重构 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 编程类-代码重构 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


识别重构目标与范围 → 补足测试覆盖 → 评估依赖影响

领域要点：先补测试再重构，小步提交、保持功能等价

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-代码重构 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-代码重构 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-代码重构 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


小步提交 · 每步验证功能等价 · 不混入新功能
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-代码重构 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


小步提交 · 每步验证功能等价 · 不混入新功能
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 编程类-代码重构 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
测试全绿 · 功能等价 · 代码更清晰

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-程序测试 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 编程类-程序测试 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确测试范围与类型(单元/集成/E2E) → 识别边界与异常路径 → 评估测试数据需求

领域要点：覆盖正常/边界/异常路径，测试独立可重复

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-程序测试 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-程序测试 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-程序测试 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-程序测试 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 编程类-程序测试 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


测试可重复执行 · 覆盖率达标 · 无flaky test

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-程序测试 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 编程类-程序测试 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确测试范围与类型(单元/集成/E2E) → 识别边界与异常路径 → 评估测试数据需求

领域要点：覆盖正常/边界/异常路径，测试独立可重复

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-程序测试 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-程序测试 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-程序测试 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


测试独立无依赖 · 覆盖正常/边界/异常 · Mock外部依赖

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-程序测试 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


测试独立无依赖 · 覆盖正常/边界/异常 · Mock外部依赖

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 编程类-程序测试 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


测试可重复执行 · 覆盖率达标 · 无flaky test

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-程序测试 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 编程类-程序测试 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确测试范围与类型(单元/集成/E2E) → 识别边界与异常路径 → 评估测试数据需求

领域要点：覆盖正常/边界/异常路径，测试独立可重复

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-程序测试 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-程序测试 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-程序测试 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


测试独立无依赖 · 覆盖正常/边界/异常 · Mock外部依赖

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-程序测试 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


测试独立无依赖 · 覆盖正常/边界/异常 · Mock外部依赖

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 编程类-程序测试 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


测试可重复执行 · 覆盖率达标 · 无flaky test

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-程序测试 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 编程类-程序测试 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确测试范围与类型(单元/集成/E2E) → 识别边界与异常路径 → 评估测试数据需求

领域要点：覆盖正常/边界/异常路径，测试独立可重复

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-程序测试 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-程序测试 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-程序测试 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


测试独立无依赖 · 覆盖正常/边界/异常 · Mock外部依赖

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-程序测试 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


测试独立无依赖 · 覆盖正常/边界/异常 · Mock外部依赖

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 编程类-程序测试 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


测试可重复执行 · 覆盖率达标 · 无flaky test

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-程序测试 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 编程类-程序测试 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确测试范围与类型(单元/集成/E2E) → 识别边界与异常路径 → 评估测试数据需求

领域要点：覆盖正常/边界/异常路径，测试独立可重复

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-程序测试 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-程序测试 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-程序测试 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


测试独立无依赖 · 覆盖正常/边界/异常 · Mock外部依赖
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-程序测试 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


测试独立无依赖 · 覆盖正常/边界/异常 · Mock外部依赖
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 编程类-程序测试 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
测试可重复执行 · 覆盖率达标 · 无flaky test

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-程序测试 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 编程类-程序测试 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确测试范围与类型(单元/集成/E2E) → 识别边界与异常路径 → 评估测试数据需求

领域要点：覆盖正常/边界/异常路径，测试独立可重复

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-程序测试 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-程序测试 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-程序测试 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


测试独立无依赖 · 覆盖正常/边界/异常 · Mock外部依赖
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-程序测试 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


测试独立无依赖 · 覆盖正常/边界/异常 · Mock外部依赖
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 编程类-程序测试 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
测试可重复执行 · 覆盖率达标 · 无flaky test

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-架构设计 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 编程类-架构设计 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确架构目标与约束 → 识别非功能需求(性能/安全/可维护) → 评估技术选型

领域要点：关注非功能需求，方案对比有据、取舍明确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-架构设计 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-架构设计 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-架构设计 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-架构设计 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 编程类-架构设计 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


方案满足非功能需求 · 技术选型有依据 · 风险已识别

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-架构设计 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 编程类-架构设计 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确架构目标与约束 → 识别非功能需求(性能/安全/可维护) → 评估技术选型

领域要点：关注非功能需求，方案对比有据、取舍明确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-架构设计 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-架构设计 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-架构设计 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


方案对比有据 · 取舍明确 · 架构图清晰

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-架构设计 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


方案对比有据 · 取舍明确 · 架构图清晰

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 编程类-架构设计 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


方案满足非功能需求 · 技术选型有依据 · 风险已识别

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-架构设计 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 编程类-架构设计 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确架构目标与约束 → 识别非功能需求(性能/安全/可维护) → 评估技术选型

领域要点：关注非功能需求，方案对比有据、取舍明确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-架构设计 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-架构设计 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-架构设计 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


方案对比有据 · 取舍明确 · 架构图清晰

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-架构设计 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


方案对比有据 · 取舍明确 · 架构图清晰

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 编程类-架构设计 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


方案满足非功能需求 · 技术选型有依据 · 风险已识别

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-架构设计 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 编程类-架构设计 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确架构目标与约束 → 识别非功能需求(性能/安全/可维护) → 评估技术选型

领域要点：关注非功能需求，方案对比有据、取舍明确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-架构设计 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-架构设计 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-架构设计 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


方案对比有据 · 取舍明确 · 架构图清晰

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-架构设计 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


方案对比有据 · 取舍明确 · 架构图清晰

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 编程类-架构设计 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


方案满足非功能需求 · 技术选型有依据 · 风险已识别

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-架构设计 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 编程类-架构设计 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确架构目标与约束 → 识别非功能需求(性能/安全/可维护) → 评估技术选型

领域要点：关注非功能需求，方案对比有据、取舍明确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-架构设计 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-架构设计 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-架构设计 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


方案对比有据 · 取舍明确 · 架构图清晰
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-架构设计 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


方案对比有据 · 取舍明确 · 架构图清晰
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 编程类-架构设计 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
方案满足非功能需求 · 技术选型有依据 · 风险已识别

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-架构设计 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 编程类-架构设计 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确架构目标与约束 → 识别非功能需求(性能/安全/可维护) → 评估技术选型

领域要点：关注非功能需求，方案对比有据、取舍明确

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-架构设计 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-架构设计 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-架构设计 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


方案对比有据 · 取舍明确 · 架构图清晰
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-架构设计 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


方案对比有据 · 取舍明确 · 架构图清晰
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 编程类-架构设计 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
方案满足非功能需求 · 技术选型有依据 · 风险已识别

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-代码审查 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 编程类-代码审查 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确审查范围与规范 → 识别高风险变更 → 评估测试覆盖

领域要点：对照规范逐项检查，问题分级、建议可执行

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-代码审查 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-代码审查 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-代码审查 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-代码审查 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 编程类-代码审查 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


阻塞项已解决 · 规范检查通过 · 无遗漏文件

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-代码审查 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 编程类-代码审查 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确审查范围与规范 → 识别高风险变更 → 评估测试覆盖

领域要点：对照规范逐项检查，问题分级、建议可执行

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-代码审查 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-代码审查 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-代码审查 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


问题分级(阻塞/建议/优化) · 建议具体可执行 · 正向反馈

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-代码审查 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


问题分级(阻塞/建议/优化) · 建议具体可执行 · 正向反馈

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 编程类-代码审查 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


阻塞项已解决 · 规范检查通过 · 无遗漏文件

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-代码审查 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 编程类-代码审查 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确审查范围与规范 → 识别高风险变更 → 评估测试覆盖

领域要点：对照规范逐项检查，问题分级、建议可执行

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-代码审查 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-代码审查 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-代码审查 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


问题分级(阻塞/建议/优化) · 建议具体可执行 · 正向反馈

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-代码审查 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


问题分级(阻塞/建议/优化) · 建议具体可执行 · 正向反馈

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 编程类-代码审查 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


阻塞项已解决 · 规范检查通过 · 无遗漏文件

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-代码审查 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 编程类-代码审查 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确审查范围与规范 → 识别高风险变更 → 评估测试覆盖

领域要点：对照规范逐项检查，问题分级、建议可执行

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-代码审查 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-代码审查 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-代码审查 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


问题分级(阻塞/建议/优化) · 建议具体可执行 · 正向反馈

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-代码审查 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


问题分级(阻塞/建议/优化) · 建议具体可执行 · 正向反馈

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 编程类-代码审查 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


阻塞项已解决 · 规范检查通过 · 无遗漏文件

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-代码审查 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 编程类-代码审查 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确审查范围与规范 → 识别高风险变更 → 评估测试覆盖

领域要点：对照规范逐项检查，问题分级、建议可执行

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-代码审查 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-代码审查 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-代码审查 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


问题分级(阻塞/建议/优化) · 建议具体可执行 · 正向反馈
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-代码审查 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


问题分级(阻塞/建议/优化) · 建议具体可执行 · 正向反馈
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 编程类-代码审查 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
阻塞项已解决 · 规范检查通过 · 无遗漏文件

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-代码审查 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 编程类-代码审查 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确审查范围与规范 → 识别高风险变更 → 评估测试覆盖

领域要点：对照规范逐项检查，问题分级、建议可执行

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-代码审查 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-代码审查 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-代码审查 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


问题分级(阻塞/建议/优化) · 建议具体可执行 · 正向反馈
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-代码审查 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


问题分级(阻塞/建议/优化) · 建议具体可执行 · 正向反馈
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 编程类-代码审查 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
阻塞项已解决 · 规范检查通过 · 无遗漏文件

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-性能优化 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 编程类-性能优化 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确性能指标与基线 → 定位瓶颈(profiling) → 评估优化空间

领域要点：先测量再优化，定位瓶颈、验证提升幅度

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-性能优化 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 编程类-性能优化 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-性能优化 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 编程类-性能优化 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 编程类-性能优化 · 微不足道
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


性能指标提升 · 无功能回退 · 基准测试可复现

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-性能优化 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 编程类-性能优化 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确性能指标与基线 → 定位瓶颈(profiling) → 评估优化空间

领域要点：先测量再优化，定位瓶颈、验证提升幅度

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-性能优化 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 编程类-性能优化 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术路径和关键步骤 → 列出涉及文件与验收标准。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-性能优化 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


先测量基线 · 单点优化验证 · 不牺牲可读性

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 编程类-性能优化 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


先测量基线 · 单点优化验证 · 不牺牲可读性

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 编程类-性能优化 · 简单
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


性能指标提升 · 无功能回退 · 基准测试可复现

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-性能优化 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 编程类-性能优化 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确性能指标与基线 → 定位瓶颈(profiling) → 评估优化空间

领域要点：先测量再优化，定位瓶颈、验证提升幅度

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-性能优化 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 编程类-性能优化 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-性能优化 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


先测量基线 · 单点优化验证 · 不牺牲可读性

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 编程类-性能优化 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


先测量基线 · 单点优化验证 · 不牺牲可读性

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 编程类-性能优化 · 中等
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


性能指标提升 · 无功能回退 · 基准测试可复现

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-性能优化 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 编程类-性能优化 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确性能指标与基线 → 定位瓶颈(profiling) → 评估优化空间

领域要点：先测量再优化，定位瓶颈、验证提升幅度

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-性能优化 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 编程类-性能优化 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-性能优化 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


先测量基线 · 单点优化验证 · 不牺牲可读性

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 编程类-性能优化 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


先测量基线 · 单点优化验证 · 不牺牲可读性

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 编程类-性能优化 · 复杂
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


性能指标提升 · 无功能回退 · 基准测试可复现

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-性能优化 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 编程类-性能优化 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确性能指标与基线 → 定位瓶颈(profiling) → 评估优化空间

领域要点：先测量再优化，定位瓶颈、验证提升幅度

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-性能优化 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 编程类-性能优化 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-性能优化 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


先测量基线 · 单点优化验证 · 不牺牲可读性
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 编程类-性能优化 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


先测量基线 · 单点优化验证 · 不牺牲可读性
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 编程类-性能优化 · 困难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
性能指标提升 · 无功能回退 · 基准测试可复现

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 编程类-性能优化 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 编程类-性能优化 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


明确性能指标与基线 → 定位瓶颈(profiling) → 评估优化空间

领域要点：先测量再优化，定位瓶颈、验证提升幅度

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-性能优化 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 编程类-性能优化 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定技术栈和依赖项 → 设计数据流和模块边界 → 列出涉及文件、前置依赖、核心步骤、验收标准 → 考虑错误处理和边界条件。
→ 列出多个备选方案并对比优劣。

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-性能优化 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


先测量基线 · 单点优化验证 · 不牺牲可读性
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 编程类-性能优化 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


先测量基线 · 单点优化验证 · 不牺牲可读性
每步必须有明确验证，不可跳过

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 编程类-性能优化 · 极难
遵守《渐近式思考状态机操作规范》

> 编程类任务——注意代码结构、测试覆盖和错误处理


逐项对照需求和方案检查 → 功能完整 → 边界条件覆盖 → 代码规范 → 性能达标。
性能指标提升 · 无功能回退 · 基准测试可复现

严格遵守《编程与架构准则》

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-论文检索 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 检索类-论文检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确检索主题与范围 → 识别关键作者与会议/期刊 → 评估时效性要求

领域要点：优先权威学术源，标注发表时间与引用量

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 检索类-论文检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 检索类-论文检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 检索类-论文检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 检索类-论文检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 检索类-论文检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


来源权威 · 时效符合要求 · 关键论文无遗漏

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-论文检索 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 检索类-论文检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确检索主题与范围 → 识别关键作者与会议/期刊 → 评估时效性要求

领域要点：优先权威学术源，标注发表时间与引用量

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 检索类-论文检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 检索类-论文检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 检索类-论文检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 检索类-论文检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 检索类-论文检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


来源权威 · 时效符合要求 · 关键论文无遗漏

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-论文检索 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 检索类-论文检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确检索主题与范围 → 识别关键作者与会议/期刊 → 评估时效性要求

领域要点：优先权威学术源，标注发表时间与引用量

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 检索类-论文检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 检索类-论文检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 检索类-论文检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 检索类-论文检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 检索类-论文检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


来源权威 · 时效符合要求 · 关键论文无遗漏

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-论文检索 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 检索类-论文检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确检索主题与范围 → 识别关键作者与会议/期刊 → 评估时效性要求

领域要点：优先权威学术源，标注发表时间与引用量

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 检索类-论文检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 检索类-论文检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 检索类-论文检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 检索类-论文检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 检索类-论文检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


来源权威 · 时效符合要求 · 关键论文无遗漏

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-论文检索 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 检索类-论文检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确检索主题与范围 → 识别关键作者与会议/期刊 → 评估时效性要求

领域要点：优先权威学术源，标注发表时间与引用量

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 检索类-论文检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准 → 设计去重与排序规则。
→ 列出多个检索渠道并对比覆盖范围。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 检索类-论文检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准 → 设计去重与排序规则。
→ 列出多个检索渠道并对比覆盖范围。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 检索类-论文检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 检索类-论文检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 检索类-论文检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


逐项对照需求检查 → 来源权威 → 时效符合 → 覆盖完整。来源权威 · 时效符合要求 · 关键论文无遗漏

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-论文检索 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 检索类-论文检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确检索主题与范围 → 识别关键作者与会议/期刊 → 评估时效性要求

领域要点：优先权威学术源，标注发表时间与引用量

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 检索类-论文检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准 → 设计去重与排序规则。
→ 列出多个检索渠道并对比覆盖范围。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 检索类-论文检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准 → 设计去重与排序规则。
→ 列出多个检索渠道并对比覆盖范围。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 检索类-论文检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 检索类-论文检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 检索类-论文检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


逐项对照需求检查 → 来源权威 → 时效符合 → 覆盖完整。来源权威 · 时效符合要求 · 关键论文无遗漏

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-日常检索 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 检索类-日常检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确检索意图与范围 → 识别可信来源 → 评估信息时效性

领域要点：直接检索，结果去重后提炼关键信息

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 检索类-日常检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 检索类-日常检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 检索类-日常检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 检索类-日常检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 检索类-日常检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


信息准确 · 来源可信 · 时效符合要求

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-日常检索 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 检索类-日常检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确检索意图与范围 → 识别可信来源 → 评估信息时效性

领域要点：直接检索，结果去重后提炼关键信息

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 检索类-日常检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 检索类-日常检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 检索类-日常检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 检索类-日常检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 检索类-日常检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


信息准确 · 来源可信 · 时效符合要求

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-日常检索 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 检索类-日常检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确检索意图与范围 → 识别可信来源 → 评估信息时效性

领域要点：直接检索，结果去重后提炼关键信息

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 检索类-日常检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 检索类-日常检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 检索类-日常检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 检索类-日常检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 检索类-日常检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


信息准确 · 来源可信 · 时效符合要求

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-日常检索 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 检索类-日常检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确检索意图与范围 → 识别可信来源 → 评估信息时效性

领域要点：直接检索，结果去重后提炼关键信息

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 检索类-日常检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 检索类-日常检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 检索类-日常检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 检索类-日常检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 检索类-日常检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


信息准确 · 来源可信 · 时效符合要求

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-日常检索 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 检索类-日常检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确检索意图与范围 → 识别可信来源 → 评估信息时效性

领域要点：直接检索，结果去重后提炼关键信息

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 检索类-日常检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准 → 设计去重与排序规则。
→ 列出多个检索渠道并对比覆盖范围。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 检索类-日常检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准 → 设计去重与排序规则。
→ 列出多个检索渠道并对比覆盖范围。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 检索类-日常检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 检索类-日常检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 检索类-日常检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


逐项对照需求检查 → 信息准确 → 来源可信 → 时效符合。信息准确 · 来源可信 · 时效符合要求

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-日常检索 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 检索类-日常检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确检索意图与范围 → 识别可信来源 → 评估信息时效性

领域要点：直接检索，结果去重后提炼关键信息

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 检索类-日常检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准 → 设计去重与排序规则。
→ 列出多个检索渠道并对比覆盖范围。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 检索类-日常检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准 → 设计去重与排序规则。
→ 列出多个检索渠道并对比覆盖范围。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 检索类-日常检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 检索类-日常检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 检索类-日常检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


逐项对照需求检查 → 信息准确 → 来源可信 → 时效符合。信息准确 · 来源可信 · 时效符合要求

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-文档检索 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 检索类-文档检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确技术栈与版本 → 识别官方文档入口 → 评估社区资源质量

领域要点：优先官方文档与源码，标注版本兼容性

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 检索类-文档检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 检索类-文档检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 检索类-文档检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 检索类-文档检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 检索类-文档检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


版本匹配 · 示例可运行 · 来源可追溯

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-文档检索 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 检索类-文档检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确技术栈与版本 → 识别官方文档入口 → 评估社区资源质量

领域要点：优先官方文档与源码，标注版本兼容性

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 检索类-文档检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 检索类-文档检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 检索类-文档检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 检索类-文档检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 检索类-文档检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


版本匹配 · 示例可运行 · 来源可追溯

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-文档检索 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 检索类-文档检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确技术栈与版本 → 识别官方文档入口 → 评估社区资源质量

领域要点：优先官方文档与源码，标注版本兼容性

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 检索类-文档检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 检索类-文档检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 检索类-文档检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 检索类-文档检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 检索类-文档检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


版本匹配 · 示例可运行 · 来源可追溯

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-文档检索 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 检索类-文档检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确技术栈与版本 → 识别官方文档入口 → 评估社区资源质量

领域要点：优先官方文档与源码，标注版本兼容性

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 检索类-文档检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 检索类-文档检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 检索类-文档检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 检索类-文档检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 检索类-文档检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


版本匹配 · 示例可运行 · 来源可追溯

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-文档检索 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 检索类-文档检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确技术栈与版本 → 识别官方文档入口 → 评估社区资源质量

领域要点：优先官方文档与源码，标注版本兼容性

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 检索类-文档检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准 → 设计去重与排序规则。
→ 列出多个检索渠道并对比覆盖范围。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 检索类-文档检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准 → 设计去重与排序规则。
→ 列出多个检索渠道并对比覆盖范围。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 检索类-文档检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 检索类-文档检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 检索类-文档检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


逐项对照需求检查 → 版本匹配 → 示例可运行 → 来源可追溯。版本匹配 · 示例可运行 · 来源可追溯

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-文档检索 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 检索类-文档检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确技术栈与版本 → 识别官方文档入口 → 评估社区资源质量

领域要点：优先官方文档与源码，标注版本兼容性

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 检索类-文档检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准 → 设计去重与排序规则。
→ 列出多个检索渠道并对比覆盖范围。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 检索类-文档检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准 → 设计去重与排序规则。
→ 列出多个检索渠道并对比覆盖范围。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 检索类-文档检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 检索类-文档检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 检索类-文档检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


逐项对照需求检查 → 版本匹配 → 示例可运行 → 来源可追溯。版本匹配 · 示例可运行 · 来源可追溯

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-代码检索 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 检索类-代码检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确代码需求与约束 → 识别搜索关键词 → 评估许可证兼容性

领域要点：搜索开源实现参考，关注许可证与维护状态

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 检索类-代码检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 检索类-代码检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 检索类-代码检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 检索类-代码检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 检索类-代码检索 · 微不足道
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


许可证兼容 · 维护活跃 · 代码质量可接受

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-代码检索 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 检索类-代码检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确代码需求与约束 → 识别搜索关键词 → 评估许可证兼容性

领域要点：搜索开源实现参考，关注许可证与维护状态

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 检索类-代码检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 检索类-代码检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 检索类-代码检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 检索类-代码检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 检索类-代码检索 · 简单
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


许可证兼容 · 维护活跃 · 代码质量可接受

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-代码检索 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 检索类-代码检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确代码需求与约束 → 识别搜索关键词 → 评估许可证兼容性

领域要点：搜索开源实现参考，关注许可证与维护状态

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 检索类-代码检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 检索类-代码检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 检索类-代码检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 检索类-代码检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 检索类-代码检索 · 中等
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


许可证兼容 · 维护活跃 · 代码质量可接受

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-代码检索 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 检索类-代码检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确代码需求与约束 → 识别搜索关键词 → 评估许可证兼容性

领域要点：搜索开源实现参考，关注许可证与维护状态

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 检索类-代码检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 检索类-代码检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 检索类-代码检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 检索类-代码检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 检索类-代码检索 · 复杂
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


许可证兼容 · 维护活跃 · 代码质量可接受

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-代码检索 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 检索类-代码检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确代码需求与约束 → 识别搜索关键词 → 评估许可证兼容性

领域要点：搜索开源实现参考，关注许可证与维护状态

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 检索类-代码检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准 → 设计去重与排序规则。
→ 列出多个检索渠道并对比覆盖范围。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 检索类-代码检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准 → 设计去重与排序规则。
→ 列出多个检索渠道并对比覆盖范围。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 检索类-代码检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 检索类-代码检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 检索类-代码检索 · 困难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


逐项对照需求检查 → 许可证兼容 → 维护活跃 → 代码质量。许可证兼容 · 维护活跃 · 代码质量可接受

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 检索类-代码检索 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 检索类-代码检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


明确代码需求与约束 → 识别搜索关键词 → 评估许可证兼容性

领域要点：搜索开源实现参考，关注许可证与维护状态

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 检索类-代码检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


确定检索策略和关键来源 → 列出检索词与筛选标准 → 设计去重与排序规则。
→ 列出多个检索渠道并对比覆盖范围。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 检索类-代码检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定检索策略和关键来源 → 列出检索词与筛选标准 → 设计去重与排序规则。
→ 列出多个检索渠道并对比覆盖范围。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 检索类-代码检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 检索类-代码检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 检索类-代码检索 · 极难
遵守《渐近式思考状态机操作规范》

> 检索类任务——多渠道并行搜索、信息去重和来源标注


逐项对照需求检查 → 许可证兼容 → 维护活跃 → 代码质量。许可证兼容 · 维护活跃 · 代码质量可接受

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-数据分析 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 分析类-数据分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


明确分析目标与指标 → 识别数据源与口径 → 评估数据质量

领域要点：明确指标与口径，清洗前置、结论可复现

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 分析类-数据分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 分析类-数据分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 分析类-数据分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 分析类-数据分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 分析类-数据分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


结论有数据支撑 · 口径一致 · 分析过程可复现

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-数据分析 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 分析类-数据分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


明确分析目标与指标 → 识别数据源与口径 → 评估数据质量

领域要点：明确指标与口径，清洗前置、结论可复现

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 分析类-数据分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键指标 → 列出数据源与处理步骤。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 分析类-数据分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键指标 → 列出数据源与处理步骤。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 分析类-数据分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 分析类-数据分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 分析类-数据分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


结论有数据支撑 · 口径一致 · 分析过程可复现

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-数据分析 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 分析类-数据分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


明确分析目标与指标 → 识别数据源与口径 → 评估数据质量

领域要点：明确指标与口径，清洗前置、结论可复现

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 分析类-数据分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键指标 → 列出数据源与处理步骤。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 分析类-数据分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键指标 → 列出数据源与处理步骤。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 分析类-数据分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 分析类-数据分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 分析类-数据分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


结论有数据支撑 · 口径一致 · 分析过程可复现

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-数据分析 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 分析类-数据分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


明确分析目标与指标 → 识别数据源与口径 → 评估数据质量

领域要点：明确指标与口径，清洗前置、结论可复现

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 分析类-数据分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键指标 → 列出数据源与处理步骤。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 分析类-数据分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键指标 → 列出数据源与处理步骤。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 分析类-数据分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 分析类-数据分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 分析类-数据分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


结论有数据支撑 · 口径一致 · 分析过程可复现

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-数据分析 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 分析类-数据分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


明确分析目标与指标 → 识别数据源与口径 → 评估数据质量

领域要点：明确指标与口径，清洗前置、结论可复现

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 分析类-数据分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键指标 → 列出数据源与处理步骤 → 设计验证方案。
→ 列出多个分析角度并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 分析类-数据分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键指标 → 列出数据源与处理步骤 → 设计验证方案。
→ 列出多个分析角度并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 分析类-数据分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 分析类-数据分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 分析类-数据分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


逐项对照需求检查 → 结论有据 → 口径一致 → 可复现。结论有数据支撑 · 口径一致 · 分析过程可复现

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-数据分析 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 分析类-数据分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


明确分析目标与指标 → 识别数据源与口径 → 评估数据质量

领域要点：明确指标与口径，清洗前置、结论可复现

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 分析类-数据分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键指标 → 列出数据源与处理步骤 → 设计验证方案。
→ 列出多个分析角度并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 分析类-数据分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键指标 → 列出数据源与处理步骤 → 设计验证方案。
→ 列出多个分析角度并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 分析类-数据分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 分析类-数据分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 分析类-数据分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


逐项对照需求检查 → 结论有据 → 口径一致 → 可复现。结论有数据支撑 · 口径一致 · 分析过程可复现

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-代码分析 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 分析类-代码分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


明确分析目标与代码范围 → 识别分析维度(结构/依赖/质量) → 评估工具选择

领域要点：AST优先于文本匹配，分析结论标注置信度

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 分析类-代码分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 分析类-代码分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 分析类-代码分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 分析类-代码分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 分析类-代码分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


分析覆盖完整 · 结论有依据 · 边界情况已考虑

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-代码分析 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 分析类-代码分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


明确分析目标与代码范围 → 识别分析维度(结构/依赖/质量) → 评估工具选择

领域要点：AST优先于文本匹配，分析结论标注置信度

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 分析类-代码分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键维度 → 列出分析范围与工具。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 分析类-代码分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键维度 → 列出分析范围与工具。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 分析类-代码分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 分析类-代码分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 分析类-代码分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


分析覆盖完整 · 结论有依据 · 边界情况已考虑

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-代码分析 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 分析类-代码分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


明确分析目标与代码范围 → 识别分析维度(结构/依赖/质量) → 评估工具选择

领域要点：AST优先于文本匹配，分析结论标注置信度

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 分析类-代码分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键维度 → 列出分析范围与工具。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 分析类-代码分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键维度 → 列出分析范围与工具。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 分析类-代码分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 分析类-代码分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 分析类-代码分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


分析覆盖完整 · 结论有依据 · 边界情况已考虑

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-代码分析 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 分析类-代码分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


明确分析目标与代码范围 → 识别分析维度(结构/依赖/质量) → 评估工具选择

领域要点：AST优先于文本匹配，分析结论标注置信度

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 分析类-代码分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键维度 → 列出分析范围与工具。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 分析类-代码分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键维度 → 列出分析范围与工具。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 分析类-代码分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 分析类-代码分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 分析类-代码分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


分析覆盖完整 · 结论有依据 · 边界情况已考虑

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-代码分析 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 分析类-代码分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


明确分析目标与代码范围 → 识别分析维度(结构/依赖/质量) → 评估工具选择

领域要点：AST优先于文本匹配，分析结论标注置信度

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 分析类-代码分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键维度 → 列出分析范围与工具 → 设计验证方案。
→ 列出多个分析角度并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 分析类-代码分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键维度 → 列出分析范围与工具 → 设计验证方案。
→ 列出多个分析角度并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 分析类-代码分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 分析类-代码分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 分析类-代码分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


逐项对照需求检查 → 覆盖完整 → 结论有据 → 边界已考虑。分析覆盖完整 · 结论有依据 · 边界情况已考虑

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-代码分析 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 分析类-代码分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


明确分析目标与代码范围 → 识别分析维度(结构/依赖/质量) → 评估工具选择

领域要点：AST优先于文本匹配，分析结论标注置信度

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 分析类-代码分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键维度 → 列出分析范围与工具 → 设计验证方案。
→ 列出多个分析角度并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 分析类-代码分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键维度 → 列出分析范围与工具 → 设计验证方案。
→ 列出多个分析角度并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 分析类-代码分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 分析类-代码分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 分析类-代码分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


逐项对照需求检查 → 覆盖完整 → 结论有据 → 边界已考虑。分析覆盖完整 · 结论有依据 · 边界情况已考虑

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-日志分析 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 分析类-日志分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


明确日志范围与时间窗口 → 识别关键字段与关联ID → 评估日志完整性

领域要点：时间线对齐、关联追踪，异常模式识别

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 分析类-日志分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 分析类-日志分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 分析类-日志分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 分析类-日志分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 分析类-日志分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


根因定位准确 · 时间线完整 · 无遗漏关键日志

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-日志分析 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 分析类-日志分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


明确日志范围与时间窗口 → 识别关键字段与关联ID → 评估日志完整性

领域要点：时间线对齐、关联追踪，异常模式识别

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 分析类-日志分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键维度 → 列出日志范围与处理步骤。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 分析类-日志分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键维度 → 列出日志范围与处理步骤。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 分析类-日志分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 分析类-日志分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 分析类-日志分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


根因定位准确 · 时间线完整 · 无遗漏关键日志

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-日志分析 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 分析类-日志分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


明确日志范围与时间窗口 → 识别关键字段与关联ID → 评估日志完整性

领域要点：时间线对齐、关联追踪，异常模式识别

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 分析类-日志分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键维度 → 列出日志范围与处理步骤。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 分析类-日志分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键维度 → 列出日志范围与处理步骤。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 分析类-日志分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 分析类-日志分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 分析类-日志分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


根因定位准确 · 时间线完整 · 无遗漏关键日志

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-日志分析 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 分析类-日志分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


明确日志范围与时间窗口 → 识别关键字段与关联ID → 评估日志完整性

领域要点：时间线对齐、关联追踪，异常模式识别

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 分析类-日志分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键维度 → 列出日志范围与处理步骤。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 分析类-日志分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键维度 → 列出日志范围与处理步骤。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 分析类-日志分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 分析类-日志分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 分析类-日志分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


根因定位准确 · 时间线完整 · 无遗漏关键日志

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-日志分析 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 分析类-日志分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


明确日志范围与时间窗口 → 识别关键字段与关联ID → 评估日志完整性

领域要点：时间线对齐、关联追踪，异常模式识别

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 分析类-日志分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键维度 → 列出日志范围与处理步骤 → 设计验证方案。
→ 列出多个分析角度并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 分析类-日志分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键维度 → 列出日志范围与处理步骤 → 设计验证方案。
→ 列出多个分析角度并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 分析类-日志分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 分析类-日志分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 分析类-日志分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


逐项对照需求检查 → 根因准确 → 时间线完整 → 无遗漏。根因定位准确 · 时间线完整 · 无遗漏关键日志

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-日志分析 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 分析类-日志分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


明确日志范围与时间窗口 → 识别关键字段与关联ID → 评估日志完整性

领域要点：时间线对齐、关联追踪，异常模式识别

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 分析类-日志分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键维度 → 列出日志范围与处理步骤 → 设计验证方案。
→ 列出多个分析角度并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 分析类-日志分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键维度 → 列出日志范围与处理步骤 → 设计验证方案。
→ 列出多个分析角度并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 分析类-日志分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 分析类-日志分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 分析类-日志分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


逐项对照需求检查 → 根因准确 → 时间线完整 → 无遗漏。根因定位准确 · 时间线完整 · 无遗漏关键日志

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-需求分析 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 分析类-需求分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


拆解需求为可验证单元 → 明确验收标准 → 识别隐含约束与依赖

领域要点：拆解需求粒度、明确验收标准、识别隐含约束

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 分析类-需求分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 分析类-需求分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 分析类-需求分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 分析类-需求分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 分析类-需求分析 · 微不足道
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


需求覆盖完整 · 验收标准明确 · 无歧义

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-需求分析 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 分析类-需求分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


拆解需求为可验证单元 → 明确验收标准 → 识别隐含约束与依赖

领域要点：拆解需求粒度、明确验收标准、识别隐含约束

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 分析类-需求分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键维度 → 列出需求范围与拆解方式。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 分析类-需求分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键维度 → 列出需求范围与拆解方式。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 分析类-需求分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 分析类-需求分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 分析类-需求分析 · 简单
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


需求覆盖完整 · 验收标准明确 · 无歧义

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-需求分析 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 分析类-需求分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


拆解需求为可验证单元 → 明确验收标准 → 识别隐含约束与依赖

领域要点：拆解需求粒度、明确验收标准、识别隐含约束

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 分析类-需求分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键维度 → 列出需求范围与拆解方式。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 分析类-需求分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键维度 → 列出需求范围与拆解方式。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 分析类-需求分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 分析类-需求分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 分析类-需求分析 · 中等
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


需求覆盖完整 · 验收标准明确 · 无歧义

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-需求分析 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 分析类-需求分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


拆解需求为可验证单元 → 明确验收标准 → 识别隐含约束与依赖

领域要点：拆解需求粒度、明确验收标准、识别隐含约束

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 分析类-需求分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键维度 → 列出需求范围与拆解方式。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 分析类-需求分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键维度 → 列出需求范围与拆解方式。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 分析类-需求分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 分析类-需求分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 分析类-需求分析 · 复杂
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


需求覆盖完整 · 验收标准明确 · 无歧义

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-需求分析 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 分析类-需求分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


拆解需求为可验证单元 → 明确验收标准 → 识别隐含约束与依赖

领域要点：拆解需求粒度、明确验收标准、识别隐含约束

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 分析类-需求分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键维度 → 列出需求范围与拆解方式 → 设计验证方案。
→ 列出多个分析角度并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 分析类-需求分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键维度 → 列出需求范围与拆解方式 → 设计验证方案。
→ 列出多个分析角度并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 分析类-需求分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 分析类-需求分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 分析类-需求分析 · 困难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


逐项对照需求检查 → 覆盖完整 → 标准明确 → 无歧义。需求覆盖完整 · 验收标准明确 · 无歧义

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 分析类-需求分析 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 分析类-需求分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


拆解需求为可验证单元 → 明确验收标准 → 识别隐含约束与依赖

领域要点：拆解需求粒度、明确验收标准、识别隐含约束

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 分析类-需求分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


确定分析方法和关键维度 → 列出需求范围与拆解方式 → 设计验证方案。
→ 列出多个分析角度并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 分析类-需求分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定分析方法和关键维度 → 列出需求范围与拆解方式 → 设计验证方案。
→ 列出多个分析角度并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 分析类-需求分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 分析类-需求分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 分析类-需求分析 · 极难
遵守《渐近式思考状态机操作规范》

> 分析类任务——数据来源可靠、分析逻辑严谨、结论有据


逐项对照需求检查 → 覆盖完整 → 标准明确 → 无歧义。需求覆盖完整 · 验收标准明确 · 无歧义

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-部署上线 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 运维类-部署上线 · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确部署目标与环境 → 识别依赖服务与配置 → 评估回滚策略

领域要点：灰度发布、健康检查、回滚方案前置

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 运维类-部署上线 · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 运维类-部署上线 · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 运维类-部署上线 · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 运维类-部署上线 · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 运维类-部署上线 · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


服务健康 · 监控告警正常 · 回滚方案可执行

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-部署上线 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 运维类-部署上线 · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确部署目标与环境 → 识别依赖服务与配置 → 评估回滚策略

领域要点：灰度发布、健康检查、回滚方案前置

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 运维类-部署上线 · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定部署步骤和验证方式 → 列出涉及服务与配置。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 运维类-部署上线 · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定部署步骤和验证方式 → 列出涉及服务与配置。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 运维类-部署上线 · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 运维类-部署上线 · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 运维类-部署上线 · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


服务健康 · 监控告警正常 · 回滚方案可执行

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-部署上线 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 运维类-部署上线 · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确部署目标与环境 → 识别依赖服务与配置 → 评估回滚策略

领域要点：灰度发布、健康检查、回滚方案前置

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 运维类-部署上线 · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定部署步骤和验证方式 → 列出涉及服务与配置。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 运维类-部署上线 · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定部署步骤和验证方式 → 列出涉及服务与配置。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 运维类-部署上线 · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 运维类-部署上线 · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 运维类-部署上线 · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


服务健康 · 监控告警正常 · 回滚方案可执行

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-部署上线 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 运维类-部署上线 · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确部署目标与环境 → 识别依赖服务与配置 → 评估回滚策略

领域要点：灰度发布、健康检查、回滚方案前置

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 运维类-部署上线 · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定部署步骤和验证方式 → 列出涉及服务与配置。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 运维类-部署上线 · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定部署步骤和验证方式 → 列出涉及服务与配置。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 运维类-部署上线 · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 运维类-部署上线 · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 运维类-部署上线 · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


服务健康 · 监控告警正常 · 回滚方案可执行

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-部署上线 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 运维类-部署上线 · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确部署目标与环境 → 识别依赖服务与配置 → 评估回滚策略

领域要点：灰度发布、健康检查、回滚方案前置

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 运维类-部署上线 · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定部署步骤和验证方式 → 列出涉及服务与配置 → 设计回滚方案。
→ 列出多个部署策略并对比风险。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 运维类-部署上线 · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定部署步骤和验证方式 → 列出涉及服务与配置 → 设计回滚方案。
→ 列出多个部署策略并对比风险。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 运维类-部署上线 · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 运维类-部署上线 · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 运维类-部署上线 · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


逐项对照需求检查 → 服务健康 → 告警正常 → 回滚可执行。服务健康 · 监控告警正常 · 回滚方案可执行

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-部署上线 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 运维类-部署上线 · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确部署目标与环境 → 识别依赖服务与配置 → 评估回滚策略

领域要点：灰度发布、健康检查、回滚方案前置

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 运维类-部署上线 · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定部署步骤和验证方式 → 列出涉及服务与配置 → 设计回滚方案。
→ 列出多个部署策略并对比风险。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 运维类-部署上线 · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定部署步骤和验证方式 → 列出涉及服务与配置 → 设计回滚方案。
→ 列出多个部署策略并对比风险。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 运维类-部署上线 · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 运维类-部署上线 · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 运维类-部署上线 · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


逐项对照需求检查 → 服务健康 → 告警正常 → 回滚可执行。服务健康 · 监控告警正常 · 回滚方案可执行

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-监控告警 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 运维类-监控告警 · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确监控目标与指标 → 识别告警阈值与通知渠道 → 评估覆盖盲区

领域要点：指标-告警-通知链路完整，告警有处置SOP

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 运维类-监控告警 · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 运维类-监控告警 · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 运维类-监控告警 · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 运维类-监控告警 · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 运维类-监控告警 · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


告警可触发 · 通知可达 · 处置SOP明确

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-监控告警 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 运维类-监控告警 · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确监控目标与指标 → 识别告警阈值与通知渠道 → 评估覆盖盲区

领域要点：指标-告警-通知链路完整，告警有处置SOP

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 运维类-监控告警 · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定监控指标和告警规则 → 列出通知渠道与处置流程。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 运维类-监控告警 · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定监控指标和告警规则 → 列出通知渠道与处置流程。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 运维类-监控告警 · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 运维类-监控告警 · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 运维类-监控告警 · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


告警可触发 · 通知可达 · 处置SOP明确

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-监控告警 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 运维类-监控告警 · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确监控目标与指标 → 识别告警阈值与通知渠道 → 评估覆盖盲区

领域要点：指标-告警-通知链路完整，告警有处置SOP

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 运维类-监控告警 · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定监控指标和告警规则 → 列出通知渠道与处置流程。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 运维类-监控告警 · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定监控指标和告警规则 → 列出通知渠道与处置流程。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 运维类-监控告警 · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 运维类-监控告警 · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 运维类-监控告警 · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


告警可触发 · 通知可达 · 处置SOP明确

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-监控告警 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 运维类-监控告警 · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确监控目标与指标 → 识别告警阈值与通知渠道 → 评估覆盖盲区

领域要点：指标-告警-通知链路完整，告警有处置SOP

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 运维类-监控告警 · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定监控指标和告警规则 → 列出通知渠道与处置流程。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 运维类-监控告警 · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定监控指标和告警规则 → 列出通知渠道与处置流程。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 运维类-监控告警 · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 运维类-监控告警 · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 运维类-监控告警 · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


告警可触发 · 通知可达 · 处置SOP明确

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-监控告警 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 运维类-监控告警 · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确监控目标与指标 → 识别告警阈值与通知渠道 → 评估覆盖盲区

领域要点：指标-告警-通知链路完整，告警有处置SOP

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 运维类-监控告警 · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定监控指标和告警规则 → 列出通知渠道与处置流程 → 设计降级方案。
→ 列出多个监控方案并对比覆盖度。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 运维类-监控告警 · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定监控指标和告警规则 → 列出通知渠道与处置流程 → 设计降级方案。
→ 列出多个监控方案并对比覆盖度。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 运维类-监控告警 · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 运维类-监控告警 · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 运维类-监控告警 · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


逐项对照需求检查 → 告警可触发 → 通知可达 → SOP明确。告警可触发 · 通知可达 · 处置SOP明确

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-监控告警 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 运维类-监控告警 · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确监控目标与指标 → 识别告警阈值与通知渠道 → 评估覆盖盲区

领域要点：指标-告警-通知链路完整，告警有处置SOP

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 运维类-监控告警 · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定监控指标和告警规则 → 列出通知渠道与处置流程 → 设计降级方案。
→ 列出多个监控方案并对比覆盖度。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 运维类-监控告警 · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定监控指标和告警规则 → 列出通知渠道与处置流程 → 设计降级方案。
→ 列出多个监控方案并对比覆盖度。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 运维类-监控告警 · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 运维类-监控告警 · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 运维类-监控告警 · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


逐项对照需求检查 → 告警可触发 → 通知可达 → SOP明确。告警可触发 · 通知可达 · 处置SOP明确

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-CI/CD | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 运维类-CI/CD · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确流水线阶段与触发条件 → 识别构建依赖与环境 → 评估制品管理

领域要点：流水线幂等可重复，构建产物版本化

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 运维类-CI/CD · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 运维类-CI/CD · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 运维类-CI/CD · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 运维类-CI/CD · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 运维类-CI/CD · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


流水线可重复执行 · 产物可追溯 · 测试全部通过

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-CI/CD | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 运维类-CI/CD · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确流水线阶段与触发条件 → 识别构建依赖与环境 → 评估制品管理

领域要点：流水线幂等可重复，构建产物版本化

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 运维类-CI/CD · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定流水线阶段和触发条件 → 列出构建环境与制品。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 运维类-CI/CD · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定流水线阶段和触发条件 → 列出构建环境与制品。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 运维类-CI/CD · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 运维类-CI/CD · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 运维类-CI/CD · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


流水线可重复执行 · 产物可追溯 · 测试全部通过

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-CI/CD | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 运维类-CI/CD · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确流水线阶段与触发条件 → 识别构建依赖与环境 → 评估制品管理

领域要点：流水线幂等可重复，构建产物版本化

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 运维类-CI/CD · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定流水线阶段和触发条件 → 列出构建环境与制品。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 运维类-CI/CD · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定流水线阶段和触发条件 → 列出构建环境与制品。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 运维类-CI/CD · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 运维类-CI/CD · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 运维类-CI/CD · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


流水线可重复执行 · 产物可追溯 · 测试全部通过

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-CI/CD | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 运维类-CI/CD · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确流水线阶段与触发条件 → 识别构建依赖与环境 → 评估制品管理

领域要点：流水线幂等可重复，构建产物版本化

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 运维类-CI/CD · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定流水线阶段和触发条件 → 列出构建环境与制品。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 运维类-CI/CD · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定流水线阶段和触发条件 → 列出构建环境与制品。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 运维类-CI/CD · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 运维类-CI/CD · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 运维类-CI/CD · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


流水线可重复执行 · 产物可追溯 · 测试全部通过

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-CI/CD | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 运维类-CI/CD · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确流水线阶段与触发条件 → 识别构建依赖与环境 → 评估制品管理

领域要点：流水线幂等可重复，构建产物版本化

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 运维类-CI/CD · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定流水线阶段和触发条件 → 列出构建环境与制品 → 设计回滚方案。
→ 列出多个流水线方案并对比效率。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 运维类-CI/CD · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定流水线阶段和触发条件 → 列出构建环境与制品 → 设计回滚方案。
→ 列出多个流水线方案并对比效率。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 运维类-CI/CD · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 运维类-CI/CD · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 运维类-CI/CD · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


逐项对照需求检查 → 可重复 → 可追溯 → 测试通过。流水线可重复执行 · 产物可追溯 · 测试全部通过

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-CI/CD | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 运维类-CI/CD · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确流水线阶段与触发条件 → 识别构建依赖与环境 → 评估制品管理

领域要点：流水线幂等可重复，构建产物版本化

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 运维类-CI/CD · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定流水线阶段和触发条件 → 列出构建环境与制品 → 设计回滚方案。
→ 列出多个流水线方案并对比效率。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 运维类-CI/CD · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定流水线阶段和触发条件 → 列出构建环境与制品 → 设计回滚方案。
→ 列出多个流水线方案并对比效率。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 运维类-CI/CD · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 运维类-CI/CD · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 运维类-CI/CD · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


逐项对照需求检查 → 可重复 → 可追溯 → 测试通过。流水线可重复执行 · 产物可追溯 · 测试全部通过

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-环境配置 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 运维类-环境配置 · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确配置范围与环境差异 → 识别敏感配置项 → 评估配置变更影响

领域要点：环境隔离、敏感信息加密、配置版本化

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 运维类-环境配置 · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 运维类-环境配置 · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 运维类-环境配置 · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 运维类-环境配置 · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 运维类-环境配置 · 微不足道
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


环境配置一致 · 无硬编码敏感信息 · 配置版本可回滚

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-环境配置 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 运维类-环境配置 · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确配置范围与环境差异 → 识别敏感配置项 → 评估配置变更影响

领域要点：环境隔离、敏感信息加密、配置版本化

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 运维类-环境配置 · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定配置项和环境映射 → 列出敏感配置与加密方式。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 运维类-环境配置 · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定配置项和环境映射 → 列出敏感配置与加密方式。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 运维类-环境配置 · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 运维类-环境配置 · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 运维类-环境配置 · 简单
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


环境配置一致 · 无硬编码敏感信息 · 配置版本可回滚

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-环境配置 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 运维类-环境配置 · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确配置范围与环境差异 → 识别敏感配置项 → 评估配置变更影响

领域要点：环境隔离、敏感信息加密、配置版本化

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 运维类-环境配置 · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定配置项和环境映射 → 列出敏感配置与加密方式。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 运维类-环境配置 · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定配置项和环境映射 → 列出敏感配置与加密方式。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 运维类-环境配置 · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 运维类-环境配置 · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 运维类-环境配置 · 中等
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


环境配置一致 · 无硬编码敏感信息 · 配置版本可回滚

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-环境配置 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 运维类-环境配置 · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确配置范围与环境差异 → 识别敏感配置项 → 评估配置变更影响

领域要点：环境隔离、敏感信息加密、配置版本化

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 运维类-环境配置 · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定配置项和环境映射 → 列出敏感配置与加密方式。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 运维类-环境配置 · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定配置项和环境映射 → 列出敏感配置与加密方式。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 运维类-环境配置 · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 运维类-环境配置 · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 运维类-环境配置 · 复杂
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


环境配置一致 · 无硬编码敏感信息 · 配置版本可回滚

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-环境配置 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 运维类-环境配置 · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确配置范围与环境差异 → 识别敏感配置项 → 评估配置变更影响

领域要点：环境隔离、敏感信息加密、配置版本化

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 运维类-环境配置 · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定配置项和环境映射 → 列出敏感配置与加密方式 → 设计回滚方案。
→ 列出多个配置管理方案并对比安全性。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 运维类-环境配置 · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定配置项和环境映射 → 列出敏感配置与加密方式 → 设计回滚方案。
→ 列出多个配置管理方案并对比安全性。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 运维类-环境配置 · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 运维类-环境配置 · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 运维类-环境配置 · 困难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


逐项对照需求检查 → 环境一致 → 无硬编码 → 可回滚。环境配置一致 · 无硬编码敏感信息 · 配置版本可回滚

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 运维类-环境配置 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 运维类-环境配置 · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


明确配置范围与环境差异 → 识别敏感配置项 → 评估配置变更影响

领域要点：环境隔离、敏感信息加密、配置版本化

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 运维类-环境配置 · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


确定配置项和环境映射 → 列出敏感配置与加密方式 → 设计回滚方案。
→ 列出多个配置管理方案并对比安全性。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 运维类-环境配置 · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定配置项和环境映射 → 列出敏感配置与加密方式 → 设计回滚方案。
→ 列出多个配置管理方案并对比安全性。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 运维类-环境配置 · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 运维类-环境配置 · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 运维类-环境配置 · 极难
遵守《渐近式思考状态机操作规范》

> 运维类任务——环境配置验证、操作影响评估、回滚方案


逐项对照需求检查 → 环境一致 → 无硬编码 → 可回滚。环境配置一致 · 无硬编码敏感信息 · 配置版本可回滚

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 娱乐类-休闲聊天 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 娱乐类-休闲聊天 · 微不足道
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


明确对话风格与边界 → 识别用户情绪与意图 → 评估安全合规要求

领域要点：风格一致、内容有趣、安全合规

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 娱乐类-休闲聊天 · 微不足道
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 娱乐类-休闲聊天 · 微不足道
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 娱乐类-休闲聊天 · 微不足道
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 娱乐类-休闲聊天 · 微不足道
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 娱乐类-休闲聊天 · 微不足道
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


风格符合预期 · 无违规内容 · 用户意图满足

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 娱乐类-休闲聊天 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 娱乐类-休闲聊天 · 简单
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


明确对话风格与边界 → 识别用户情绪与意图 → 评估安全合规要求

领域要点：风格一致、内容有趣、安全合规

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 娱乐类-休闲聊天 · 简单
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


确定对话风格和内容方向 → 列出安全边界。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 娱乐类-休闲聊天 · 简单
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定对话风格和内容方向 → 列出安全边界。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 娱乐类-休闲聊天 · 简单
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 娱乐类-休闲聊天 · 简单
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 娱乐类-休闲聊天 · 简单
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


风格符合预期 · 无违规内容 · 用户意图满足

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 娱乐类-休闲聊天 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 娱乐类-休闲聊天 · 中等
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


明确对话风格与边界 → 识别用户情绪与意图 → 评估安全合规要求

领域要点：风格一致、内容有趣、安全合规

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 娱乐类-休闲聊天 · 中等
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


确定对话风格和内容方向 → 列出安全边界。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 娱乐类-休闲聊天 · 中等
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定对话风格和内容方向 → 列出安全边界。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 娱乐类-休闲聊天 · 中等
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 娱乐类-休闲聊天 · 中等
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 娱乐类-休闲聊天 · 中等
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


风格符合预期 · 无违规内容 · 用户意图满足

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 娱乐类-休闲聊天 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 娱乐类-休闲聊天 · 复杂
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


明确对话风格与边界 → 识别用户情绪与意图 → 评估安全合规要求

领域要点：风格一致、内容有趣、安全合规

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 娱乐类-休闲聊天 · 复杂
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


确定对话风格和内容方向 → 列出安全边界。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 娱乐类-休闲聊天 · 复杂
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定对话风格和内容方向 → 列出安全边界。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 娱乐类-休闲聊天 · 复杂
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 娱乐类-休闲聊天 · 复杂
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 娱乐类-休闲聊天 · 复杂
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


风格符合预期 · 无违规内容 · 用户意图满足

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 娱乐类-休闲聊天 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 娱乐类-休闲聊天 · 困难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


明确对话风格与边界 → 识别用户情绪与意图 → 评估安全合规要求

领域要点：风格一致、内容有趣、安全合规

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 娱乐类-休闲聊天 · 困难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


确定对话风格和内容方向 → 列出安全边界 → 设计多轮互动方案。
→ 列出多个风格方案并对比效果。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 娱乐类-休闲聊天 · 困难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定对话风格和内容方向 → 列出安全边界 → 设计多轮互动方案。
→ 列出多个风格方案并对比效果。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 娱乐类-休闲聊天 · 困难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 娱乐类-休闲聊天 · 困难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 娱乐类-休闲聊天 · 困难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


逐项对照需求检查 → 风格符合 → 无违规 → 意图满足。风格符合预期 · 无违规内容 · 用户意图满足

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 娱乐类-休闲聊天 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 娱乐类-休闲聊天 · 极难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


明确对话风格与边界 → 识别用户情绪与意图 → 评估安全合规要求

领域要点：风格一致、内容有趣、安全合规

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 娱乐类-休闲聊天 · 极难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


确定对话风格和内容方向 → 列出安全边界 → 设计多轮互动方案。
→ 列出多个风格方案并对比效果。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 娱乐类-休闲聊天 · 极难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定对话风格和内容方向 → 列出安全边界 → 设计多轮互动方案。
→ 列出多个风格方案并对比效果。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 娱乐类-休闲聊天 · 极难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 娱乐类-休闲聊天 · 极难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 娱乐类-休闲聊天 · 极难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


逐项对照需求检查 → 风格符合 → 无违规 → 意图满足。风格符合预期 · 无违规内容 · 用户意图满足

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 娱乐类-创意写作 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 娱乐类-创意写作 · 微不足道
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


明确写作类型与风格 → 识别目标受众与目的 → 评估篇幅与结构要求

领域要点：风格一致、结构完整、原创性优先

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 娱乐类-创意写作 · 微不足道
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 娱乐类-创意写作 · 微不足道
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 娱乐类-创意写作 · 微不足道
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 娱乐类-创意写作 · 微不足道
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 娱乐类-创意写作 · 微不足道
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


风格一致 · 结构完整 · 内容原创

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 娱乐类-创意写作 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 娱乐类-创意写作 · 简单
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


明确写作类型与风格 → 识别目标受众与目的 → 评估篇幅与结构要求

领域要点：风格一致、结构完整、原创性优先

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 娱乐类-创意写作 · 简单
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


确定写作风格和结构大纲 → 列出关键要素。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 娱乐类-创意写作 · 简单
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定写作风格和结构大纲 → 列出关键要素。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 娱乐类-创意写作 · 简单
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 娱乐类-创意写作 · 简单
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 娱乐类-创意写作 · 简单
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


风格一致 · 结构完整 · 内容原创

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 娱乐类-创意写作 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 娱乐类-创意写作 · 中等
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


明确写作类型与风格 → 识别目标受众与目的 → 评估篇幅与结构要求

领域要点：风格一致、结构完整、原创性优先

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 娱乐类-创意写作 · 中等
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


确定写作风格和结构大纲 → 列出关键要素。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 娱乐类-创意写作 · 中等
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定写作风格和结构大纲 → 列出关键要素。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 娱乐类-创意写作 · 中等
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 娱乐类-创意写作 · 中等
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 娱乐类-创意写作 · 中等
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


风格一致 · 结构完整 · 内容原创

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 娱乐类-创意写作 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 娱乐类-创意写作 · 复杂
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


明确写作类型与风格 → 识别目标受众与目的 → 评估篇幅与结构要求

领域要点：风格一致、结构完整、原创性优先

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 娱乐类-创意写作 · 复杂
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


确定写作风格和结构大纲 → 列出关键要素。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 娱乐类-创意写作 · 复杂
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定写作风格和结构大纲 → 列出关键要素。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 娱乐类-创意写作 · 复杂
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 娱乐类-创意写作 · 复杂
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 娱乐类-创意写作 · 复杂
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


风格一致 · 结构完整 · 内容原创

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 娱乐类-创意写作 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 娱乐类-创意写作 · 困难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


明确写作类型与风格 → 识别目标受众与目的 → 评估篇幅与结构要求

领域要点：风格一致、结构完整、原创性优先

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 娱乐类-创意写作 · 困难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


确定写作风格和结构大纲 → 列出关键要素 → 设计多版本方案。
→ 列出多个风格方案并对比效果。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 娱乐类-创意写作 · 困难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定写作风格和结构大纲 → 列出关键要素 → 设计多版本方案。
→ 列出多个风格方案并对比效果。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 娱乐类-创意写作 · 困难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 娱乐类-创意写作 · 困难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 娱乐类-创意写作 · 困难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


逐项对照需求检查 → 风格一致 → 结构完整 → 内容原创。风格一致 · 结构完整 · 内容原创

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 娱乐类-创意写作 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 娱乐类-创意写作 · 极难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


明确写作类型与风格 → 识别目标受众与目的 → 评估篇幅与结构要求

领域要点：风格一致、结构完整、原创性优先

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 娱乐类-创意写作 · 极难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


确定写作风格和结构大纲 → 列出关键要素 → 设计多版本方案。
→ 列出多个风格方案并对比效果。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 娱乐类-创意写作 · 极难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定写作风格和结构大纲 → 列出关键要素 → 设计多版本方案。
→ 列出多个风格方案并对比效果。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 娱乐类-创意写作 · 极难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 娱乐类-创意写作 · 极难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 娱乐类-创意写作 · 极难
遵守《渐近式思考状态机操作规范》

> 娱乐类任务——风格一致、内容有趣、安全合规


逐项对照需求检查 → 风格一致 → 结构完整 → 内容原创。风格一致 · 结构完整 · 内容原创

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 通用类-通用 | 微不足道难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/200轮 深度理解阶段 · 通用类-通用 · 微不足道
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


明确任务目标与上下文 → 识别约束条件 → 评估所需资源

领域要点：贴合上下文，保持目标导向

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 通用类-通用 · 微不足道
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/100轮 方案设计阶段 · 通用类-通用 · 微不足道
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 通用类-通用 · 微不足道
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/500轮 执行阶段 · 通用类-通用 · 微不足道
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/100轮 自检验证阶段 · 通用类-通用 · 微不足道
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


目标达成 · 上下文一致 · 无越界

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 通用类-通用 | 简单难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/500轮 深度理解阶段 · 通用类-通用 · 简单
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


明确任务目标与上下文 → 识别约束条件 → 评估所需资源

领域要点：贴合上下文，保持目标导向

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 通用类-通用 · 简单
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


确定实施路径和关键步骤 → 列出涉及资源与验收标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/300轮 方案设计阶段 · 通用类-通用 · 简单
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定实施路径和关键步骤 → 列出涉及资源与验收标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 通用类-通用 · 简单
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 执行阶段 · 通用类-通用 · 简单
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/300轮 自检验证阶段 · 通用类-通用 · 简单
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


目标达成 · 上下文一致 · 无越界

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 通用类-通用 | 中等难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1500轮 深度理解阶段 · 通用类-通用 · 中等
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


明确任务目标与上下文 → 识别约束条件 → 评估所需资源

领域要点：贴合上下文，保持目标导向

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 通用类-通用 · 中等
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


确定实施路径和关键步骤 → 列出涉及资源与验收标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 方案设计阶段 · 通用类-通用 · 中等
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定实施路径和关键步骤 → 列出涉及资源与验收标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 通用类-通用 · 中等
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 执行阶段 · 通用类-通用 · 中等
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1000轮 自检验证阶段 · 通用类-通用 · 中等
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


目标达成 · 上下文一致 · 无越界

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 通用类-通用 | 复杂难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 深度理解阶段 · 通用类-通用 · 复杂
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


明确任务目标与上下文 → 识别约束条件 → 评估所需资源

领域要点：贴合上下文，保持目标导向

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 通用类-通用 · 复杂
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


确定实施路径和关键步骤 → 列出涉及资源与验收标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 方案设计阶段 · 通用类-通用 · 复杂
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定实施路径和关键步骤 → 列出涉及资源与验收标准。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 通用类-通用 · 复杂
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 执行阶段 · 通用类-通用 · 复杂
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/2000轮 自检验证阶段 · 通用类-通用 · 复杂
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


目标达成 · 上下文一致 · 无越界

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 通用类-通用 | 困难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 深度理解阶段 · 通用类-通用 · 困难
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


明确任务目标与上下文 → 识别约束条件 → 评估所需资源

领域要点：贴合上下文，保持目标导向

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 通用类-通用 · 困难
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


确定实施路径和关键步骤 → 列出涉及资源与验收标准 → 设计备选方案。
→ 列出多个方案并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/3500轮 方案设计阶段 · 通用类-通用 · 困难
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定实施路径和关键步骤 → 列出涉及资源与验收标准 → 设计备选方案。
→ 列出多个方案并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 通用类-通用 · 困难
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/9000轮 执行阶段 · 通用类-通用 · 困难
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/3000轮 自检验证阶段 · 通用类-通用 · 困难
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


逐项对照需求检查 → 目标达成 → 上下文一致 → 无越界。目标达成 · 上下文一致 · 无越界

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---

# 通用类-通用 | 极难难度

## buildTemplate — 启动 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 启动阶段
第task1轮任务启动

遵守《渐近式思考状态机操作规范》

本次任务目标是深度评估调用所有tool工具与skill技能，获取外部信息与本地记忆，挖掘用户指令隐藏信息。
深度评估是否需要使用mempal本地记忆系统、web_search网络搜索、web-fetch网页获取，必须给出简要评估结论（节省输出token）。
深入分析用户指令的任务类型和难度，为后续阶段做准备。

工作纪律：
- 每轮开始先判断当前进度对应状态机的哪个阶段；状态不符时先调用 `asymptotic-think_transition` 工具流转到对应状态，再继续执行
- 轮次超限且需等待用户决策时，停止当前操作与轮次，待用户下次输入再继续
</instruction>

<actions spec="markdown">
- 调用 `asymptotic-think_set-task-info` 工具设定任务画像
</actions>

</task1>
```

## buildTemplate — 深度理解 阶段

```xml
<task1>

<instruction spec="markdown">
第1/7000轮 深度理解阶段 · 通用类-通用 · 极难
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


明确任务目标与上下文 → 识别约束条件 → 评估所需资源

领域要点：贴合上下文，保持目标导向

> 🔄 可用流转：本阶段完成可前移至[方案设计(DESIGN)、执行(EXECUTE)、自检验证(VERIFY)]状态；
</instruction>

<actions spec="markdown">
- 逐条列出需求的功能边界、约束条件和验收标准
- 缺失信息用工具检索补齐，不猜测
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 只读文件辅助理解，不执行写操作
</constraints>

</task1>
```

## buildTemplate — 方案设计 阶段

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 通用类-通用 · 极难
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


确定实施路径和关键步骤 → 列出涉及资源与验收标准 → 设计备选方案。
→ 列出多个方案并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```
### 路径变体·跳理解（visited = []）

```xml
<task1>

<instruction spec="markdown">
第1/5000轮 方案设计阶段 · 通用类-通用 · 极难
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点
> ⚡ 本任务未经过深度理解。请先简要明确需求边界，再列出方案。


确定实施路径和关键步骤 → 列出涉及资源与验收标准 → 设计备选方案。
→ 列出多个方案并对比优劣。

> 🔄 可用流转：本阶段完成可前移至[执行(EXECUTE)、自检验证(VERIFY)]状态；本阶段不足可回退至[深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 方案按顺序列出：涉及文件 → 前置步骤 → 实施路径 → 验收标准
- 每个步骤写明具体工具名和文件路径
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

<constraints spec="markdown">
- 设计完成前不执行任何代码修改
</constraints>

</task1>
```


## buildTemplate — 执行 阶段

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 通用类-通用 · 极难
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```
### 路径变体·直达(跳理解+设计)（visited = ["EXECUTE"]）

```xml
<task1>

<instruction spec="markdown">
第1/10000轮 执行阶段 · 通用类-通用 · 极难
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点
> ⚡ 本任务直达执行模式：未经过深度理解与方案设计。请先自行明确需求要点与执行步骤，再直接实施。


每步必须有明确验证，不可跳过

> 🔄 可用流转：本阶段完成可前移至[自检验证(VERIFY)]状态；本阶段不足可回退至[方案设计(DESIGN)、深度理解(DEEP_UNDERSTAND)]状态。
</instruction>

<actions spec="markdown">
- 严格按方案步骤顺序执行
- 每步执行后自检结果，确认通过再推进下一步
- 方案不可行时回退 DESIGN 重新设计
- 完成本阶段职责后，调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```


## buildTemplate — 自检验证 阶段

```xml
<task1>

<instruction spec="markdown">
第1/4000轮 自检验证阶段 · 通用类-通用 · 极难
遵守《渐近式思考状态机操作规范》

> 通用任务——根据上下文判定具体侧重点


逐项对照需求检查 → 目标达成 → 上下文一致 → 无越界。目标达成 · 上下文一致 · 无越界

> 🔄 可用流转：本阶段完成可前移至[结束(END)]状态；本阶段不足可回退至[执行(EXECUTE)、深度理解(DEEP_UNDERSTAND)、方案设计(DESIGN)]状态。
</instruction>

<output spec="markdown">
| 维度 | 状态 | 说明 |
|:--|:--:|:--|
| 需求理解正确完整 | ✅/❌ | ... |
| 实施步骤全部完成 | ✅/❌ | ... |
| 输出格式符合规范 | ✅/❌ | ... |
</output>

<actions spec="markdown">
- 逐项如实标注 ✅ 或 ❌
- 有 ❌ 项修正后全部重新验证
- 全部 ✅ 后调用 `asymptotic-think_transition` 工具流转状态
</actions>

</task1>
```

## buildTemplate — 结束 阶段

```xml
<task1>

<instruction spec="markdown">
第1/1轮 结束阶段

遵守《渐近式思考状态机操作规范》

上一任务已完成，保持空闲等待新指令，不执行任何修改操作。
</instruction>

</task1>
```

---