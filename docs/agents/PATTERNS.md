# Implementation Patterns

## High-Value Conventions

- Capture only conventions that repeat in the codebase.
- Prefer concrete examples from real files.

## Core Patterns

### Content File Naming

All content Markdown files follow the pattern:

```text
{ISO-8601-timestamp}-{slug}.md
```

Examples:

- `2023-05-07T10:04:00.000Z-webassembly-javascript.md`
- `2023-06-10T00:00:00.000Z-juno-db.md`

The timestamp encodes the `publishedAt` date; the slug becomes the URL path
segment.

### Content Frontmatter

Every content file starts with YAML frontmatter matching the Zod schema in
`src/content.config.ts`:

```yaml
---
title: "Entry Title"
slug: url-slug
publishedAt: 2023-05-07T10:04:00.000Z
brief: Optional short description
thumbnail: Optional image path
tags:
  - tag-one
  - tag-two
---
```

Hotlinks additionally require a `source` field (URL to the original resource).

### Brief Component Hierarchy

Listings use a three-tier component pattern:

```text
BriefPerEntry.astro  →  dispatches by collection name
  ├── BriefArticle.astro  →  wraps Brief.astro with article-specific props
  └── BriefHotLink.astro  →  wraps Brief.astro with hotlink-specific props (source, rendered content)
        └── Brief.astro  →  base presentation (title, date, tags, markdown body)
```

When adding a new collection, follow this pattern: create a
`Brief{Collection}.astro` adapter and add a case to `BriefPerEntry.astro`.

### Dynamic Route Pattern

Dynamic pages use `getStaticPaths` with content collection entries:

```typescript
// src/pages/[...slug].astro
export const getStaticPaths = (async () => {
  const allArticles = await getCollection("articles");
  const allHotLinks = await getCollection("hotlinks");
  const sorted = [...allArticles, ...allHotLinks].sort(
    arrayDateComparator((item) => item.data.publishedAt),
  );
  return sorted.map((entry) => ({
    params: { slug: entry.data.slug },
    props: { entry },
  }));
}) satisfies GetStaticPaths;
```

### Date Sorting

All listings sort entries by `publishedAt` descending using the shared utility:

```typescript
import arrayDateComparator from "src/utils/array-date-comparator";

entries.sort(arrayDateComparator((item) => item.data.publishedAt));
```

The default direction is `-1` (newest first).

### Theme System

Three files cooperate to manage dark/light mode:

1. **`src/layouts/Layout.astro`** — contains `<script is:inline>` that reads
   `localStorage` or `prefers-color-scheme`, sets `dark` class on `<html>`
   immediately to prevent FOUC.
2. **`src/scripts/theme.ts`** — exports `Theme` enum and `getDefaultTheme()`.
   Shared between init and SolidJS component.
3. **`src/components/solid/ThemeToggle.tsx`** — SolidJS island (`client:load`).
   Toggles `dark` class and persists to `localStorage`.

### SolidJS Island Boundary

Only files under `src/components/solid/` use SolidJS patterns (JSX, signals,
`createSignal`, `onMount`). The `astro.config.mjs` scopes SolidJS processing:

```javascript
solidJs({
  include: ["**/solid/**/*"],
});
```

All other interactive behavior uses Astro's built-in features or inline scripts.

### Import Path Convention

All imports use the `src/` prefix (enabled by `baseUrl: "./"` in
`tsconfig.json`):

```typescript
import Layout from "src/layouts/Layout.astro";
import arrayDateComparator from "src/utils/array-date-comparator";
```

### Type-Only Imports

ESLint enforces `@typescript-eslint/consistent-type-imports`. Always use
`import type` for type-only imports:

```typescript
import type { CollectionEntry } from "astro:content";
import type { HotLinkData } from "src/content.config";
```

## Naming and Layout Conventions

| Thing              | Convention                     | Example                                              |
| ------------------ | ------------------------------ | ---------------------------------------------------- |
| Astro components   | PascalCase, `.astro` extension | `BriefArticle.astro`, `HeaderLink.astro`             |
| SolidJS components | PascalCase, `.tsx` extension   | `ThemeToggle.tsx`, `Sun.tsx`                         |
| Utility modules    | kebab-case, `.ts` extension    | `array-date-comparator.ts`                           |
| Content files      | `{timestamp}-{slug}.md`        | `2023-05-07T10:04:00.000Z-webassembly-javascript.md` |
| Page routes        | kebab-case, `.astro` extension | `articles.astro`, `hotlinks.astro`                   |
| Config files       | `*.config.mjs` at root         | `astro.config.mjs`, `eslint.config.mjs`              |

## Styling Patterns

- **Tailwind utility classes** for all layout and visual styling. No separate
  CSS files per component.
- **`@tailwindcss/typography`** plugin for prose content (articles, hotlinks).
  Applied via `prose` class.
- **Dark mode** via `dark:` variant, toggled by `dark` class on `<html>`.
- **Global styles** are minimal — only `src/styles/global.css` which imports
  Tailwind and sets the font family.
- **Component-scoped styles** use `<style is:global>` when overriding prose
  defaults (e.g., removing code block backticks).

## Error Handling and Validation

- Content schema validation is handled by Astro Content Collections + Zod at
  build time.
- Invalid frontmatter causes build failures — no runtime error handling needed
  for content.
- Environment variables are typed in `src/env.d.ts` and accessed via
  `import.meta.env`. All are optional; components use conditional rendering.

## Notes

- No test framework is configured. Validation is via `npm run lint` and
  `npm run build`.
- Content is bilingual (Russian and English) at the entry level — no locale
  routing or i18n framework.
