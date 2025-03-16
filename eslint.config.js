import { defineConfig, globalIgnores } from "eslint/config";

import grantheaslip from "./index.js";

const eslintConfig = defineConfig([
  globalIgnores(["**/types/**/*.d.ts"]),
  {
    extends: [grantheaslip.base, grantheaslip.typescript],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.config.js"],
        },
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: {
      "@typescript-eslint/no-unsafe-assignment": "off",
    },
  },
]);

export default eslintConfig;
