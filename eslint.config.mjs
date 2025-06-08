// .eslintrc.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
// import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: [
      "js/recommended" // 启用了 ESLint 推荐的规则，其中包含 no-unused-vars
    ],
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      // 覆盖 js/recommended 中的 no-unused-vars 规则，将其设置为 'warn'
      "no-unused-vars": "warn"
    }
  },
  tseslint.configs.recommended.map((config) => ({
    ...config,
    rules: {
      ...config.rules,
      // 覆盖 @typescript-eslint/recommended 中的 @typescript-eslint/no-unused-vars 规则
      "@typescript-eslint/no-unused-vars": "warn",
    },
  })),
  // 暂时用不到
  // {
  //   files: ["**/*.css"],
  //   plugins: { css },
  //   language: "css/css",
  //   extends: ["css/recommended"]
  //   // CSS 规则通常不包含 no-unused-vars，所以这里不需要特别设置
  // },
])