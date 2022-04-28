const eslintConfig = {
  extends: [
    "@rushstack/eslint-config/profile/web-app",
    "@rushstack/eslint-config/mixins/friendly-locals",
    "@rushstack/eslint-config/mixins/tsdoc",
    "plugin:functional/external-recommended",
    "plugin:functional/lite",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["**/*.test.ts", "**/*.test.tsx", "jest.setup.js"],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: { ecmaVersion: 2019, sourceType: "module" },
  plugins: [
    "functional",
    "import",
    "simple-import-sort",
    "sort-destructure-keys",
  ],
  rules: {
    // ----------------------
    // --- Built-in rules ---
    // ----------------------
    "no-console": [
      "error",
      { allow: ["error", "group", "groupEnd", "info", "table", "warn"] },
    ],
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "acc", // for reducer accumulators
          "draft", // for Immer drafts
        ],
      },
    ],
    "no-restricted-imports": [
      "warn",
      {
        patterns: ["./", "../"],
      },
    ],

    // --------------------------------
    // --- @rushstack/eslint-plugin ---
    // --------------------------------
    "@rushstack/no-null": "off",
    "@rushstack/no-new-null": "off",

    // ---------------------------------------
    // --- @typescript-eslint/eslint-plugin ---
    // ----------------------------------------
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/member-ordering": [
      "warn",
      {
        default: {
          memberTypes: ["signature", "field"],
          order: "alphabetically",
        },
      },
    ],
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/typedef": "off",

    // --------------------------------
    // --- eslint-plugin-functional ---
    // --------------------------------
    "functional/immutable-data": [
      "error",
      {
        ignorePattern: [
          ".current",
          ".getInitialProps",
          ".Layout",
          "draft",
          "module.exports",
          "res",
        ],
      },
    ],
    "functional/prefer-readonly-type": "off",
    "functional/prefer-type-literal": "off",
    "functional/no-return-void": "off",
    "functional/no-throw-statement": "off",

    // ----------------------------
    // --- eslint-plugin-import ---
    // ----------------------------
    "import/no-unresolved": [
      "warn",
      {
        ignore: ["!url-loader!"],
      },
    ],

    // ------------------------------
    // --- eslint-plugin-prettier ---
    // ------------------------------
    "prettier/prettier": "warn",

    // ----------------------------------------
    // --- eslint-plugin-simple-import-sort ---
    // ----------------------------------------
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

    // -------------------------------------------
    // --- eslint-plugin-sort-destructure-keys ---
    // -------------------------------------------
    "sort-destructure-keys/sort-destructure-keys": "warn",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};

module.exports = eslintConfig;
