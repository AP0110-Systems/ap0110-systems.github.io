---
title: "llms.txt"
date: "2024-09-01"
year: "2024"
description: "A proposed standard for a curated, LLM-shaped manifest at a site's root — telling language models what to read at inference time."
author: "Answer.AI (Jeremy Howard)"
sourceUrl: "https://llmstxt.org/"
kind: "living"
tags: ["standards", "llm", "agent-readable"]
---

## 1. Abstract

`llms.txt` defines a convention for websites to expose a curated, machine-readable entry point aimed at large language models (LLMs). It specifies three things:

1. A Markdown file, `/llms.txt`, published at a site's root, containing background, guidance, and links to further Markdown resources.
2. A convention for making individual pages available in clean Markdown form, at the same URL as the HTML version with `.md` appended.
3. A standard pattern for *expanding* an `llms.txt` file — following its links and inlining their content — into one or more derived context files sized for different use cases.

The format is deliberately simple: plain Markdown, structured just enough to be parsed programmatically, without requiring a heavier format like XML or JSON for the source file itself.

---

## 2. Motivation

LLMs increasingly draw on website content to answer questions, but two problems get in the way:

- **Context limits.** Model context windows are too small to hold most full websites at once, so only a subset of content can realistically be provided at query time.
- **Signal-to-noise.** Ordinary HTML pages are built for human browsers, not machine consumers — navigation chrome, ads, and interactive scripting all have to be stripped away before the underlying content is usable, and that extraction process is unreliable.

LLMs get more value out of concise, expert-level material gathered in one place than out of a full human-facing page. A dedicated, curated entry point serves that need directly — for example, letting a coding assistant pull a library's documentation quickly and precisely rather than scraping and guessing.

The convention is intentionally general-purpose. Beyond software documentation, it's applicable to: business/organizational overviews, structured breakdowns of legislation or policy for stakeholders, personal or professional sites, product and policy information for e-commerce, and course or resource listings for schools.

---

## 3. Specification

### 3.1 File location

The file MUST be served at `/llms.txt` from the site root. A site MAY also publish the file at an additional subpath if useful for its structure.

### 3.2 Document structure

An `llms.txt` file consists of the following sections, which MUST appear in this order:

1. An optional byte-order mark (BOM).
2. An H1 heading containing the name of the project or site. This is the only required section.
3. A blockquote (`>`) giving a short summary of the project — the key facts a reader needs in order to understand the rest of the file.
4. Zero or more Markdown sections of any non-heading type (paragraphs, lists, etc.) giving more detailed background on the project and guidance on how to interpret the linked files.
5. Zero or more H2-delimited sections, each containing a Markdown list of links. Each list item is a required Markdown hyperlink, `[name](url)`, optionally followed by `: ` and free-text notes about that resource.

### 3.3 Grammar (informal)

```
file        := [BOM] title blockquote body? section*
title       := "# " text
blockquote  := "> " text
body        := (paragraph | list)*
section     := "## " heading link-list
link-list   := link+
link        := "- [" title "](" url ")" [": " description]
```

### 3.4 The `Optional` section

An H2 section literally titled **Optional** carries special meaning: a consumer that needs a shorter context is permitted to skip every link inside it. Authors should use this section for secondary or supplementary material — content that's helpful but not essential to understanding the core subject. This distinction is what drives the tiered context expansion described in Section 4.

### 3.5 Minimal example

```
# Title

> Optional description goes here

Optional details go here

## Section name

- [Link title](https://link_url): Optional link details

## Optional

- [Link title](https://link_url)
```

### 3.6 Companion Markdown pages

Any page whose content is worth surfacing to an LLM should also be published in clean Markdown at the same URL as the HTML page, with `.md` appended. For a URL with no explicit filename, `index.html.md` is appended instead. This gives link targets inside `llms.txt` a reliable, low-noise format to point to, and is what makes automated expansion (Section 4) practical — a consumer can fetch each linked `.md` resource directly rather than having to parse the site's HTML.

### 3.7 Processing behavior

The specification intentionally does not mandate how a consumer processes an `llms.txt` file — that is left to the application. A consumer might expand every linked resource into a single combined context document at query time, fetch resources lazily as needed, or use the file purely as an index for a human reader. All are conforming uses of the format.

---

## 4. Derived Context Files

