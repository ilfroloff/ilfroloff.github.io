# Operations Reference

## Common Commands

```bash
# Development
npm run dev              # Start local dev server at localhost:4321
npm run start            # Alias for dev

# Build and preview
npm run build            # Build production site to ./dist/
npm run preview          # Preview the built site locally

# Linting and formatting
npm run lint             # Run typecheck + ESLint
npm run lint:ts          # TypeScript typecheck only (tsc --noEmit)
npm run lint:eslint      # ESLint only (NODE_ENV=production)
npm run lint:fix         # Auto-fix ESLint issues + Prettier format *.md

# Astro CLI
npm run sync             # Generate TypeScript types for content collections
npx astro ...            # Run Astro CLI commands (e.g., astro add, astro check)

# Git hooks
npm run prepare          # Install Husky hooks (runs automatically on npm install)
```

## Key Files

| File                             | Purpose                                                                                             |
| -------------------------------- | --------------------------------------------------------------------------------------------------- |
| `astro.config.mjs`               | Astro configuration: integrations (SolidJS, Expressive Code, Sitemap), redirects, Markdown settings |
| `src/content.config.ts`          | Content collection schemas (Zod), site config exports, type exports                                 |
| `src/env.d.ts`                   | TypeScript declarations for `PUBLIC_*` environment variables                                        |
| `eslint.config.mjs`              | ESLint 9 flat config: TypeScript, Astro, JSX a11y, Prettier integration                             |
| `prettier.config.mjs`            | Prettier config: Astro parser plugin, Markdown prose wrapping                                       |
| `tsconfig.json`                  | TypeScript config: strict mode, `baseUrl: "./"`, SolidJS JSX source                                 |
| `src/styles/global.css`          | Tailwind entry point + typography plugin + font family override                                     |
| `src/layouts/Layout.astro`       | Contains inline `<script is:inline>` for FOUC prevention (runs before hydration)                    |
| `src/scripts/theme.ts`           | Shared theme types and defaults                                                                     |
| `.github/workflows/deploy.yml`   | GitHub Pages deployment (push to `main`)                                                            |
| `.github/workflows/prettify.yml` | Auto-fix and commit formatting on PRs to `main`                                                     |
| `.husky/pre-commit`              | Runs `lint-staged` before each commit                                                               |
| `package.json` → `lint-staged`   | Staged file rules: ESLint fix for code, Prettier for Markdown                                       |
| `public/robots.txt`              | Search engine crawling rules                                                                        |

## Environment Variables

All environment variables are optional and used for analytics/verification:

| Variable                          | Purpose                                            |
| --------------------------------- | -------------------------------------------------- |
| `PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console verification meta tag        |
| `PUBLIC_YANDEX_SITE_VERIFICATION` | Yandex Webmaster verification meta tag             |
| `PUBLIC_UMAMI_WEBSITE_ID`         | Umami analytics website ID (loads script when set) |

These are injected at build time via GitHub Actions repository variables (see
`deploy.yml`).

## Validation Checklist Before Handover

```bash
# 1. Typecheck + lint
npm run lint

# 2. Build the site (catches content schema errors, broken imports, etc.)
npm run build

# 3. (Optional) Preview the built site
npm run preview
```

## CI/CD Workflows

### Deploy (`deploy.yml`)

- **Trigger:** Push to `main` branch or manual dispatch.
- **Steps:** Checkout → Install, build, and upload via `withastro/action@v3` →
  Deploy to GitHub Pages via `actions/deploy-pages@v4`.
- **Environment:** `github-pages` with `PUBLIC_*` variables from repository
  vars.

### Prettify (`prettify.yml`)

- **Trigger:** Pull requests to `main`.
- **Steps:** Checkout → Setup Node 22 → `npm install` → `npm run lint:fix` →
  Auto-commit changes with message `[refactored] prettify files`.
- **Purpose:** Ensures consistent formatting across contributions.

## Git Hooks

- **Pre-commit:** Runs `lint-staged` via Husky.
  - `*.{mjs,cjs,ts,tsx,astro}` → `eslint --fix`
  - `*.{md,mdx}` → `prettier --write`

## Node Version

- Managed by **Volta** (pinned to Node 22.23.3 in `package.json`).
- CI uses Node 22 explicitly.

## Operational Notes

- The `dist/` directory is the build output and is gitignored. Never commit
  build artifacts.
- The `.astro/` directory contains generated types and is gitignored. Run
  `npm run sync` to regenerate if types are stale.
- Content schema changes require updating `src/content.config.ts` and may
  require updating existing Markdown files to match the new schema.
- Adding a new content collection requires: (1) schema + collection definition
  in `content.config.ts`, (2) content directory under `src/content/`, (3)
  listing page under `src/pages/`, (4) optional brief component.
