import { defineConfig } from "astro/config";
import astroExpressiveCode from "astro-expressive-code";
import tailwindcss from "@tailwindcss/vite";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.if-developer.fyi",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    solidJs({
      include: ["**/solid/**/*"],
    }),
    astroExpressiveCode({
      themes: ["monokai"],
    }),
    // snapback is a separate GitHub Pages project site served at /snapback, not an Astro route here.
    sitemap({
      customPages: ["https://www.if-developer.fyi/snapback/"],
    }),
  ],
  redirects: {
    "/hot-links": "/hotlinks",
    "/reactions": "/hotlinks",
    "/webassembly-javascript": "/webassembly-javascript-ecosystem",
    "/organizing-css-styles": "/css-architecture-organization",
    "/hey-ai-white-code-for-me": "/ai-coding-assistants-review",
    "/what-to-know-to-be-a-better-engineer": "/fundamentals-software-engineering",
  },
  markdown: {
    gfm: false,
    shikiConfig: {
      themes: {
        dark: "monokai",
        light: "monokai",
      },
      wrap: true,
    },
  },
});
