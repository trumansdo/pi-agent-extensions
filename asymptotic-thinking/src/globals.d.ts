// globals.d.ts — CJS 环境全局声明（jiti 以 CJS 语义加载 TS，提供 __dirname）
// 仅供 TypeScript 静态检查使用；运行时由 jiti/Node CJS 提供。
declare const __dirname: string;
