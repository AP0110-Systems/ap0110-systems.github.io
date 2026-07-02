---
title: "robots.txt — Robots Exclusion Protocol"
date: "1994-02-01"
description: "The original machine-readable web standard: a plain-text file at a site's root telling crawlers which paths they may visit. Advisory, not enforced."
type: analysis
tags: ["standards", "crawlers", "agent-readable"]
---


## Summary

The Robots Exclusion Protocol is the oldest [agent-readable web standard](/wiki/agent-readable-web-standards/). Proposed by Martijn Koster in February 1994 — after a poorly behaved crawler caused an inadvertent denial-of-service on his server — it is a plain-text file at `/robots.txt` declaring which URL paths each crawler may or may not visit. It became a de facto standard within months and was finally formalized as IETF **RFC 9309** in September 2022.

## The load-bearing property: advisory, not enforced

RFC 9309 is explicit that its rules "are not a form of access authorization." `robots.txt` is a polite request that well-behaved crawlers honor; it is not access control. That advisory-by-convention model is exactly how a [decentralized](/wiki/decentralization/) web coordinates at scale — each origin self-declares its policy, with no central registry and no gatekeeper.

## Why it matters here

`robots.txt` turned crawler behavior into operator-declared policy in 1994 — three decades before the Independent Internet needed a name for *control*. In the 2020s it became the de facto consent layer for AI-training crawlers (`GPTBot`, `Google-Extended`, `ClaudeBot`). It is the ur-example of the [agent-readable web standards](/wiki/agent-readable-web-standards/) family; its positive complement is the [Sitemaps Protocol](/docs/sitemap-xml/).

> Part of the AP0110.ORG source library. See the [wiki overview](/wiki/).

---
*Full source text: [read the original document](/docs/robots-txt/).*
