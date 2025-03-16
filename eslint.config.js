import { defineConfig } from "eslint/config";

import grantheaslip from "./index.js";

const eslintConfig = defineConfig({
  extends: [grantheaslip.base, grantheaslip.typescript],
  rules: {
    "@typescript-eslint/no-unsafe-assignment": "off",
  },
});

export default eslintConfig;
