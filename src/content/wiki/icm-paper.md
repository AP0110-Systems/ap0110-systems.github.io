---
title: "Interpretable Context Methodology: Folder Structure as Agent Architecture"
date: "2026-03-01"
description: "Van Clief and McDermott's paper arguing that a well-organized folder hierarchy can replace a multi-agent framework: the folder structure is the orchestration."
type: analysis
tags: ["agents", "context-engineering", "icm"]
---


## Summary

Published on arXiv in March 2026 (arXiv:2603.16021), this paper by [Jake Van Clief](/wiki/jake-van-clief/) and [David McDermott](/wiki/david-mcdermott/) introduces **Interpretable Context Methodology (ICM)** — the discipline of using filesystem layout as the orchestration mechanism for a multi-step LLM workflow, in place of a code-level multi-agent framework. Its load-bearing claim: if the prompts and context for each stage already exist as files in a well-organized folder hierarchy, you don't need a coordination framework — you need one agent that reads the right files at the right moment.

## Why it matters

The paper applies fifty-year-old engineering ideas — Unix pipelines, one-job-per-stage, plain text as the universal interface — to a contemporary problem: delivering scoped context to a model across stages without a monolithic prompt. It is the canonical source for [Interpretable Context Methodology](/wiki/interpretable-context-methodology/), and a close cousin of the [agent-readable web standards](/wiki/agent-readable-web-standards/): both are *file-native context delivery*. Where [AGENTS.md](/docs/agents-md/) asks how a repository tells an agent what to do, ICM asks how a workspace does. This is a copyrighted academic paper; only an original summary and the canonical link are kept here.

> Part of the AP0110.ORG source library. See the [wiki overview](/wiki/).

---
*Full source text: [read the original document](/docs/icm-paper/).*
