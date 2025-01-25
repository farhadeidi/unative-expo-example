/* eslint-disable import/namespace */
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import { FlatCompat } from "@eslint/eslintrc";
import path from "node:path";
import { fileURLToPath } from "node:url";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all,
});

export default tseslint.config([
  {
    ignores: ["dist/*", "**/expo-env.d.ts"],
  },
  ...compat.extends("expo", "prettier"),
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    extends: [eslint.configs.recommended, tseslint.configs.recommended],
    plugins: {
      prettier,
      "simple-import-sort": simpleImportSort,
    },

    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: {
      "prettier/prettier": "error",
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
      "import/namespace": "off",
      "no-empty-pattern": "off",
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-imports": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-require-imports": "off",
      "react/display-name": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^.+\\.s?css$", "^\\u0000"],
            ["^react$", "^next", "^[a-z]", "^@[a-z]"],
            ["^@"],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ],
        },
      ],
    },
  },
]);
