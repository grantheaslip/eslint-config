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

Create a `.eslintrc.js` containing (at least) the following:

```js
// Workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    // Include for all projects:
    "@grantheaslip/eslint-config",
    // Include for React projects:
    "@grantheaslip/eslint-config/react",
    // Include for Next.js projects:
    "@grantheaslip/eslint-config/next",
    // Include for TypeScript projects:
    "@grantheaslip/eslint-config/typescript",
  ],
};
```
