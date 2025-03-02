/** @type {import("eslint").Linter.LegacyConfig} */
const eslintConfigTypeScript = {
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: process.cwd(),
  },
  rules: {
    "@typescript-eslint/array-type": [
      "warn",
      {
        default: "generic",
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "@typescript-eslint/member-ordering": [
      "warn",
      {
        default: {
          memberTypes: ["signature", "field"],
          order: "alphabetically",
        },
      },
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-object-type": "off",
    "@typescript-eslint/no-namespace": [
      "warn",
      {
        allowDefinitionFiles: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-var-requires": "off",
  },
  // eslint-disable-next-line sort-keys-fix/sort-keys-fix
  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        "@typescript-eslint/no-require-imports": "off",
      },
    },
  ],
};

module.exports = eslintConfigTypeScript;
