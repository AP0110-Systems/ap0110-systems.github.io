# Content Templates Reference

Templates for SEO/GEO/AEO-optimized content and technical HTML tags.

---

## Full Page HTML Head Tag Block

```html
<!-- Required for every page -->
<title>Primary Keyword — Brand Name</title>
<meta name="description" content="150-160 character summary with primary keyword.">
<link rel="canonical" href="https://example.com/this-page/">

<!-- Open Graph (social + AI preview) -->
<meta property="og:title" content="Primary Keyword — Brand Name">
<meta property="og:description" content="Same as meta description or slightly varied.">
<meta property="og:image" content="https://example.com/og-image-1200x630.jpg">
<meta property="og:url" content="https://example.com/this-page/">
<meta property="og:type" content="article">

<!-- Twitter/X Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Primary Keyword — Brand Name">
<meta name="twitter:image" content="https://example.com/og-image-1200x630.jpg">

<!-- Mobile -->
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Do NOT add max-snippet if targeting featured snippets -->
<!-- Only add if you need to restrict excerpt length for other reasons: -->
<!-- <meta name="robots" content="max-snippet:160"> -->
```

Title tag formula: `[Primary Keyword] — [Brand]` (50-60 chars max).
One primary keyword per page. Use ` — ` (em-dash with spaces) as separator.

---

## Full Article Template (SEO + GEO + AEO)

```markdown
# [Primary Keyword as Question or Clear Statement]

**Last updated: [Month Year]** | [Author Name], [Credential]

[TLDR — answer the primary question completely in 2-3 sentences. Include
the primary keyword naturally. This is the most important paragraph: AI
engines and featured snippet algorithms weight the first 200 words heavily.
40-60 words total for snippet eligibility.]

---

## What Is [Topic]?

[Direct definition, 1-2 sentences, 20-30 words. Include keyword. This
paragraph is the featured snippet target for "[what is topic]" queries.]

[2-3 sentences of essential context. Keep paragraphs 2-3 sentences max
throughout — AI extractors and voice engines prefer short paragraphs.]

## [Core Subtopic 1]

[2-3 short paragraphs. One idea per paragraph.]

### [Supporting Detail]

[One idea per section. Use H3 for subcategories only.]

## [Core Subtopic 2]

[Content.]

## [Topic] vs [Related Topic]: Key Differences

| | [Topic] | [Related Topic] |
|---|---|---|
| Best for | … | … |
| Cost | … | … |
| [Key differentiator] | … | … |

[1-2 sentence verdict: "Choose [Topic] when… choose [Related Topic] when…"]

## How to [Primary Action Related to Topic]

1. [Action verb] [object]. (8-10 words)
2. [Action verb] [object].
3. [Action verb] [object].
[5-8 steps; add expanded detail paragraphs below each if needed]

## Frequently Asked Questions

### [Question 1 — phrased exactly as users would ask it]
[Direct answer, 40-60 words. Reads naturally aloud. No caveats before
the answer. Self-contained with zero visual context needed.]

### [Question 2]
[Answer.]

### [Question 3]
[Answer.]

## Summary

[Restate core answer and 3-4 key takeaways. Clear call to action.]

---

*According to [Source] ([Year]), [supporting statistic for authority].*

*Sources: [Source 1](url), [Source 2](url)*
```

---

## Unified Answer Block (HTML)

Insert on every page targeting featured snippets, voice answers, or AI citation:

```html
<div class="answer-box" itemscope itemtype="https://schema.org/Answer">
  <h2>[Question as a user would ask it?]</h2>
  <p itemprop="text">[Direct answer, 40-60 words. Subject + verb first.
  One primary fact. One clarifying sentence. Key qualifier last if needed.
  No special characters. Reads naturally aloud in one breath.]</p>
  <time datetime="2026-04-01">Last updated: April 2026</time>
</div>
```

Pair with FAQPage or QAPage JSON-LD referencing the same Q&A content.

---

## llms.txt Templates by Site Type

### Software documentation / developer tool

```markdown
# [Project Name]

> [One-sentence description: what it does, what it builds on, who it's for.]

Key constraints and notes:

- [Compatibility note or common misconception]
- [Installation prerequisite or system requirement]

## Getting Started

- [/docs/quickstart.html.md]: Fastest path to a working example
- [/docs/installation.html.md]: Full install and setup instructions
- [/docs/concepts.html.md]: Core concepts and mental model

## API Reference

- [/docs/api/index.html.md]: Complete API reference

## Examples

- [/examples/basic.html.md]: Basic usage patterns

## Optional

- [/changelog.html.md]: Version history
- [/docs/faq.html.md]: Frequently asked questions
```

### Business / SaaS product

```markdown
# [Company Name]

> [What you do, who you serve, and your primary value proposition.]

## Product

- [/product/index.html.md]: Full product overview and feature list
- [/pricing/index.html.md]: Pricing tiers and what's included

## How It Works

- [/how-it-works/index.html.md]: Step-by-step explanation of core workflow
- [/security/index.html.md]: Security practices and compliance info

## Support

- [/docs/index.html.md]: Help documentation index
- [/faq/index.html.md]: Common questions and answers

## Optional

- [/blog/index.html.md]: Company blog and product updates
- [/case-studies/index.html.md]: Customer case studies
```

### Content site / publication

```markdown
# [Publication Name]

> [Topics covered, editorial perspective, and audience.]

## Key Topics

- [/[topic-1]/index.html.md]: Coverage area and key articles
- [/[topic-2]/index.html.md]: Coverage area and key articles

## About

- [/about/index.html.md]: Editorial mission, team, and methodology

## Optional

- [/archive/index.html.md]: Full article archive
```

### Personal / portfolio site

```markdown
# [Full Name]

> [Who you are, what you do, and your current focus. 2-3 sentences.]

## Work

- [/projects/index.html.md]: Selected projects with outcomes and tech used
- [/writing/index.html.md]: Articles and essays

## Background

- [/about/index.html.md]: Full bio, experience, and expertise areas

## Optional

- [/speaking/index.html.md]: Conference talks and appearances
```

---

## llms.txt Audit Checklist

- [ ] File exists at `/llms.txt`
- [ ] H1 is the site/project name
- [ ] Blockquote summary is present and clear without prior brand knowledge
- [ ] All links point to `.md` versions of pages where available
- [ ] Optional section used only for genuinely skippable content
- [ ] No heading-level elements inside free-form sections
- [ ] Descriptions after `:` are specific and useful, not generic
- [ ] Tested: ran `llms_txt2ctx` and verified LLMs can answer questions about the site
- [ ] Per-page `.md` files exist for all pages linked from llms.txt
