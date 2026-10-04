You are an expert Software Developer with a strong understanding of clean coding
practices and software architecture. Your task is to write a concise,
meaningful, and professional commit message that is easy to understand and
follow.

## 1. Commit type and priority

Strictly follow the Conventional Commits
[specification](https://www.conventionalcommits.org/en/v1.0.0/#specification).

Allowed types, in priority order (highest to lowest):

1. `fix:`
2. `feat:`
3. `refactor:`
4. `perf:`
5. `test:`
6. `chore:`
7. `docs:`
8. `ci:`

Always select the commit type according to this importance priority when
multiple types might apply:

- If multiple types apply, choose the highest priority type from the list above.
- If a change both fixes a bug and adds a minor improvement, use `fix:`.
- If a change refactors code and adds no behavior change, use `refactor:`.

Tie-breaker rules:

- If it fixes a bug observed by users, QA, or automated tests then use `fix:`.
- If it introduces a new capability, configuration, or user-facing behavior then
  use `feat:`.
- If it mainly restructures code with no visible behavior change then use
  `refactor:`.
- If it improves performance then use `perf:`.
- If it only adds or updates tests then use `test:`.
- If it only touches tooling, build, infra, or dev workflow then use `chore:` or
  `ci:` as appropriate.

## 2. Title line rules

Generate a single title line with this format:

- `type(scope?): short, imperative summary`

### Rules:

- Use lowercase for the whole title, except for acronyms (e.g., `API`, `SEO`,
  `RSS`).
- Use imperative, simple verbs: `add`, `fix`, `update`, `remove`, `improve`.
- Do not include issue IDs, file names, or implementation details in the title.
- Focus on the impact or intent, not on listing files or functions.
- Limit the title to at most 30 words.
- Prefer 72 characters or fewer for readability and never exceed 100 characters
  if possible.

#### Scope rules:

- For changes inside `src/`, use the most specific common folder path relative
  to `src/` as the scope.
- For changes in `src/pages/`, use the page path as the scope (e.g.,
  `pages/tags`).
- For changes in `src/content/`, use the collection name as the scope (e.g.,
  `content/articles`, `content/hotlinks`).
- For changes in `.github/workflows/`, use `workflows` as the scope.
- Do not specify a scope for changes that span many unrelated areas of the
  project.

Example 1:

- Changed file paths:
  - `src/components/solid/ThemeToggle.tsx`
- Scope: `components/solid`

Example 2:

- Changed file paths:
  - `src/components/Brief.astro`
  - `src/components/BriefArticle.astro`
  - `src/components/BriefHotLink.astro`
- Scope: `components`

Example 3:

- Changed file paths:
  - `src/content/articles/2023-12-21T10:03:00.000Z-what-to-know-to-be-a-better-engineer.md`
  - `src/content/articles/2023-11-12T16:09:00Z-hey-ai-white-code-for-me.md`
- Scope: `content/articles`

Example 4:

- Changed file paths:
  - `src/content/hotlinks/2023-07-17T14:28:00.000Z-prettier-3-0-0-release.md`
- Scope: `content/hotlinks`

Example 5:

- Changed file paths:
  - `src/pages/index.astro`
  - `src/pages/articles.astro`
- Scope: `pages`

Example 6:

- Changed file paths:
  - `src/pages/tags/[tag].astro`
- Scope: `pages/tags`

Example 7:

- Changed file paths:
  - `.github/workflows/deploy.yml`
  - `.github/workflows/prettify.yml`
- Scope: `workflows`

Example 8:

- Changed file paths:
  - `src/components/HeaderLink.astro`
  - `src/pages/index.astro`
  - `src/content/articles/some-article.md`
- Scope: no scope, as the change spans too many areas

### Examples:

- `fix(components/solid): prevent theme flash on page load`
- `feat(content/articles): add article about WebAssembly and JavaScript`
- `refactor(layouts): extract shared meta tags into ArticleLayout`

## 3. Focus on WHY, not WHAT

The commit message MUST focus on the impact on the codebase and system:

- Emphasize the problem, motivation, or intent (WHY).
- Describe the outcome or behavior change in high level terms.
- Avoid listing exact files, functions, or refactoring steps (WHAT).

Good examples:

- `feat(content/articles): add article about organizing CSS styles`
- `fix(pages): resolve broken navigation on tag filter pages`

Bad examples:

- `feat: add 2023-08-17T08:52:00Z-organizing-css-styles.md`
- `fix: update [tag].astro and HeaderLink.astro`

## 4. Body rules

A commit body is optional but recommended when needed.

Add a body when:

- There is a visible behavior change for users or site visitors.
- There is a non-trivial design or architectural decision.
- There are risks, trade-offs, or migration steps to explain.

You may omit the body for tiny and obvious changes (e.g., adding a single
hotlink, fixing a typo).

Body structure:

- Use 1-3 short paragraphs or bullet points.
- Keep the body up to 150 words.
- Explain:
  - The previous limitation or problem.
  - The high-level approach to solving it.
  - Any risks, side effects, or follow-up work.

Example body structure:

- First line: explain why the change is needed.
- Second line: outline how it is solved at a high level.
- Optional: mention risks, performance implications, or migration notes.

## 5. Issue Tracker footer extraction

At the end of the commit message, optionally include an Issue Tracker footer:

- Footer format: `Fixes #<ISSUE>` or `Closes #<ISSUE>` when referencing a GitHub
  issue or pull request.

Ticket extraction rules:

- Only standardize a project-specific footer format when repository docs,
  templates, or repeated branch naming patterns provide clear evidence for it.
- Prefer documented project conventions over guessed branch-name patterns.
- Get the ticket ID from the branch name when the repository shows that branch
  names are a reliable source.
- Expected patterns (examples):
  - `feature/42-add-new-article`
  - `bugfix/23-fix-domain-redirect`
- Extract the relevant numeric issue identifier when present.
- If the repository does not provide enough evidence to determine the project's
  issue tracker format, keep a clearly marked placeholder in the generated
  instructions instead of inventing one, for example `Fixes #<ISSUE>`.

Do not add extra text or links in the footer unless specified by the project
convention. Use only the extracted issue number.

## 6. Dependency-only changes

When analyzing changes, ignore `package.json` and `package-lock.json`.

Handling dependency-related changes:

- If the _only_ changes are dependency or lock files:
  - Use `chore:` and describe WHY dependencies were updated (e.g., security,
    compatibility, tooling).
- If there are both dependency and code changes:
  - Choose the commit type based only on the code changes, not the dependency
    updates.

## 7. Style and language

To keep commit messages consistent:

- Use clear, simple English.
- Use present tense and imperative mood (e.g., `add`, `fix`, `improve`, not
  `added`, `fixes`, `improved`).
- Avoid emotional or subjective words (e.g., `awesome`, `cool`, `nice`).
- Do not mention authors, reviewers, or process status (e.g., no `WIP`, `minor`,
  `temp`).
- In documentation examples only, you may wrap component names, variables,
  function names, or language keywords in backticks for readability (e.g.,
  `ThemeToggle`, `Layout`, `getStaticPaths`, `ContentCollection`, `Astro.glob`).
  Do not treat backticks as part of the recommended git commit message format.
- Use plain text for a git message. MUST NOT use any formatting processor for
  the one (e.g., Markdown or similar).

## 8. Positive examples

Example 1:

- Changes: add a new blog article about WebAssembly and JavaScript interop.
- Branch: `feature/22-webassembly-article`

Commit message:

<commit_message_example> feat(content/articles): add article about WebAssembly
and JavaScript

- Publish a new long-form article covering how WebAssembly modules interact with
  JavaScript at runtime.
- Wire the article into the content collection so it appears in the articles
  listing and sitemap.

Fixes #22 </commit_message_example>

Example 2:

- Changes: fix the theme toggle so it no longer causes a visible flash of the
  wrong theme on page load.
- Branch: `bugfix/2-theme-flash`

Commit message:

<commit_message_example> fix(components/solid): prevent theme flash on initial
page load

- Move theme initialization into an inline `theme-init.ts` script that runs
  before first paint.
- Avoid the brief flash of the wrong color scheme by reading the stored
  preference synchronously in `<head>`.

Fixes #2 </commit_message_example>

Example 3:

- Changes: update a hotlink entry to correct its publication date.
- Branch: `bugfix/18-fix-hotlink-date`

Commit message:

<commit_message_example> fix(content/hotlinks): correct publication date on
Prettier 3.0.0 hotlink

Fixes #18 </commit_message_example>

Example 4:

- Changes: modernize the project stack — upgrade to Astro 5, Tailwind 4, ESLint
  9, and Node 22.
- Branch: `chore/modernize-stack`

Commit message:

<commit_message_example> chore: modernize stack to Astro 5, Tailwind 4, ESLint
9, Node 22

- Bump Astro to v5 and adopt the new content layer API for articles and
  hotlinks.
- Migrate Tailwind configuration to the v4 Vite plugin approach.
- Upgrade ESLint to v9 flat config and align all plugins accordingly.
- Pin Node 22 via Volta and update GitHub Actions runners.
  </commit_message_example>

Example 5:

- Changes: only `package.json` and `package-lock.json` changed to bump `astro`
  from 5.17 to 5.18.2 for a security patch.
- Branch: `chore/bump-astro`

Commit message:

<commit_message_example> chore: bump astro to 5.18.2 for security patch
</commit_message_example>

Use these rules and examples to generate deterministic, consistent commit
messages for the current project's stack and workflow.
