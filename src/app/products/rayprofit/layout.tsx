import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rayprofit – AI Ad ROI Optimization',
  description: 'Know exactly where every ad dollar works and cut the rest. AI-powered budget optimization for DTC brands and media buyers. 7-day free trial, no credit card.',
  alternates: { canonical: 'https://www.raygency.com/products/rayprofit' },
  openGraph: {
    title: 'Rayprofit – AI Ad ROI Optimization | Raygency',
    description: 'Maximize ad ROI with AI-powered budget optimization. Know which campaigns are profitable and where to reallocate.',
    url: 'https://www.raygency.com/products/rayprofit',
    type: 'website',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Rayprofit by Raygency' }],
  },
  twitter: {
    card: 'summary',
    title: 'Rayprofit – AI Ad ROI Optimization | Raygency',
    description: 'Know exactly where every ad dollar works. AI-powered budget optimization.',
    images: ['/logo.png'],
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Rayprofit',
  description: 'AI-powered ad ROI optimization. Maximize your ad spend by knowing exactly which campaigns are profitable.',
  applicationCategory: 'BusinessApplication',
  url: 'https://www.rayprofit.com/overview',
  offers: {
    '@type': 'Offer',
    price: '200',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '200',
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
