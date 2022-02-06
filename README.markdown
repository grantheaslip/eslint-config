# @ghslp/eslint-config

Shared ESLint config for personal projects.

- [How to use](#how-to-use)
    - [Install](#install)
    - [Add to ESLint config](#add-to-eslint-config)

## How to use

### Install

```sh
npm install @ghslp/eslint-config --save-dev
```

### Add to ESLint config

Create a `.eslintrc.js` containing (at least) the following:

```js
// Workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    // Include for all projects:
    "@ghslp/eslint-config",
    // Include for React projects:
    "@ghslp/eslint-config/react"
    // Include for React + Next.js projects:
    "@ghslp/eslint-config/react"
  ],
};
```
