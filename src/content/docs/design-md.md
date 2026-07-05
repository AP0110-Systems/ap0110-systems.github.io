---
title: "design.md"
date: "2025-06-01"
year: "2025–26"
description: "An early Markdown convention for declaring a project's design system to design-aware coding agents."
author: "Google Labs (Stitch team)"
kind: "living"
tags: ["standards", "design-systems", "agent-readable"]
---

# design.md (Google Labs)

Source: https://stitch.withgoogle.com/docs/design-md/specification
Repo:   https://github.com/google-labs-code/design.md
Fetched: 2026-05-17
Status: alpha

## Purpose

DESIGN.md is a format specification for visual identity / design systems intended
to be consumed by coding agents. It "gives agents a persistent, structured
understanding of a design system" by combining machine-readable tokens with
human-readable rationale.

Originates from Stitch (Google Labs' "design with AI" product). Distributed
under `google-labs-code/design.md` on GitHub.

## File structure

Two layers in a single Markdown file:

1. YAML front matter (delimited by `---`) — design tokens (colors, typography,
   spacing, components) with exact machine-readable values.
2. Markdown body — `##`-headed sections explaining design philosophy and
   application guidance.

## Token categories

- **Colors** — hex sRGB, e.g. `"#1A1C1E"`.
- **Typography** — objects with `fontFamily`, `fontSize`, `fontWeight`,
  `lineHeight`, `letterSpacing`, font features.
- **Dimensions** — numbers with units (`px`, `em`, `rem`).
- **Token references** — `{path.to.token}` syntax for cross-referencing.
- **Components** — named UI elements mapping `backgroundColor`, `textColor`,
  `rounded`, `padding`, `size`, etc.

## Canonical section order

When present, sections must appear in this order:

1. Overview
2. Colors
3. Typography
4. Layout
5. Elevation & Depth
6. Shapes
7. Components
8. Do's and Don'ts

## Tooling

A CLI lint tool ships with the spec. Seven checks:

1. Broken token references
2. Missing primary colors
3. Contrast ratio compliance (WCAG AA)
4. Orphaned tokens
5. Token summaries
6. Missing required sections
7. Section order validation

## Interoperability

Tokens export to:
- Tailwind v3 / v4
- W3C Design Token Format (DTCG)

## Governance

- Owned by Google Labs (Stitch team).
- Repository: github.com/google-labs-code/design.md
- Version: `alpha` as of 2026-05-17.
