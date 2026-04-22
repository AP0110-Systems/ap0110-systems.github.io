import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { AppProvider } from '@/context/AppContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AP0110MonoProvider from '@/components/AP0110MonoProvider'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Optimize font loading
  preload: true,
})

export const metadata = {
  title: 'AP0110 — Independent Internet (Web 4.0)',
  description: 'AP0110 builds Independent Internet (Web 4.0) — open-source mesh networking, decentralized protocols, and post-quantum security for user-owned internet infrastructure.',
  keywords: 'Web 4.0, Independent Internet, decentralized internet, mesh networking, AP0110, post-quantum security, edge computing, user-owned internet, decentralized protocols',
  authors: [{ name: 'AP0110 Inc.' }],
  creator: 'AP0110 Inc.',
  publisher: 'AP0110 Inc.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://ap0110.org',
  },
  openGraph: {
    type: 'website',
    url: 'https://ap0110.org',
    title: 'AP0110 — Independent Internet (Web 4.0)',
    description: 'AP0110 builds Independent Internet (Web 4.0) — open-source mesh networking, decentralized protocols, and post-quantum security for user-owned internet.',
    images: [
      {
        url: 'https://ap0110.org/images/AP0110_moon_black.webp',
        width: 1200,
        height: 630,
        alt: 'AP0110 Independent Internet Web 4.0',
      },
    ],
    siteName: 'AP0110.org',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AP0110 — Independent Internet (Web 4.0)',
    description: 'AP0110 builds Independent Internet (Web 4.0) — open-source mesh networking, decentralized protocols, and post-quantum security for user-owned internet.',
    images: ['https://ap0110.org/images/AP0110_moon_black.webp'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://ap0110.org/#organization',
      name: 'AP0110.ORG',
      url: 'https://ap0110.org',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ap0110.org/images/AP0110_moon_black.webp',
      },
      description: 'AP0110 builds Independent Internet (Web 4.0) — open-source mesh networking, decentralized protocols, and post-quantum security for user-owned internet infrastructure.',
      email: 'Daniel@ap0110.com',
      sameAs: [
        'https://github.com/AP0110-Systems',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://ap0110.org/#website',
      url: 'https://ap0110.org',
      name: 'AP0110.org',
      description: 'Independent Internet (Web 4.0) technology, decentralized networking, and charitable technology initiatives.',
      publisher: { '@id': 'https://ap0110.org/#organization' },
    },
  ],
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="overflow-x-hidden max-w-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="preload" as="image" href="/images/AP0110_moon_black.webp" />
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} overflow-x-hidden max-w-full`}>
        <AP0110MonoProvider>
          <AppProvider>
            <Header />
            <div className="w-full max-w-full overflow-x-hidden">
              {children}
            </div>
            <Footer />
          </AppProvider>
        </AP0110MonoProvider>
      </body>
    </html>
  )
}
