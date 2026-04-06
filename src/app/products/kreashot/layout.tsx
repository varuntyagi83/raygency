import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kreashot: AI Ad Creative Generator for Meta | Raygency',
  description: 'Turn product photos into Meta-ready ad creatives in minutes. Multiple variants, formats, and ad copy. 7-day free trial, no credit card.',
  alternates: { canonical: 'https://www.raygency.com/products/kreashot' },
  openGraph: {
    title: 'Kreashot: AI Ad Creative Generator for Meta | Raygency',
    description: 'Turn product photos into Meta-ready ad creatives in minutes. Built for performance marketers who can\'t wait on designers.',
    url: 'https://www.raygency.com/products/kreashot',
    type: 'website',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Kreashot by Raygency' }],
  },
  twitter: {
    card: 'summary',
    title: 'Kreashot: AI Ad Creative Generator for Meta | Raygency',
    description: 'Turn product photos into Meta-ready ad creatives in minutes.',
    images: ['/logo.png'],
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kreashot',
  description: 'AI ad creative tool. Turn product photos into Meta-ready creatives in minutes.',
  applicationCategory: 'BusinessApplication',
  url: 'https://www.raygency.com/products/kreashot',
  offers: {
    '@type': 'Offer',
    price: '150',
    priceCurrency: 'USD',
    priceSpecification: { '@type': 'UnitPriceSpecification', price: '150', priceCurrency: 'USD', unitText: 'MONTH' },
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'Raygency', url: 'https://www.raygency.com' },
  },
  provider: { '@type': 'Organization', name: 'Raygency', url: 'https://www.raygency.com' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to create Meta ad creatives with Kreashot',
  description: 'Generate professional Meta ad creatives from a product photo in three steps using Kreashot.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Upload your product photo', text: 'Upload any product shot to Kreashot. No editing or preparation required. Any angle, any background.' },
    { '@type': 'HowToStep', position: 2, name: 'AI generates ad creatives', text: 'Kreashot generates multiple creative variants, Meta-optimized formats, and ad copy variations automatically.' },
    { '@type': 'HowToStep', position: 3, name: 'Export and launch', text: 'Download ready-to-run creatives in all Meta formats and launch your campaign immediately.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Kreashot?',
      acceptedAnswer: { '@type': 'Answer', text: 'Kreashot is an AI ad creative tool that turns product photos into Meta-ready ad creatives in minutes. It produces multiple variants, formats (Feed, Stories, Reels), and ad copy variations. No design skills or software required.' },
    },
    {
      '@type': 'Question',
      name: 'What ad formats does Kreashot produce?',
      acceptedAnswer: { '@type': 'Answer', text: 'Kreashot generates creatives optimized for Meta Feed, Stories, and Reels. Each set includes multiple variants and ad copy options so you can test without extra work.' },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to create ad creatives with Kreashot?',
      acceptedAnswer: { '@type': 'Answer', text: 'Kreashot produces a full set of ad creatives in minutes. Upload a product photo, and your Meta-ready creatives are ready to download almost immediately. No waiting for designers.' },
    },
    {
      '@type': 'Question',
      name: 'How much does Kreashot cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Kreashot costs $150/month with a 7-day free trial included. No credit card required. An annual plan is available at 20% off with pricing locked for life.' },
    },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3'] },
  url: 'https://www.raygency.com/products/kreashot',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      {children}
    </>
  )
}
