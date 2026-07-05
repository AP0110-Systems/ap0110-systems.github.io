---
title: "Glossary"
date: "2026-07-05"
description: "Formal definitions of the key terms behind the Independent Internet and Web 4.0, as used across this wiki, with links to source material."
type: "concept"
tags: ["glossary", "reference"]
---

Terms are defined as used across this wiki. A linked term resolves to a dedicated page carrying its fuller treatment and sources.

## [Agent-readable web standards](/wiki/agent-readable-web-standards/)

A family of plain-text and Markdown conventions located at well-known paths — [robots.txt](/docs/robots-txt/), [sitemap.xml](/docs/sitemap-xml/), [llms.txt](/docs/llms-txt/), [AGENTS.md](/docs/agents-md/), [design.md](/docs/design-md/) — that specify how automated readers (crawlers, indexers, language models, coding agents) may consume a site or repository. Each convention is advisory, operator-authored, and located at a fixed path; collectively they constitute the protocol surface of the Independent Internet.

## [Compounding knowledge](/wiki/compounding-knowledge-vs-rag/)

An approach in which understanding accumulates: each source is read once and integrated into a durable, interlinked artifact, rather than re-derived at query time. Contrasted with retrieval-augmented generation (RAG), which reassembles an answer from raw fragments on each request and retains nothing between queries.

## [Decentralization](/wiki/decentralization/)

A design principle under which a system has no central owner, gatekeeper, or single point of failure; authority and data are distributed across independent participants that cooperate through open protocols. It is the structural basis of the Independent Internet and the principal counter to [surveillance capitalism](#surveillance-capitalism).

## [Independent Internet](/wiki/web4/)

A resilient, self-hosted internet owned and operated by its users rather than by intermediary platforms: private by design, governed by the communities it serves, and able to function under degraded or absent connectivity. Also termed **[Web 4.0](#web-40)**.

## [Interpretable Context Methodology (ICM)](/wiki/interpretable-context-methodology/)

The use of filesystem layout — directories and plain Markdown files — as the orchestration mechanism for a multi-stage language-model workflow, in place of a code-level framework. Because each intermediate artifact is a human-readable file, interpretability is a property of the architecture rather than an added feature. Introduced by Van Clief and McDermott ([2026](/docs/icm-paper/)).

## [LLM-maintained wiki](/wiki/llm-maintained-wiki/)

A persistent, interlinked Markdown knowledge base authored and maintained by a language model: each source is integrated once so that knowledge compounds, rather than answers being re-derived from raw documents on every query. The pattern follows Karpathy's [LLM Wiki](/docs/llm-wiki/); this site's wiki is an instance of it.

## Mesh networking

Peer-to-peer connectivity (e.g., LoRaWAN, Meshtastic) in which nodes relay traffic for one another, forming a network with no central point of control or failure. A key enabling technology for community-operated infrastructure.

## Self-hosting

The operation of one's own services and storage of one's own data in place of provisioning from a third-party provider. It is the most direct expression of control in the Independent Internet, removing the intermediary otherwise positioned to surveil or revoke access.

## [Semantic Web](/wiki/semantic-web/)

The proposal that web content carry structured, machine-readable meaning so that software agents can reason and act on it rather than merely render it for human readers. Articulated by Berners-Lee et al. ([2001](/docs/semantic-web/)), it forms the bridge between the read-write web and the Independent Internet.

## [Surveillance capitalism](/wiki/surveillance-capitalism/)

Zuboff's term ([2019](/docs/surveillance-capitalism/)) for an economic order that unilaterally claims private human experience as free raw material for extraction, prediction, and behavioral influence. It is the condition the [Independent Internet](#independent-internet) is formulated to counter.

## [Web 4.0](/wiki/web4/)

Synonym for the [Independent Internet](#independent-internet): the fourth era of the web, defined by ownership and control of the underlying compute and data, following the static (1.0), dynamic (2.0), and semantic (3.0) webs.
