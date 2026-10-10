import { siteConfig, articlesConfig, hotlinksConfig } from "src/content.config";
import type { Locale } from "src/utils/i18n";

interface SiteLabels {
  me: string;
  description: string;
  articlesLabel: string;
  articlesDescription: string;
  hotlinksLabel: string;
  hotlinksDescription: string;
}

const labels: Record<Locale, SiteLabels> = {
  en: {
    me: siteConfig.me,
    description: siteConfig.description,
    articlesLabel: articlesConfig.label,
    articlesDescription: articlesConfig.description,
    hotlinksLabel: hotlinksConfig.label,
    hotlinksDescription: hotlinksConfig.description,
  },
  ru: {
    me: siteConfig.me,
    description:
      "Блог IF Developer. Здесь я делюсь своими мыслями, пишу статьи и полезные ссылки",
    articlesLabel: "Статьи",
    articlesDescription: "Статьи написанные мной",
    hotlinksLabel: "Горячие ссылки",
    hotlinksDescription:
      "Ссылки на статьи/видео, которые я считаю полезными, с моими комментариями",
  },
};

export function getLabels(locale: Locale): SiteLabels {
  return labels[locale] ?? labels.en;
}
