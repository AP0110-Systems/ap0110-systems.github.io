import './una-usa-brand/styles/una-usa_style.css'

const unausaSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://ap0110.org/unausa',
      url: 'https://ap0110.org/unausa',
      name: 'UN Digital Public Infrastructure — AP0110 & UNA-USA',
      description: "AP0110 and UNA-USA support the UN's Digital Public Infrastructure initiative — building open, inclusive, and interoperable digital foundations for every nation by 2030.",
      publisher: { '@id': 'https://ap0110.org/#organization' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ap0110.org' },
          { '@type': 'ListItem', position: 2, name: 'UNA-USA', item: 'https://ap0110.org/unausa' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://ap0110.org/unausa#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is UN Digital Public Infrastructure (DPI)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'UN Digital Public Infrastructure (DPI) refers to open, interoperable digital systems — including digital identity, payments, and data exchange — that governments build to serve all citizens. The UN promotes DPI as a foundation for inclusive development under the Global Digital Compact.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the UNA-USA and its role in digital infrastructure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The United Nations Association of the USA (UNA-USA) is the largest grassroots organization supporting the United Nations in the US. UNA-USA advocates for US engagement with the UN Digital Public Infrastructure initiative and the Global Digital Compact goals for universal digital access by 2030.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does AP0110 support UN Digital Public Infrastructure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "AP0110 partners with UNA-USA to advance the UN's Digital Public Infrastructure goals by developing Web 4.0 Independent Internet technologies — including mesh networking, decentralized protocols, and post-quantum security — that enable sovereign, inclusive digital infrastructure for every nation.",
          },
        },
      ],
    },
  ],
}

export const metadata = {
  title: 'UN Digital Public Infrastructure — AP0110 & UNA-USA',
  description: 'AP0110 and UNA-USA support the UN\'s Digital Public Infrastructure initiative — building open, inclusive, and interoperable digital foundations for every nation by 2030.',
  keywords: [
    'UN Digital Public Infrastructure',
    'DPI',
    'UNA-USA',
    'AP0110',
    'Global Digital Compact',
    'digital identity',
    'digital payments',
    'data exchange',
    'DPI Safeguards Framework',
    'Summit of the Future',
    'Web 4.0',
    'Independent Internet',
    'mesh networking',
    'digital inclusion',
    'United Nations',
    'UNDP',
    'ITU',
  ].join(', '),
  authors: [{ name: 'AP0110.ORG' }],
  creator: 'AP0110.ORG',
  publisher: 'AP0110.ORG',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://ap0110.org/unausa',
    title: 'UN Digital Public Infrastructure — AP0110 & UNA-USA',
    description: 'AP0110 and UNA-USA support the UN\'s Digital Public Infrastructure initiative — building open, inclusive digital foundations for every nation.',
    siteName: 'AP0110.org',
    locale: 'en_US',
    images: [
      {
        url: '/images/AP0110_moon_black.webp',
        width: 1200,
        height: 630,
        alt: 'AP0110 & UNA-USA — UN Digital Public Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UN Digital Public Infrastructure — AP0110 & UNA-USA',
    description: 'AP0110 and UNA-USA support the UN\'s Digital Public Infrastructure initiative — building open, inclusive digital foundations for every nation.',
    images: ['/images/AP0110_moon_black.webp'],
  },
  alternates: {
    canonical: 'https://ap0110.org/unausa',
  },
  category: 'Technology',
  classification: 'UN Digital Public Infrastructure',
}

export default function UNAUSALayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unausaSchema) }}
      />
      {children}
    </>
  )
}
