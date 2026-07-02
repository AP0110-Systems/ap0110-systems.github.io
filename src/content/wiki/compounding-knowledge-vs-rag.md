---
title: "Compounding Knowledge vs. Retrieval"
date: "2026-06-30"
description: "Why an LLM-maintained wiki accumulates understanding where retrieval-augmented generation re-derives it on every query."
type: "analysis"
tags: ["analysis", "knowledge-management"]
---

Two ways to put a language model to work over a body of documents sit behind much of this wiki's later material — and they compound very differently.

## Retrieval vs. integration

Retrieval-augmented generation (RAG) fetches relevant chunks from raw documents at query time and generates an answer. It works, but nothing accumulates: a subtle question spanning several sources is reassembled from fragments every single time, and the cross-references are only ever rediscovered.

The [LLM-maintained wiki](/wiki/llm-maintained-wiki/) — Karpathy's [pattern](/docs/llm-wiki/) — inverts this. Each source is read once and *integrated* into a persistent, interlinked artifact: entity pages updated, summaries revised, contradictions flagged. Queries then hit the wiki, where the synthesis already exists.

## The older idea underneath

The bottleneck on any compounding knowledge base was never the reading or the thinking — it was the bookkeeping, which is why humans abandon wikis. That is precisely the part a model does for free. The result is the delivery of [Vannevar Bush](/wiki/vannevar-bush/)'s [Memex](/docs/as-we-may-think/): private, curated, with the links between documents as valuable as the documents themselves.

The pattern is kin to [Interpretable Context Methodology](/wiki/interpretable-context-methodology/) (context laid out on disk) and the [Semantic Web](/wiki/semantic-web/) (meaning made machine-readable) — all file-native, all favoring a durable structure over re-derivation. This wiki is itself an instance of the pattern.
