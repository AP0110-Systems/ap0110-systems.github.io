// Remark plugin (HTML markdown pipeline only — the .md mirrors rewrite links separately
// in src/lib/mdLinks.js). Two transforms, no extra deps (manual mdast walk):
//
//   1. [[slug]] / [[slug|label]] / [[docs/slug]] → real links to /wiki/slug/ (or /docs/slug/).
//      Bare slugs default to the wiki group, matching wikiGraph.js's slugToId tie rule.
//   2. Tag ⚠️ / 🔍 (and Obsidian > [!type]) blockquotes with a className so globals.css can
//      style them as contradiction / gap callouts.
const WIKILINK = /\[\[(?:(docs|wiki)\/)?([a-z0-9][a-z0-9-]*)(?:\|([^\]]+))?\]\]/g;
const GAP = /^\s*(?:🔍|\[!(?:note|info|tip|gap)\])/i;
const WARN = /^\s*(?:⚠️|\[!(?:warning|danger|caution|contradiction)\])/i;

function splitWikilinks(value) {
  const out = [];
  let last = 0;
  let m;
  WIKILINK.lastIndex = 0;
  while ((m = WIKILINK.exec(value))) {
    if (m.index > last) out.push({ type: 'text', value: value.slice(last, m.index) });
    const grp = m[1] ?? 'wiki';
    out.push({ type: 'link', url: `/${grp}/${m[2]}/`, children: [{ type: 'text', value: m[3] ?? m[2] }] });
    last = m.index + m[0].length;
  }
  if (!out.length) return null; // no wikilink found
  if (last < value.length) out.push({ type: 'text', value: value.slice(last) });
  return out;
}

function firstText(node) {
  if (node?.type === 'text') return node.value;
  if (node?.children?.length) return firstText(node.children[0]);
  return '';
}

function walk(node) {
  if (!node || !Array.isArray(node.children)) return;

  if (node.type === 'blockquote') {
    const t = firstText(node);
    const cls = GAP.test(t) ? 'callout callout-gap' : WARN.test(t) ? 'callout callout-warning' : null;
    if (cls) {
      node.data = node.data || {};
      node.data.hProperties = { ...(node.data.hProperties || {}), className: cls };
    }
  }

  const next = [];
  for (const child of node.children) {
    if (child.type === 'text') {
      const split = splitWikilinks(child.value);
      if (split) { next.push(...split); continue; }
    }
    walk(child);
    next.push(child);
  }
  node.children = next;
}

export default function remarkWiki() {
  return (tree) => walk(tree);
}
