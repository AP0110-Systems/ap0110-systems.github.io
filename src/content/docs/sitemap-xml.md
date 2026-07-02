---
title: "Sitemaps Protocol (sitemap.xml)"
date: "2005-06-01"
year: "2005"
description: "The positive complement to robots.txt: an XML file declaring what URLs exist on a site and what the operator wants crawled first."
author: "Google → joint Google / Yahoo / Microsoft"
sourceUrl: "https://www.sitemaps.org/"
kind: "living"
tags: ["standards", "crawlers", "agent-readable"]
---

*See the [analysis of this document](/wiki/sitemap-xml/) in the wiki.*

# Sitemaps.org — Local Capture

**Source URL:** https://www.sitemaps.org
**Pages fetched:** /, /protocol.html, /faq.html
**Captured:** 2026-05-17
**Site footer:** "Last Updated: 17 April 2020 | Sitemap 0.90 is released under the terms of the Attribution-ShareAlike Creative Commons License."

This is a best-effort local mirror assembled from WebFetch passes. The
sitemaps.org site is small (essentially 4 pages: Home, Protocol, FAQ,
Terms). Verbatim quotes are preserved where the fetch returned them;
gaps are flagged inline.

---

## Home (/)

**What is a Sitemap?**

> Sitemaps are an easy way for webmasters to inform search engines about
> pages on their sites that are available for crawling. In its simplest
> form, a Sitemap is an XML file that lists URLs for a site along with
> additional metadata about each URL (when it was last updated, how
> often it usually changes, and how important it is, relative to other
> URLs in the site) so that search engines can more intelligently crawl
> the site.

> Web crawlers usually discover pages from links within the site and
> from other sites. Sitemaps supplement this data to allow crawlers that
> support Sitemaps to pick up all URLs in the Sitemap and learn about
> those URLs using the associated metadata. Using the Sitemap protocol
> does not guarantee that web pages are included in search engines, but
> provides hints for web crawlers to do a better job of crawling your
> site.

**Sitemap 0.90** is offered under the terms of the **Attribution-
ShareAlike Creative Commons License** and "has wide adoption, including
support from Google, Yahoo!, and Microsoft."

**Linked subpages:** Home, Protocol (protocol.php), FAQ (faq.php),
Terms and conditions (terms.php).

---

## Protocol (/protocol.html) — Specification

### XML requirements

- Encoding: **UTF-8 only**
- Begins with `<urlset>` opening tag, ends with `</urlset>` closing tag
- Namespace declaration required on the urlset tag
- "all URLs in a Sitemap must be from a single host"

### Required tags

| Tag       | Purpose                                                            |
|-----------|--------------------------------------------------------------------|
| `<urlset>`| Root container; encapsulates the file and references protocol std |
| `<url>`   | Parent tag for each URL entry                                      |
| `<loc>`   | URL of the page; must include protocol; "must be less than 2,048 characters" |

### Optional tags

| Tag           | Purpose                                                         |
|---------------|-----------------------------------------------------------------|
| `<lastmod>`   | Last modification date in W3C Datetime format (YYYY-MM-DD ok)   |
| `<changefreq>`| Hint: always, hourly, daily, weekly, monthly, yearly, never     |
| `<priority>`  | Relative priority 0.0–1.0; default 0.5                          |

### XML entity escaping (required)

| Character | Escape    |
|-----------|-----------|
| `&`       | `&amp;`   |
| `'`       | `&apos;`  |
| `"`       | `&quot;`  |
| `>`       | `&gt;`    |
| `<`       | `&lt;`    |

URLs must follow **RFC-3986** and **RFC-3987**.

### File size limits

- Per Sitemap file: **50,000 URLs**, **50 MB uncompressed** (52,428,800 bytes)
- Sitemap index file: **50,000 Sitemaps**, **50 MB total**
- **gzip** compression supported (not ZIP)

### Sitemap index format (for multiple sitemap files)

| Tag              | Purpose                                  |
|------------------|------------------------------------------|
| `<sitemapindex>` | Root container for the index file        |
| `<sitemap>`      | Parent tag for each Sitemap reference    |
| `<loc>`          | Location of an individual Sitemap file   |
| `<lastmod>`      | Optional modification timestamp          |

### File location rules

> A Sitemap file located at http://example.com/catalog/sitemap.xml can
> include any URLs starting with http://example.com/catalog/

A Sitemap at a deeper path **cannot** include URLs outside its
directory hierarchy. Port numbers in the Sitemap URL must match all
listed URLs.

### Alternate accepted formats

- **RSS / Atom feeds** — search engines extract `<link>` for URLs and
  `<pubDate>` (RSS) / `<updated>` (Atom) for lastmod.
- **Text files** — one URL per line, UTF-8, no headers/footers,
  50,000 URLs / 50 MB max.

### Search-engine notification

1. Submit via the search engine's submission interface.
2. Add a line to `robots.txt`:
   `Sitemap: http://www.example.com/sitemap.xml`
3. HTTP ping: `<searchengine_URL>/ping?sitemap=<URL_encoded_sitemap_URL>`
   — successful ping returns HTTP 200.

### Extensions

The protocol is extensible via additional XML namespaces declared in
the root element alongside the standard Sitemap namespace. (This is the
mechanism used in practice for image sitemaps, video sitemaps, news
sitemaps, and hreflang annotations.)

---

## FAQ (/faq.html) — Selected points

- Any data values (including URLs) must use entity escapes for `&`,
  `'`, `"`, `<`, `>`.
- Sitemaps require **UTF-8** encoding.
- URLs follow RFC-3986, RFC-3987, and XML standards.
- Max 50 MB (52,428,800 bytes); max 50,000 URLs.
- gzip supported; ZIP is not.
- Index files can include up to 50,000 sitemaps.
- "Use W3C Datetime encoding for the lastmod timestamps"
  (example: `2004-09-22T14:12:14+00:00`).
- Recommended root location: `http://example.com/sitemap.xml`.
- "All URLs listed in the Sitemap must reside on the same host as the
  Sitemap."
- The `<priority>` hint **does not affect search ranking**.
- Frameset and frame content URLs should both be included.
- Session IDs should be stripped from URLs.
- Position of a URL within a Sitemap does not influence its usage.

### What the FAQ does NOT cover

- Who created the protocol
- When prior versions (0.84, 0.85, 0.86, 0.9) shipped
- The Google → Yahoo + Microsoft co-adoption announcement
- Current governance
- The relationship to `robots.txt` Sitemap directive (only mentioned
  in passing on the Protocol page)

---

## Terms (/terms.html)

Not fetched verbatim; Home page states Sitemap 0.90 is released under
the **Attribution-ShareAlike Creative Commons License** (CC BY-SA).
