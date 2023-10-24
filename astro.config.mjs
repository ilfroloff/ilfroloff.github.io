import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

export default defineConfig({
  site: "https://ilfroloff.github.io",
  integrations: [
    tailwind(),
    solidJs({
      include: ["**/solid/**/*"],
    }),
  ],
  markdown: {
    gfm: false,
    shikiConfig: {
      theme: "monokai",
      wrap: true,
    },
  },
});
