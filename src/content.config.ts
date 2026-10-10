import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articleSchema = z.object({
  title: z.string(),
  slug: z.string(),
  publishedAt: z.coerce.date(),
  brief: z.string().optional(),
  thumbnail: z.string().optional(),
  tags: z.array(z.string()).optional(),
  lang: z.string().default("ru"),
});

const hotlinkSchema = z.object({
  title: z.string(),
  slug: z.string(),
  publishedAt: z.coerce.date(),
  brief: z.string().optional(),
  thumbnail: z.string().optional(),
  tags: z.array(z.string()).optional(),
  source: z.string(),
  lang: z.string().default("ru"),
});

const articles = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.md",
    base: "./src/content/articles",
    generateId: ({ entry, data }) => {
      const d = data as Record<string, unknown>;
      const lang = (d.lang as string) || "ru";
      const slug = (d.slug as string) || entry.replace(/\.md$/, "");
      return `${slug}-${lang}`;
    },
  }),
  schema: articleSchema,
});

const hotlinks = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.md",
    base: "./src/content/hotlinks",
    generateId: ({ entry, data }) => {
      const d = data as Record<string, unknown>;
      const lang = (d.lang as string) || "ru";
      const slug = (d.slug as string) || entry.replace(/\.md$/, "");
      return `${slug}-${lang}`;
    },
  }),
  schema: hotlinkSchema,
});

export const collections = { articles, hotlinks };

// Re-export site-level config (not a content collection)
export const siteConfig = {
  me: "IF Developer",
  site: "https://ilfroloff.github.io",
  description:
    "IF Developer's blog. Here I'm sharing my reactions and thoughts, writing articles, useful links",
};

export const articlesConfig = {
  icon: "📜",
  label: "Articles",
  description: "Articles were written by me",
};

export const hotlinksConfig = {
  icon: "🔥",
  label: "Hot links",
  description:
    "Links for articles/videos which I'm finding useful with my comments/reflection",
};

// Type exports for use in components
export type ArticleData = z.infer<typeof articleSchema>;
export type HotLinkData = z.infer<typeof hotlinkSchema>;
