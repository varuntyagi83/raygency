import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kreashot – AI Ad Creative Generator',
  description: 'Turn product photos into Meta-ready ad creatives in minutes. AI-powered ad creative automation for performance marketers. 7-day free trial, no credit card.',
  alternates: { canonical: 'https://www.raygency.com/products/kreashot' },
  openGraph: {
    title: 'Kreashot – AI Ad Creative Generator | Raygency',
    description: 'Turn product photos into Meta-ready ad creatives in minutes. Built for performance marketers who can\'t wait on designers.',
    url: 'https://www.raygency.com/products/kreashot',
    type: 'website',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Kreashot by Raygency' }],
  },
  twitter: {
    card: 'summary',
    title: 'Kreashot – AI Ad Creative Generator | Raygency',
    description: 'Turn product photos into Meta-ready ad creatives in minutes.',
    images: ['/logo.png'],
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kreashot',
  description: 'AI-powered ad creative generator. Turn product photos into Meta-ready creatives in minutes.',
  applicationCategory: 'BusinessApplication',
  url: 'https://www.raygency.com/products/kreashot',
  offers: {
    '@type': 'Offer',
    price: '150',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '150',
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
