---
title: "Interpretable Context Methodology (ICM)"
date: "2026-06-29"
description: "Using folder structure — plain files in a well-organized hierarchy — as the orchestration mechanism for a multi-step AI workflow, instead of a code-level framework."
type: "concept"
tags: ["agents", "context-engineering", "icm"]
---

**Interpretable Context Methodology (ICM)**, also called *folder structure as agent architecture*, is the discipline of using filesystem layout — folders, plain Markdown files, and stage-scoped context contracts — as the orchestration mechanism for a multi-step LLM workflow, in place of a code-level multi-agent framework. It was introduced by [Jake Van Clief](/wiki/jake-van-clief/) and [David McDermott](/wiki/david-mcdermott/) in [their 2026 paper](/docs/icm-paper/).

## The core idea

If the prompts and context for each stage of a workflow already exist as files in a well-organized folder hierarchy, you do not need multiple agents or a coordination framework — you need one agent that reads the right files at the right moment. The folder structure *is* the orchestration. The argument borrows directly from Unix philosophy: programs that do one thing, the output of one becoming the input of the next, plain text as the universal interface.

## The five-layer context hierarchy

Every file an agent reads belongs to one layer, and the layer decides when it loads: a global identity/map file ("where am I?"), task routing ("where do I go?"), a per-stage contract of Inputs/Process/Outputs ("what do I do?"), stable reference material ("what rules apply?"), and per-run working artifacts ("what am I working with?"). Scoping context this way keeps each stage in the few-thousand-token range where models perform best, instead of a 30k–50k-token monolithic prompt of mostly-irrelevant context.

## Glass-box by construction

ICM's most cited theoretical move: interpretability becomes a property of the architecture, not a feature bolted on. Every intermediate artifact is a plain-text file a human can open, read, and edit between stages — so the artifacts *are* the log, and `ls` is the dashboard. The pattern fits sequential, reviewable, repeatable workflows; the paper is explicit that real-time multi-agent collaboration, high-concurrency systems, and complex automated branching are better served by conventional frameworks.

## Relationship to the standards

ICM is the workspace-level cousin of the [agent-readable web standards](/wiki/agent-readable-web-standards/): both are *file-native context delivery*. [AGENTS.md](/docs/agents-md/) asks how a repository tells an agent what to do; ICM asks how a workspace does. It has a working MIT-licensed reference implementation and named academic adopters including the University of Edinburgh's Neuropolitics Lab, ICR Research, and the Academy of International Affairs in Bonn.
