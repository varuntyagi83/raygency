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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {children}
    </>
  )
}
