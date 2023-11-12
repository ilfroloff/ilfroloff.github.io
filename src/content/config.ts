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

export interface HotLinkData {
  title: string;
  url: string;
  publishedAt: Date;
}

const hotlinks = defineCollection<HotLinkData>({
  type: "content",
});

export const collections = {
  articles,
  hotlinks,
};
