import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CalCompute - California\'s Public Cloud Computing Cluster for Safe, Ethical, Equitable, and Sustainable AI | AP0110',
  description: 'CalCompute is California\'s public cloud computing cluster established by Senate Bill 53 (SB-53) to provide safe, ethical, equitable, and sustainable AI computing resources. Learn about CalCompute\'s mission, infrastructure, Web 4.0 integration, and how AP0110 technologies support California\'s public cloud computing goals.',
  keywords: [
    'CalCompute',
    'California cloud computing',
    'SB-53',
    'Senate Bill 53',
    'public AI infrastructure',
    'ethical AI',
    'equitable computing',
    'sustainable AI',
    'University of California',
    'UC system',
    'California AI',
    'public cloud platform',
    'Web 4.0',
    'Independent Internet',
    'California technology',
    'public computing resources',
    'AI development',
    'cloud infrastructure',
    'AP0110',
    'edge computing',
    'post-quantum security',
    'mesh networking',
    'decentralized infrastructure',
    'California innovation',
    'AI ethics',
    'AI equity',
    'AI sustainability',
    'California government technology',
  ].join(', '),
  authors: [{ name: 'AP0110 Systems' }],
  creator: 'AP0110 Systems',
  publisher: 'AP0110 Systems',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://ap0110.org/calcompute',
    title: 'CalCompute - California\'s Public Cloud Computing Cluster for Safe, Ethical, Equitable, and Sustainable AI',
    description: 'California\'s public cloud computing cluster established by SB-53 to provide safe, ethical, equitable, and sustainable AI computing resources. Learn about CalCompute\'s mission, Web 4.0 integration, and infrastructure goals.',
    siteName: 'AP0110.org',
    locale: 'en_US',
    images: [
      {
        url: '/images/california-postcard.jpg',
        width: 1200,
        height: 630,
        alt: 'CalCompute - California\'s Public Cloud Computing Cluster',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CalCompute - California\'s Public Cloud Computing Cluster',
    description: 'California\'s public cloud computing cluster for safe, ethical, equitable, and sustainable AI. Established by SB-53.',
    images: ['/images/california-postcard.jpg'],
  },
  alternates: {
    canonical: 'https://ap0110.org/calcompute',
  },
  category: 'Technology',
  classification: 'California Public Technology Infrastructure',
}

export default function CalComputeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

