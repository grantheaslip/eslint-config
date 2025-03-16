import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";
import security from "eslint-plugin-security";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

/**
 * @typedef {import("eslint").Linter.RulesRecord} RulesRecord
 */

const perfectionistRecommendedNaturalRules =
  perfectionist.configs["recommended-natural"].rules ?? {};

const perfectionistRecommendedNaturalRulesWithWarnSeverity = Object.keys(
  perfectionistRecommendedNaturalRules,
).reduce((acc, ruleName) => {
  // eslint-disable-next-line security/detect-object-injection
  const entry = perfectionistRecommendedNaturalRules[ruleName];

  if (entry === undefined) {
    return acc;
  }

  if (typeof entry === "string" || typeof entry === "number") {
    return /** @type {RulesRecord} */ ({
      ...acc,
      [ruleName]: "warn",
    });
  }

  const [, ...options] = entry;

  return /** @type {RulesRecord} */ ({
    ...acc,
    [ruleName]: ["warn", ...options],
  });
}, /** @type {RulesRecord} */ ({}));

const baseConfig = defineConfig([
  globalIgnores([".next*/*", ".yalc/*"]),
  {
    extends: [js.configs.recommended, prettier, security.configs.recommended],
    files: ["**/*.{cjs,js,mjs,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      perfectionist,
    },
    rules: {
      "no-console": [
        "warn",
        {
          allow: ["error", "group", "groupEnd", "info", "table", "warn"],
        },
      ],
      "no-param-reassign": [
        "error",
        {
          ignorePropertyModificationsFor: ["acc", "draft"],
          props: true,
        },
      ],
      "no-useless-rename": "warn",
      "object-shorthand": "warn",
      ...perfectionistRecommendedNaturalRulesWithWarnSeverity,
      "perfectionist/sort-imports": [
        "warn",
        {
          customGroups: {
            value: {
              static: ["^src/static/.*"],
            },
          },
          groups: [
            "type",
            ["builtin", "external"],
            "internal-type",
            "static",
            "internal",
            ["parent-type", "sibling-type", "index-type"],
            ["parent", "sibling", "index"],
            "object",
            "unknown",
          ],
          tsconfigRootDir: ".",
          type: "natural",
        },
      ],
    },
  },
  // It would be nice to have this in the base config, but until ESLint provides
  // a good way to merge rule options this will end up getting accidentally
  // overridden in a lot of consuming projects
  //
  // See https://github.com/eslint/eslint/issues/17389

  // {
  //   files: ["src/**/*.{ts,tsx}"],
  //   rules: {
  //     "no-restricted-imports": [
  //       "warn",
  //       {
  //         patterns: [
  //           {
  //             regex: "(?:.|..)/src/.*.(?:js|mjs|ts|tsx)",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // },
]);

export default baseConfig;
