---
title: "robots.txt — Robots Exclusion Protocol"
date: "1994-02-01"
year: "1994"
description: "The original machine-readable web standard: a plain-text file at a site's root telling crawlers which paths they may visit. Advisory, not enforced."
author: "Martijn Koster (later IETF RFC 9309)"
sourceUrl: "https://www.rfc-editor.org/rfc/rfc9309.html"
kind: "living"
tags: ["standards", "crawlers", "agent-readable"]
---

*See the [analysis of this document](/wiki/robots-txt/) in the wiki.*

# /robots.txt — Robots Exclusion Protocol

Source: https://www.robotstxt.org/ (returned 403 to programmatic fetch
2026-05-17; content reconstructed from RFC 9309 and Wikipedia)
RFC:    https://www.rfc-editor.org/rfc/rfc9309.html
Fetched: 2026-05-17

## Origin and history

- Proposed by **Martijn Koster** in **February 1994** while at Nexor.
- Provoked by Charles Stross, who wrote "a badly behaved web crawler that
  inadvertently caused a denial-of-service attack on Koster's server."
- De facto standard by June 1994; honored by WebCrawler, Lycos, AltaVista.
- Formally standardized as **RFC 9309** in September 2022 by Koster,
  Gary Illyes, Henner Zeller, and Lizzi Sassman — nearly 30 years after the
  original informal spec.

## File location

A plain text file at the top-level path of an origin:

```
scheme:[//authority]/robots.txt
```

E.g. `https://www.example.com/robots.txt`. Each subdomain needs its own.

## Syntax

Core directives:

- `User-agent:` — identifies the crawler the rules apply to (product tokens:
  letters, underscores, hyphens).
- `Disallow:` — URI path patterns the crawler must not access.
- `Allow:` — URI path patterns explicitly permitted.
- `Sitemap:` — URL of an XML sitemap (extension, widely supported).
- `Crawl-delay:` — requested interval between visits (non-standard).

Special characters:
- `#` — comment
- `$` — end-of-pattern anchor
- `*` — wildcard

Example:

```
User-agent: *
Disallow: /private/
Allow: /private/public-faq.html
Sitemap: https://example.com/sitemap.xml
```

## Advisory nature — load-bearing

"These rules are not a form of access authorization" (RFC 9309). The protocol
is "purely advisory and relies on the compliance of the web robot; it cannot
enforce any of what is stated in the file." For real access control, use
HTTP authentication or other security measures.

This is the central design property: robots.txt expresses a *request* to
well-behaved crawlers. Malicious crawlers ignore it.

## AI-crawler era (2020s–)

- Sites began listing AI-training agents (e.g. `GPTBot`, `Google-Extended`,
  `ClaudeBot`) as `Disallow`-targeted user-agents.
- **2025:** Really Simple Licensing (RSL) launched, letting publishers
  encode AI-bot permissions directly in robots.txt. Early adopters:
  Medium, Reddit, Yahoo.
- Adjacent (non-canonical) proposals: `ai.txt`, `/llms.txt`.

## Governance

- Original 1994 spec: informal, Martijn Koster.
- Current canonical reference: IETF RFC 9309 (September 2022).
