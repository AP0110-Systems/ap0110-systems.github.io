import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://ap0110.org';

// Page routes come from the `pages` collection (authoritative `route` field);
// article/doc URLs come from their collections. Same source of truth as llms.txt.ts.
export const GET: APIRoute = async () => {
  const [pages, articles, docs, wiki] = await Promise.all([
    getCollection('pages'),
    getCollection('articles'),
    getCollection('docs'),
    getCollection('wiki'),
  ]);

  const urls: { loc: string; lastmod?: string }[] = [
    ...pages.map((p) => ({ loc: `${SITE}${p.data.route}` })),
    ...articles.map((a) => ({
      loc: `${SITE}/articles/${a.id}`,
      lastmod: a.data.date.toISOString().slice(0, 10),
    })),
    ...docs.map((d) => ({
      loc: `${SITE}/docs/${d.id}`,
      lastmod: d.data.date.toISOString().slice(0, 10),
    })),
    ...wiki.map((w) => ({
      loc: `${SITE}/wiki/${w.id}`,
      lastmod: w.data.date.toISOString().slice(0, 10),
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`,
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
