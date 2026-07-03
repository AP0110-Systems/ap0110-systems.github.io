'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { prepareIndex, rank, snippet, segments } from '@/lib/search';

// Cmd-K search over the LLM-wiki, backed by the build-time /search.json index
// (docs + wiki: title, description, tags, headings, full body). Ranking lives in
// src/lib/search.js (self-checkable via `node src/lib/search.js`).

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

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [entries, setEntries] = useState(null);
  const [failed, setFailed] = useState(false);
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const fetchIndex = () => {
    setFailed(false);
    loadIndex().then(setEntries).catch(() => setFailed(true));
  };

  useEffect(() => {
    if (!open) return;
    if (!entries) fetchIndex();
    inputRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onEsc = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onEsc);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onEsc);
    };
  }, [open]);

  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [selected]);

  if (!open || typeof document === 'undefined') return null;

  const results = entries && query ? rank(entries, query) : [];
  const go = (i) => { if (results[i]) window.location.href = results[i].entry.id; };
  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected((s) => Math.min(s + 1, results.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
    else if (e.key === 'Enter') go(selected);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-white/75 backdrop-blur-lg flex justify-center items-start pt-[12vh] px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search the wiki"
        className="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative border-b border-gray-200">
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
            className="w-full pl-4 pr-12 py-3 font-mono text-sm text-gray-900 placeholder-gray-400 outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
          >
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        {failed && (
          <div className="px-4 py-6 text-sm text-gray-600 font-mono">
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
                  className={`block px-4 py-3 border-b border-gray-100 ${i === selected ? 'bg-ap-cyan/5' : ''}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-sm text-gray-900">
                      <Highlight text={entry.title} tokens={tokens} />
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs font-medium">
                      {entry.group === 'wiki' ? 'wiki' : 'doc'}
                    </span>
                    {entry.type !== 'doc' && (
                      <span className="bg-ap-cyan/10 text-ap-cyan px-2 py-0.5 rounded-full text-xs font-medium">
                        {entry.type}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    <Highlight text={snippet(entry, tokens)} tokens={tokens} />
                  </p>
                </a>
              </li>
            ))}
            {!results.length && (
              <li className="px-4 py-6 text-sm text-gray-600 font-mono">
                {entries ? 'No matches.' : 'Loading index…'}
              </li>
            )}
          </ul>
        )}
      </div>
    </div>,
    document.body
  );
}
