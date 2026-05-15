# AI Crawlers, robots.txt Templates & llms.txt Spec

---

## AI Crawler User Agents (2026)

| Crawler | Company | User-agent string |
|---------|---------|------------------|
| GPTBot | OpenAI/ChatGPT | `GPTBot` |
| ChatGPT-User | OpenAI | `ChatGPT-User` |
| ClaudeBot | Anthropic | `ClaudeBot` |
| Claude-Web | Anthropic | `Claude-Web` |
| PerplexityBot | Perplexity | `PerplexityBot` |
| Google-Extended | Google (AI training) | `Google-Extended` |
| Applebot-Extended | Apple AI | `Applebot-Extended` |
| FacebookBot | Meta AI | `FacebookBot` |
| Bytespider | ByteDance/TikTok | `Bytespider` |
| Bingbot | Microsoft/Bing | `bingbot` |
| msnbot | Microsoft | `msnbot` |
| Bingbot-Media | Microsoft | `Bingbot-Media` |

Note: Bing (`bingbot`) must be allowed for Siri and Alexa voice answers,
as both index through Bing.

---

## robots.txt Templates

### Default (allow all crawlers, block admin only)

```
User-agent: *
Disallow: /admin/
Disallow: /checkout/
Disallow: /*.json$

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Googlebot
Allow: /

User-agent: bingbot
Allow: /

Sitemap: https://example.com/sitemap.xml
```

### Ecommerce (block cart, account, search results)

```
User-agent: *
Disallow: /cart/
Disallow: /checkout/
Disallow: /account/
Disallow: /search?
Disallow: /admin/

User-agent: GPTBot
Allow: /products/
Allow: /blog/
Allow: /about/

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: bingbot
Allow: /

Sitemap: https://example.com/sitemap.xml
```

### Content/media site (allow everything)

```
User-agent: *
Disallow: /members/
Disallow: /admin/

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: bingbot
Allow: /

Sitemap: https://example.com/sitemap.xml
Sitemap: https://example.com/news-sitemap.xml
```

### Opt out of AI training (while keeping search visibility)

```
# Block AI training crawlers (does not affect search ranking)
User-agent: GPTBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: FacebookBot
Disallow: /

User-agent: Bytespider
Disallow: /

# Keep search and AI answer crawlers
User-agent: Googlebot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: bingbot
Allow: /

Sitemap: https://example.com/sitemap.xml
```

---

## SSR Verification

69% of AI crawlers cannot execute JavaScript. Verify SSR with:

```bash
# Test each AI crawler sees real content
for agent in "GPTBot" "ClaudeBot" "PerplexityBot" "bingbot"; do
  echo "=== $agent ==="
  curl -s -A "$agent" https://example.com/ | grep -E "<h1|<h2|<p" | head -5
  echo ""
done
```

If H1 or body paragraphs return empty, the page requires SSR or static
generation. This affects all AI citations AND voice answer eligibility.

---

## llms.txt Specification

Full spec at llmstxt.org (proposed by Jeremy Howard, September 2024).

### What llms.txt Is (and Isn't)

| File | Purpose | Audience | When used |
|------|---------|----------|-----------|
| `robots.txt` | Access permissions | All crawlers | Crawl time |
| `sitemap.xml` | Complete URL index | Search engines | Indexing |
| `llms.txt` | Curated content guide | LLMs and AI agents | **Inference** (when a user asks a question) |

`llms.txt` is useful at *inference* time — when a user is actively seeking
help — not for training or crawl permissions.

### Format

```markdown
# Project or Site Name

> Short summary — key information needed to understand what follows.
> Keep to 1-3 sentences.

Optional free-form detail (paragraphs or lists, no headings).

## Section Name

- [Link title](https://example.com/page.html.md): Description
- [Another link](https://example.com/other.html.md): Description

## Optional

- [Supplementary resource](https://example.com/extra.html.md): Can be skipped
```

### Per-Page .md Files

Expose clean Markdown at the same URL with `.md` appended:

| Original URL | Markdown version |
|-------------|-----------------|
| `https://example.com/docs/guide.html` | `https://example.com/docs/guide.html.md` |
| `https://example.com/blog/post/` | `https://example.com/blog/post/index.html.md` |

### Tooling

```bash
# Install CLI
pip install llms-txt

# Expand to full context file (excluding Optional)
llms_txt2ctx https://example.com/llms.txt > llms-ctx.txt

# Including Optional section
llms_txt2ctx --full https://example.com/llms.txt > llms-ctx-full.txt
```

Plugins: `vitepress-plugin-llms`, `docusaurus-plugin-llms`, Drupal LLM Support,
`llms-txt-php`.

Directories to submit your llms.txt: llmstxt.site, directory.llmstxt.cloud