Because an `llms.txt` file is mostly a list of *links*, it is not by itself something an LLM can answer questions from — the linked content still needs to be fetched and assembled. The specification's reference tooling model formalizes this into a standard three-tier pattern:

| File | Contents |
|---|---|
| `llms.txt` | The source file itself: summary, guidance, and *unexpanded* links. |
| `llms-ctx.txt` | Every linked resource fetched and inlined, **except** the `Optional` section. A "medium" context, sized for everyday use. |
| `llms-ctx-full.txt` | Every linked resource fetched and inlined, **including** the `Optional` section. The most complete context available. |

This gives a consumer a choice of context size without needing to re-parse or re-fetch anything: skip straight to `llms-ctx.txt` for a leaner context, or use `llms-ctx-full.txt` when completeness matters more than size.

When resources are expanded this way, the reference approach wraps the result in a lightweight, XML-style container rather than leaving it as an undifferentiated blob of Markdown — for example, a top-level `<project title="..." summary="...">` element wrapping one section per H2 in the source file, with each linked document's content nested inside its corresponding section. This structure is a convention of the reference implementation rather than a strict requirement of the spec, but it reflects a format LLMs such as Claude tend to parse reliably, since it preserves the boundaries between "which document this content came from" that plain concatenation would lose.

A project generating these derived files can also report the size (e.g. character count) of each fetched document, which is useful for understanding how much of a model's context budget each linked resource will actually consume before it's included.

---

## 5. Relationship to Existing Standards

`llms.txt` is designed to sit alongside existing web conventions rather than replace them.

**sitemap.xml** lists every indexable page on a site, for the benefit of search engines. It is not a substitute for `llms.txt` because it: typically omits any LLM-readable version of a page; doesn't include links to external resources that might help interpretation; and, taken as a whole, is usually far too large — and too unfiltered — to serve directly as LLM context.

**robots.txt** governs what automated crawlers are permitted to access. `llms.txt` serves a different purpose: providing curated context for content that's already accessible. The two are also typically consumed at different times — `robots.txt` is read by crawlers during broad indexing or training-data collection, while `llms.txt` content is expected to be pulled on demand, at the moment a user is actively seeking help (for example, adding a library's docs to a coding session, or a chat assistant answering a specific question). In other words, `llms.txt` is primarily an *inference-time* mechanism rather than a *training-time* one, though nothing in principle prevents its use during training as well.

A site MAY also use `llms.txt` to reference whatever structured data markup it already publishes, to help an LLM interpret that markup correctly in context.

The convention of standardizing on a well-known root path follows the precedent already set by `/robots.txt` and `/sitemap.xml`.

---

## 6. Worked Examples

### 6.1 Software documentation (abridged)

```
# FastHTML

> FastHTML is a python library which brings together Starlette, Uvicorn, HTMX, and fastcore's `FT` "FastTags" into a library for creating server-rendered hypermedia applications.

Important notes:

- Although parts of its API are inspired by FastAPI, it is *not* compatible with FastAPI syntax and is not targeted at creating API services
- FastHTML is compatible with JS-native web components and any vanilla JS library, but not with React, Vue, or Svelte.

## Docs

- [FastHTML quick start](...): A brief overview of many FastHTML features
- [HTMX reference](...): Brief description of all HTMX attributes, CSS classes, headers, events, extensions, js lib methods, and config options

## Examples

- [Todo list application](...): Detailed walk-thru of a complete CRUD app in FastHTML showing idiomatic use of FastHTML and HTMX patterns.

## Optional

- [Starlette full documentation](...): A subset of the Starlette documentation useful for FastHTML development.
```

Applying Section 4's model to this file: `llms-ctx.txt` would inline the "Docs" and "Examples" sections only; `llms-ctx-full.txt` would additionally inline the Starlette reference under "Optional."

### 6.2 Non-software domain: a restaurant

The format is not limited to code documentation. A restaurant's `llms.txt` might consist of: an H1 with the business name; a one-line summary; a plain list of weekly hours in the body; a "Menus" H2 section linking to Markdown versions of the lunch and dinner menus; and an "Optional" section linking to a dessert menu. A linked menu file itself would typically be a Markdown table — item, description, price — covering by-the-pound items, drinks, and sides for a lunch menu, for instance.

This illustrates that the same three-part structure (identity → summary → categorized links) generalizes well outside of technical documentation: legal/policy breakdowns, course catalogs, and personal or business overviews all fit the same shape.

---

## 7. Authoring Guidelines

