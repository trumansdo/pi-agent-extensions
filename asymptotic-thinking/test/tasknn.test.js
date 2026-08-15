/**
 * tasknn.test.js — 验证 buildTemplate 多轮次 <task{N}> 标签生成
 * 使用 jiti 加载 TypeScript 模块（与 generate-docs.js 相同机制）
 */
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

// Mock @earendil-works/pi-coding-agent（与 generate-docs.js 相同机制）
const Module = require('module');
const originalResolveFilename = Module._resolveFilename;
Module._resolveFilename = function (request, parent, ...args) {
  if (request === '@earendil-works/pi-coding-agent') {
    return path.resolve(__dirname, '..', 'scripts', 'mock-pi-agent.js');
  }
  return originalResolveFilename.call(this, request, parent, ...args);
};

// ── jiti 路径探测 ──
function resolveJiti() {
  const candidates = [
    () => {
      const npmRoot = execSync('npm root -g').toString().trim();
      return path.join(npmRoot, '@earendil-works/pi-coding-agent/node_modules/jiti/lib/jiti.cjs');
    },
    () => path.resolve(__dirname, '../../../npm/node_modules/jiti/lib/jiti.cjs'),
  ];
  for (const get of candidates) {
    try {
      const p = get();
      if (fs.existsSync(p)) return p;
    } catch { /* continue */ }
  }
  throw new Error('找不到 jiti 模块');
}

const jitiPath = resolveJiti();
const createJiti = require(jitiPath);
const jiti = createJiti(__filename, {});

const ROOT = path.resolve(__dirname, '..');
process.chdir(path.resolve(ROOT, 'src'));

// 加载被测模块
const { buildTemplate } = jiti(path.resolve(ROOT, 'src/templates.ts'));

// ── 简易断言 ──
let passed = 0;
let failed = 0;

function assert(condition, msg) {
  if (condition) {
    passed++;
    console.log(`  ✅ ${msg}`);
  } else {
    failed++;
    console.error(`  ❌ ${msg}`);
  }
}

function assertEqual(actual, expected, msg) {
  if (actual === expected) {
    passed++;
    console.log(`  ✅ ${msg}`);
  } else {
    failed++;
    console.error(`  ❌ ${msg} — 期望 ${expected}，实际 ${actual}`);
  }
}

// ═══════════ 测试用例 ═══════════

console.log('\n📋 taskNN 标签：多轮次验证\n');

// 1. 基础轮次映射
console.log('1. 基础轮次映射:');
['START', 'DEEP_UNDERSTAND', 'DESIGN', 'EXECUTE', 'VERIFY', 'END'].forEach(state => {
  [1, 5, 99].forEach(turn => {
    const visited =
      state === 'VERIFY' ? ['DEEP_UNDERSTAND', 'DESIGN', 'EXECUTE', 'VERIFY'] :
      state === 'EXECUTE' ? ['DEEP_UNDERSTAND', 'DESIGN'] :
      state === 'DESIGN' ? ['DEEP_UNDERSTAND'] :
      [];
    const t = buildTemplate(state, turn, 'CODING', 'BUG_FIX', 'MODERATE', visited);
    assert(t.startsWith(`<task${turn}>`), `${state} turn=${turn} → 以 <task${turn}> 开头`);
    assert(t.endsWith(`</task${turn}>`), `${state} turn=${turn} → 以 </task${turn}> 结尾`);
  });
});

// 2. 六态一致性
console.log('\n2. 六态同一 turn=7 一致性:');
const states = ['START', 'DEEP_UNDERSTAND', 'DESIGN', 'EXECUTE', 'VERIFY', 'END'];
for (const state of states) {
  const visited =
    state === 'VERIFY' ? ['DEEP_UNDERSTAND', 'DESIGN', 'EXECUTE', 'VERIFY'] :
    state === 'EXECUTE' ? ['DEEP_UNDERSTAND', 'DESIGN'] :
    state === 'DESIGN' ? ['DEEP_UNDERSTAND'] :
    [];
  const t = buildTemplate(state, 7, 'CODING', 'BUG_FIX', 'MODERATE', visited);
  assert(t.startsWith('<task7>'), `${state} 以 <task7> 开头`);
  assert(t.endsWith('</task7>'), `${state} 以 </task7> 结尾`);
}

// 3. 边界值
console.log('\n3. 边界值:');
(() => {
  const t0 = buildTemplate('START', 0, null, null, null);
  assert(t0.startsWith('<task0>'), 'turn=0 → <task0>');
  assert(t0.endsWith('</task0>'), 'turn=0 → </task0>');

  const t999 = buildTemplate('START', 999, null, null, null);
  assert(t999.startsWith('<task999>'), 'turn=999 → <task999>');
  assert(t999.endsWith('</task999>'), 'turn=999 → </task999>');
})();

// 4. 标签成对唯一
console.log('\n4. 标签成对唯一:');
(() => {
  const t = buildTemplate('EXECUTE', 3, 'CODING', 'BUG_FIX', 'MODERATE', ['DEEP_UNDERSTAND', 'DESIGN']);
  const openCount = t.split('<task3>').length - 1;
  const closeCount = t.split('</task3>').length - 1;
  assertEqual(openCount, 1, '恰好一个 <task3>');
  assertEqual(closeCount, 1, '恰好一个 </task3>');
})();

// 5. 不同任务类型不影响标签
console.log('\n5. 不同任务类型不影响标签:');
(() => {
  const taskTypes = [
    ['CODING', 'JAVA_DEV'],
    ['RETRIEVAL', 'DOC_RETRIEVAL'],
    ['ANALYTICS', 'DATA_ANALYSIS'],
    ['DEVOPS', 'DEPLOY'],
    ['ENTERTAINMENT', 'CREATIVE_WRITING'],
    ['GENERAL', 'GENERAL'],
  ];
  for (const [master, sub] of taskTypes) {
    const t = buildTemplate('EXECUTE', 42, master, sub, 'MODERATE', ['DEEP_UNDERSTAND', 'DESIGN']);
    assert(t.startsWith('<task42>'), `${master}/${sub} → <task42> 开头`);
    assert(t.endsWith('</task42>'), `${master}/${sub} → </task42> 结尾`);
  }
})();

// 6. 不同难度不影响标签
console.log('\n6. 不同难度不影响标签:');
(() => {
  ['TRIVIAL', 'SIMPLE', 'MODERATE', 'COMPLEX', 'HARD', 'EXTREME'].forEach(diff => {
    const t = buildTemplate('EXECUTE', 8, 'CODING', 'BUG_FIX', diff, ['DEEP_UNDERSTAND', 'DESIGN']);
    assert(t.startsWith('<task8>'), `${diff} → <task8> 开头`);
    assert(t.endsWith('</task8>'), `${diff} → </task8> 结尾`);
  });
})();

// ── 结果汇总 ──
console.log(`\n${'='.repeat(40)}`);
console.log(`通过: ${passed} | 失败: ${failed} | 总计: ${passed + failed}`);
console.log(`${'='.repeat(40)}\n`);

if (failed > 0) {
  process.exit(1);
}
