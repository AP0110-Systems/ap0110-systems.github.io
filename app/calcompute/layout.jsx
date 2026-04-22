const calComputeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://ap0110.org/calcompute',
      url: 'https://ap0110.org/calcompute',
      name: "CalCompute — California's Public AI Cloud",
      description: "CalCompute is California's public cloud computing cluster established by SB-53 for safe, ethical, equitable, and sustainable AI computing resources.",
      publisher: { '@id': 'https://ap0110.org/#organization' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ap0110.org' },
          { '@type': 'ListItem', position: 2, name: 'CalCompute', item: 'https://ap0110.org/calcompute' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://ap0110.org/calcompute#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is CalCompute?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "CalCompute is California's public cloud computing cluster established by Senate Bill 53 (SB-53) to provide safe, ethical, equitable, and sustainable AI computing resources for researchers, educators, and public institutions across the state.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is Senate Bill 53 (SB-53)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Senate Bill 53 is California legislation that establishes CalCompute, a public cloud computing cluster for the state. It aims to democratize access to AI computing resources through the University of California system and other public institutions.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does CalCompute integrate with Web 4.0?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "CalCompute integrates with AP0110's Web 4.0 Independent Internet infrastructure, using mesh networking and decentralized protocols to deliver public AI computing that is resilient, user-owned, and not reliant on a single centralized provider.",
          },
        },
        {
          '@type': 'Question',
          name: 'Who can use CalCompute?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CalCompute is designed for California researchers, educators, and public institutions — particularly within the University of California system — to access affordable and equitable AI computing resources for research and development.',
          },
        },
      ],
    },
  ],
}

export const metadata = {
  title: "CalCompute — California's Public AI Cloud | AP0110",
  description: "CalCompute is California's public cloud computing cluster established by SB-53 for safe, ethical, equitable, and sustainable AI computing resources.",
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
    'AP0110',
    'AI ethics',
    'AI equity',
    'AI sustainability',
    'California government technology',
  ].join(', '),
  authors: [{ name: 'AP0110.ORG' }],
  creator: 'AP0110.ORG',
  publisher: 'AP0110.ORG',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://ap0110.org/calcompute',
  },
  openGraph: {
    type: 'website',
    url: 'https://ap0110.org/calcompute',
    title: "CalCompute — California's Public AI Cloud | AP0110",
    description: "California's public cloud computing cluster established by SB-53 for safe, ethical, equitable, and sustainable AI. Learn about CalCompute's mission and Web 4.0 integration.",
    siteName: 'AP0110.org',
    locale: 'en_US',
    images: [
      {
        url: 'https://ap0110.org/images/california-postcard.jpg',
        width: 1200,
        height: 630,
        alt: "CalCompute — California's Public Cloud Computing Cluster",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "CalCompute — California's Public AI Cloud",
    description: "California's public cloud computing cluster for safe, ethical, equitable, and sustainable AI. Established by SB-53.",
    images: ['https://ap0110.org/images/california-postcard.jpg'],
  },
  category: 'Technology',
  classification: 'California Public Technology Infrastructure',
}

export default function CalComputeLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calComputeSchema) }}
      />
      {children}
    </>
  )
}
