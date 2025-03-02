/** @type {import("eslint").Linter.LegacyConfig} */
const eslintConfig = {
  env: {
    es2022: true,
    node: true,
  },
  extends: ["eslint:recommended", "eslint-config-prettier"],
  globals: {
    globalThis: "writable",
  },
  plugins: ["simple-import-sort", "sort-destructure-keys", "sort-keys-fix"],
  rules: {
    "no-console": [
      "error",
      { allow: ["error", "group", "groupEnd", "info", "table", "warn"] },
    ],
    "no-param-reassign": [
      "error",
      {
        ignorePropertyModificationsFor: [
          "acc", // for reducer accumulators
          "draft", // for Immer drafts
        ],
        props: true,
      },
    ],
    "no-restricted-imports": [
      "warn",
      {
        patterns: ["./", "../"],
      },
    ],
    "no-useless-rename": "warn",
    "object-shorthand": "warn",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          // Default groups
          ["^\\u0000"],
          ["^@?\\w"],
          ["^[^.]"],
          ["^\\."],
          // Aliased local directories (due to tsconfig.json baseUrl)
          ["^src/.*"],
        ],
      },
    ],
    "sort-destructure-keys/sort-destructure-keys": "warn",
    "sort-keys-fix/sort-keys-fix": [
      "warn",
      "asc",
      {
        caseSensitive: false,
        natural: true,
      },
    ],
  },
};

module.exports = eslintConfig;
