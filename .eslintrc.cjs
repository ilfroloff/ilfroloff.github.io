module.exports = {
  extends: ["plugin:prettier/recommended", "plugin:astro/recommended"],
  overrides: [
    {
      files: ["**/*.mjs"],
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020,
      },
    },
    {
      files: ["**/*.cjs"],
      parserOptions: {
        sourceType: "script",
        ecmaVersion: 2020,
      },
    },
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    {
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      files: ["**/*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
    },
    {
      files: ["src/env.d.ts"],
      rules: {
        "@typescript-eslint/triple-slash-reference": "off",
      },
    },
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
  },
};
