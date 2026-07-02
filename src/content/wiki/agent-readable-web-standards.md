---
title: "Agent-Readable Web Standards"
date: "2026-06-29"
description: "A family of plain-text conventions at well-known paths that let machine readers understand how a site or repository wants to be read — the protocol surface of the Independent Internet."
type: "concept"
tags: ["standards", "agents", "web4"]
---

**Agent-readable web standards** are a family of plain-text and Markdown conventions placed at well-known paths that let machine readers — crawlers, indexers, LLMs, coding agents — understand how a site or repository wants to be read. Each is advisory, lives at a fixed path, and emerged as a response to a specific scaling failure of the existing web.

## The family

| Standard | Scope | Audience | Year | Governance |
|----------|-------|----------|------|------------|
| [robots.txt](/docs/robots-txt/) | site | crawlers | 1994 | IETF (RFC 9309) |
| [sitemap.xml](/docs/sitemap-xml/) | site | crawlers | 2005–06 | Google / Yahoo / Microsoft |
| [llms.txt](/docs/llms-txt/) | site | LLMs (inference) | 2024 | Answer.AI |
| [AGENTS.md](/docs/agents-md/) | repository | coding agents | 2024–25 | Linux Foundation |
| [design.md](/docs/design-md/) | design system | coding agents | 2025–26 | Google Labs (alpha) |

## What they share

They are plain-text-class formats at a well-known location; advisory rather than enforced; operator-authored with no central registry; and additive — each slots beside the others to form a stack. A site that fully participates ships `robots.txt`, `sitemap.xml`, and `llms.txt`; a repository adds `AGENTS.md` and `design.md`.

## Why this is the substrate of Web 4.0

The Independent Internet frames Web 4.0 as *Read-Write-Own-Control*. Control means the operator declares the rules of engagement and machines honor them — and these standards are the first concrete artifacts of that control. `robots.txt` turned crawler behavior into operator policy in 1994; the rest extend the same pattern to inference, implementation, and design. Because compliance is a property of well-behaved readers rather than the network, the model scales by convention — the same [decentralization](/wiki/decentralization/) logic the Web was born with. They also carry the [Semantic Web](/wiki/semantic-web/)'s machine-readable ambition forward into the age of agents. The complementary, workspace-level pattern is [Interpretable Context Methodology](/wiki/interpretable-context-methodology/).
