const liiSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://ap0110.org/children',
      url: 'https://ap0110.org/children',
      name: 'LII — Life Impact International | AP0110',
      description: 'The Life Impact International',
      publisher: { '@id': 'https://ap0110.org/#organization' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ap0110.org' },
          { '@type': 'ListItem', position: 2, name: 'LII', item: 'https://ap0110.org/children' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://ap0110.org/children#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the Life Impact International (LII)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Life Impact International',
          },
        },
        {
          '@type': 'Question',
          name: 'How does LII provide internet access to underserved communities?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "LII leverages AP0110's Web 4.0 mesh networking technologies to deliver independent internet access to underserved communities, bypassing the need for traditional centralized ISPs and enabling local, resilient connectivity.",
          },
        },
      ],
    },
  ],
}

export const metadata = {
  title: 'LII — Life Impact International | AP0110',
  description: 'The Life Impact International',
  keywords: 'Life Impact International, LII, women in technology, girls coding, AP0110, global internet access, technology education, digital inclusion, mesh networking, Web 4.0',
  authors: [{ name: 'AP0110.ORG' }],
  creator: 'AP0110.ORG',
  publisher: 'AP0110.ORG',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://ap0110.org/children',
  },
  openGraph: {
    type: 'website',
    url: 'https://ap0110.org/children',
    title: 'LII — Life Impact International | AP0110',
    description: '',
    siteName: 'AP0110.org',
    locale: 'en_US',
    images: [
      {
        url: 'https://ap0110.org/images/LII/heal-section-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Life Impact International — Global Reach',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LII — Life Impact International | AP0110',
    description: '',
    images: ['https://ap0110.org/images/LII/heal-section-1.jpg'],
  },
  category: 'Education',
  classification: 'Technology Education Initiative',
}

export default function ChildrenLayout({ children }) {
  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(liiSchema) }}
      />
      {children}
    </>
  )
}
