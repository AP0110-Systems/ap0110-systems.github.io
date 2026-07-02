---
title: "LLM-Maintained Wiki"
date: "2026-06-29"
description: "A persistent, interlinked knowledge base that a language model builds and maintains — integrating each source once, rather than re-deriving answers from raw documents on every query."
type: "concept"
tags: ["knowledge-management", "agents", "memex"]
---

An **LLM-maintained wiki** is a persistent, interlinked Markdown knowledge base that a language model writes and keeps current. Each new source is read once and *integrated* — entity and concept pages updated, summaries revised, contradictions flagged — so the knowledge compounds instead of being rediscovered on every query. The canonical statement of the pattern is Karpathy's [LLM Wiki](/docs/llm-wiki/) essay.

## Against RAG

Retrieval-augmented generation retrieves raw chunks at query time and generates an answer; nothing accumulates, and subtle cross-document synthesis is re-derived every time. The LLM-maintained wiki inverts this: queries hit the *wiki*, where the cross-references already exist and the synthesis already reflects everything ingested. The maintenance burden that defeats human-kept wikis is near-zero for a model that doesn't get bored.

## Three layers, three operations

The architecture is immutable *raw sources*, the LLM-owned *wiki*, and a *schema* config that turns the model into a disciplined maintainer. The operations are **ingest** (integrate a new source), **query** (answer from the wiki, optionally filing the answer back), and **lint** (health-check for contradictions, stale claims, orphans, and gaps).

## Lineage and kin

The pattern is the realization of [Vannevar Bush](/wiki/vannevar-bush/)'s 1945 Memex — associative trails between documents — with the maintenance problem finally solved. It is a sibling of [Interpretable Context Methodology](/wiki/interpretable-context-methodology/) (the workspace shape of agentic work) and the [agent-readable web standards](/wiki/agent-readable-web-standards/) (how the web exposes itself to agents): all are file-native, plain-text, and Markdown-first. It also extends the [Semantic Web](/wiki/semantic-web/)'s machine-readable ambition to a personal knowledge store. This site's own wiki is an instance of the pattern.

> 🔍 **Gap:** The pattern is young — there is no published, longitudinal account of how an LLM-maintained wiki holds up over months of ingests without accumulating contradictions or drift. The [lint](/docs/llm-wiki/) operation is the proposed safeguard, but its effectiveness at scale is unproven.
