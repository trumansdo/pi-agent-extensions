/**
 * generate-docs.js
 * 遍历所有 大任务×小任务×难度×状态 组合，调用 buildTemplate（含路径感知 visited）
 * 输出到 docs/all-prompt-combinations.md
 */
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

// Mock @earendil-works/pi-coding-agent（generate-docs 独立运行，无 pi-agent 运行时）
const Module = require('module');
const originalResolveFilename = Module._resolveFilename;
Module._resolveFilename = function (request, parent, ...args) {
  if (request === '@earendil-works/pi-coding-agent') {
    return path.resolve(__dirname, 'mock-pi-agent.js');
  }
  return originalResolveFilename.call(this, request, parent, ...args);
};

// ── jiti 路径探测（全局 npm root → @earendil-works/pi-coding-agent/node_modules/jiti）──
function resolveJiti() {
  const candidates = [
    // 全局 npm root 下的 pi-coding-agent 内嵌 jiti
    () => {
      const npmRoot = execSync('npm root -g').toString().trim();
      return path.join(npmRoot, '@earendil-works/pi-coding-agent/node_modules/jiti/lib/jiti.cjs');
    },
    // 旧路径（历史遗留，已失效但保留兜底）
    () => path.resolve(__dirname, '../../../npm/node_modules/jiti/lib/jiti.cjs'),
  ];
  for (const get of candidates) {
    try {
      const p = get();
      if (fs.existsSync(p)) return p;
    } catch {
      // 继续尝试下一个
    }
  }
  throw new Error('找不到 jiti 模块。请确认 @earendil-works/pi-coding-agent 已全局安装（npm root -g 下可解析）。');
}

const jitiPath = resolveJiti();
const createJiti = require(jitiPath);

const jiti = createJiti(__filename, {});

const ROOT = path.resolve(__dirname, '..');

// 切换到 src 目录，确保 require('./prompts/...') 正确解析
process.chdir(path.resolve(ROOT, 'src'));

// 加载核心模块
const types = jiti(path.resolve(ROOT, 'src/types.ts'));
const { buildTemplate } = jiti(path.resolve(ROOT, 'src/templates.ts'));

const {
  MASTER_TO_SUB,
  MASTER_TASK_TYPE_LABELS,
  SUB_TASK_TYPE_LABELS,
  DIFFICULTY_LABELS,
  STATE_META,
} = types;

const DIFFICULTIES = ['TRIVIAL', 'SIMPLE', 'MODERATE', 'COMPLEX', 'HARD', 'EXTREME'];
// 六态（START 起点 + 四业务态 + END 终态）
const STATES = ['START', 'DEEP_UNDERSTAND', 'DESIGN', 'EXECUTE', 'VERIFY', 'END'];

/**
 * 每个状态的代表性路径（visited）——全流程路径下 pathAdapter 无适配段
 */
function typicalVisited(state) {
  switch (state) {
    case 'START':
    case 'DEEP_UNDERSTAND':
      return [];
    case 'DESIGN':
      return ['DEEP_UNDERSTAND'];
    case 'EXECUTE':
      return ['DEEP_UNDERSTAND', 'DESIGN'];
    case 'VERIFY':
      return ['DEEP_UNDERSTAND', 'DESIGN', 'EXECUTE', 'VERIFY'];
    case 'END':
      return [];
  }
}

/**
 * 路径感知变体（仅 DESIGN/EXECUTE 有前置跳过分支）：
 *  - DESIGN 跳理解：visited = [] → 提示"未经过深度理解"
 *  - EXECUTE 直达：visited = ['EXECUTE'] → 提示"直达执行模式"
 */
const VARIANTS = {
  DESIGN: [{ label: '路径变体·跳理解', visited: [] }],
  EXECUTE: [{ label: '路径变体·直达(跳理解+设计)', visited: ['EXECUTE'] }],
};

const DOCS_DIR = path.resolve(ROOT, 'docs');
if (!fs.existsSync(DOCS_DIR)) {
  fs.mkdirSync(DOCS_DIR, { recursive: true });
}

const allLines = [];

// 遍历所有大任务类型
for (const [masterEnum, subList] of Object.entries(MASTER_TO_SUB)) {
  const masterLabel = MASTER_TASK_TYPE_LABELS[masterEnum];

  for (const subEnum of subList) {
    const subLabel = SUB_TASK_TYPE_LABELS[subEnum];
    const comboLabel = `${masterLabel}-${subLabel}`;

    for (const diff of DIFFICULTIES) {
      const diffLabel = DIFFICULTY_LABELS[diff];
      const heading = `# ${comboLabel} | ${diffLabel}难度`;
      allLines.push('');
      allLines.push(heading);
      allLines.push('');

      // ── buildTemplate：每个状态（典型路径 + 变体）──
      for (const state of STATES) {
        const stateLabel = STATE_META[state].label;
        allLines.push(`## buildTemplate — ${stateLabel} 阶段`);
        allLines.push('');

        // 典型路径（全流程）
        try {
          const fullPrompt = buildTemplate(state, 1, masterEnum, subEnum, diff, typicalVisited(state));
          allLines.push('```xml');
          allLines.push(fullPrompt);
          allLines.push('```');
        } catch (err) {
          allLines.push(`> ❌ 生成失败: ${err.message}`);
        }

        // 路径感知变体（如有）
        const variants = VARIANTS[state] || [];
        for (const v of variants) {
          allLines.push(`### ${v.label}（visited = ${JSON.stringify(v.visited)}）`);
          allLines.push('');
          try {
            const vPrompt = buildTemplate(state, 1, masterEnum, subEnum, diff, v.visited);
            allLines.push('```xml');
            allLines.push(vPrompt);
            allLines.push('```');
          } catch (err) {
            allLines.push(`> ❌ 变体生成失败: ${err.message}`);
          }
          allLines.push('');
        }

        allLines.push('');
      }

      allLines.push('---');
    }
  }
}

// 写入文件
const outputPath = path.resolve(DOCS_DIR, 'all-prompt-combinations.md');
fs.writeFileSync(outputPath, allLines.join('\n'), 'utf-8');
console.log(`✅ 已生成: ${outputPath}`);
console.log(`   共 ${allLines.length} 行`);
console.log(`   jiti 来源: ${jitiPath}`);
