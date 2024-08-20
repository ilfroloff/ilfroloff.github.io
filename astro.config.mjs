import { defineConfig } from "astro/config";
import astroExpressiveCode from "astro-expressive-code";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.if-developer.fyi",
  integrations: [
    tailwind(),
    solidJs({
      include: ["**/solid/**/*"],
    }),
    astroExpressiveCode({
      theme: "monokai",
    }),
    sitemap(),
  ],
  redirects: {
    "/hot-links": "/hotlinks",
    "/reactions": "/hotlinks",
  },
  markdown: {
    gfm: false,
    shikiConfig: {
      theme: "monokai",
      wrap: true,
    },
  },
});
