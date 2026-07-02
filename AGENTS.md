# AP0110.org

Astro 5 static site (with React islands) deployed to **GitHub Pages** at **ap0110.org**. Focuses on Independent Internet (Web 4.0) technology with charitable applications (CalCompute, LII / Life Impact International, UNA-USA partnerships).

Migrated from Next.js 15 (App Router) to Astro in June 2026, mirroring the AP0110.com structure. **AP0110.org keeps its own design system** — this was a framework conversion, not a redesign. The site is **light-mode only**, and the CalCompute / Children / UNA-USA sections each keep their own brand CSS.

**Stack:** Astro 5 (static output) · React 19 islands · Tailwind CSS v4 (`@tailwindcss/vite`, CSS-first) · Three.js · globe.gl · Leaflet
**Deploy:** `npm run build` → `dist/` → GitHub Pages via `.github/workflows/deploy.yml` (push to `main`)
**Path alias:** `@/*` → `./src/*`
**Custom domain:** `CNAME` → ap0110.org (also `public/CNAME`, so it lands in `dist/`)
**Node:** 20 (`.nvmrc`)

```bash
npm run dev      # Astro dev server
npm run build    # static build → dist/  (the gate: type-checks collections, fails on bad islands/imports)
npm run preview  # serve the built dist/ locally
```

> Note: if `npm install` fails with `EACCES` on `~/.npm/_cacache`, the user's global npm cache has a permission issue — install with `npm install --cache /tmp/npm-cache-org`. CI is unaffected.

---

## Architecture

