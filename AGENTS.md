# AI Agent Instructions for ilfroloff.github.io

## Primary Objective

Help implement safe, minimal, consistent changes in this Astro 5 static blog by
following project conventions first, then consulting deeper reference docs only
when needed.

## Read This First (Critical Rules)

### MUST keep changes minimal and localized

- Do not refactor unrelated code.
- Prefer additive, focused edits unless broader refactor is explicitly
  requested.

### MUST follow existing local patterns

- Match the style and structure already used in the same folder, package,
  module, or feature area.
- Content files follow `{ISO-timestamp}-{slug}.md` naming.
- Components use PascalCase; utilities use kebab-case.

### MUST verify with project-appropriate checks

- Run the narrowest useful validation for the affected area first.
- Use the repository's real lint, typecheck, and build commands (see
  `docs/agents/OPERATIONS.md`).

### MUST preserve existing test behavior

- This project has no automated test suite. Validate changes via `npm run lint`
  and `npm run build`.
- Treat existing tests as the specification. NEVER change what a test asserts in
  order to make a failing check pass.
- Mechanical edits (renames, import paths, fixture moves, formatting) need no
  justification.
- Behavioral edits (assertions, expected values, removed cases, `.skip` / `only`
  / `xit`) require one stated trigger:
  - the task explicitly changes the specification the test encodes;
  - the test asserts the bug being fixed;
  - the test is provably wrong or flaky, and the diagnosis is stated.
- NEVER delete, skip, or relax a test to reach a green suite. Report the failure
  instead.
- When behavioral test edits occur, end the task summary with a short **Test
  Change Report**: one line per test file covering what changed and which
  trigger applies. Omit the section entirely when no test behavior changed.

### MUST write clean and maintainable code

- **SOLID Principles:** Adhere to Single Responsibility, Open/Closed, Liskov
  Substitution, Interface Segregation, and Dependency Inversion principles where
  applicable.
- **No Magic Variables/Numbers:** Extract unnamed constants and strings into
  clearly named variables.
- **KISS (Keep It Simple, Stupid):** Avoid over-engineering. Choose the simplest
  implementation that satisfies the requirement.
- **YAGNI (You Aren't Gonna Need It):** Do not build abstractions, features, or
  layers for future use cases that are not currently required.
- **DRY (Don't Repeat Yourself):** Prevent duplicated code by extracting shared
  logic, while avoiding premature or overly complex abstractions.

### MUST keep comments load-bearing

- When you add or edit a comment, it must state a constraint the code cannot
  show.
- If a doc already owns that rationale, point to it by name and section instead
  of restating it.
- NEVER write a comment that narrates the change, justifies it to a reviewer, or
  restates what the next line does.
- Provenance is noise _except_ where provenance is the constraint — an
  undocumented, version-pinned, or reverse-engineered finding keeps its source
  and its version.
- NEVER retrofit or delete existing comments as a side effect of this rule.

### MUST avoid inventing architecture

- Reuse existing layers, utilities, and conventions before introducing new ones.
- If the repository is ambiguous, inspect more code or ask one short clarifying
  question.

### MUST self-heal stale guidance

- When repository changes remove or rename code, commands, paths, or workflows,
  explicitly use the `project-agent-docs` skill to update adjacent agent docs in
  the same task.
- Remove stale references instead of leaving historical instructions that no
  longer match the codebase.

### MUST respect the SolidJS boundary

- Only files under `src/components/solid/` use SolidJS (JSX, signals, `client:*`
  directives).
- All other components are `.astro` files — do not introduce SolidJS patterns
  outside the `solid/` directory.

### MUST use consistent type imports

- ESLint enforces `@typescript-eslint/consistent-type-imports`. Always use
  `import type` for type-only imports.

### SHOULD avoid unnecessary dependencies

- Reuse existing libraries and tooling whenever they already cover the need.

## Execution Checklist (Every Task)

1. Understand the request and inspect similar code paths first.
2. Implement the smallest viable change.
3. Reuse existing utilities, patterns, and modules before adding new ones.
4. Keep naming, imports, and file placement consistent with the local area.
5. Validate with checks proportional to the change.
6. MANDATORY SELF-HEALING STAGE: Revalidate referenced files, commands, and
   patterns against the current worktree before handoff. If guidance is stale,
   explicitly use the `project-agent-docs` skill to update `AGENTS.md` and
   `docs/agents/*` in the same task.

## Progressive Disclosure Navigation

Start here, then open only what you need:

- [docs/agents/README.md](docs/agents/README.md) - navigation and section
  ownership
- [docs/agents/ARCHITECTURE.md](docs/agents/ARCHITECTURE.md) - architecture,
  structure, stack, runtime boundaries
- [docs/agents/PATTERNS.md](docs/agents/PATTERNS.md) - repeated implementation
  patterns and coding conventions
- [docs/agents/OPERATIONS.md](docs/agents/OPERATIONS.md) - scripts, key files,
  and validation checklist

## AI Agent Guidelines

### Problem-Solving Approach

1. Understand: inspect the relevant area and nearby examples.
2. Propose: choose the smallest design that fits the existing architecture.
3. Implement: keep edits consistent, typed where applicable, and easy to review.
4. Validate: run focused checks; add tests for new behavior, and change existing
   tests only under the test-integrity rule above.

### When Uncertain

- Prefer repository consistency over generic best practices.
- Ask one clarifying question before making a large or ambiguous change.

### Additional Behavior Clarifications

- Do not modify files outside repository scope unless explicitly requested.
- Flag operations requiring secrets, privileged access, or external credentials.
- Avoid destructive actions unless the user explicitly approves them.

## Minimal Ready Checklist

- Run `npm run lint` (typecheck + ESLint).
- Run `npm run build` to verify the site compiles.

---

Use the `project-agent-docs` skill to refresh this documentation whenever the
project's structure or workflows change.
