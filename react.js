/** @type {import("eslint").Linter.LegacyConfig} */
const eslintConfigReact = {
  env: {
    browser: true,
  },
  extends: [
    "plugin:jsx-a11y/strict",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended-legacy",
  ],
  plugins: ["@mizdra/layout-shift", "react-memo"],
  rules: {
    "@mizdra/layout-shift/require-size-attributes": "error",
    "jsx-a11y/click-events-have-key-events": "off",
    // https://github.com/jsx-eslint/eslint-plugin-react/issues/1848
    "react/jsx-one-expression-per-line": "off",
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-memo/require-usememo": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

module.exports = eslintConfigReact;
