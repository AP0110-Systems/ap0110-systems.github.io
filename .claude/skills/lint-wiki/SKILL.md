---
name: lint-wiki
description: Run a health-check pass over the site's LLM-wiki (`src/content/docs/` + `src/content/wiki/`). Use when the human says "lint", "health check", "clean up the wiki", or asks for an audit of dead links, isolated nodes, contradictions, or stale pages. Fixes what it finds, reports in chat, and hands the human a ready-to-run git commit command (the agent never commits). Do NOT use as a substitute for fixing a specific known bug — for a targeted fix, just edit and hand off a `fix:` commit command.
---

# Lint the wiki

One pass ⇒ fixes + a chat report ⇒ one commit command handed to the human. The wiki is two Astro content collections rendered as the /web4 graph — see [CLAUDE.md → "The web4 LLM-wiki"](../../../CLAUDE.md).

## What to scan for

- **Dead links** — a `/docs/<slug>/` or `/wiki/<slug>/` link in a body with no matching page. Fix the link or create the page.
- **Isolated nodes** — pages with no links in or out; they float disconnected in the graph. Add real cross-links from/to related pages (never delete a page silently — list deletion candidates instead).
- **Literal `[[wikilinks]]` in prose** — Astro renders them as raw text. Convert to standard Markdown links.
- **Contradictions** — claims on different pages that conflict. Reconcile, or flag inline with `⚠️` and report.
- **Stale pages** — pages whose `updated:` (or `date`) predates a newer doc that supersedes them. Update the claim and bump `updated:`.
- **Missing cross-references** — two pages discussing the same thing without linking each other. Add the links (they become graph edges).
- **Frontmatter drift** — `description`/`tags`/`type` that no longer match the body; missing `updated:` on edited pages. `npm run build` catches schema violations but not semantic drift.
- **Content-rule violations** — 🔒 internal material, mentions of AP0110.com, or full copyrighted text on a `kind: copyrighted|living` doc.
- **Mirror sync** — if the pass edits copy that `src/content/pages/*.md` mirrors (e.g. the `/wiki` index), keep the mirror in sync.

## How to scan

```bash
# Structural sweep: parses every body, prints edges; extend for asserts
node src/utils/wikiGraph.js

# Literal wikilinks in prose
grep -rn '\[\[' src/content/docs src/content/wiki

# Referenced-vs-existing slugs (dead links + orphan candidates)
grep -rhoE '\]\(/(docs|wiki)/[a-z0-9-]+' src/content/docs src/content/wiki \
  | sed 's/](\///' | sort -u > /tmp/referenced
( cd src/content && ls docs wiki | grep -v ':' | sed 's/\.md$//' ) # compare by eye or comm
```

For isolated nodes, the authoritative check is `buildGraph()` itself: a short Node script importing `src/utils/wikiGraph.js` that asserts every node has `linksOut` or inbound edges.

Read pages fully when judging contradictions/staleness — the greps only find structure.

## Finish

1. Verify: `node src/utils/wikiGraph.js` and `npm run build` both pass.
2. Report findings and fixes in chat (no report file — the git diff is the record).
3. **The human commits, not the agent.** Surface one ready-to-run command for the whole pass:
   ```bash
   git add src/content/ && git commit -m "lint: wiki health pass — <one-line summary>"
   ```

## When to stop and ask

- A stale page is contradicted by a newer doc: rewrite, or flag ⚠️ and let both stand?
- An isolated node looks intentional (e.g. a just-added stub): ask before linking or listing for deletion.
- Nothing found: say so in chat; no commit needed.
