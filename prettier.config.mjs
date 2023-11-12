/** @type {import('prettier').Config} */
export default {
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.md",
      options: {
        proseWrap: "always",
      },
    },
  ],
  plugins: ["prettier-plugin-astro"],
};
