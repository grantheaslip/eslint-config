import { defineConfig } from "eslint/config";
import typescriptEslint from "typescript-eslint";

const typescriptConfig = defineConfig(
  {
    extends: [
      // typescript-eslint has its own tseslint.config() helper, which could be
      // the cause of this type incompatibility. See
      // https://github.com/typescript-eslint/typescript-eslint/issues/10856

      // @ts-expect-error (works for now)
      typescriptEslint.configs.recommendedTypeChecked,
      // @ts-expect-error (works for now)
      typescriptEslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: {
      "@typescript-eslint/array-type": [
        "warn",
        {
          default: "generic",
        },
      ],
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-misused-promises": [
        "warn",
        // Prevent unfixable "Promise-returning function provided to attribute
        // where a void return was expected" warnings on DOM attributes (e.g.
        // <form> onSubmit and <button> onClick)
        //
        // https://typescript-eslint.io/rules/no-misused-promises/#checksvoidreturn
        { checksVoidReturn: { attributes: false } },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/prefer-nullish-coalescing": [
        "warn",
        // Ignore string primitives (so `emptyString || "fallback"` works)
        { ignorePrimitives: { string: true } },
      ],
    },
  },
  {
    files: ["*.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
);

export default typescriptConfig;
