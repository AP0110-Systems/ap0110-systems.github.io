import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { toMarkdownLinks } from '@/lib/mdLinks.js';

// Per-route markdown mirror: every page is reachable at <url>.md (the homepage at /index.md).
// Site pages come from the authored `pages` collection; articles/docs from their sources.

function pageSlug(route: string) {
  return route === '/' ? 'index' : route.replace(/^\//, '');
}

function withHeading(title: string, description: string, body: string) {
  return `# ${title}\n\n${description}\n\n${body}`;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const [pages, articles, docs, wiki] = await Promise.all([
    getCollection('pages'),
    getCollection('articles'),
    getCollection('docs'),
    getCollection('wiki'),
  ]);

  const entries = [
    ...pages.map((e) => ({ slug: pageSlug(e.data.route), body: e.body ?? '' })),
    ...articles.map((e) => ({
      slug: `articles/${e.id}`,
      body: withHeading(e.data.title, e.data.description, e.body ?? ''),
    })),
    ...docs.map((e) => ({
      slug: `docs/${e.id}`,
      body: withHeading(e.data.title, e.data.description, e.body ?? ''),
    })),
    ...wiki.map((e) => ({
      slug: `wiki/${e.id}`,
      body: withHeading(e.data.title, e.data.description, e.body ?? ''),
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
