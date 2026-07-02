---
title: "AGENTS.md"
date: "2025-01-01"
year: "2024–25"
description: "An open Markdown format at a repository's root carrying the build, test, style, and security context a coding agent needs."
author: "Agentic AI Foundation (Linux Foundation)"
sourceUrl: "https://agents.md/"
kind: "living"
tags: ["standards", "coding-agents", "agent-readable"]
---

*See the [analysis of this document](/wiki/agents-md/) in the wiki.*

# AGENTS.md

Source: https://agents.md/
Fetched: 2026-05-17

## What it is

"A simple, open format for guiding coding agents." Functions as a
"README for agents: a dedicated, predictable place to provide the context"
that AI coding tools need. Complements README.md, which stays human-focused,
by carrying the "extra, sometimes detailed context coding agents need:
build steps, tests, and conventions."

## File format

- Plain Markdown at the repository root.
- Filename: `AGENTS.md`.
- No required fields; "use any headings you like."
- Nested `AGENTS.md` files supported in monorepos. The closest file to the
  edited code takes precedence; explicit user chat prompts override everything.

## Suggested sections

- Project overview
- Build and test commands
- Code style guidelines
- Testing instructions
- Security considerations
- Commit message guidelines
- PR guidelines

## Canonical example

```markdown
# AGENTS.md

## Setup commands
- Install deps: `pnpm install`
- Start dev server: `pnpm dev`
- Run tests: `pnpm test`

## Code style
- TypeScript strict mode
- Single quotes, no semicolons
- Use functional patterns where possible
```

## Adoption (Used by, as of 2026-05-17)

OpenAI (Codex), Google (Jules, Gemini CLI), Factory.ai, Aider, Block (goose),
opencode.ai, Zed, Warp, Microsoft (VS Code), Cognition (Devin, Windsurf),
UiPath, JetBrains (Junie), Cursor, RooCode, Kilo Code, Phoenix, Semgrep,
GitHub Copilot, Ona, Augment Code.

Used by 60k+ open-source projects on GitHub.

## Origin and governance

Originated from collaborative effort across OpenAI Codex, Amp, Jules, Cursor,
and Factory. Now stewarded by the **Agentic AI Foundation** under the
Linux Foundation. Copyright: "AGENTS.md a Series of LF Projects, LLC".

## Behavior

When testing commands are listed, agents "attempt to execute relevant
programmatic checks and fix failures before finishing the task."

## Migration

Existing docs can be renamed; symbolic-link backward compatibility is supported.
Example configurations exist for Aider (`.aider.conf.yml`) and Gemini CLI
(`.gemini/settings.json`).
