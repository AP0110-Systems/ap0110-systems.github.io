# AP0110.org

**We're building an internet that works for all of us — and putting it to work for the people the current one leaves behind.**

[ap0110.org](https://ap0110.org) is the charitable home of AP0110. We document and develop the open standards for an independent internet (Web 4.0), then apply that work where it changes lives: connecting underserved communities, protecting children, and pushing public technology to serve the public.

This repository is the website itself. Fixing a typo, improving a page, or helping us reach more people all start here.

## What we do

Web 4.0 is the research; these are the reasons for it. Four initiatives, all live on the site:

- **CalCompute** — a public AI cloud for California, built with the University of California so compute isn't only for those who can already afford it (SB-53).
- **Human Rights & Technology** — advising the UNA-USA Human Rights Affinity Group on keeping technology accountable to the people it touches.
- **Fight Child Trafficking** — a partnership with Life Impact International, bringing independent network infrastructure to the field where children are most at risk.
- **Donate a Node** — the simplest way to help: fund a Meshtastic mesh node and put a community that has no connection back on the map.

Every one of these runs on the same open, agent-readable standards this site is built to demonstrate.

## Help build it

- **Support the work:** [ap0110.org](https://ap0110.org) — donate, sponsor a node, or get involved.
- **Contribute to the site:** open an issue or a pull request. Content, accessibility, and copy fixes are as welcome as code.

---

## For developers

Astro 5 static site with React 19 islands, deployed to GitHub Pages.

- **Framework:** [Astro 5](https://astro.build) (static output) + React 19 islands
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`, CSS-first — no `tailwind.config.js`)
- **Visualization:** Three.js · globe.gl · Leaflet (globe, moon, world/California maps)
- **Node:** 20 (see `.nvmrc`)

> Migrated from Next.js 15 to Astro in June 2026. This was a framework conversion, not a redesign — the site keeps its own light-mode design system, and the CalCompute / Children / UNA-USA sections keep their own brand CSS.

### Getting started

```bash
git clone https://github.com/AP0110-Systems/ap0110-systems.github.io.git
cd ap0110-systems.github.io
npm install        # if EACCES on ~/.npm/_cacache: npm install --cache /tmp/npm-cache-org

npm run dev        # Astro dev server
npm run build      # static build → dist/  (also type-checks content collections)
npm run preview    # serve the built dist/ locally
```

### Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`: `npm ci` → `astro build` → upload `dist/` → GitHub Pages.

- **Domain:** `ap0110.org`, pinned by the `CNAME` file (also `public/CNAME`, so it lands in `dist/`).
- **Build output:** `dist/` (Astro static export, directory format).
- Don't change `astro.config.mjs` build settings casually — `build.format: 'directory'` and the site URL are load-bearing for GitHub Pages.

### Project structure

```
astro.config.mjs          # site config, react(), Tailwind, build.format:'directory'
public/                   # copied verbatim to dist/ (images, favicons, map JSON, CNAME)
src/
├── layouts/Layout.astro  # <head>, metadata, JSON-LD, shared island shell
├── pages/                # file-based routes (thin .astro shells) + build-time endpoints
│                         #   (llms.txt, sitemap.xml, per-route .md mirrors)
├── components/           # React islands (Header, Footer, Earth, maps, WikiGraph, …)
│   └── pages/            # page bodies + per-section brand CSS (uc-/lii-/una-usa-brand)
├── content/              # Astro content collections: articles, docs, wiki, pages
├── content.config.ts     # collection schemas
├── styles/globals.css    # Tailwind import + @theme brand tokens + light-mode base
└── utils/wikiGraph.js    # build-time graph builder for the /web4 LLM-wiki
```

The `/web4` page renders a public, read-only LLM-wiki as a force graph, built at build time from the `docs/` and `wiki/` content collections. Every route is also mirrored as markdown (`/<route>.md`, `/llms.txt`, `/llms-full.txt`) for LLMs and agents.
