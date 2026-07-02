---
title: "Sitemaps Protocol (sitemap.xml)"
date: "2005-06-01"
description: "The positive complement to robots.txt: an XML file declaring what URLs exist on a site and what the operator wants crawled first."
type: analysis
tags: ["standards", "crawlers", "agent-readable"]
---


## Summary

Where [robots.txt](/docs/robots-txt/) declares what a crawler *may not* read, a Sitemap declares what the operator *wants* read. A `sitemap.xml` file lists a site's URLs with optional metadata — last-modified time, change frequency, relative priority — so crawlers can index more efficiently than link-following alone allows. Google introduced it in 2005; Yahoo and Microsoft joined in 2006, when version 0.90 moved to the shared, CC BY-SA–licensed sitemaps.org. It has been effectively frozen at 0.90 ever since.

## How it fits

Like robots.txt, a Sitemap is advisory, operator-authored, and lives at a well-known path. The two are co-deployed: a `Sitemap:` line inside `/robots.txt` is the standard way crawlers discover it. robots.txt subtracts; the Sitemap adds.

## Why it matters here

The Sitemap is the "say what to read" half of operator control, and the direct conceptual ancestor of [llms.txt](/docs/llms-txt/) — a curated, machine-readable manifest of what the operator wants machines to read. It is also a cautionary governance case in the [agent-readable web standards](/wiki/agent-readable-web-standards/) family: critical infrastructure that worked for two decades but never moved to a neutral standards body. It underwrites the Independent Internet thesis that web-scale coordination works by convention.

> Part of the AP0110.ORG source library. See the [wiki overview](/wiki/).

---
*Full source text: [read the original document](/docs/sitemap-xml/).*
