// templates.test.ts — templates.ts 方法级单测（node:test + jiti loader）
import { test } from "node:test";
import assert from "node:assert/strict";
import { buildTemplate, pathAdapter, getPromptContent } from "../src/templates.ts";
import type { ThinkingState } from "../src/types.ts";

// visited 参数类型化辅助（避免字符串数组推断为 string[]）
const V = (states: ThinkingState[]): ThinkingState[] => states;

// ═══════════ START / END 分支 ═══════════

test("buildTemplate START: 含评估/设定画像（固定句已移至 SYSTEM.md）", () => {
  const t = buildTemplate("START", 1, null, null, null);
  assert.ok(t.includes("启动阶段"), "START 标签");
  assert.ok(t.includes(TOOL_TASK_INFO()), "含 set-task-info");
  assert.ok(!t.includes("输出精简文字但不丢失内容"), "固定句已移除（由 SYSTEM.md 提供）");
});

test("buildTemplate END: 极简", () => {
  const t = buildTemplate("END", 1, null, null, null);
  assert.ok(t.includes("结束阶段"), "END 标签");
  assert.ok(t.includes("上一任务已完成，保持空闲等待新指令"), "极简收尾");
  assert.ok(!t.includes("actions"), "END 无 actions");
});

// ═══════════ 业务态：must 措辞 + 输出精简 ═══════════

test("buildTemplate 业务态: 弱化措辞 + 动态流转提示（固定句已移至 SYSTEM.md）", () => {
  const visited: ThinkingState[] = ["DEEP_UNDERSTAND"];
  const t = buildTemplate("DEEP_UNDERSTAND", 1, "CODING", "BUG_FIX", "MODERATE", visited);
  assert.ok(t.includes("调用 `asymptotic-think_transition` 工具流转状态"), "弱化措辞（无必须/无写死目标）+ 统一加'工具'");
  assert.ok(!t.includes("必须调用"), "不强制");
  assert.ok(t.includes("可用流转"), "动态流转提示存在");
  assert.ok(t.includes("方案设计(DESIGN)"), "动态目标含向前状态");
  assert.ok(!t.includes("输出精简文字但不丢失内容"), "固定句已移除（由 SYSTEM.md 提供）");
  assert.ok(!t.includes("严格遵守人格角色定义"), "人格定义已移除（由 SYSTEM.md 提供）");
});

test("buildTemplate VERIFY: 动态流转目标含 END（非 IDLE）", () => {
  const t = buildTemplate("VERIFY", 1, "CODING", "BUG_FIX", "MODERATE", V(["DEEP_UNDERSTAND", "DESIGN", "EXECUTE", "VERIFY"]));
  assert.ok(t.includes("结束(END)"), "动态目标含 END");
  assert.ok(!t.includes("流转 IDLE"), "不再指向 IDLE");
  assert.ok(t.includes("可用流转"), "动态提示");
});

// ═══════════ pathAdapter 全链路路径感知 ═══════════

test("pathAdapter: 全流程无适配段", () => {
  assert.equal(pathAdapter("EXECUTE", ["DEEP_UNDERSTAND", "DESIGN"]), "");
  assert.equal(pathAdapter("DESIGN", ["DEEP_UNDERSTAND"]), "");
});

test("pathAdapter: 直达 EXECUTE（跳理解+设计）", () => {
  const seg = pathAdapter("EXECUTE", ["EXECUTE"]);
  assert.ok(seg.includes("直达执行模式"), "直达版适配");
});

test("pathAdapter: 跳理解到 DESIGN", () => {
  const seg = pathAdapter("DESIGN", ["DESIGN"]);
  assert.ok(seg.includes("未经过深度理解"), "跳理解适配");
});

test("pathAdapter: 回退到 DESIGN（曾到 EXECUTE）", () => {
  const seg = pathAdapter("DESIGN", ["DEEP_UNDERSTAND", "DESIGN", "EXECUTE", "DESIGN"]);
  assert.ok(seg.includes("回退"), "回退适配");
});

test("buildTemplate 集成: visited 直达时嵌入适配段", () => {
  const t = buildTemplate("EXECUTE", 1, "CODING", "BUG_FIX", "TRIVIAL", V(["EXECUTE"]));
  assert.ok(t.includes("直达执行模式"), "直达路径提示词整体适配");
  const t2 = buildTemplate("EXECUTE", 1, "CODING", "BUG_FIX", "MODERATE", V(["DEEP_UNDERSTAND", "DESIGN"]));
  assert.ok(!t2.includes("直达执行模式"), "全流程无直达段");
});

