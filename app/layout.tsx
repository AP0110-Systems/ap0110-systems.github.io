import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../src/styles/globals.css'
import { AppProvider } from '../src/context/AppContext'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import AP0110MonoProvider from '../src/components/AP0110MonoProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AP0110 ORG',
  description: 'Providing independent internet access to disenfranchised children around the world',
  keywords: 'internet access, digital divide, children, global connectivity, technology',
  authors: [{ name: 'AP0110 Systems' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/AP0110_moon_black.webp" />
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
