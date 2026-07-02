---
title: "AGENTS.md"
date: "2025-01-01"
description: "An open Markdown format at a repository's root carrying the build, test, style, and security context a coding agent needs."
type: analysis
tags: ["standards", "coding-agents", "agent-readable"]
---


## Summary

`AGENTS.md` is "a simple, open format for guiding coding agents." It is a plain Markdown file at a repository's root carrying the context that doesn't belong in a human-facing README — setup and test commands, code style, security considerations. It has no required fields; the closest file to the edited code wins, and an explicit user instruction overrides everything. Adoption spans tens of thousands of repositories and most major coding-agent tools.

## How it fits

AGENTS.md moves the [agent-readable web standards](/wiki/agent-readable-web-standards/) pattern from the *site* level to the *repository* level: an operator-authored, well-known-path file that a machine reader honors. It is notable for being the first of the family to move to a neutral, vendor-independent home — the Agentic AI Foundation under the Linux Foundation — the way the W3C hosts HTML and CSS.

## Why it matters here

AGENTS.md is the repository-scope sibling of [llms.txt](/docs/llms-txt/) and the bridge to [Interpretable Context Methodology](/wiki/interpretable-context-methodology/), which generalizes file-native context delivery from the web to the workspace. It is part of the protocol surface of the Independent Internet.

> Part of the AP0110.ORG source library. See the [wiki overview](/wiki/).

---
*Full source text: [read the original document](/docs/agents-md/).*
