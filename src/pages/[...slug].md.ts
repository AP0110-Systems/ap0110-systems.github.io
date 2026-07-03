import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { toMarkdownLinks } from '@/lib/mdLinks.js';
import { buildGraph, backlinksFor } from '@/utils/wikiGraph.js';

// Per-route markdown mirror: every page is reachable at <url>.md (the homepage at /index.md).
// Site pages come from the authored `pages` collection; articles/docs from their sources.

function pageSlug(route: string) {
  return route === '/' ? 'index' : route.replace(/^\//, '');
}

function withHeading(title: string, description: string, body: string) {
  return `# ${title}\n\n${description}\n\n${body}`;
}

// Backlinks section for docs/wiki mirrors — .md parity with WikiNav's "Referenced by" rail.
// Plain /docs|/wiki paths here; the toMarkdownLinks() pass in GET rewrites them to .md.
function withBacklinks(body: string, graph: ReturnType<typeof buildGraph>, id: string) {
  const links = backlinksFor(graph, id);
  if (!links.length) return body;
  const lines = links
    .map((n: { id: string; label: string; desc: string }) => `- [${n.label}](${n.id})${n.desc ? ` — ${n.desc}` : ''}`)
    .join('\n');
  return `${body}\n\n---\n\n## Backlinks\n\nPages that link here:\n\n${lines}\n`;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const [pages, articles, docs, wiki] = await Promise.all([
    getCollection('pages'),
    getCollection('articles'),
    getCollection('docs'),
    getCollection('wiki'),
  ]);

  const graph = buildGraph(docs, wiki);

  const entries = [
    ...pages.map((e) => ({ slug: pageSlug(e.data.route), body: e.body ?? '' })),
    ...articles.map((e) => ({
      slug: `articles/${e.id}`,
      body: withHeading(e.data.title, e.data.description, e.body ?? ''),
    })),
    ...docs.map((e) => ({
      slug: `docs/${e.id}`,
      body: withBacklinks(withHeading(e.data.title, e.data.description, e.body ?? ''), graph, `/docs/${e.id}`),
    })),
    ...wiki.map((e) => ({
      slug: `wiki/${e.id}`,
      body: withBacklinks(withHeading(e.data.title, e.data.description, e.body ?? ''), graph, `/wiki/${e.id}`),
    })),
  ];

  return entries.map((e) => ({ params: { slug: e.slug }, props: { body: e.body } }));
};

export const GET: APIRoute = async ({ props }) => {
  // Rewrite internal links to their .md mirror targets so agents reading the markdown
  // follow .md → .md (HTML pages keep /slug/). See src/lib/mdLinks.js.
  return new Response(toMarkdownLinks((props as { body: string }).body), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
