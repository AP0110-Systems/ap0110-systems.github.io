---
name: seo-geo-aeo
description: >
  Full-stack SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine
  Optimization) skill. Use whenever the user wants to improve a website's search
  rankings, AI visibility, voice search presence, or authority signals — even if
  they don't use the exact terms "SEO", "GEO", or "AEO". Triggers include:
  "optimize my site", "rank higher on Google", "get cited by ChatGPT/Gemini/Claude",
  "improve my search traffic", "fix my technical SEO", "get into AI Overviews",
  "build topical authority", "write an SEO article", "add schema markup",
  "audit my site", "improve my E-E-A-T", "optimize for voice search", "get
  featured in Alexa/Siri/Google Assistant answers", "optimize for zero-click
  searches", "get into the answer box", or any task involving meta tags,
  backlinks, content structure, robots.txt, sitemaps, structured data, Core Web
  Vitals, AI chatbot citations, or voice assistant responses. When in doubt,
  use this skill — the cost of missing an SEO/GEO/AEO opportunity is higher
  than the cost of briefly consulting it.
---

# SEO, GEO & AEO Skill

Covers everything needed to rank on Google, be cited by AI engines (ChatGPT,
Gemini, Claude, Perplexity), and surface in voice/zero-click answer results
(Google Assistant, Siri, Alexa). Three tracks that overlap only ~20% with
each other — all must be pursued in parallel.

