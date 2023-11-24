import { defineCollection } from "astro:content";

export interface ArticleData {
  title: string;
  slug: string;
  publishedAt: Date;
  brief: string;
  thumbnail?: string;
  tags?: Array<string>;
}

const articles = defineCollection<ArticleData>({
  type: "content",
});

export const articlesConfig = {
  icon: "📝",
  label: "Articles",
  description: "Articles were written by me",
  data: articles,
};

export interface ReactionData extends ArticleData {}

const reactions = defineCollection<ReactionData>({
  type: "content",
});

export const reactionsConfig = {
  icon: "🤔",
  label: "Reactions",
  description: "My comments/reflection for interesting articles/videos",
  data: reactions,
};

export interface HotLinkData {
  title: string;
  url: string;
  publishedAt: Date;
}

const hotlinks = defineCollection<HotLinkData>({
  type: "content",
});

export const hotlinksConfig = {
  icon: "🔥",
  label: "Hot links",
  description: "Links for articles/videos which I'm finding useful",
  data: hotlinks,
};

export const siteConfig = {
  me: "IF Developer",
  site: "https://ilfroloff.github.io",
  description:
    "IF Developer's blog. Here I'm sharing my reactions and thoughts, writing articles, useful links",
};
