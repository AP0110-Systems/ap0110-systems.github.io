---
name: ingest-source
description: Add a new source to the site's LLM-wiki (the /web4 knowledge graph). Use when the human provides a document, URL, or pasted content and asks to "ingest", "add", or "process" a source. Writes a `src/content/docs/` page, synthesizes/updates `src/content/wiki/` pages, cross-links everything with standard Markdown links, and commits with plain git. Do NOT use for one-off questions about an existing source (that's a query, not an ingest).
---

# Ingest a source

Implements [CLAUDE.md → "The web4 LLM-wiki"](../../../CLAUDE.md). One source ⇒ one commit touching a handful of pages. The graph, indexes, `.md` mirrors, `llms.txt`, and `sitemap.xml` all regenerate at build time — no endpoint or component edits needed.

## Preconditions

- Source content in hand: a file, a URL (extract with the `defuddle` skill; WebFetch for `.md` URLs), or pasted text.
- If the only form is `.pdf`/`.docx`/`.pptx`, convert to markdown first (e.g. `markitdown <file> > <slug>.md` in the scratchpad). Never read a PDF directly into context when a text form is obtainable.

## Steps

1. **Read the source thoroughly** before writing anything.

2. **Discuss briefly with the human** — key takeaways, what's surprising, where it fits the Independent Internet lineage. One short paragraph. This shapes the doc page's emphasis.

3. **Write the doc page** at `src/content/docs/<slug>.md` (slug = filename = URL). Frontmatter per `src/content.config.ts`:
   ```yaml
   title: "..."
   date: "YYYY-MM-DD"        # today (page creation)
   description: "..."        # one sentence; shown in indexes and mirrors
   tags: [...]
   year: "1962-10"           # optional display string — when the source was published
   sourceUrl: "https://..."  # optional canonical link-out
   kind: public-domain | copyrighted | living | doc
   ```
   - `kind: copyrighted | living` ⇒ **summary + `sourceUrl` only, never the full text**. `public-domain` may host full text (and optionally `pdfUrl` if a PDF is committed to `public/pdfs/`).
   - Body: summary, key claims, significance to the Web 4.0 lineage, limitations.

4. **Synthesize wiki pages.** For each significant person/org (`type: entity`) or idea (`type: concept`) the source adds, create or update `src/content/wiki/<slug>.md` (schema: `title`/`date`/`description`/`tags` + `type: entity | concept | analysis`). Update existing pages rather than duplicating.

5. **Cross-link with standard Markdown links** — `[text](/docs/<slug>/)` and `[text](/wiki/<slug>/)`. Links **are** the graph edges; a page with no links in or out renders as an isolated node. Do **NOT** use Obsidian `[[wikilinks]]` in prose — Astro prints them literally.
   - The doc page links to related wiki/doc pages; at least one existing page links back to it.
   - Set `updated:` on any existing page you edit.

6. **Timeline (optional).** If the source belongs on the /web4 chronological timeline, add an entry to the `TIMELINE` array in `src/components/pages/Web4.jsx`. Ask if unsure.

## Content rules (public charity surface)

- Strip anything marked 🔒 **Internal** (DPI pipeline, COI, coalition positioning).
- Don't mention AP0110.com in docs/wiki content.

## Verify, then commit

```bash
node src/utils/wikiGraph.js   # edge-parser self-check
npm run build                 # the gate: type-checks collection frontmatter
```
Also confirm the new page is not an isolated node and every `/docs|/wiki` link it makes has a matching page.

Commit with plain git, one commit for the whole ingest:
```bash
git add src/content/ [src/components/pages/Web4.jsx]
git commit -m "ingest: <short title> — <one-line subject>"
```

## When to stop and ask

- Source overlaps heavily with an existing doc page: merge vs new page?
- Source contradicts existing wiki pages: surface the contradiction and confirm framing before writing.
- Source is paywalled / partial / truncated by conversion: flag it before proceeding.