**Jump to the right section:**
- Technical audit/fix → [Phase 1: Technical Foundation](#phase-1-technical-foundation)
- Content writing/optimization → [Phase 2: Content & E-E-A-T](#phase-2-content--e-e-a-t)
- Schema, entities, authority → [Phase 3: Authority & Entity Signals](#phase-3-authority--entity-signals)
- AI chatbot citations → [Phase 4: GEO — AI Engine Optimization](#phase-4-geo--ai-engine-optimization)
- Voice search & answer boxes → [Phase 5: AEO — Answer Engine Optimization](#phase-5-aeo--answer-engine-optimization)
- Full audit workflow → [Audit Workflow](#audit-workflow)
- Priority order → [Quick Reference](#quick-reference-priority-order)

**Reference files** (load when needed):
- `references/schema-templates.md` — JSON-LD for 15+ schema types
- `references/content-templates.md` — Article and AEO answer-block templates
- `references/robots-templates.md` — robots.txt by site type
- `references/ai-crawler-list.md` — AI crawler user agents and opt-out guidance
- `references/aeo-reference.md` — Full AEO: question patterns, voice platform specs, snippet tracking, PAA strategy

---

## The Core Principle

Be the clearest, most trustworthy, most structurally accessible answer to
the target question. Rankings, citations, and voice answers all follow from
that — not the other way around.

---

## Phase 1: Technical Foundation

Resolve all technical issues before content or authority work.

### 1.1 Crawlability & Indexing

**robots.txt** — allow major AI crawlers explicitly; block only private paths.
See `references/robots-templates.md` for full templates by site type.

Critical: 69% of AI crawlers cannot execute JavaScript. Server-side rendering
(SSR) or static generation is mandatory for AI visibility. Verify:
```bash
curl -A "GPTBot" https://example.com/key-page | grep -c "<h1"
# If 0, the page is invisible to most AI and voice engines
```

Sitemap: XML at `/sitemap.xml`, include `<lastmod>` timestamps, submit to
Google Search Console and Bing Webmaster Tools. Bing submission matters for
Siri and Alexa (both pull from Bing's index).

**IndexNow** — implement for instant Bing indexing on publish (critical for AEO):
```bash
curl "https://www.bing.com/indexnow?url=https://example.com/new-page/&key=YOUR_KEY"
```

### 1.2 Core Web Vitals (2026 ranking signals)

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |

Voice search is mobile-first — Core Web Vitals failures directly suppress
AEO eligibility. Fix LCP first (preload hero image, use WebP/AVIF, explicit
width/height on images).

### 1.3 Technical SEO Tags

Every page needs in `<head>`: title (50-60 chars), meta description
(150-160 chars), canonical, Open Graph tags. See `references/content-templates.md`
for the full tag block.

Add `max-snippet` only if you need to restrict excerpt length — never set it
to a value that would block featured snippets (avoid `-1` or `0`).

### 1.4 llms.txt and Per-Page .md Files

Create `/llms.txt` — a curated Markdown index guiding AI to your key content
at inference time (distinct from robots.txt and sitemap.xml). Expose clean
`.md` versions of pages at the same URL with `.md` appended. See
`references/ai-crawler-list.md` for full llms.txt spec and templates.

---

## Phase 2: Content & E-E-A-T

### 2.1 E-E-A-T Framework

Google and AI engines evaluate on four axes — all four must be demonstrated:
- **Experience**: firsthand examples, original data, screenshots, specific dates
- **Expertise**: author bio with credentials, cited sources, expert-level subtopics
- **Authoritativeness**: backlinks from authoritative sites, press mentions, Wikipedia
- **Trustworthiness**: HTTPS, privacy policy, named authors, editorial corrections policy

### 2.2 Answer-First Content Structure

This structure satisfies Google, AI citation systems, and AEO simultaneously:

```markdown
# [Primary Keyword as Question or Statement]

[TLDR — answer the question completely in 2-3 sentences. Primary keyword
naturally included. AI engines weight the first 200 words heavily.]

## What is [Topic]?
[Direct definition, 1-2 sentences.]

## [Core Subtopic 1]
[Short paragraphs, 2-3 sentences each.]

## Frequently Asked Questions
### [Question phrased as a user would ask it]
[Direct 1-2 sentence answer. 40-60 words for snippet eligibility.]
```

**AI + AEO citation triggers — include in every article:**
- At least one original statistic with explicit source + year
- At least one comparison table
- FAQ section with 3-5 questions (40-60 words each)
- `<time datetime="2026-03-22">Last updated: March 22, 2026</time>`
- Outbound links to authoritative sources (Wikipedia, .gov, .edu)

### 2.3 Keyword & Topical Authority Strategy

Match search intent before anything else (informational/navigational/commercial/
transactional). Use pillar + cluster architecture: one comprehensive pillar page
linked bidirectionally to 4-6 cluster pages on subtopics.

For AEO: also research natural-language questions ("How do I…", "What is the
best way to…"). Use People Also Ask boxes, Google autocomplete, and Also Asked
(alsoasked.com). See `references/aeo-reference.md` for full question patterns.

### 2.4 Content Freshness

Add `datePublished` and `dateModified` in both HTML and JSON-LD schema.
Update substantive content every 6-12 months. Change actual content, not
just the date stamp.

---

## Phase 3: Authority & Entity Signals

### 3.1 Schema Markup (JSON-LD)

Always use JSON-LD in `<head>` or end of `<body>`. Validate at
schema.org/validator and Google's Rich Results Test.

**Priority schema types:**

| Schema type | Use on | AEO/GEO value |
|-------------|--------|--------------|
| Organization | Homepage, About | Entity verification |
| Article | All blog/guide pages | Citation freshness signals |
| FAQPage | Any page with FAQs | PAA, AI Overviews, voice answers |
| QAPage | Dedicated Q&A pages | Voice answer source |
| HowTo | Step-by-step guides | "How to" snippets, voice steps |
| Speakable | Answer paragraphs | Google Assistant TTS |
| BreadcrumbList | All non-homepage | Navigation signals |
| Person | Author pages | E-E-A-T |

Full templates for all types → `references/schema-templates.md`

### 3.2 Entity Building

**Tier 1 (do first):** Google Business Profile, LinkedIn company page,
Wikidata entry, `sameAs` schema linking all profiles.

**Tier 2:** Wikipedia mention, press in industry publications, guest articles,
podcast appearances, industry directories (Crunchbase, G2, Capterra).

**Tier 3:** Original research cited by others, speaking credits, academic citations.

NAP consistency (Name/Address/Phone) must be identical across all directories.

### 3.3 Backlink Strategy

Quality over quantity. Priority order: resource link building → digital PR
with original data → guest posting on genuine authority sites → broken link
building → unlinked mention outreach.

Avoid: paid links, PBNs, footer links on unrelated sites, exact-match anchor
overuse.

---

## Phase 4: GEO — AI Engine Optimization

GEO optimizes for being *cited* in AI-generated answers. Different signals
from Google — ~20% overlap. Must be pursued separately.

**The three GEO laws:**
1. **Crawlability** — AI bots must be allowed and able to read content (SSR required)
2. **Citeability** — Content structured so AI can extract clear, attributed answers
3. **Credibility** — Verifiable external reputation signals

### 4.1 AI Crawler Configuration

Verify robots.txt allows all major AI crawlers. Key agents: `GPTBot`,
`ChatGPT-User`, `ClaudeBot`, `Claude-Web`, `PerplexityBot`, `Google-Extended`,
`Applebot-Extended`, `FacebookBot`, `Bytespider`.
Full list → `references/ai-crawler-list.md`

### 4.2 Platform-Specific Tactics

| Platform | Source | Key tactic |
|----------|--------|-----------|
| ChatGPT | Bing index + training | Rank in Bing, Wikipedia presence |
| Perplexity | Proprietary index + Reddit | Original data, Reddit presence, publisher portal |
| Gemini | Google index + Knowledge Graph | Strong traditional SEO, Organization schema |
| Claude | Brave Search + reviews | Brave Search indexing, formal writing style |
| Google AI Overviews | Google top-10 | Featured snippet position, FAQPage schema |

### 4.3 Citation-Ready Content Checklist

- [ ] Primary question answered within first 200 words
- [ ] Short paragraphs (2-3 sentences max)
- [ ] At least one data point with explicit source + year
- [ ] Comparison table or numbered list
- [ ] FAQ section with 3+ questions
- [ ] `dateModified` in schema
- [ ] Outbound citations to Wikipedia, .gov, or .edu
- [ ] Named expert quotes with attribution
- [ ] Author credentials stated in article or bio

**Attribution format AI engines extract reliably:**
```
According to [Source Name] ([Year]), [Statistic].
```

---

## Phase 5: AEO — Answer Engine Optimization

AEO optimizes content to be selected as the direct answer in zero-click
environments: featured snippets, People Also Ask boxes, Google Assistant,
Siri, Alexa, Cortana, and any surface that reads one authoritative answer
aloud or displays it without a click.

**The three AEO laws:**
1. **Question match** — Content must match how users phrase questions in natural spoken language
2. **Answer precision** — Answer completable in one breath (≤ 45 words voice; ≤ 60 words snippet)
3. **Snippet eligibility** — Page must rank top 10 and be structurally extractable

### 5.1 Answer-Box Templates

**Paragraph (definition/explanation):**
```markdown
## What is [Topic]?

[Topic] is [concise definition, 20 words max]. [1-2 sentences essential context.
Total paragraph: 40-60 words, no caveats before the core answer.]
```

**Steps (how-to):**
```markdown
## How to [Task]

1. [Action verb] [object] [brief qualifier]. (8-10 words per step)
2. ...
[5-8 steps; expanded detail follows below for readers who need it]
```

**Comparison:**
```markdown
## [A] vs [B]: Which Is Better?

[A] is better for [use case A], while [B] is better for [use case B].
[One-sentence verdict for the most common scenario.]

| | [A] | [B] |
|---|---|---|
```

**Voice-answer rules:**
- Lead with the key fact — no preamble, no "it depends"
- Active voice only; spell out abbreviations
- No em-dashes, parentheses, or special characters (TTS reads them oddly)
- Test by reading aloud — must fit in one breath (~10-12 seconds)

### 5.2 AEO Schema Priority

See `references/schema-templates.md` for full JSON-LD. Key types:

- **FAQPage** — on any page with a FAQ section (PAA + voice + AI Overviews)
- **QAPage** — dedicated Q&A pages (voice answer source)
- **HowTo** — step-by-step instructional pages (snippet + Alexa steps)
- **Speakable** — mark answer paragraphs for Google Assistant TTS

### 5.3 Voice Platform Summary

| Assistant | Index source | Key tactic |
|-----------|-------------|-----------|
| Google Assistant | Featured snippets + Knowledge Graph | Win featured snippet, Speakable schema, GBP complete |
| Siri | Bing + Apple Maps + Wikipedia | Bing ranking, Apple Maps listing, concise answers |
| Alexa | Bing + Wikipedia | Bing ranking, Flash Briefing RSS for media sites |
| Cortana | Bing + Microsoft Graph | IndexNow, Bing Webmaster Tools |

Full per-platform tactics → `references/aeo-reference.md`

### 5.4 AEO × GEO Unified Answer Block

Use this structure on every page targeting either surface:

```html
<div class="answer-box">
  <h2>[Question as a user would ask it]</h2>
  <p>[Direct answer, 40-60 words. Subject + verb first. No caveats before
  the core answer.]</p>
  <time datetime="2026-04-01">Last updated: April 2026</time>
</div>
```

Pair with FAQPage JSON-LD referencing the same Q&A content.

### 5.5 AEO Content Audit Checklist

- [ ] Target question appears as H1/H2/H3 verbatim or near-verbatim
- [ ] Primary answer within first 200 words, 40-60 words, reads naturally aloud
- [ ] No caveats before the core answer
- [ ] FAQPage/QAPage/HowTo schema present as appropriate
- [ ] Speakable schema on key answer paragraphs
- [ ] Answer works with zero visual context (standalone audio comprehension)
- [ ] Numbers spoken clearly ("50 percent" not "50%")
- [ ] Page ranks positions 1-20 for target query (check GSC — prerequisite)
- [ ] No `max-snippet` meta tag restricting excerpt length
- [ ] Bing Webmaster Tools sitemap submitted
- [ ] IndexNow implemented
- [ ] Google Business Profile and Apple Maps complete (for local voice queries)

---

## Audit Workflow

### Step 1: Technical crawl
```bash
curl https://example.com/robots.txt
curl https://example.com/sitemap.xml | head -50
curl -s https://example.com/ | grep -E "canonical|description|og:"
for agent in "GPTBot" "ClaudeBot" "PerplexityBot"; do
  echo "=== $agent ===" && curl -s -A "$agent" https://example.com/ | grep -E "<h1|<p" | head -3
done
curl https://example.com/llms.txt
```

### Step 2: Content audit
- [ ] H1 present and unique; meta descriptions 150-160 chars; title < 60 chars
- [ ] Answer-first structure on key pages; FAQ section present
- [ ] Author attribution; `dateModified` in schema; images have `alt`

### Step 3: Authority audit
- [ ] Organization schema with `sameAs`; Wikidata entry; Google Knowledge Panel
- [ ] Backlink profile; NAP consistency

### Step 4: GEO audit
- [ ] All AI crawlers allowed; SSR confirmed; `llms.txt` valid; `.md` files accessible
- [ ] Answer-first structure; outbound citations on key pages

### Step 5: AEO audit
- [ ] Target questions as H1/H2/H3; answer paragraph 40-60 words; reads aloud naturally
- [ ] FAQPage/QAPage/HowTo/Speakable schema present
- [ ] Pages rank 1-20 for target queries (GSC); no restrictive `max-snippet`
- [ ] Bing Webmaster Tools + IndexNow; GBP and Apple Maps complete

### Step 6: Report format
```
## Critical (blocking indexing or crawling — fix immediately)
## High (significant ranking impact)
## Medium (meaningful improvement available)
## Low (minor polish)
## GEO-specific (AI citation improvements)
## AEO-specific (featured snippet, voice, and answer box improvements)
```
Each item: what the issue is, why it matters, exact fix (code snippet or action).

---

## Quick Reference: Priority Order

1. **SSR + AI/voice crawler access** — foundation for all three tracks
2. **Core Web Vitals** — direct ranking signal; required for mobile voice eligibility
3. **Title/meta/canonical on all pages** — indexing prerequisite
4. **Answer-first content structure** — serves Google, AI citations, and voice simultaneously
5. **Organization + Article schema** — entity signals for all three tracks
6. **FAQPage + QAPage schema** — featured snippets, PAA, voice answers, AI parsing
7. **HowTo schema on instructional pages** — "how to" snippets and voice step-reading
8. **sameAs links** — entity verification
9. **Speakable schema on answer sections** — Google Assistant voice optimization
10. **Bing Webmaster Tools + IndexNow** — Siri and Alexa source indexing
11. **Question keyword research (PAA + voice phrasing)** — AEO content targeting
12. **llms.txt + per-page .md files** — AI inference-time discoverability
13. **Topical authority cluster** — long-term ranking moat
14. **Backlink acquisition** — off-page authority
15. **Platform-specific AI and voice tactics** — per-platform citation/answer rate
