import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { stripMarkdown } from '@/lib/search';

// Full-text search index over the LLM-wiki (docs + wiki), consumed by the Header's
// Cmd-K SearchModal and fetchable by agents directly (advertised in llms.txt).
// Append .md to any entry id for its markdown mirror.
// ponytail: full uncapped bodies in one JSON file (~650 KB raw / ~210 KB gz today) —
// fine to a few MB of corpus; past ~3 MB raw, switch to Pagefind's chunked index.

const headingsOf = (body: string) =>
  [...body.matchAll(/^#{1,4}\s+(.+)$/gm)].map((m) => m[1].trim());

export const GET: APIRoute = async () => {
  const [docs, wiki] = await Promise.all([getCollection('docs'), getCollection('wiki')]);

  const entry = (e: any, group: 'docs' | 'wiki') => ({
    id: `/${group}/${e.id}`,
    title: e.data.title,
    description: e.data.description,
    tags: e.data.tags ?? [],
    group,
    type: group === 'wiki' ? e.data.type : (e.data.kind ?? 'doc'),
    headings: headingsOf(e.body ?? ''), // from raw markdown, before stripping
    body: stripMarkdown(e.body ?? ''),  // plain text: clean snippets, matches what readers see
  });

  const body = JSON.stringify([
    ...docs.map((d) => entry(d, 'docs')),
    ...wiki.map((w) => entry(w, 'wiki')),
  ]);

  return new Response(body, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