test("buildTemplate 集成: DESIGN 跳理解适配段嵌入", () => {
  const t = buildTemplate("DESIGN", 1, "CODING", "BUG_FIX", "SIMPLE", []);
  assert.ok(t.includes("未经过深度理解"), "跳理解适配段嵌入");
  const t2 = buildTemplate("DESIGN", 1, "CODING", "BUG_FIX", "SIMPLE", V(["DEEP_UNDERSTAND"]));
  assert.ok(!t2.includes("未经过深度理解"), "全流程无跳理解段");
});

test("buildTemplate 集成: 回退变体适配段嵌入", () => {
  const t = buildTemplate("DESIGN", 1, "CODING", "BUG_FIX", "MODERATE", V(["DEEP_UNDERSTAND", "DESIGN", "EXECUTE", "DESIGN"]));
  assert.ok(t.includes("回退"), "回退适配段嵌入");
});

test("buildTemplate 状态行: START/END 轮次格式", () => {
  const s = buildTemplate("START", 1, null, null, null);
  assert.ok(s.includes("第1/1轮"), "START 第1/1轮");
  const e = buildTemplate("END", 2, null, null, null);
  assert.ok(e.includes("第2/0轮"), "END 难度未设定时第2/0轮");
});

// ═══════════ getPromptContent ═══════════

test("getPromptContent: 画像未设定提示等待", () => {
  assert.ok(getPromptContent(null, null, null, "EXECUTE").includes("等待模型调用"));
});

test("getPromptContent: 有效画像加载领域提示词", () => {
  const c = getPromptContent("CODING", "BUG_FIX", "MODERATE", "EXECUTE");
  assert.ok(c.length > 0 && !c.includes("未找到"), "加载到领域提示词");
});

// ═══════════ taskNN 标签：多轮次验证 ═══════════

test("buildTemplate taskNN: turn=1 生成 <task1> 标签", () => {
  const t = buildTemplate("START", 1, null, null, null);
  assert.ok(t.startsWith("<task1>"), "以 <task1> 开头");
  assert.ok(t.endsWith("</task1>"), "以 </task1> 结尾");
});

test("buildTemplate taskNN: turn=5 生成 <task5> 标签", () => {
  const t = buildTemplate("START", 5, null, null, null);
  assert.ok(t.startsWith("<task5>"), "以 <task5> 开头");
  assert.ok(t.endsWith("</task5>"), "以 </task5> 结尾");
});

test("buildTemplate taskNN: turn=99 生成 <task99> 标签", () => {
  const t = buildTemplate("START", 99, null, null, null);
  assert.ok(t.startsWith("<task99>"), "以 <task99> 开头");
  assert.ok(t.endsWith("</task99>"), "以 </task99> 结尾");
});

test("buildTemplate taskNN: 六态同一 turn=7 生成相同 <task7> 标签", () => {
  const states: ThinkingState[] = ["START", "DEEP_UNDERSTAND", "DESIGN", "EXECUTE", "VERIFY", "END"];
  for (const state of states) {
    const visited: ThinkingState[] =
      state === "VERIFY" ? ["DEEP_UNDERSTAND", "DESIGN", "EXECUTE", "VERIFY"] :
      state === "EXECUTE" ? ["DEEP_UNDERSTAND", "DESIGN"] :
      state === "DESIGN" ? ["DEEP_UNDERSTAND"] :
      [];
    const t = buildTemplate(state, 7, "CODING", "BUG_FIX", "MODERATE", visited);
    assert.ok(t.startsWith("<task7>"), `${state} 以 <task7> 开头`);
    assert.ok(t.endsWith("</task7>"), `${state} 以 </task7> 结尾`);
  }
});

test("buildTemplate taskNN: turn=0 边界值", () => {
  const t = buildTemplate("START", 0, null, null, null);
  assert.ok(t.startsWith("<task0>"), "turn=0 生成 <task0>");
  assert.ok(t.endsWith("</task0>"), "turn=0 生成 </task0>");
});

test("buildTemplate taskNN: turn=999 大数值", () => {
  const t = buildTemplate("START", 999, null, null, null);
  assert.ok(t.startsWith("<task999>"), "turn=999 生成 <task999>");
  assert.ok(t.endsWith("</task999>"), "turn=999 生成 </task999>");
});

test("buildTemplate taskNN: 标签成对唯一", () => {
  const t = buildTemplate("EXECUTE", 3, "CODING", "BUG_FIX", "MODERATE", V(["DEEP_UNDERSTAND", "DESIGN"]));
  const openCount = t.split("<task3>").length - 1;
  const closeCount = t.split("</task3>").length - 1;
  assert.equal(openCount, 1, "恰好一个 <task3>");
  assert.equal(closeCount, 1, "恰好一个 </task3>");
});

// 辅助：从 types 取 TOOL_TASK_INFO（避免硬编码）
function TOOL_TASK_INFO(): string {
  return "asymptotic-think_set-task-info";
}
