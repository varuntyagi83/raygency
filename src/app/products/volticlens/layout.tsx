import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Volticlens – Meta Competitor Ad Intelligence',
  description: 'See every ad your competitors are running on Meta in real time. AI-powered competitor ad intelligence for performance marketers. 7-day free trial.',
  alternates: { canonical: 'https://www.raygency.com/products/volticlens' },
  openGraph: {
    title: 'Volticlens – Meta Competitor Ad Intelligence | Raygency',
    description: 'See every ad your competitors are running on Meta. Know what they\'re testing. Move faster than they do.',
    url: 'https://www.raygency.com/products/volticlens',
    type: 'website',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Volticlens by Raygency' }],
  },
  twitter: {
    card: 'summary',
    title: 'Volticlens – Meta Competitor Ad Intelligence | Raygency',
    description: 'See every ad your competitors are running on Meta in real time.',
    images: ['/logo.png'],
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Volticlens',
  description: 'Real-time Meta competitor ad intelligence. See every ad your competitors are running and move faster.',
  applicationCategory: 'BusinessApplication',
  url: 'https://www.volticlens.com',
  offers: {
    '@type': 'Offer',
    price: '100',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '100',
      priceCurrency: 'USD',
      unitText: 'MONTH',
    },
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'Raygency', url: 'https://www.raygency.com' },
  },
  provider: { '@type': 'Organization', name: 'Raygency', url: 'https://www.raygency.com' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {children}
    </>
  )
}