- **Output:** static (Astro 5 default), `dist/`. `build.format: 'directory'` reproduces the old Next `trailingSlash: true` output (`/web4/index.html`). `trailingSlash: 'ignore'` (default) lets routes resolve with or without the trailing slash, so the lander's `<a href="/web4">` links work without a redirect hop. (Header only checks `pathname === '/'`; the Footer's pathname-based styling is dead code inside a comment.)
- **Routing:** file-based under `src/pages/`. Each route is a thin `.astro` shell that mounts a React island from `src/components/pages/`. Dynamic `articles/[slug].astro` + `docs/[slug].astro` via `getStaticPaths()` over content collections.
- **Layout:** `src/layouts/Layout.astro` owns `<html>/<head>/<body>` — metadata/OG/Twitter, favicons, Inter font (Google Fonts), site-wide Organization+WebSite JSON-LD, the `<link rel="alternate" type="text/markdown">` mirror link, and mounts the shared islands (`AP0110MonoProvider`, `Header`, `Footer`). Pages pass `title`/`description`/`keywords`/`image`/`jsonLd` props, and may inject section `<head>` content via a `slot="head"` (e.g. the Children page's Montserrat/Open Sans fonts).
- **React islands & `client:*` directives:**
  - `client:load` — `Header`, `Footer`, `AP0110MonoProvider`, and the `Home`, `Web4`, `Whitepaper` page bodies.
  - `client:only="react"` — `CalCompute` and `Children` (they render Leaflet / Three.js / globe.gl, which touch `window` at load).
  - **No directive (static HTML, zero JS)** — `Guide`, `Radios`, `UNAUSA`, `Contribute` (purely presentational, no hooks).
  - `AP0110MonoProvider` is a side-effect-only island (a global DOM `MutationObserver` that mono-styles "AP0110"); it has no children and shares no React context. `AppContext` is consumed only inside the `Children` island, which wraps its own `<AppProvider>`.
- **No `next/*`:** `<a>` not `next/link`, `<img>` not `next/image`; `Header`/`Footer` take a `pathname` prop (passed `Astro.url.pathname`) instead of `usePathname()`.
- **Styling:** Tailwind v4 via `@tailwindcss/vite`; global stylesheet `src/styles/globals.css` (`@import "tailwindcss"` + `@theme` brand tokens + the existing light-mode base + `.article-prose`, `.ap-button`, paper/corner styles). **No `tailwind.config.js`.** Brand color utilities (`ap-cyan`, …) come from the `@theme` block.
- **Content:** Astro content collections (`src/content.config.ts`) — `articles`, `docs`, `wiki`, and `pages` (markdown mirrors). Markdown rendered via `render()` + `<Content />`. Replaces the old gray-matter/marked/sanitize-html pipeline. `docs` + `wiki` together form the **LLM-wiki** behind the `/web4` knowledge graph — see "The web4 LLM-wiki" below.
- **Env:** `import.meta.env.PUBLIC_ASSETS_BASE_PATH` (defaults to `/images`) in `src/config/assets.js`.

## Repository Directory

```
/
├── astro.config.mjs              # site, react(), @tailwindcss/vite, build.format:'directory'
├── tsconfig.json                 # extends astro/tsconfigs/strict, @/* alias
├── CNAME                         # ap0110.org  (also copied to public/CNAME → dist/)
├── public/                       # copied verbatim to dist/
│   ├── images/                   # ALL images committed here (only used files)
│   ├── favicons/  site.webmanifest  robots.txt
│   └── *.json                    # california-*.json, historical_foundation.json (map data)
├── src/
│   ├── layouts/Layout.astro      # head + metadata + JSON-LD + island shell
│   ├── styles/globals.css        # Tailwind v4 import + @theme tokens + light-mode base
│   ├── content.config.ts         # articles / docs / wiki / pages collections
│   ├── content/
│   │   ├── articles/*.md                 # blog markdown (frontmatter: title,date,description,author,tags)
│   │   ├── docs/*.md                      # LLM-wiki RAW source library (adds year?/sourceUrl?/kind)
│   │   ├── wiki/*.md                      # LLM-wiki SYNTHESIZED pages (adds type: entity|concept|analysis|overview)
│   │   └── pages/*.md                     # AUTHORED markdown mirrors of every route (route/order frontmatter)
│   ├── pages/
│   │   ├── index.astro  web4.astro  guide.astro  radios.astro  whitepaper.astro
│   │   ├── calcompute.astro  children.astro  unausa.astro  contribute.astro   # branded shells carry per-page JSON-LD
│   │   ├── articles/index.astro  articles/[slug].astro
│   │   ├── docs/index.astro  docs/[slug].astro
│   │   ├── wiki/index.astro  wiki/[slug].astro                                 # LLM-wiki detail routes
│   │   ├── [...slug].md.ts        # per-route markdown mirror endpoint (/<route>.md)
│   │   ├── llms.txt.ts  llms-full.txt.ts  sitemap.xml.ts
│   ├── components/
│   │   ├── Header.jsx Footer.jsx AP0110MonoProvider.jsx TypingText.jsx
│   │   ├── Earth.jsx Moon.jsx MoonDataOverlay.jsx WorldMap.jsx CaliforniaUCMap.jsx flyover.jsx
│   │   ├── WikiGraph.jsx          # zero-dep grayscale force-graph (the /web4 hero)
│   │   ├── DonationModal.jsx VolunteerModal.jsx  icons/  ui/{Button,Card}.jsx
│   │   └── pages/                 # page bodies (Home, Web4, Guide, Radios, Whitepaper,
│   │       │                      #   CalCompute, Children, UNAUSA, Contribute)
│   │       ├── uc-brand/  lii-brand/  una-usa-brand/   # section brand CSS + fonts (imported by their islands; Vite-bundled)
│   ├── context/AppContext.jsx  hooks/  config/assets.js  types/
│   └── utils/wikiGraph.js         # build-time node/edge builder for the LLM-wiki graph (+ self-check)
└── .github/workflows/deploy.yml  # npm ci → astro build → upload ./dist → Pages
```

## Markdown mirrors & llms.txt (parity with AP0110.com)

Every route is mirrored as markdown for LLMs/agents:
- **`/llms.txt`** (`src/pages/llms.txt.ts`) — index: H1 + summary + Pages/Articles/Docs link lists.
- **`/llms-full.txt`** (`src/pages/llms-full.txt.ts`) — all page markdown concatenated.
- **`/<route>.md`** (`src/pages/[...slug].md.ts`) — per-page mirror; each HTML page links its `.md` via `<link rel="alternate" type="text/markdown">` in `Layout.astro`.
- Article/doc/**wiki** mirrors generate from their source markdown. **Page mirrors are hand-authored in `src/content/pages/*.md`** (each has `route`/`order` frontmatter; `wiki.md` mirrors the `/wiki` index). **Keep them in sync when you change page copy.** `sitemap.xml.ts` and `llms.txt.ts` both derive their URL lists from these collections — all four endpoints (`llms.txt.ts`, `llms-full.txt.ts`, `[...slug].md.ts`, `sitemap.xml.ts`) already register `wiki`, so a new wiki/doc page is mirrored and indexed automatically.

## The web4 LLM-wiki (knowledge graph)

The `/web4` page opens on a **grayscale, force graph** — a public, read-only LLM-wiki tracing the lineage of the Independent Internet. It is two content collections plus a zero-dep canvas island. 

**The two collections** (`src/content.config.ts`):
- **`docs/` = the raw source library.** One page per primary document (papers, specs, books, reports). `writingSchema` + `year?` (display string, e.g. `"1962-10"`), `sourceUrl?` (canonical link-out, rendered as "View original source"), `kind` (`public-domain | copyrighted | living | doc`, default `doc`). Routes: `/docs/`, `/docs/[slug]`.
- **`wiki/` = synthesized pages.** Entities, concepts, analyses, and one overview. Schema: `title`/`date`/`description`/`tags` + `type` (`entity | concept | analysis | overview`). Routes: `/wiki/`, `/wiki/[slug]`.

**The graph** is built at **build time**, not runtime: `web4.astro` calls `buildGraph(docs, wiki)` from `src/utils/wikiGraph.js` and passes the result as a prop to the `Web4` island, which renders `<WikiGraph data={graph} />` as the hero. So a content change reflows the graph on the next build with **no code changes**.
- **Nodes** = every `docs`/`wiki` page. Node `id` is the page path (`/docs/<slug>`, `/wiki/<slug>`) so a doc and a wiki page may share a slug. Node `size` = body length → drives node radius. Shade by group: docs dark, wiki mid-gray, `overview` darkest.
- **Edges** = the **internal links inside page bodies**. `buildGraph` parses each body for `/docs/<slug>` and `/wiki/<slug>` paths (and `[[slug]]` wikilinks). **Cross-linking pages is how the graph connects — there is no separate edge list.**

**To add or modify content (the whole workflow):**
1. Drop a Markdown file in `src/content/docs/` (raw source) or `src/content/wiki/` (synthesized), with the right frontmatter. Slug = filename.
2. **Cross-link it** to existing pages with **standard Markdown links** to `/docs/<slug>/` or `/wiki/<slug>/`. Do **NOT** use Obsidian `[[wikilinks]]` in rendered prose — Astro prints them literally. (The parser tolerates `[[slug]]` for edges, but real links are what render *and* connect.) A page with no links in or out is an isolated node.
3. That's it — the page auto-appears in the graph, the `/docs` or `/wiki` index, the `.md` mirror, `llms.txt`, and `sitemap.xml`. No endpoint or component edits needed.
4. The `/web4` vertical **timeline** is a separate hand-maintained array (`TIMELINE` in `src/components/pages/Web4.jsx`); each entry links to its `/docs/<slug>`. Add a timeline entry there only if the doc should also appear on the chronological timeline.

**Content rules (this is the public charity surface):**
- Strip 🔒 **Internal** material (DPI commercial pipeline, COI, coalition positioning, outreach/brand strategy). Keep it public-technical/historical.
- **Don't mention AP0110.com** in wiki/docs *content*. Don't host full third-party copyrighted text — summary + `sourceUrl` link (that's what `kind: copyrighted|living` signals).

**Verify after editing:**
- `node src/utils/wikiGraph.js` — runs the edge-parser self-check.
- `npm run build` — the gate (type-checks the collections).
- Connectivity / dead-link sweep: build `buildGraph` over the collections and assert **no isolated nodes** and **no `/wiki/<slug>` link without a matching page** (a quick Node script or `comm` of referenced-vs-existing slugs).

## Watch out

- Static export: no SSR/API routes at runtime; the `.ts` files in `src/pages/` are build-time static endpoints.
- Anything touching `window`/Three.js/globe.gl/Leaflet at module/render time must be `client:only="react"`.
- Tailwind only detects class names that appear as complete literal strings — don't build classes via runtime template strings.
- Section brand classes (`.bg-light-blue`, `.bg-un-blue`, `.bg-lii`, UC/Aller/Avenir/Kievit/Lyon fonts) live in the `*-brand` CSS files and only apply where that CSS is imported by the section island.
- **particles.js** (web4 page) is vendored at `public/vendor/particles.min.js` and loaded via a classic `<script>` tag in `Web4.jsx`. Do **not** `import` it as an ES module — v2.0.0 uses `arguments.callee` and throws under ESM strict mode. Its canvas is sized from the container, which needs an explicit height (`min-h-[260px]`) plus a post-init `resize` nudge to avoid a 0-height buffer.
