import arthurgeronReactUsememo from "@arthurgeron/eslint-plugin-react-usememo";
import { fixupPluginRules } from "@eslint/compat";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import globals from "globals";

const reactConfig = defineConfig({
  extends: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    jsxA11y.flatConfigs.recommended,
    react.configs.flat.recommended,
    react.configs.flat["jsx-runtime"],
    reactHooks.configs["recommended-latest"],
  ],
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    "@arthurgeron/react-usememo": fixupPluginRules(arthurgeronReactUsememo),
  },
  rules: {
    // https://github.com/arthurgeron/eslint-plugin-react-usememo/blob/main/docs/rules/require-usememo.md
    "@arthurgeron/react-usememo/require-usememo": [
      "warn",
      {
        // checkHooksCalls goes beyond what eslint-plugin-react-memo checked
        // (component props). It would be very invasive since many hooks accept
        // object arguments, and considering React Compiler is coming it‘s not
        // worth the trouble now
        checkHookCalls: false,
      },
    ],
    "jsx-a11y/click-events-have-key-events": "off",
    // https://github.com/jsx-eslint/eslint-plugin-react/issues/1848
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
});

export default reactConfig;
