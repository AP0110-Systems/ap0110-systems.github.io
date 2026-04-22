import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Card from '@/components/ui/Card'

export const metadata = {
  title: 'Docs — AP0110.ORG',
  description: 'Research, perspectives, and updates from AP0110.ORG on Independent Internet, Web 4.0, and decentralized networking.',
}

function getAllDocs() {
  const dir = path.join(process.cwd(), 'content/docs')
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md') && !f.startsWith('_'))
    .map(filename => {
      const slug = filename.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(dir, filename), 'utf8')
      const { data } = matter(raw)
      return { slug, ...data }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export default function DocsPage() {
  const docs = getAllDocs()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Docs</h1>
          <p className="text-lg text-gray-600 mb-12">
            Research, perspectives, and updates from AP0110.ORG.
          </p>

          {docs.length === 0 ? (
            <p className="text-gray-500">No docs published yet.</p>
          ) : (
            <div className="space-y-6">
              {docs.map(doc => (
                <Link key={doc.slug} href={`/docs/${doc.slug}`} className="block group">
                  <Card variant="light" size="lg" className="transition-shadow group-hover:shadow-md">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold text-gray-900 group-hover:text-ap-cyan transition-colors mb-2">
                          {doc.title}
                        </h2>
                        {doc.description && (
                          <p className="text-gray-600 text-sm leading-relaxed mb-3">
                            {doc.description}
                          </p>
                        )}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                          {doc.date && (
                            <time>
                              {new Date(doc.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </time>
                          )}
                          {doc.author && <span>by {doc.author}</span>}
                          {doc.tags?.map(tag => (
                            <span
                              key={tag}
                              className="bg-ap-cyan/10 text-ap-cyan px-2 py-0.5 rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-ap-cyan transition-colors flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
