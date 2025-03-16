# @grantheaslip/eslint-config

Shared ESLint config for personal projects.

- [How to use](#how-to-use)
  - [Install](#install)
  - [Add to ESLint config](#add-to-eslint-config)

## How to use

### Install

```sh
npm install @grantheaslip/eslint-config --save-dev
```

### Add to ESLint config

Create an `eslint.config.js` containing:

```js
import grantheaslip from "@grantheaslip/eslint-config";

const eslintConfig = defineConfig({
  extends: [
    grantheaslip.base, // (for all projects)
    grantheaslip.typescript, // (for TypeScript projects)
    grantheaslip.react, // (for React projects)
    grantheaslip.next, // (for Next.js projects)
  ],
});

export default eslintConfig;
```
