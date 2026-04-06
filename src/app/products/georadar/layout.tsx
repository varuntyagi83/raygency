import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GeoRaydar: AI Search Brand Visibility Tracker | Raygency',
  description: 'Track your brand across ChatGPT, Gemini, Perplexity, and Claude. See every AI search visibility gap and fix it. 7-day free trial, no credit card.',
  alternates: { canonical: 'https://www.raygency.com/products/georadar' },
  openGraph: {
    title: 'GeoRaydar: AI Search Brand Visibility Tracker | Raygency',
    description: 'Track your brand across ChatGPT, Gemini, Perplexity, and Claude. See every gap. Fix it.',
    url: 'https://www.raygency.com/products/georadar',
    type: 'website',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'GeoRaydar by Raygency' }],
  },
  twitter: {
    card: 'summary',
    title: 'GeoRaydar: AI Search Brand Visibility Tracker | Raygency',
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
    priceSpecification: { '@type': 'UnitPriceSpecification', price: '100', priceCurrency: 'USD', unitText: 'MONTH' },
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'Raygency', url: 'https://www.raygency.com' },
  },
  provider: { '@type': 'Organization', name: 'Raygency', url: 'https://www.raygency.com' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to track AI search brand visibility with GeoRaydar',
  description: 'Monitor your brand across ChatGPT, Gemini, Perplexity, and Claude in three steps using GeoRaydar.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Set your brand and competitors', text: 'Tell GeoRaydar your brand name, your product category, and the competitors you want to benchmark against.' },
    { '@type': 'HowToStep', position: 2, name: 'See where you appear', text: 'GeoRaydar scans ChatGPT, Gemini, Perplexity, and Claude to show exactly where your brand appears in AI search results and where it is absent.' },
    { '@type': 'HowToStep', position: 3, name: 'Track changes over time', text: 'Monitor your AI visibility week over week. See what is improving, what is slipping, and where competitors are gaining ground.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is GeoRaydar?',
      acceptedAnswer: { '@type': 'Answer', text: 'GeoRaydar is an AI search brand visibility tracker. It monitors how often and how prominently your brand appears when users ask ChatGPT, Gemini, Perplexity, and Claude for recommendations in your category.' },
    },
    {
      '@type': 'Question',
      name: 'Which AI platforms does GeoRaydar track?',
      acceptedAnswer: { '@type': 'Answer', text: 'GeoRaydar tracks brand visibility across ChatGPT, Gemini, Perplexity, and Claude — the four major AI search and answer engines where buyers now research products and request vendor recommendations.' },
    },
    {
      '@type': 'Question',
      name: 'What is AI search visibility and why does it matter?',
      acceptedAnswer: { '@type': 'Answer', text: 'AI search visibility measures how often your brand is recommended by AI engines like ChatGPT when buyers ask questions in your category. As more buyers use AI for research instead of traditional search, appearing in these results drives real pipeline — and being absent means losing deals to competitors who do appear.' },
    },
    {
      '@type': 'Question',
      name: 'How much does GeoRaydar cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'GeoRaydar costs $100/month with a 7-day free trial — no credit card required. An annual plan is available at 20% off with pricing locked for life.' },
    },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3'] },
  url: 'https://www.raygency.com/products/georadar',
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
