/**
 * skill 技能调度工具模块
 */

import {
  getAgentDir,
  loadSkillsFromDir,
  type ExtensionAPI,
  type Skill,
} from "@earendil-works/pi-coding-agent";
import { Text } from "@earendil-works/pi-tui";
import { Type } from "typebox";
import fs from "fs";
import path from "path";

// ════════════════════════════════════════════════════════════════
//  技能发现
// ════════════════════════════════════════════════════════════════

const SKILL_PREVIEW_LINES = 5;

function getSkillSearchPaths(): string[] {
  return [
    path.join(process.cwd(), ".pi", "skills"),
    path.join(getAgentDir(), "skills"),
  ];
}

function discoverSkills(): Skill[] {
  const all: Skill[] = [];
  const seen = new Set<string>();

  for (const dirPath of getSkillSearchPaths()) {
    const result = loadSkillsFromDir({ dir: dirPath, source: "general-tools" });
    for (const skillEntry of result.skills) {
      if (!seen.has(skillEntry.name)) {
        seen.add(skillEntry.name);
        all.push(skillEntry);
      }
    }
  }

  return all.sort((a, b) => a.name.localeCompare(b.name));
}

// ════════════════════════════════════════════════════════════════
//  公开接口
// ════════════════════════════════════════════════════════════════

export function registerSkillTool(pi: ExtensionAPI) {
  const availableSkills = discoverSkills();
  const skillNames = availableSkills.map((skill) => skill.name);

  if (availableSkills.length === 0) return;

  pi.registerTool({
    name: "skill",
    label: "SkillTool",
    description: [
      "<xml>",
      "<desc>执行系统提示词中列出你已具备的skill技能，输入技能名称即可加载该技能的完整说明。请严格根据返回的指令步骤执行。</desc>",
      `  <avai>${skillNames.join(", ")}</avai>`,
      "</xml>",
    ].join("\n"),
    promptSnippet: "skill - 激活技能并获取操作指令",
    promptGuidelines: [
      "<xml>",
      "<guid>",
      "  <item>当你需要执行某个预定义操作流程时，可以使用skill工具</item>",
      "  <item>工具会返回该技能的完整操作说明，请严格按照返回的步骤执行</item>",
      "</guid>",
      "</xml>",
    ],
    parameters: Type.Object({
      skill_name: Type.String({
        description: `要执行的技能名称。可选: ${skillNames.join(", ")}`,
        enum: skillNames,
      }),
    }),
    async execute(
      _toolCallId: string,
      params: { skill_name: string },
      _signal: AbortSignal | undefined,
      _onUpdate: any,
      _ctx: any,
    ) {
      const skillName = params.skill_name;
      const foundSkill = availableSkills.find((skill) => skill.name === skillName);

      if (!foundSkill) {
        return {
          content: [
            {
              type: "text",
              text: `错误：找不到名为 "${skillName}" 的技能。请检查技能目录是否存在 SKILL.md 文件。`,
            },
          ],
          details: {},
        };
      }

      try {
        const content = fs.readFileSync(foundSkill.filePath, "utf-8");

        return {
          content: [
            {
              type: "text",
              text: [
                "---",
                `SYSTEM INSTRUCTION [SKILL: ${skillName.toUpperCase()}]`,
                "以下是" + skillName + "技能执行文档手册，执行时必须严格遵守：",
                content,
                "---",
                `END OF INSTRUCTION [SKILL: ${skillName.toUpperCase()}]`,
              ].join("\n"),
            },
          ],
          details: {},
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: `错误：读取技能文件失败 - ${error.message}`,
            },
          ],
          details: {},
        };
      }
    },

    renderResult(result, options, _theme, context) {
      // Extract full text content from tool result
      const contentBlock = result.content?.[0];
      const textContent =
        contentBlock && contentBlock.type === "text"
          ? (contentBlock as { type: "text"; text: string }).text
          : "";

      // Error results: always show full text without folding
      if (context.isError) {
        return new Text(`\n${textContent}`, 0, 0);
      }

      if (options.expanded) {
        // Expanded: show full content via Text component
        return new Text(`\n${textContent}`, 0, 0);
      }

      // Collapsed: show first SKILL_PREVIEW_LINES visual lines
      return {
        invalidate() {},
        render(width: number) {
          const tempText = new Text(textContent, 0, 0);
          const allVisualLines = tempText.render(width);
          const visualLines = allVisualLines.slice(0, SKILL_PREVIEW_LINES);
          const skippedCount = allVisualLines.length - visualLines.length;
          const hint =
            skippedCount > 0
              ? `... (${skippedCount} more lines, ctrl+o to expand)`
              : "";
          return hint ? [hint, ...visualLines] : visualLines;
        },
      };
    },
  });
}
