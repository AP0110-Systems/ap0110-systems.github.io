# AEO Reference

Full reference for Answer Engine Optimization: question research patterns,
voice platform specs, featured snippet tactics, and PAA strategy.

---

## Question Type Taxonomy

Map every content page to one or more question types before writing.

| Question type | Example | Best content format |
|--------------|---------|-------------------|
| Definition ("What is") | "What is compound interest?" | 1-sentence definition + 2-3 sentence expansion |
| Process ("How do I") | "How do I change a tire?" | Numbered steps, 8 words per step max |
| Comparison ("Which is better") | "React or Vue?" | Table + 1-2 sentence verdict |
| Reason ("Why does") | "Why does bread rise?" | Direct cause + brief explanation |
| Timing ("When should") | "When should I refinance?" | Direct condition + qualifier |
| Location ("Where can") | "Where can I recycle batteries?" | Direct answer + actionable detail |
| Quantity ("How much/many") | "Calories in an egg?" | Number first, context second |
| Safety ("Is it safe to") | "Is it safe to fast for 24 hours?" | Direct yes/no + key condition |
| Best option ("What is the best") | "Best free password manager?" | Top pick + brief rationale |

---

## Natural-Language Question Patterns to Target

These phrases signal AEO-eligible queries:

- "What is the best way to…"
- "How do I…" / "How do you…"
- "Can you…" / "Is it possible to…"
- "What does [term] mean?"
- "Is it safe to…" / "Is it OK to…"
- "How long does it take to…"
- "What happens when…" / "What happens if…"
- "Should I… or…?"
- "What is the difference between… and…?"
- "How much does… cost?"
- "When should I…?"
- "Where can I find…?"
- "Who is responsible for…?"
- "Why is… important?"

---

## Question Mining Sources

Use multiple sources to build a complete question map for each topic:

1. **Google PAA boxes** — search your seed keyword, expand every "People Also Ask" box, capture all questions
2. **Google autocomplete** — type "how do I [topic]", "what is [topic]", "why does [topic]" and capture all suggestions
3. **Also Asked** (alsoasked.com) — builds a visual PAA relationship tree; free for limited queries
4. **Answer the Public** (answerthepublic.com) — free tier gives 3 searches/day; organizes by question word
5. **Reddit and Quora** — search your topic; questions in thread titles are real user phrasing
6. **Your own site search logs** — highest-value source; real questions from real users
7. **Support tickets and chat logs** — verbatim natural-language questions

---

## Voice Platform Specifications

### Google Assistant
- **Index source**: Featured snippets + Google Knowledge Graph + Google Search
- **Query style**: Conversational, full sentences ("Hey Google, how do I…")
- **Reading behavior**: Reads featured snippet paragraph verbatim; skips bullets and tables
- **Answer length**: 40-60 words (paragraph snippet length)
- **Tactics**:
  - Win the featured snippet for target queries (see Featured Snippet section below)
  - Implement Speakable schema on answer paragraphs
  - Google Business Profile must be complete for local voice queries
  - Target "near me" queries with LocalBusiness schema
  - Answer must work read aloud — no bullet points or table references in snippet text
  - Speakable CSS selectors: `.answer-box`, `h1`, `.article-summary`

### Apple Siri
- **Index source**: Bing search index + Apple Maps + Wolfram Alpha + Wikipedia
- **Query style**: Short, direct ("What is…", "Who is…", "Where is…", "How do I…")
- **Reading behavior**: 1-2 sentences; truncates at ~30 words
- **Answer length**: 20-30 words ideal; never more than 50
- **Tactics**:
  - Rank well in Bing — submit sitemap to Bing Webmaster Tools, allow `bingbot`
  - Wikipedia presence for brand and key topic pages
  - Apple Maps listing: claim at maps.apple.com/place
  - Answers must be extremely concise — Siri truncates aggressively
  - FAQPage and QAPage schema especially important for Siri
  - Implement IndexNow for instant Bing index updates

### Amazon Alexa
- **Index source**: Bing index + Wikipedia + Alexa Skills ecosystem
- **Query style**: Direct factual questions; "flash briefing" audio content
- **Reading behavior**: Full paragraph read aloud, no visual backup whatsoever
- **Answer length**: 50 words for factual; up to 90 seconds for Flash Briefings
- **Tactics**:
  - Bing ranking is the primary lever (same tactics as Siri)
  - Wikipedia presence strengthens Alexa confidence in brand answers
  - Consider publishing an Alexa Skill if product/service fits the format
  - Flash Briefing RSS: publish short daily/weekly audio updates (≤ 90 sec)
  - Register as Alexa Flash Briefing source for news/media sites
  - Answers must be 100% self-contained — no "click here", no "see below", no URLs
  - Avoid any text that assumes visual context

