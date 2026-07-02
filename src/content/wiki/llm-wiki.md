---
title: "LLM Wiki: A Pattern for Building Personal Knowledge Bases Using LLMs"
date: "2026-05-18"
description: "Karpathy's pattern for an LLM-maintained wiki: instead of re-deriving answers from raw documents on every query (RAG), the model integrates each source into a persistent, compounding knowledge base."
type: analysis
tags: ["knowledge-management", "llm", "agents"]
---


## Summary

Published as a public gist by Andrej Karpathy, this short essay describes a pattern for personal knowledge bases built and maintained by a language model. It is positioned against retrieval-augmented generation (RAG): where RAG rediscovers knowledge from raw chunks on every query and accumulates nothing, an [LLM-maintained wiki](/wiki/llm-maintained-wiki/) integrates each new source once into a persistent, interlinked set of Markdown pages — updating entity and concept pages, revising summaries, flagging contradictions. "The knowledge is compiled once and kept current, not re-derived on every query."

## Key ideas

- **Three layers** — immutable *raw sources* (human-curated), the *wiki* (LLM-owned Markdown), and the *schema* (a `CLAUDE.md` / `AGENTS.md`-style config of conventions and workflows).
- **Three operations** — ingest, query, and lint.
- **Two indexes** — a content-oriented `index.md` and a chronological `log.md`.
- The maintenance bottleneck that defeats human wikis is bookkeeping, which an LLM does for near-zero cost.

## Why it matters

The essay closes by framing LLM-maintained wikis as the delivery of [Vannevar Bush](/wiki/vannevar-bush/)'s 1945 Memex vision — "the part he couldn't solve was who does the maintenance; the LLM handles that." It is the canonical statement of the [LLM-Maintained Wiki](/wiki/llm-maintained-wiki/) pattern, a cousin of [Interpretable Context Methodology](/wiki/interpretable-context-methodology/) and the [agent-readable web standards](/wiki/agent-readable-web-standards/) — all file-native, plain-text, Markdown-first. This very wiki is built on the pattern. Only an original summary and the canonical link are kept here.

> Part of the AP0110.ORG source library. See the [wiki overview](/wiki/).

---
*Full source text: [read the original document](/docs/llm-wiki/).*
