// Rewrite a markdown body's INTERNAL links to their .md-mirror targets, so an agent
// reading /wiki/<slug>.md (or /llms-full.txt) follows links to other .md files instead of
// HTML pages. HTML output is untouched — only the markdown mirrors call this.
//
//   /wiki/<slug>  /wiki/<slug>/   → /wiki/<slug>.md
//   /docs/<slug>  /docs/<slug>/   → /docs/<slug>.md
//   /wiki/  /docs/  (index)       → /wiki.md  /docs.md
//   [[slug]] [[slug|label]] [[docs/slug]] → [label](/wiki/slug.md)
//
// A trailing terminator lookahead ((), whitespace, quote, #, ?, end) anchors the path end
// so we never rewrite a path that's already `.md` (no double extension).
const WIKILINK = /\[\[(?:(docs|wiki)\/)?([a-z0-9][a-z0-9-]*)(?:\|([^\]]+))?\]\]/g;
const SLUG_PATH = /\/(wiki|docs)\/([a-z0-9][a-z0-9-]*)\/?(?=[)\s"'#?]|$)/g;
const INDEX_PATH = /\/(wiki|docs)\/?(?=[)\s"'#?]|$)/g;

export function toMarkdownLinks(body) {
  return body
    .replace(WIKILINK, (_, grp, slug, label) => `[${label ?? slug}](/${grp ?? 'wiki'}/${slug}.md)`)
    .replace(SLUG_PATH, (_, grp, slug) => `/${grp}/${slug}.md`)
    .replace(INDEX_PATH, (_, grp) => `/${grp}.md`);
}

// ── self-check ────────────────────────────────────────────────────────────────
function demo() {
  const assert = (cond, msg) => { if (!cond) throw new Error('mdLinks self-check: ' + msg); };
  const out = toMarkdownLinks(
    'See [Nakamoto](/wiki/nakamoto/) and [bitcoin](/docs/bitcoin-whitepaper) plus [[decentralization]] and [[docs/robots-txt|robots]] and the [library](/docs/).'
  );
  assert(out.includes('/wiki/nakamoto.md)'), 'slug w/ trailing slash → .md');
  assert(out.includes('/docs/bitcoin-whitepaper.md)'), 'slug no trailing slash → .md');
  assert(out.includes('[decentralization](/wiki/decentralization.md)'), 'bare wikilink → .md link');
  assert(out.includes('[robots](/docs/robots-txt.md)'), 'wikilink w/ group+label → .md link');
  assert(out.includes('/docs.md)'), 'bare index → .md');
  assert(!/\.md\.md/.test(out), 'no double .md');
  console.log('mdLinks self-check passed');
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) demo();