### Microsoft Cortana / Bing Chat
- **Index source**: Bing index + Microsoft Graph (enterprise users)
- **Query style**: Work context queries, document summaries, factual lookups
- **Tactics**:
  - Bing Webmaster Tools registration and sitemap submission
  - IndexNow protocol for instant indexing:
    ```bash
    curl "https://www.bing.com/indexnow?url=https://example.com/page/&key=YOUR_KEY"
    ```
  - Allow `bingbot` and `msnbot` in robots.txt
  - Structured data compliance — Cortana reads schema.org markup heavily

---

## Featured Snippet Optimization

Featured snippets are the primary AEO win on desktop and the source for
most Google Assistant voice answers.

### Eligibility Prerequisites
1. Page ranks positions 1-10 for the target query (hard requirement)
2. No `max-snippet` meta tag restricting excerpt length
3. Page is indexed and not blocked by robots.txt

### Snippet Type Formats

**Paragraph snippet** (definition/explanation queries):
- 40-60 words
- Starts with subject + verb ("Compound interest is…")
- Self-contained — no "as mentioned above"
- Immediately follows the H2/H3 that matches the query
- No special characters, no parenthetical asides

**List snippet** (how-to/process queries):
- 5-8 items
- Each item starts with an action verb
- Items are 8-12 words each
- Logical sequential order
- No sub-bullets

**Table snippet** (comparison/data queries):
- First column is the variable being compared
- Column headers are clear and concise
- 4-6 columns maximum
- 4-8 rows maximum
- No merged cells

### Heading-to-Answer Alignment

The heading immediately above the answer must closely match the query:

| Query | Ideal heading |
|-------|--------------|
| "what is compound interest" | `## What Is Compound Interest?` |
| "how to change a tire" | `## How to Change a Tire` |
| "best free password managers" | `## Best Free Password Managers` |

Exact or near-exact match outperforms paraphrased headings.

### Snippet Cannibalization

Only one URL per domain can hold a snippet for a given query. If multiple
pages target the same question, consolidate or clearly differentiate them.

### Tracking Tools

- **Google Search Console** → Performance → Search type: Web → Filter queries → check Position column. Pages ranking 1-10 are snippet-eligible.
- **SEMrush Position Tracking**: Featured snippet column shows current holder and whether you hold it.
- **Ahrefs SERP Features report**: Shows which queries have snippets and who holds them.
- **Also Asked (alsoasked.com)**: Shows full PAA tree; snippets and PAA often co-occur.

---

## People Also Ask (PAA) Strategy

PAA boxes expand as users click, creating compounding visibility. Appearing
in PAA for high-volume questions drives meaningful traffic without requiring
#1 ranking.

### PAA Mapping Process

1. Search your seed keyword in Google; capture all visible PAA questions
2. Click each PAA to expand — new questions appear; capture those too
3. Use Also Asked (alsoasked.com) to build the full relational PAA tree
4. Prioritize questions with highest search volume and clearest answer format
5. Create one dedicated H2/H3 section per PAA question on the relevant page

### PAA Answer Format

```markdown
### [Question exactly as it appears in PAA]

[Direct answer, 40-50 words. Start with the key fact. No preamble.
No hedging before the answer. State the answer, then qualify if needed.]
```

### PAA + FAQPage Schema Integration

Every PAA question you target on a page should also appear in the FAQPage
JSON-LD schema. The schema signals to Google that your page has structured
answers; PAA and schema reinforce each other.

---

## AEO × GEO Cross-Benefit Matrix

Tactics that serve both AEO (voice/snippets) and GEO (AI citations):

| Tactic | AEO benefit | GEO benefit |
|--------|------------|------------|
| Answer-first paragraph (40-60 words) | Featured snippet / voice source | AI citation extraction |
| FAQPage schema | PAA eligibility | AI FAQ parsing |
| QAPage schema | Voice answer source | AI Q&A extraction |
| HowTo schema | "How to" snippet | AI steps extraction |
| Named expert quotes with attribution | E-E-A-T for snippet ranking | AI citation credibility |
| Original data with source + year | Snippet freshness | AI prefers cited statistics |
| Outbound links to authoritative sources | Trust signals for Google | AI citation weighting |
| `dateModified` in schema | Snippet freshness signal | AI citation recency |
| Short paragraphs (2-3 sentences) | Easier snippet extraction | AI extractors prefer them |

---

## IndexNow Implementation

IndexNow lets you ping Bing (and other IndexNow-compatible engines) the
moment you publish or update content — critical for Siri and Alexa freshness.

**Setup:**
1. Generate a key at bing.com/indexnow
2. Host the key file at `https://example.com/{key}.txt`
3. Ping on every publish/update:

```bash
curl -X POST "https://www.bing.com/indexnow" \
  -H "Content-Type: application/json" \
  -d '{
    "host": "example.com",
    "key": "YOUR_KEY_HERE",
    "urlList": [
      "https://example.com/updated-page/",
      "https://example.com/new-page/"
    ]
  }'
```

Most CMS platforms (WordPress, Webflow, etc.) have IndexNow plugins that
automate this on publish.
