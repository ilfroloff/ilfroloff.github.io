export const defaultLocale = "en";
export const locales = ["en", "ru"] as const;
export type Locale = (typeof locales)[number];

/**
 * Returns the locale prefix for a given locale.
 * For the default locale ('en'), returns empty string.
 * For other locales, returns '/{locale}'.
 */
export function localePrefix(locale: Locale | string): string {
  if (locale === defaultLocale) return "";
  return `/${locale}`;
}

/**
 * Given a path (e.g. "/articles" or "/my-slug") and a locale,
 * returns the localized path (e.g. "/ru/articles" or "/ru/my-slug").
 */
export function localizedPath(path: string, locale: Locale | string): string {
  const prefix = localePrefix(locale);
  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${prefix}${normalizedPath}`;
}

/**
 * Given a localized path and its locale, returns the path for a target locale.
 * E.g. switchLocalePath("/ru/articles", "ru", "en") => "/articles"
 * E.g. switchLocalePath("/articles", "en", "ru") => "/ru/articles"
 */
export function switchLocalePath(
  currentPath: string,
  currentLocale: string,
  targetLocale: Locale,
): string {
  // Remove current locale prefix
  let basePath = currentPath;
  const currentPrefix = localePrefix(currentLocale);
  if (currentPrefix && basePath.startsWith(currentPrefix)) {
    basePath = basePath.slice(currentPrefix.length) || "/";
  }

  // Add target locale prefix
  return localizedPath(basePath, targetLocale);
}

/**
 * Extract locale from a URL path.
 * E.g. "/ru/articles" => "ru", "/articles" => "en"
 */
export function getLocaleFromPath(path: string): Locale {
  const segments = path.split("/").filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    return segments[0] as Locale;
  }
  return defaultLocale;
}
