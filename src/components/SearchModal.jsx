'use client';

import { useState, useEffect, useRef } from 'react';
import { prepareIndex, rank, snippet, segments } from '@/lib/search';

// Cmd-K search over the LLM-wiki, backed by the build-time /search.json index
// (docs + wiki: title, description, tags, headings, full body). Ranking lives in
// src/lib/search.js (self-checkable via `node src/lib/search.js`).
// Mounted lazily by Header only while open; the native <dialog> supplies the
// top layer, focus trap, Esc handling, and focus restore.

let indexPromise; // lazy, fetched once per page load on first open

// Wrap the query-token hits in <mark> so results show what matched.
function Highlight({ text, tokens }) {
  return segments(text, tokens).map((s, i) =>
    s.hit ? <mark key={i} className="bg-ap-cyan/20 text-inherit rounded-xs">{s.text}</mark> : s.text
  );
}

function loadIndex() {
  return (indexPromise ??= fetch('/search.json')
    .then((r) => {
      if (!r.ok) throw new Error(`search.json ${r.status}`);
      return r.json();
    })
    .then(prepareIndex)
    .catch((err) => {
      indexPromise = null; // don't cache the failure — a retry re-fetches
      throw err;
    }));
}

export default function SearchModal({ theme = 'light', onClose }) {
  const [query, setQuery] = useState('');
  const [entries, setEntries] = useState(null);
  const [failed, setFailed] = useState(false);
  const [selected, setSelected] = useState(0);
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const isDark = theme === 'dark';

  const fetchIndex = () => {
    setFailed(false);
    loadIndex().then(setEntries).catch(() => setFailed(true));
  };

  useEffect(() => {
    dialogRef.current?.showModal();
    if (!entries) fetchIndex();
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [selected]);

  const results = entries && query ? rank(entries, query) : [];
  const go = (i) => { if (results[i]) window.location.href = results[i].entry.id; };
  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected((s) => Math.min(s + 1, results.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
    else if (e.key === 'Enter') go(selected);
  };

  const panelCls = isDark
    ? 'bg-surface-dark-subtle border border-surface-dark-muted text-on-dark'
    : 'bg-white border border-gray-200 text-gray-900';
  const dividerCls = isDark ? 'border-surface-dark-muted' : 'border-gray-200';
  const mutedCls = isDark ? 'text-on-dark-mid' : 'text-gray-600';

  return (
    <dialog
      ref={dialogRef}
      data-chrome-dialog
      aria-label="Search the wiki"
      onClose={onClose}
      onClick={(e) => { if (e.target === dialogRef.current) onClose(); }}
      className={`mt-[12vh] mb-auto mx-auto p-0 w-full max-w-xl rounded-lg shadow-lg overflow-hidden ${panelCls} ${isDark ? 'backdrop:bg-black/75' : 'backdrop:bg-white/75'} backdrop:backdrop-blur-lg`}
    >
      <div className={`relative border-b ${dividerCls}`}>
        <input
          ref={inputRef}
          type="search"
          role="combobox"
          aria-expanded={results.length > 0}
          aria-controls="search-results"
          aria-activedescendant={results.length ? `search-option-${selected}` : undefined}
          value={query}
          onChange={(e) => { setQuery(e.target.value); setSelected(0); }}
          onKeyDown={onKeyDown}
          placeholder="Search the wiki…"
          aria-label="Search the wiki"
          className={`w-full pl-4 pr-12 py-3 font-mono text-sm bg-transparent placeholder-gray-400 outline-none ${isDark ? 'text-on-dark' : 'text-gray-900'}`}
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close search"
          className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 transition-colors cursor-pointer ${isDark ? 'text-on-dark-mid hover:text-on-dark' : 'text-gray-400 hover:text-gray-900'}`}
        >
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      {failed && (
        <div className={`px-4 py-6 text-sm font-mono ${mutedCls}`}>
          Couldn't load the search index.{' '}
          <button type="button" onClick={fetchIndex} className="text-ap-cyan hover:underline cursor-pointer">
            Retry
          </button>
        </div>
      )}
      {!failed && query && (
        <ul id="search-results" role="listbox" ref={listRef} className="max-h-[55vh] overflow-y-auto">
          {results.map(({ entry, tokens }, i) => (
            <li key={entry.id} id={`search-option-${i}`} role="option" aria-selected={i === selected}>
              <a
                href={entry.id}
                onMouseEnter={() => setSelected(i)}
                className={`block px-4 py-3 border-b ${isDark ? 'border-surface-dark-muted' : 'border-gray-100'} ${i === selected ? 'bg-ap-cyan/5' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <span className={`font-mono font-bold text-sm ${isDark ? 'text-on-dark' : 'text-gray-900'}`}>
                    <Highlight text={entry.title} tokens={tokens} />
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${isDark ? 'bg-surface-dark-muted text-on-dark-mid' : 'bg-gray-100 text-gray-600'}`}>
                    {entry.group === 'wiki' ? 'wiki' : 'doc'}
                  </span>
                  {entry.type !== 'doc' && (
                    <span className="bg-ap-cyan/10 text-ap-cyan px-2 py-0.5 rounded-full text-xs font-medium">
                      {entry.type}
                    </span>
                  )}
                </div>
                <p className={`text-xs mt-1 line-clamp-2 ${mutedCls}`}>
                  <Highlight text={snippet(entry, tokens)} tokens={tokens} />
                </p>
              </a>
            </li>
          ))}
          {!results.length && (
            <li className={`px-4 py-6 text-sm font-mono ${mutedCls}`}>
              {entries ? 'No matches.' : 'Loading index…'}
            </li>
          )}
        </ul>
      )}
    </dialog>
  );
}