- Use concise, clear language throughout.
- Give every linked resource a brief, informative description — enough for a reader (human or model) to decide whether it's relevant without opening it.
- Avoid unexplained jargon or ambiguous terminology; the summary and body sections exist specifically to establish shared context before the links appear.
- Prefer linking to genuinely Markdown-formatted resources over raw HTML or non-prose formats (e.g. CSV), which carry little usable documentation content on their own.
- Decide deliberately what belongs under `Optional` — it's the mechanism that controls how large `llms-ctx.txt` becomes, so treat it as an actual editorial judgment about what's core versus supplementary, not a catch-all.
- After writing a file, test it in practice: expand it into a context file and check whether a model can correctly answer real questions about the site's content using only that context. This surfaces gaps — missing background, ambiguous phrasing, broken structure — that are easy to miss by re-reading the file alone. A quick way to do this is to seed a chat session with the expanded context and interactively probe it with questions a real visitor might ask.

---

## 8. Reference Implementations and Ecosystem

The specification itself is implementation-agnostic, but a reference tooling model has emerged around it, useful for understanding how the pieces are meant to fit together in practice:

- **A parsing/generation library**, with both a command-line interface and a programmatic API, that reads a conforming `llms.txt` file, validates its structure, and produces the derived `llms-ctx.txt` / `llms-ctx-full.txt` context files described in Section 4. Programmatically, this typically means: a parse step that turns the raw file into a structured object (project title, summary, free-text info, and a mapping of section name to its list of links), and a generation step that fetches each linked document and assembles the XML-style container described above.
- **A JavaScript implementation** of the same parsing logic, useful for browser-based or Node-based tooling that needs to work with `llms.txt` files without a Python dependency.
- **Static-site and documentation-framework integrations** that auto-generate a conforming `llms.txt` (and its companion `.md` pages) as part of a normal documentation build, so the file stays in sync with the underlying docs rather than needing manual upkeep.
- **Editor and IDE integration** follows a consistent pattern, regardless of which specific editor implements it: on request, the tool checks the target site for `/llms.txt`; if present, it parses the file, fetches the linked resources (typically skipping `Optional` by default, for a leaner context), and assembles that into context for an LLM request; if no `llms.txt` exists, the tool falls back to scraping the page's raw HTML directly. From there, a natural-language coding request is combined with the loaded context and the result is written back into the editor. The general shape is: *load context → issue a natural-language request → receive generated output in the working buffer* — conceptually similar regardless of whether the editor is a modern IDE or something far simpler.
- **Documentation-generator integration** (seen in notebook-driven doc tools) automatically produces `.md` versions of every documentation page by default, and can additionally auto-generate a full API reference — function signatures and docstrings, not just prose — as a separate linked resource, since LLMs are often weak on precise implementation detail, especially for anything released after their training cutoff. This reference file is then linked into `llms.txt` like any other resource, and the three-tier context files are regenerated automatically whenever the documentation build runs, keeping everything current without manual regeneration.
- **Community-maintained directories** exist that index sites known to publish a conforming `llms.txt` file, functioning as a discovery mechanism for the ecosystem as a whole.

---

## 9. Design Notes

A few properties of the format are worth calling out explicitly, since they explain some of its more unusual choices:

- **Markdown over a stricter format.** XML or JSON would be easier to validate mechanically, but Markdown is the format current LLMs parse most reliably, and it remains human-readable — a `llms.txt` file is meant to be legible to a person skimming it directly, not just to software. The derived context files, by contrast, do use a lightweight XML-style wrapper (Section 4), since at that stage the audience is exclusively the model, not a human reader.
- **Minimal but strict structure.** The ordering rules (H1, then blockquote, then body, then H2 sections) are strict enough that the file can still be parsed with simple, dependency-free tooling — splitting on heading markers and applying a small number of regular expressions is sufficient to fully parse a conforming file, without needing a full Markdown parser or grammar engine.
- **The `Optional` convention exists for context budgeting.** Because consumers have finite context windows, the format needed a standard way to mark "nice to have" resources separately from core material, without inventing a more elaborate priority or weighting scheme. The two-tier `llms-ctx.txt` / `llms-ctx-full.txt` split is the direct, practical consequence of that one convention.

---

## 10. Status

This specification is an evolving, community-developed proposal rather than a finalized standard. Its scope — what belongs in the core format versus what's left to individual implementations — is expected to continue being refined as adoption grows.
