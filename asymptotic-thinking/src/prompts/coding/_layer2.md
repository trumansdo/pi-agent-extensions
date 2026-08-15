# CODING 大类型 · 第2层通用指令

> 作用域：所有 CODING 子类型（JAVA_DEV / RUST_DEV / PYTHON_DEV / JS_DEV / GO_DEV / CRUD_DEV / BUG_FIX / CODE_REFACTOR / TESTING / ARCHITECT / CODE_REVIEW / PERF_OPTIMIZE）
> 职责：定义编程类任务的大目标大原则，各子类型 ts 中重复此内容

---

## DEEP_UNDERSTAND

明确技术栈与语言版本 → 识别项目架构模式与代码约定 → 评估现有测试覆盖与依赖关系

---

## DESIGN

遵循现有代码风格与设计模式 → 方案需包含测试策略 → 优先使用标准库和已验证的开源方案

---

## EXECUTE

防御性编程：边界检查、空值处理、异常完整 → 每步修改后验证编译/类型检查通过

---

## VERIFY

代码风格与项目一致 → 测试覆盖充分 → 无硬编码敏感信息 → 无 dead code
