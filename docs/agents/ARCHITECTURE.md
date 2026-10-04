# Architecture Reference

## Project Identity

| Property              | Value                                                                |
| --------------------- | -------------------------------------------------------------------- |
| Project Name          | ilfroloff.github.io                                                  |
| Project Type          | Static personal blog (SSG)                                           |
| Primary Languages     | TypeScript, Astro (`.astro`), Markdown                               |
| Frameworks            | Astro 5.18, SolidJS 1.9 (interactive islands only), Tailwind CSS 4.3 |
| Package/Build Tooling | npm, Vite (via Astro), Volta (Node 22.23.3)                          |
| Runtime Targets       | Static HTML deployed to GitHub Pages                                 |
| Site URL              | `https://www.if-developer.fyi`                                       |

## Core Architectural Patterns

| Pattern                   | Evidence                                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Content Collections       | `src/content.config.ts` defines Zod schemas; Markdown files in `src/content/{articles,hotlinks}/`                               |
| File-based routing        | `src/pages/` maps directly to URL paths; dynamic routes via `[...slug].astro` and `tags/[tag].astro`                            |
| Islands architecture      | SolidJS components under `src/components/solid/` hydrated with `client:load`; all other components are server-rendered `.astro` |
| Layout composition        | `Layout.astro` (base shell) → `ArticleLayout.astro` (content detail)                                                            |
| Brief component hierarchy | `Brief.astro` (base) ← `BriefArticle.astro` / `BriefHotLink.astro` ← `BriefPerEntry.astro` (dispatcher)                         |
| Theme system              | Inline `<script is:inline>` in `Layout.astro` (FOUC prevention) + `ThemeToggle.tsx` (SolidJS island) + `dark` class on `<html>` |

## Repository Structure

```text
/
├── .github/workflows/       # CI: prettify (PR) + deploy (push to main)
├── .husky/                  # Git hooks (pre-commit → lint-staged)
├── public/                  # Static assets (favicon, robots.txt)
├── src/
│   ├── components/          # Astro components (UI building blocks)
│   │   ├── icons/           # Inline SVG icon components (.astro)
│   │   └── solid/           # SolidJS island components (.tsx)
│   │       └── icons/       # SolidJS SVG icon components
│   ├── content/             # Content collections (Markdown)
│   │   ├── articles/        # Blog articles ({timestamp}-{slug}.md)
│   │   └── hotlinks/        # Curated links with commentary ({timestamp}-{slug}.md)
│   ├── content.config.ts    # Collection definitions + Zod schemas + site config
│   ├── env.d.ts             # Environment variable type declarations
│   ├── layouts/             # Page layout shells
│   ├── pages/               # File-based routes
│   │   └── tags/            # Tag-filtered listing pages
│   ├── scripts/             # Client-side scripts (theme management)
│   ├── styles/              # Global CSS (Tailwind entry point)
│   └── utils/               # Shared utility functions
├── astro.config.mjs         # Astro configuration
├── eslint.config.mjs        # ESLint 9 flat config
├── prettier.config.mjs      # Prettier configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Key Technology Signals

| Category            | Evidence                                                                                 |
| ------------------- | ---------------------------------------------------------------------------------------- |
| Application/runtime | Astro 5.18 (SSG), SolidJS 1.9 (islands), Vite (bundler via Astro)                        |
| Styling             | Tailwind CSS 4.3 via `@tailwindcss/vite`, `@tailwindcss/typography` for prose            |
| Content             | Astro Content Collections with Zod validation, Markdown with YAML frontmatter            |
| Code highlighting   | `astro-expressive-code` with Monokai theme                                               |
| Fonts               | `@fontsource-variable/fira-code` (variable font, self-hosted)                            |
| Tooling             | ESLint 9 (flat config), Prettier 3, Husky, lint-staged, TypeScript 5.9                   |
| Deployment          | GitHub Actions → GitHub Pages via `withastro/action@v3`                                  |
| Node management     | Volta pinned to Node 22.23.3                                                             |
| Analytics           | Optional: Google Site Verification, Yandex Verification, Umami (via `PUBLIC_*` env vars) |

## Boundaries and Entry Points

- **Content boundary:** `src/content.config.ts` owns all collection schemas and
  site-level configuration exports (`siteConfig`, `articlesConfig`,
  `hotlinksConfig`).
- **Routing boundary:** `src/pages/` owns all route definitions. Dynamic routes
  use `getStaticPaths`.
- **Component boundary:** `src/components/` for Astro components;
  `src/components/solid/` for SolidJS islands.
- **Theme boundary:** Inline `<script is:inline>` in `src/layouts/Layout.astro`
  (FOUC prevention) + `src/scripts/theme.ts` (shared types) +
  `src/components/solid/ThemeToggle.tsx` (interactive toggle).
- **Environment boundary:** `src/env.d.ts` declares all `PUBLIC_*` environment
  variables; all are optional.

## Content Model

### Articles (`src/content/articles/`)

| Field         | Type             | Required |
| ------------- | ---------------- | -------- |
| `title`       | `string`         | Yes      |
| `slug`        | `string`         | Yes      |
| `publishedAt` | `date` (coerced) | Yes      |
| `brief`       | `string`         | No       |
| `thumbnail`   | `string`         | No       |
| `tags`        | `string[]`       | No       |

### Hotlinks (`src/content/hotlinks/`)

| Field         | Type             | Required |
| ------------- | ---------------- | -------- |
| `title`       | `string`         | Yes      |
| `slug`        | `string`         | Yes      |
| `publishedAt` | `date` (coerced) | Yes      |
| `brief`       | `string`         | No       |
| `thumbnail`   | `string`         | No       |
| `tags`        | `string[]`       | No       |
| `source`      | `string`         | Yes      |

## Notes

- No automated test framework is configured. Validation is via lint + build.
- Content is bilingual (Russian and English) but not structured with
  locale-based folders — language is per-entry.
- The `dist/` directory is the build output and is gitignored.
- `.astro/` contains generated types and is gitignored.
