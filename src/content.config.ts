import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writingSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  // Last-edited date (the wiki's `updated`); `date` doubles as "created". Optional so
  // existing pages don't need backfilling — chrome falls back to `date`.
  updated: z.coerce.date().optional(),
  description: z.string(),
  author: z.string().optional(),
  tags: z.array(z.string()).default([]),
});

const articles = defineCollection({
  // Exclude underscore-prefixed files (e.g. _template.md)
  loader: glob({ pattern: ['**/*.md', '!**/_*'], base: './src/content/articles' }),
  schema: writingSchema,
});

// `docs` doubles as the wiki's raw source library: one page per primary document.
// `kind` records whether we host the source text (public-domain) or only a summary +
// canonical link (copyrighted books / living web pages). Existing docs default to 'doc'.
const docs = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*'], base: './src/content/docs' }),
  schema: writingSchema.extend({
    year: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    // Locally-hosted PDF of the source, e.g. "/pdfs/bitcoin-whitepaper.pdf". Rendered as a
    // "View PDF" button beside "View original source".
    pdfUrl: z.string().optional(),
    kind: z.enum(['public-domain', 'copyrighted', 'living', 'doc']).default('doc'),
  }),
});

// Synthesized wiki pages (entities / concepts / analyses / overview) layered on docs.
const wiki = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*'], base: './src/content/wiki' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    description: z.string(),
    // `overview` retired — the wiki's thesis is folded into the /wiki index page.
    type: z.enum(['entity', 'concept', 'analysis']),
    tags: z.array(z.string()).default([]),
  }),
});

// Hand-authored markdown mirrors of the site's pages (served as /<route>.md + llms.txt).
const pages = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*'], base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // URL path this markdown mirrors, e.g. "/", "/about", "/calcompute".
    route: z.string(),
    // Lower = earlier in llms.txt listing.
    order: z.number().default(0),
  }),
});

export const collections = { articles, docs, wiki, pages };
