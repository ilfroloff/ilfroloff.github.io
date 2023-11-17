import { defineCollection } from "astro:content";

export interface ArticleData {
  title: string;
  slug: string;
  publishedAt: Date;
  briefing: string;
  thumbnail?: string;
  tags?: Array<string>;
}

const articles = defineCollection<ArticleData>({
  type: "content",
});

export const articlesConfig = {
  icon: "📝",
  label: "Articles",
  data: articles,
};

export interface ReactionData extends ArticleData {}

const reactions = defineCollection<ReactionData>({
  type: "content",
});

export const reactionsConfig = {
  icon: "🤔",
  label: "Reactions",
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
  data: hotlinks,
};
