import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GeoRaydar – AI Search Brand Visibility Tracker',
  description: 'Track your brand visibility across ChatGPT, Gemini, Perplexity, and Claude. See every gap in AI search results and fix it. 7-day free trial.',
  alternates: { canonical: 'https://www.raygency.com/products/georadar' },
  openGraph: {
    title: 'GeoRaydar – AI Search Brand Visibility Tracker | Raygency',
    description: 'Track your brand visibility across ChatGPT, Gemini, Perplexity, and Claude. See every gap. Fix it.',
    url: 'https://www.raygency.com/products/georadar',
    type: 'website',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'GeoRaydar by Raygency' }],
  },
  twitter: {
    card: 'summary',
    title: 'GeoRaydar – AI Search Brand Visibility Tracker | Raygency',
    description: 'Track your brand across ChatGPT, Gemini, Perplexity, and Claude.',
    images: ['/logo.png'],
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'GeoRaydar',
  description: 'AI search brand visibility tracker. Monitor your brand mentions across ChatGPT, Gemini, Perplexity, and Claude.',
  applicationCategory: 'BusinessApplication',
  url: 'https://www.raygency.com/products/georadar',
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
