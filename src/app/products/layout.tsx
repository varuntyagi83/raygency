import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products – AI Tools for Marketers & Builders',
  description: 'Six AI tools for marketers and builders: Kreashot, Volticlens, GeoRaydar, Rayprofit, ActGuard, LintVibe. All include a free trial.',
  alternates: { canonical: 'https://www.raygency.com/products' },
  openGraph: {
    title: 'Products – AI Tools for Marketers & Builders | Raygency',
    description: 'Six production-ready AI tools. Pick what you need. All include a free trial.',
    url: 'https://www.raygency.com/products',
    type: 'website',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Raygency Products' }],
  },
  twitter: {
    card: 'summary',
    title: 'Products – AI Tools for Marketers & Builders | Raygency',
    description: 'Six AI tools for performance marketers, DTC brands, and compliance teams.',
    images: ['/logo.png'],
  },
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Raygency Products',
  description: 'AI-powered tools for performance marketers, DTC brands, and compliance teams.',
  url: 'https://www.raygency.com/products',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Kreashot', url: 'https://www.raygency.com/products/kreashot', description: 'AI ad creative generator for performance marketers.' },
    { '@type': 'ListItem', position: 2, name: 'Volticlens', url: 'https://www.raygency.com/products/volticlens', description: 'Real-time Meta competitor ad intelligence.' },
    { '@type': 'ListItem', position: 3, name: 'GeoRaydar', url: 'https://www.raygency.com/products/georadar', description: 'AI search brand visibility tracker across ChatGPT, Gemini, Perplexity, and Claude.' },
    { '@type': 'ListItem', position: 4, name: 'Rayprofit', url: 'https://www.raygency.com/products/rayprofit', description: 'AI-powered ad ROI and budget optimization.' },
    { '@type': 'ListItem', position: 5, name: 'ActGuard', url: 'https://www.raygency.com/products/actguard', description: 'EU AI Act compliance documentation automation.' },
    { '@type': 'ListItem', position: 6, name: 'LintVibe', url: 'https://www.raygency.com/products/lintvibe', description: 'AI code quality and security scanner.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What products does Raygency offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raygency offers six AI-powered tools: Kreashot (ad creative generation, $150/month), Volticlens (Meta competitor ad intelligence, $100/month), GeoRaydar (AI search brand visibility, $100/month), Rayprofit (ad ROI optimization, $200/month), ActGuard (EU AI Act compliance, free to start), and LintVibe (code quality and security scanning, $40/month).',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Raygency product should I start with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with the product that solves your most pressing problem. Performance marketers typically start with Kreashot for ad creative generation. If you need competitor intelligence, start with Volticlens. If you need to track AI search visibility, start with GeoRaydar. Compliance teams start with ActGuard. Developers building with AI tools start with LintVibe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do all Raygency products include a free trial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Kreashot, Volticlens, GeoRaydar, and Rayprofit each include a 7-day free trial with no credit card required. ActGuard is free for your first AI system with no credit card needed. LintVibe offers a free initial scan. All products can be cancelled at any time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use multiple Raygency products together?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Raygency offers bundle plans for teams using multiple products. The Duo Plan covers any two products, the Trio Plan covers any three, and the Full Suite covers all six. Bundle plans save significantly compared to individual subscriptions.',
      },
    },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', 'h3'],
  },
  url: 'https://www.raygency.com/products',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      {children}
    </>
  )
}
