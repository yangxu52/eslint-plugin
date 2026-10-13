# eslint-plugin-yangxu

A personal ESLint plugin. The first release ships only the plugin skeleton (no rules yet); future rules will use the `yangxu/*` prefix.

## Requirements

- ESLint `^10.0.0` (Flat Config only)
- Node `^22.19.0 || ^24.11.0 || >=26.0.0`
- ESM

## Install

```bash
pnpm add -D eslint eslint-plugin-yangxu
```

## Usage

```js
import yangxu from 'eslint-plugin-yangxu'

export default [
  {
    plugins: { yangxu },
  },
]
```

> No rules are provided yet.

## Relationship to `eslint-config-yangxu`

This package is maintained independently from `eslint-config-yangxu`. The current config package does not depend on or enable this plugin because this first release has no `yangxu/*` rules. A future rule release may add an explicit integration after the rule contract is defined.

## License

MIT
