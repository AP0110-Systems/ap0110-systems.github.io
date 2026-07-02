import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { toMarkdownLinks } from '@/lib/mdLinks.js';

const byDateDesc = (a: any, b: any) => b.data.date.valueOf() - a.data.date.valueOf();

export const GET: APIRoute = async () => {
  const [pages, articles, docs, wiki] = await Promise.all([
    getCollection('pages'),
    getCollection('articles'),
    getCollection('docs'),
    getCollection('wiki'),
  ]);

  const sections: string[] = [];

  for (const p of pages.sort((a, b) => a.data.order - b.data.order)) {
    sections.push(p.body ?? '');
  }
  for (const a of articles.sort(byDateDesc)) {
    sections.push(`# ${a.data.title}\n\n${a.data.description}\n\n${a.body ?? ''}`);
  }
  for (const d of docs.sort(byDateDesc)) {
    sections.push(`# ${d.data.title}\n\n${d.data.description}\n\n${d.body ?? ''}`);
  }
  for (const w of wiki.sort((a, b) => a.data.title.localeCompare(b.data.title))) {
    sections.push(`# ${w.data.title}\n\n${w.data.description}\n\n${w.body ?? ''}`);
  }

  const body = `# AP0110.ORG — Full Content\n\n> Concatenated markdown of every page on ap0110.org.\n\n${sections.join('\n\n---\n\n')}\n`;

  // Resolve internal links to .md mirror targets (agent-readable; see src/lib/mdLinks.js).
  return new Response(toMarkdownLinks(body), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
