# Plan: Stack Modernization + Mobile Bug Fix

## Context

The personal developer blog at `www.if-developer.fyi` (GitHub:
`ilfroloff/ilfroloff.github.io`) needs stack modernization and a mobile layout
bug fix. This is PR 1 of 2 — the second PR will handle i18n and content
translation.

**Current state:**

- Astro 3.3.2 (current: 5.x)
- Tailwind 3.3.3 (current: 4.x)
- ESLint 8.50.0 (current: 9.x)
- Node 20.9.0 via Volta (current LTS: 22.x)
- Mobile bug: text doesn't flow properly when tags are present

**This PR covers:**

- Stack modernization (Astro 5, Tailwind 4, ESLint 9, Node 22)
- Mobile layout bug fix

**Out of scope for this PR:**

- i18n routing
- Content translation
- Adding new content

- **Date:** 2026-10-03
- **Plan Author Model:** qwen3.7-plus
- **Planning Skill Version:** v1.10.2

## Original User Prompt

```text
I want to actualize https://github.com/ilfroloff/ilfroloff.github.io . Let's clone the repo into Projects folder first

Q1. c, but start with stack first. Also, fix issues with the website
Q2. the main goal so if to internationalize the content. I want to make the content English-first. I mean, for instamce,  opening https://www.if-developer.fyi/what-to-know-to-be-a-better-engineer/ would show English version and move Russian to another route (e.g https://www.if-developer.fyi/ru/what-to-know-to-be-a-better-engineer/ or what is the best practice so far)

Q1.
Bug: On mobile phone (check screenshot) text is not fully flows in the page when there a lot tags below. At least, it looks like that

Q2. a, but in PR, I will edit the texts myself.

Let's separate i18n + content from stack update + bug fixing. I need two PRs for each group
```

## Goals

- Modernize the tech stack to current versions (Astro 5, Tailwind 4, ESLint 9,
  Node 22 LTS)
- Fix mobile layout bug where text doesn't flow properly when tags are present
- Maintain visual parity and all existing functionality
- Keep all content in Russian (no i18n changes in this PR)

## Out of Scope

- i18n routing implementation
- Content translation
- Adding new articles or hotlinks
- Redesigning the site's visual appearance (beyond fixing the mobile bug)

## Risks & Considerations

| Risk                                                                             | Mitigation                                                                                                 |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Astro 3→5 migration has breaking changes (content collections API changed twice) | Follow Astro's official migration guides; test `astro build` + `astro check` after each major version bump |
| Tailwind 4 removes `tailwind.config.mjs` in favor of CSS-first config            | Migrate config to `src/styles/tailwind.css`; verify all custom styles still work                           |
| ESLint 8→9 requires flat config migration                                        | Convert `.eslintrc.cjs` to `eslint.config.mjs`; test `npm run lint`                                        |
| Mobile bug may be in multiple components                                         | Inspect `ArticleLayout.astro`, `BriefPerEntry.astro`, and tag-related components                           |

## Blocking Clarifications

None — all questions answered.

## Checklist

### 1. Stack Modernization

**Dependencies:** None

- [x] Task 1.1 - Update `package.json` dependencies: Astro 3.3.2 → 5.x, Tailwind
      3.3.3 → 4.x, ESLint 8.50.0 → 9.x, Node 20.9.0 → 22.x (Volta pin)
- [x] Task 1.2 - Migrate Astro content collections: update
      `src/content/config.ts` to Astro 5 Content Layer API (schemas,
      collections)
- [x] Task 1.3 - Migrate Tailwind config: remove `tailwind.config.mjs`, move
      config to CSS-first approach in `src/styles/tailwind.css` (or equivalent),
      update `@astrojs/tailwind` integration (deprecated in Astro 5)
- [x] Task 1.4 - Migrate ESLint config: convert `.eslintrc.cjs` to flat config
      `eslint.config.mjs`, update plugin versions
- [x] Task 1.5 - Update `astro.config.mjs` for Astro 5 (remove deprecated
      integrations, update plugin configs)
- [x] Task 1.6 - Run `npm install` and resolve any dependency conflicts
- [x] Task 1.7 - Run `npm run build` and fix any build errors
- [x] Task 1.8 - Run `npm run lint` and fix any lint errors
- [x] Task 1.9 - Run `astro check` and fix any type errors

### 2. Mobile Bug Fix

**Dependencies:** Phase 1

- [x] Task 2.1 - Inspect mobile layout: identify which component causes text to
      not flow properly when tags are present (likely `ArticleLayout.astro`,
      `BriefPerEntry.astro`, or tag container)
- [x] Task 2.2 - Fix CSS/layout issue: ensure content container takes full width
      on mobile, tags wrap properly without constraining text flow
- [x] Task 2.3 - Test fix on mobile viewport (use browser devtools or
      `npm run preview` with mobile emulation)
- [x] Task 2.4 - Verify fix doesn't break desktop layout

### 3. Verification

**Dependencies:** Phase 1, Phase 2

- [ ] Task 3.1 - Run `npm run build` and confirm no errors
- [ ] Task 3.2 - Run `npm run lint` and confirm no errors
- [ ] Task 3.3 - Run `astro check` and confirm no type errors
- [ ] Task 3.4 - Run `npm run preview` and manually verify:
  - All pages render correctly (index, articles, hotlinks, individual posts)
  - Mobile layout bug is fixed
  - Visual parity with original site (colors, fonts, spacing)
  - All internal links work
- [ ] Task 3.5 - Verify sitemap generation still works

## References

- Astro 5 migration guide: https://docs.astro.build/en/guides/upgrade-to/v5/
- Tailwind 4 migration: https://tailwindcss.com/docs/upgrade-guide
- ESLint 9 migration: https://eslint.org/docs/latest/use/migrate-to-9.0.0

## Notes

- **Deployment**: The site deploys to GitHub Pages from `main`. All work should
  stay on a feature branch until the user is ready to merge.
- **Mobile bug**: The screenshot shows text constrained to a narrow column on
  the left with empty space on the right. This is likely a flexbox/grid issue
  where the tag container is pushing content width. The fix will likely involve
  `flex-wrap`, `max-width`, or `width: 100%` on the content container.
- **Next PR**: After this PR is merged, the second PR will handle i18n routing
  and content translation.
