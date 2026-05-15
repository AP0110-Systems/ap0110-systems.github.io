import './una-usa-brand/styles/una-usa_style.css'

const unausaSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://ap0110.org/unausa',
      url: 'https://ap0110.org/unausa',
      name: 'Human Rights & Technology — AP0110 & UNA-USA Human Rights Affinity Group',
      description: "AP0110 serves as technology and AI strategy advisors to the UNA-USA Human Rights Affinity Group — translating UN human rights instruments into actionable guidance for the digital age.",
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
          name: 'What is the UNA-USA Human Rights Affinity Group?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The UNA-USA Human Rights Affinity Group is a national member network open to all UNA-USA members. It shares knowledge and aligns strategy around UN human rights instruments — including the UDHR, Universal Periodic Review, and UN Human Rights Council resolutions — and brings those frameworks to community, campus, and Capitol Hill advocacy.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is AP0110\'s role in the UNA-USA Human Rights Affinity Group?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AP0110 serves as technology and AI strategy advisors to the UNA-USA Human Rights Affinity Group, leading its Technology pillar. This includes advising on AI governance policy, building digital rights literacy among UNA-USA chapters and advocates, and applying privacy-preserving Web 4.0 technologies to human rights documentation and secure communications.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the Global Digital Compact relate to human rights?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Global Digital Compact, adopted unanimously by all 193 UN member states in September 2024, is the most comprehensive multilateral agreement on digital cooperation and AI governance. It affirms that international human rights law applies in digital spaces, establishes an independent international AI scientific panel, and commits governments to protecting human rights online as they do offline.',
          },
        },
      ],
    },
  ],
}

export const metadata = {
  title: 'Human Rights & Technology — AP0110 & UNA-USA',
  description: 'AP0110 advises the UNA-USA Human Rights Affinity Group on AI strategy and technology policy — translating UN human rights instruments into practical guidance for the digital age.',
  keywords: [
    'UNA-USA Human Rights Affinity Group',
    'human rights and technology',
    'AI policy human rights',
    'AP0110',
    'UNA-USA',
    'algorithmic accountability',
    'surveillance and privacy',
    'digital rights',
    'Global Digital Compact',
    'UDHR technology',
    'UN Human Rights Council',
    'AI governance',
    'digital rights literacy',
    'Web 4.0',
    'Independent Internet',
    'censorship-resistant networks',
    'ethical AI',
    'OHCHR digital rights',
  ].join(', '),
  authors: [{ name: 'AP0110.ORG' }],
  creator: 'AP0110.ORG',
  publisher: 'AP0110.ORG',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://ap0110.org/unausa',
    title: 'Human Rights & Technology — AP0110 & UNA-USA',
    description: 'AP0110 advises the UNA-USA Human Rights Affinity Group on AI strategy and technology policy — translating UN human rights instruments into guidance for the digital age.',
    siteName: 'AP0110.org',
    locale: 'en_US',
    images: [
      {
        url: '/images/AP0110_moon_black.webp',
        width: 1200,
        height: 630,
        alt: 'AP0110 & UNA-USA — Human Rights & Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Human Rights & Technology — AP0110 & UNA-USA',
    description: 'AP0110 advises the UNA-USA Human Rights Affinity Group on AI strategy and technology policy — translating UN human rights instruments into guidance for the digital age.',
    images: ['/images/AP0110_moon_black.webp'],
  },
  alternates: {
    canonical: 'https://ap0110.org/unausa',
  },
  category: 'Technology',
  classification: 'Human Rights and Technology',
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
