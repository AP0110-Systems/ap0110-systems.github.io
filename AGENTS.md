# AP0110.org

Next.js 15 / React 19 static site deployed to GitHub Pages at ap0110.org. Focuses on Independent Internet (Web 4.0) technology with charitable applications (CalCompute, LII, UNA-USA partnerships).

**Stack:** Next.js 15 (static export), React 19, Tailwind CSS 4, Three.js, globe.gl, Leaflet
**Deploy:** `npm run build` → `out/` → GitHub Pages via `.github/workflows/deploy.yml`
**Path alias:** `@/*` → `./src/*`
**Custom domain:** `CNAME` → ap0110.org

---

## Asset Organization

**`public/images/`** — all images committed to this repo; only actively used files live here.

All images are committed directly to `public/images/`. No copy scripts or submodules are involved.

---

## Directory Structure

```
/
├── app/                          # Next.js App Router pages
│   ├── page.jsx                  # Homepage — hero, CalCompute/Children/UNA-USA sections
│   ├── layout.jsx                # Root layout — Header, Footer, global metadata
│   ├── calcompute/               # CalCompute (CA computing initiative)
│   │   ├── page.jsx
│   │   ├── layout.jsx
│   │   ├── CalCompute.md         # Content/strategy docs
│   │   ├── SB-53.md
│   │   ├── AP0110-CalCompute-Strategy.md
│   │   └── uc-brand/             # UC System brand assets, fonts (Kievit, Lyon), campus monograms
│   ├── children/                 # Children / LII (Ladies in Informatics) section
│   │   ├── page.jsx              # Globe visualization page
│   │   └── lii-brand/            # LII brand CSS, lii-logo.png, handprint.png
│   ├── unausa/                   # UNA-USA (UN Association) partnership
│   │   ├── page.jsx
│   │   ├── layout.jsx
│   │   └── una-usa-brand/        # Brand PDF, CSS, fonts (Aller, Avenir), SVG logos
│   ├── articles/                 # Dynamic article pages
│   │   └── [slug]/page.jsx
│   ├── docs/                     # Documentation pages
│   │   ├── page.jsx
│   │   └── [slug]/page.jsx       # Dynamic doc pages (rendered from content/articles/)
│   ├── web4/page.jsx             # Web 4.0 whitepaper page
│   ├── whitepaper/page.jsx
│   ├── radios/page.jsx           # Mesh networking / Meshtastic
│   ├── guide/page.jsx
│   └── contribute/page.jsx
│
├── content/                      # Markdown content for dynamic routes
│   └── articles/                 # Article markdown files (gray-matter frontmatter)
│       └── _template.md
│
├── src/
│   ├── components/               # Shared React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Earth.jsx             # Three.js 3D Earth globe (uses /images/globe/earth-day.jpg)
│   │   ├── Moon.jsx              # Moon visualization (uses /images/globe/lunar_surface.jpg)
│   │   ├── MoonDataOverlay.jsx
│   │   ├── WorldMap.jsx          # Leaflet interactive map
│   │   ├── CaliforniaUCMap.jsx   # UC campus map
│   │   ├── TypingText.jsx
│   │   ├── VolunteerModal.jsx
│   │   ├── DonationModal.jsx
│   │   ├── AP0110MonoProvider.jsx
│   │   ├── flyover.jsx
│   │   ├── icons/AmericanFlagIcon.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       └── Card.jsx
│   ├── context/AppContext.jsx
│   ├── hooks/
│   │   ├── useAP0110Mono.js
│   │   └── useScrollIndicator.js
│   ├── styles/globals.css        # Global Tailwind styles
│   ├── utils/
│   │   ├── cn.js                 # clsx + tailwind-merge helper
│   │   └── applyMonoToAP0110.js
│   ├── config/assets.js          # getPartnersImagePath() → /images/partner-logos/
│   └── types/index.js
│
├── public/
│   ├── images/                   # ALL images committed to this repo (only used files)
│   │   ├── AP0110_moon_black.webp          # OG image, preloaded in layout
│   │   ├── CalCompute.svg                  # app/page.jsx
│   │   ├── UNA-USA_white.svg               # app/page.jsx
│   │   ├── bear.png                        # app/calcompute/page.jsx
│   │   ├── california-postcard.jpg         # app/calcompute/layout.jsx OG
│   │   ├── lii-logo.png                    # app/page.jsx
│   │   ├── meshtastic.png                  # app/page.jsx
│   │   ├── moon.webp                       # src/components/Footer.jsx
│   │   ├── web.svg                         # app/page.jsx
│   │   ├── Brazil/
│   │   │   └── rosa-rafael-rQSKTNvaVdE-unsplash-2.jpg  # children + unausa bg
│   │   ├── LII/
│   │   │   └── heal-section-1.jpg          # children + unausa bg
│   │   ├── globe/
│   │   │   ├── earth-day.jpg               # src/components/Earth.jsx
│   │   │   └── lunar_surface.jpg           # src/components/Moon.jsx
│   │   └── partner-logos/                  # Partner logos used in calcompute
│   │       ├── WHITE_UCBerkeley.png
│   │       └── UC_Riverside_Horiz_WhtBluBG.png
│   ├── favicons/                 # Full favicon set
│   ├── california-cities.json    # Geographic data for CaliforniaUCMap
│   ├── california-counties.json
│   ├── california-largest-cities.json
│   ├── historical_foundation.json
│   └── site.webmanifest
│
├── .github/workflows/
│   └── deploy.yml                # Build & deploy to GitHub Pages on push to main
│
├── next.config.js                # static export, Three.js/globe.gl webpack handling
├── tailwind.config.js            # Custom palette: ap-cyan, ap-red, ap-orange, etc.
├── jsconfig.json                 # Path aliases
└── CNAME                         # ap0110.org
```

---

## Build Notes

- `npm run dev` — starts dev server
- `npm run build` — `next build`; output in `out/`
- `public/images/partner-logos/` is committed to this repo (not gitignored)
- Three.js and globe.gl require special webpack config (see `next.config.js`) for static export
- Dynamic routes (`/articles/[slug]`, `/docs/[slug]`) read markdown from `content/articles/` using `gray-matter` + `marked`

## Styling

Tailwind 4 with custom AP0110 color tokens. Global styles in `src/styles/globals.css`. Component-level styles use Tailwind utilities + `cn()` helper.
