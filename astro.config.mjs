// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import remarkWiki from './src/lib/remark-wiki.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://ap0110.org',
  // output: 'static' is the Astro 5 default — no need to set it.
  // Directory format keeps the old Next `trailingSlash: true` output (`/web4/index.html`,
  // so URLs stay `/web4/`, `/children/`, …). trailingSlash:'ignore' (the default) means the
  // dev/preview server and GitHub Pages serve a route with or without the trailing slash —
  // so the lander's `<a href="/web4">` links resolve without a redirect hop. (Header only
  // checks `pathname === '/'`; the Footer's pathname styling is dead code.)
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  // /web4 consolidated into /wiki/web4 — old/external links redirect via the hand-written
  // public/web4/index.html (Astro's static redirect flashed an interstitial and dropped the
  // trailing slash, forcing a second GitHub Pages 301 hop).
  // remarkWiki resolves [[wikilinks]] and tags ⚠️/🔍 callout blockquotes (HTML pipeline).
  markdown: { remarkPlugins: [remarkWiki] },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
