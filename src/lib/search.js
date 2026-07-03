// Ranking for the Cmd-K wiki search (SearchModal.jsx) over the /search.json index.
// Plain token scoring, no search lib — see search.json.ts for the Pagefind ceiling.

// Strip markdown syntax down to prose, so the index matches what readers see and
// snippets don't show raw `#`/`**`/link syntax. Used by search.json.ts at build time.
export function stripMarkdown(md) {
  return md
    .replace(/```[^\n]*/g, '')                        // fence markers (keep code content)
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')         // images → alt text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')          // links → link text
    .replace(/\[\[(?:[^\]|]+\|)?([^\]]+)\]\]/g, '$1') // wikilinks → label
    .replace(/^#{1,6}\s+/gm, '')                      // heading markers
    .replace(/^>\s?/gm, '')                           // blockquote markers
    .replace(/^\s*([-*+]|\d+\.)\s+/gm, '')            // list markers
    .replace(/^\s*([-*_]\s*){3,}$/gm, '')             // horizontal rules
    .replace(/(\*{1,3}|_{1,3})([^*_]+)\1/g, '$2')     // emphasis
    .replace(/`([^`]*)`/g, '$1')                      // inline code ticks
    .replace(/<[^>]+>/g, '')                          // html tags
    .replace(/\|/g, ' ')                              // table pipes
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// Precompute lowercased fields once at index load, so per-keystroke ranking doesn't
// re-lowercase the full corpus (~640 KB and growing) on every input event.
export function prepareIndex(entries) {
  return entries.map((e) => ({
    ...e,
    _title: e.title.toLowerCase(),
    _tags: e.tags.join(' ').toLowerCase(),
    _headings: e.headings.join(' ').toLowerCase(),
    _desc: e.description.toLowerCase(),
    _body: e.body.toLowerCase(),
  }));
}

// Every token must hit somewhere; score favors metadata over body prose so the
// book-length full-text sources don't swamp results.
export function rank(entries, query) {
  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!tokens.length) return [];
  const scored = [];
  for (const e of entries) {
    let score = 0;
    for (const t of tokens) {
      let s = 0;
      if (e._title.includes(t)) s += 8;
      if (e._tags.includes(t)) s += 5;
      if (e._headings.includes(t)) s += 4;
      if (e._desc.includes(t)) s += 3;
      let n = 0;
      for (let i = e._body.indexOf(t); i !== -1 && n < 5; i = e._body.indexOf(t, i + t.length)) n++;
      s += n;
      if (!s) { score = 0; break; }
      score += s;
    }
    if (score) scored.push({ entry: e, score, tokens });
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, 20);
}

// ±80-char body snippet around the earliest token match; falls back to description.
export function snippet(e, tokens) {
  let first = -1;
  let len = 0;
  for (const t of tokens) {
    const i = e._body.indexOf(t);
    if (i !== -1 && (first === -1 || i < first)) { first = i; len = t.length; }
  }
  if (first === -1) return e.description;
  const start = Math.max(0, first - 80);
  const raw = e.body.slice(start, first + len + 80).replace(/\s+/g, ' ').trim();
  return `${start ? '…' : ''}${raw}…`;
}

// Split text into hit/miss segments for the query tokens, so the UI can <mark>
// exactly what caused the match (case-insensitive, longest tokens first).
export function segments(text, tokens) {
  const escaped = tokens.filter(Boolean).map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  if (!escaped.length) return [{ text, hit: false }];
  const re = new RegExp(escaped.sort((a, b) => b.length - a.length).join('|'), 'gi');
  const out = [];
  let last = 0;
  for (const m of text.matchAll(re)) {
    if (m.index > last) out.push({ text: text.slice(last, m.index), hit: false });
    out.push({ text: m[0], hit: true });
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push({ text: text.slice(last), hit: false });
  return out;
}

// ── self-check ────────────────────────────────────────────────────────────────
function demo() {
  const assert = (cond, msg) => { if (!cond) throw new Error('search self-check: ' + msg); };
  const idx = prepareIndex([
    { id: '/docs/memex', title: 'The Memex', description: 'Bush device', tags: ['memex'], headings: ['Trails'], body: 'associative trails between documents' },
    { id: '/docs/book', title: 'Long Book', description: 'unrelated', tags: [], headings: [], body: 'memex '.repeat(500) },
    { id: '/wiki/other', title: 'Other', description: 'nothing here', tags: [], headings: [], body: 'plain text' },
  ]);
  const r = rank(idx, 'memex');
  assert(r.length === 2, `expected 2 hits, got ${r.length}`);
  // Title+tag match must outrank 500 body occurrences (capped at 5).
  assert(r[0].entry.id === '/docs/memex', `metadata match should rank first, got ${r[0].entry.id}`);
  assert(rank(idx, 'MEMEX')[0].entry.id === '/docs/memex', 'query is case-insensitive');
  // Multi-token: every token must match — "memex trails" excludes the body-only book.
  const multi = rank(idx, 'memex trails');
  assert(multi.length === 1 && multi[0].entry.id === '/docs/memex', 'multi-token requires all tokens');
  assert(rank(idx, '').length === 0 && rank(idx, '   ').length === 0, 'empty query → no results');
  // Snippet: body match gets a windowed excerpt; no body match falls back to description.
  assert(snippet(idx[0], ['trails']).includes('associative trails'), 'snippet windows the body match');
  assert(snippet(idx[2], ['zzz']) === 'nothing here', 'snippet falls back to description');
  // Markdown stripping: prose survives, syntax doesn't.
  const stripped = stripMarkdown('## Head\n\nSee [the memex](/docs/memex) and [[docs/foo|foo]], **bold** `code`.\n\n- item\n> quote\n\n---\n');
  assert(!/[#*`>\[\]]/.test(stripped), `syntax chars remain: ${JSON.stringify(stripped)}`);
  for (const word of ['Head', 'the memex', 'foo', 'bold', 'code', 'item', 'quote']) {
    assert(stripped.includes(word), `stripped lost prose: ${word}`);
  }
  // Segments: hits marked case-insensitively, full text preserved in order.
  const segs = segments('The Memex stores memex trails', ['memex']);
  assert(segs.filter((s) => s.hit).length === 2, 'both matches marked');
  assert(segs.map((s) => s.text).join('') === 'The Memex stores memex trails', 'segments reassemble the text');
  assert(segments('no hits', []).length === 1 && !segments('no hits', [])[0].hit, 'empty tokens → one miss segment');
  console.log('search self-check passed:', r.length, 'hits for "memex"; strip/segments/ranking OK');
}

// typeof guard: this lib ships to the browser (unlike mdLinks/wikiGraph), where `process` doesn't exist.
if (typeof process !== 'undefined' && process.argv?.[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) demo();
