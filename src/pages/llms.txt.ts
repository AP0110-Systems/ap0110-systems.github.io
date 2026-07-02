import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://ap0110.org';
const byDateDesc = (a: any, b: any) => b.data.date.valueOf() - a.data.date.valueOf();

export const GET: APIRoute = async () => {
  const [pages, articles, docs, wiki] = await Promise.all([
    getCollection('pages'),
    getCollection('articles'),
    getCollection('docs'),
    getCollection('wiki'),
  ]);

  const pageLines = pages
    .sort((a, b) => a.data.order - b.data.order)
    .map((p) => `- [${p.data.title}](${SITE}${p.data.route}): ${p.data.description}`)
    .join('\n');

  const articleLines = articles
    .sort(byDateDesc)
    .map((a) => `- [${a.data.title}](${SITE}/articles/${a.id}): ${a.data.description}`)
    .join('\n');

  const docLines = docs
    .sort(byDateDesc)
    .map((d) => `- [${d.data.title}](${SITE}/docs/${d.id}): ${d.data.description}`)
    .join('\n');

  const wikiLines = wiki
    .sort((a, b) => a.data.title.localeCompare(b.data.title))
    .map((w) => `- [${w.data.title}](${SITE}/wiki/${w.id}) (${w.data.type}): ${w.data.description}`)
    .join('\n');

  const body = `# AP0110.ORG

> AP0110.ORG documents and develops Independent Internet (Web 4.0) — open-source mesh networking, decentralized protocols, and post-quantum security — and applies it to charitable technology initiatives (CalCompute, Life Impact International, UNA-USA Human Rights).

Every page is also available as markdown by appending \`.md\` to its URL (e.g. ${SITE}/wiki/web4.md). A single-file dump of all content is at ${SITE}/llms-full.txt.

## Pages

${pageLines}

## Articles

${articleLines}

## Docs

${docLines}

## Wiki

${wikiLines}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
