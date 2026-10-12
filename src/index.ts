import type { ESLint } from 'eslint'

import pkg from '../package.json' with { type: 'json' }

/**
 * 首版只提供插件骨架：不接受任何自有规则，
 * 未来规则统一使用 `yangxu/*` 前缀并单独提供测试与文档。
 */
export const plugin = {
  meta: {
    name: 'yangxu',
    version: pkg.version,
  },
  rules: {},
} satisfies ESLint.Plugin

export default plugin
