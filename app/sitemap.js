export const dynamic = 'force-static'

export default function sitemap() {
  const base = 'https://ap0110.org'
  const now = new Date().toISOString()

  return [
    { url: base,                      lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/calcompute`,      lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/children`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/unausa`,          lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/web4`,            lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/docs`,            lastModified: now, changeFrequency: 'weekly',  priority: 0.5 },
    { url: `${base}/articles`,        lastModified: now, changeFrequency: 'weekly',  priority: 0.5 },
  ]
}
