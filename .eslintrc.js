// @ts-expect-error (https://github.com/microsoft/rushstack/tree/main/eslint/eslint-patch#modern-module-resolution-feature)
require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import("eslint").Linter.LegacyConfig} */
const eslintConfig = {
  extends: ["./index", "./typescript"],
};

module.exports = eslintConfig;
