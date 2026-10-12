import { ESLint } from 'eslint'
import { describe, expect, it } from 'vitest'

import plugin from '../src/index.ts'

describe('eslint-plugin-yangxu', () => {
  it('公开标准插件对象：meta 与空 rules', () => {
    expect(plugin.meta.name).toBe('yangxu')
    expect(typeof plugin.meta.version).toBe('string')
    expect(plugin.meta.version.length).toBeGreaterThan(0)
    expect(plugin.rules).toEqual({})
  })

  it('可被 ESLint 加载并计算配置', async () => {
    const eslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: [{ plugins: { yangxu: plugin } }],
    })

    const results = await eslint.lintText('export const answer = 42\n', {
      filePath: 'index.ts',
    })

    expect(results).toHaveLength(1)
  })
})
