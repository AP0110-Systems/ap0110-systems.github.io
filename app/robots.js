export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'FacebookBot', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Omgilibot', allow: '/' },
      { userAgent: 'YouBot', allow: '/' },
    ],
    sitemap: 'https://ap0110.org/sitemap.xml',
    host: 'https://ap0110.org',
  }
}
