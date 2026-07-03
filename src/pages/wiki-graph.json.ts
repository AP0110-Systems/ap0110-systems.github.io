import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { buildGraph } from '@/utils/wikiGraph.js';

// Agent-readable dump of the LLM-wiki link graph: the same buildGraph() output that
// powers the /web4 force-graph, minus viz-only fields. One fetch maps the whole wiki
// (append .md to any node id for its markdown mirror).

export const GET: APIRoute = async () => {
  const [docs, wiki] = await Promise.all([getCollection('docs'), getCollection('wiki')]);
  const graph = buildGraph(docs, wiki);

  const body = JSON.stringify(
    {
      nodes: graph.nodes.map(({ id, label, desc, group, type }: any) => ({ id, label, desc, group, type })),
      edges: graph.edges,
      linksOut: Object.fromEntries(graph.linksOut),
      linksIn: Object.fromEntries(graph.linksIn),
    },
    null,
    1
  );

  return new Response(body, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
