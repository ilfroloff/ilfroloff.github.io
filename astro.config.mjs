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
