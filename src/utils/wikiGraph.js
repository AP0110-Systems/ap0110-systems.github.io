// Build a node/edge graph from the `docs` (raw sources) and `wiki` (synthesized)
// collections, Obsidian-style: edges are the internal links found in each page body.
// Pure data in, pure data out — called at build time from web4.astro and handed to the
// WikiGraph island as a prop (no runtime fetch).
//
// Node ids are the page paths ("/docs/<slug>", "/wiki/<slug>") so a doc and a wiki page
// that happen to share a slug (e.g. the "Semantic Web" article vs. the concept) stay
// distinct. Edges are undirected and deduped; only links whose target is a real node count.

// Matches internal links written either as a path (/docs/foo, /wiki/bar, trailing slash
// optional) or as an Obsidian wikilink ([[foo]] → resolved against known slugs).
const PATH_RE = /\/(docs|wiki)\/([a-z0-9][a-z0-9-]*)/g;
const WIKILINK_RE = /\[\[([a-z0-9][a-z0-9-]*)\]\]/g;

// Node size is body length, clamped to this cap so a single book-length full-text source
// (e.g. augmenting-human-intellect at ~336 KB) can't dominate the radius scale and squash
// every other node to the floor. Anything >= cap renders at the max radius. Tune with the
// spread of body lengths, not any one outlier.
const SIZE_CAP = 20000;

// Returns { nodes, edges, linksOut, linksIn }:
//   edges    — undirected, deduped (for the force-graph viz)
//   linksOut — directed: linksOut[id] = [target ids this page links TO]  (→ source_count)
//   linksIn  — directed: linksIn[id]  = [source ids that link TO this page] (→ backlinks)
export function buildGraph(docs, wiki) {
  const nodes = [];
  const byId = new Map(); // node id -> node
  const slugToId = new Map(); // bare slug -> node id (wiki wins ties, for [[slug]] resolution)
  const linksOut = new Map();
  const linksIn = new Map();

  const add = (entry, group) => {
    const id = `/${group}/${entry.id}`;
    const node = {
      id,
      label: entry.data.title,
      group, // 'docs' | 'wiki'
      type: group === 'wiki' ? entry.data.type : (entry.data.kind ?? 'doc'),
      // Content weight: body length drives node radius (bigger doc → bigger node), capped
      // so one book-length full-text source can't pin the scale and squash everything else.
      // The /wiki/web4 hub is pinned to the cap so it always reads as the largest node.
      size: id === '/wiki/web4' ? SIZE_CAP : Math.min((entry.body ?? '').length, SIZE_CAP),
    };
    nodes.push(node);
    byId.set(id, node);
    if (group === 'wiki' || !slugToId.has(entry.id)) slugToId.set(entry.id, id);
  };

  for (const d of docs) add(d, 'docs');
  for (const w of wiki) add(w, 'wiki');

  const edgeSet = new Set();
  const edges = [];
  const pushDirected = (map, key, val) => {
    const arr = map.get(key) ?? [];
    if (!arr.includes(val)) arr.push(val);
    map.set(key, arr);
  };
  const link = (a, b) => {
    if (a === b || !byId.has(a) || !byId.has(b)) return;
    // Directed record (a → b) for backlinks / source counts.
    pushDirected(linksOut, a, b);
    pushDirected(linksIn, b, a);
    // Undirected, deduped edge for the viz.
    const key = a < b ? `${a}|${b}` : `${b}|${a}`;
    if (edgeSet.has(key)) return;
    edgeSet.add(key);
    edges.push({ source: a, target: b });
  };

  const scan = (entry, group) => {
    const from = `/${group}/${entry.id}`;
    const body = entry.body ?? '';
    for (const m of body.matchAll(PATH_RE)) link(from, `/${m[1]}/${m[2]}`);
    for (const m of body.matchAll(WIKILINK_RE)) {
      const target = slugToId.get(m[1]);
      if (target) link(from, target);
    }
  };

  for (const d of docs) scan(d, 'docs');
  for (const w of wiki) scan(w, 'wiki');

  return { nodes, edges, linksOut, linksIn };
}

