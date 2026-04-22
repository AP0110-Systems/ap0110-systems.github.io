import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const articlesDir = path.join(process.cwd(), 'content/articles')

export async function generateStaticParams() {
  if (!fs.existsSync(articlesDir)) return []
  return fs.readdirSync(articlesDir)
    .filter(f => f.endsWith('.md') && !f.startsWith('_'))
    .map(f => ({ slug: f.replace(/\.md$/, '') }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const filepath = path.join(articlesDir, `${slug}.md`)
  if (!fs.existsSync(filepath)) return { title: 'Article — AP0110.ORG' }
  const { data } = matter(fs.readFileSync(filepath, 'utf8'))
  return {
    title: `${data.title} — AP0110.ORG`,
    description: data.description,
  }
}

export default async function ArticlePage({ params }) {
  const { slug } = await params
  const filepath = path.join(articlesDir, `${slug}.md`)
  if (!fs.existsSync(filepath)) notFound()

  const raw = fs.readFileSync(filepath, 'utf8')
  const { data: frontmatter, content } = matter(raw)
  const html = marked(content)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <article className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-ap-cyan hover:text-ap-cyan/80 text-sm mb-10 group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Articles
          </Link>

          <header className="mb-10 pb-8 border-b border-gray-200">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {frontmatter.title}
            </h1>
            {frontmatter.description && (
              <p className="text-lg text-gray-600 mb-4">{frontmatter.description}</p>
            )}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              {frontmatter.date && (
                <time>
                  {new Date(frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              )}
              {frontmatter.author && <span>by {frontmatter.author}</span>}
              {frontmatter.tags?.map(tag => (
                <span
                  key={tag}
                  className="bg-ap-cyan/10 text-ap-cyan px-2 py-0.5 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div
            className="article-prose"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </article>
    </div>
  )
}
