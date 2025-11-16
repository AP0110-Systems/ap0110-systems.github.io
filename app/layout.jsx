import { Inter } from 'next/font/google'
import '../src/styles/globals.css'
import { AppProvider } from '../src/context/AppContext'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import AP0110MonoProvider from '../src/components/AP0110MonoProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AP0110.ORG - Independent Internet (Web 4.0)',
  description: 'Developing Independent Internet (Web 4.0) and decentralized networking technologies. Building the future of user-owned, independent internet infrastructure through open-source development, mesh networking, and post-quantum security.',
  keywords: 'Web 4.0, Independent Internet, decentralized internet, mesh networking, AP0110, decentralized networking, post-quantum security, edge computing, independent infrastructure, user-owned internet, decentralized technology',
  authors: [{ name: 'AP0110 Systems' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://ap0110.org',
    title: 'AP0110.ORG - Independent Internet (Web 4.0)',
    description: 'Developing Independent Internet (Web 4.0) and decentralized networking technologies. Building the future of user-owned, independent internet infrastructure through open-source development, mesh networking, and post-quantum security.',
    images: [
      {
        url: '/images/AP0110_moon_black.webp',
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
    title: 'AP0110.ORG - Independent Internet (Web 4.0)',
    description: 'Developing Independent Internet (Web 4.0) and decentralized networking technologies. Building the future of user-owned, independent internet infrastructure.',
    images: ['/images/AP0110_moon_black.webp'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/AP0110_moon_black.webp" />
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <AP0110MonoProvider>
          <AppProvider>
            <Header />
            {children}
            <Footer />
          </AppProvider>
        </AP0110MonoProvider>
      </body>
    </html>
  )
}
