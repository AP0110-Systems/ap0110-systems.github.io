---
title: "llms.txt"
date: "2024-09-01"
description: "A proposed standard for a curated, LLM-shaped manifest at a site's root — telling language models what to read at inference time."
type: analysis
tags: ["standards", "llm", "agent-readable"]
---


## Summary

Proposed by [Jeremy Howard](/wiki/jeremy-howard/) (Answer.AI) in 2024, `llms.txt` extends the [robots.txt](/docs/robots-txt/) / [sitemap.xml](/docs/sitemap-xml/) pattern from *crawling* to *inference*. It is a Markdown file at `/llms.txt` giving a language model a curated, concise map of a site's most useful content, with `/llms-full.txt` offering a single-file concatenation of that content. A companion convention mirrors each HTML page as Markdown at the same URL (append `.md`) for clean machine parsing.

## How it fits

`llms.txt` answers a different question than its predecessors: not *who may crawl* or *what exists*, but *what an LLM should read* at inference time. Its debt to the Sitemaps pattern — publish a machine-readable manifest of what the operator wants read — is unmistakable.

## Why it matters here

It is the modern inheritor of operator control in the [agent-readable web standards](/wiki/agent-readable-web-standards/) family, and it carries the [Semantic Web](/wiki/semantic-web/)'s machine-readable ambition into the era of agents that read and act. This very site ships `/llms.txt`, `/llms-full.txt`, and per-page `.md` mirrors — the Independent Internet thesis, applied to itself.

> Part of the AP0110.ORG source library. See the [wiki overview](/wiki/).

---
*Full source text: [read the original document](/docs/llms-txt/).*