// Backlinks for a page: node objects that link TO `nodeId` (from graph.linksIn).
export function backlinksFor(graph, nodeId) {
  const byId = new Map(graph.nodes.map((n) => [n.id, n]));
  return (graph.linksIn.get(nodeId) ?? []).map((id) => byId.get(id)).filter(Boolean);
}

// source_count: how many `docs` (raw sources) a wiki page draws on (its outgoing /docs links).
export function sourceCountFor(graph, nodeId) {
  const byId = new Map(graph.nodes.map((n) => [n.id, n]));
  return (graph.linksOut.get(nodeId) ?? []).filter((id) => byId.get(id)?.group === 'docs').length;
}

// A focused local subgraph: `nodeId` plus everything within `depth` undirected hops,
// and the edges among that set. Feeds the per-page mini WikiGraph.
export function subgraphFor(graph, nodeId, depth = 1) {
  const byId = new Map(graph.nodes.map((n) => [n.id, n]));
  if (!byId.has(nodeId)) return { nodes: [], edges: [] };
  const adj = new Map();
  for (const e of graph.edges) {
    (adj.get(e.source) ?? adj.set(e.source, []).get(e.source)).push(e.target);
    (adj.get(e.target) ?? adj.set(e.target, []).get(e.target)).push(e.source);
  }
  const keep = new Set([nodeId]);
  let frontier = [nodeId];
  for (let d = 0; d < depth; d++) {
    const next = [];
    for (const id of frontier) for (const nb of adj.get(id) ?? []) if (!keep.has(nb)) { keep.add(nb); next.push(nb); }
    frontier = next;
  }
  // Always anchor local graphs on the /wiki/web4 hub, whether or not this page links to it.
  if (byId.has('/wiki/web4')) keep.add('/wiki/web4');
  return {
    nodes: graph.nodes.filter((n) => keep.has(n.id)),
    edges: graph.edges.filter((e) => keep.has(e.source) && keep.has(e.target)),
  };
}

// ── self-check ────────────────────────────────────────────────────────────────
function demo() {
  const assert = (cond, msg) => { if (!cond) throw new Error('wikiGraph self-check: ' + msg); };
  const docs = [{ id: 'bitcoin', data: { title: 'Bitcoin', kind: 'public-domain' }, body: 'see [[nakamoto]] and /wiki/decentralization' }];
  const wiki = [
    { id: 'nakamoto', data: { title: 'Nakamoto', type: 'entity' }, body: 'wrote /docs/bitcoin' },
    { id: 'decentralization', data: { title: 'Decentralization', type: 'concept' }, body: '' },
  ];
  const g = buildGraph(docs, wiki);
  assert(g.nodes.length === 3, `expected 3 nodes, got ${g.nodes.length}`);
  // [[nakamoto]], /wiki/decentralization, and /docs/bitcoin (deduped vs the first) → 2 edges
  assert(g.edges.length === 2, `expected 2 edges, got ${g.edges.length}`);
  assert(g.edges.some((e) => e.source === '/docs/bitcoin' && e.target === '/wiki/nakamoto'), 'missing bitcoin↔nakamoto');
  assert(g.edges.some((e) => e.target === '/wiki/decentralization' || e.source === '/wiki/decentralization'), 'missing decentralization edge');
  // Directed: bitcoin → nakamoto (backlink), nakamoto → bitcoin (its one source).
  assert(backlinksFor(g, '/wiki/nakamoto').some((n) => n.id === '/docs/bitcoin'), 'nakamoto backlink missing');
  assert(sourceCountFor(g, '/wiki/nakamoto') === 1, `nakamoto source_count expected 1, got ${sourceCountFor(g, '/wiki/nakamoto')}`);
  assert(sourceCountFor(g, '/docs/bitcoin') === 0, 'a doc should report 0 sources');
  // Local subgraph around the focus node includes its neighbors.
  const sub = subgraphFor(g, '/wiki/nakamoto', 1);
  assert(sub.nodes.some((n) => n.id === '/docs/bitcoin'), 'subgraph missing neighbor');
  console.log('wikiGraph self-check passed:', g.nodes.length, 'nodes,', g.edges.length, 'edges; directed maps + subgraph OK');
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) demo();
