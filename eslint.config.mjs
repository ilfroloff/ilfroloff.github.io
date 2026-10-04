import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astroPlugin from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default [
  // Global ignores
  {
    ignores: [
      "dist/**",
      ".astro/**",
      "node_modules/**",
      ".husky/**",
      "public/**",
    ],
  },

  // Base recommended rules
  js.configs.recommended,

  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // Astro recommended rules (flat config)
  ...astroPlugin.configs["flat/recommended"],

  // JSX accessibility rules
  jsxA11y.flatConfigs.recommended,

  // Prettier integration (disables conflicting rules)
  eslintConfigPrettier,

  // Global settings for all files
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },

  // TypeScript files overrides
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
    },
  },

  // env.d.ts overrides
  {
    files: ["src/env.d.ts"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },

  // MJS files
  {
    files: ["**/*.mjs"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: 2020,
    },
  },

  // CJS files
  {
    files: ["**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: 2020,
    },
  },
];
