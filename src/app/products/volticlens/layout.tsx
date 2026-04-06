import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Volticlens: Meta Competitor Ad Intelligence Tool | Raygency',
  description: 'See every ad your competitors run on Meta in real time. Know what they\'re testing. Move faster than they do. 7-day free trial, no credit card.',
  alternates: { canonical: 'https://www.raygency.com/products/volticlens' },
  openGraph: {
    title: 'Volticlens: Meta Competitor Ad Intelligence Tool | Raygency',
    description: 'See every ad your competitors are running on Meta. Know what they\'re testing. Move faster than they do.',
    url: 'https://www.raygency.com/products/volticlens',
    type: 'website',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Volticlens by Raygency' }],
  },
  twitter: {
    card: 'summary',
    title: 'Volticlens: Meta Competitor Ad Intelligence | Raygency',
    description: 'See every ad your competitors run on Meta in real time.',
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
    priceSpecification: { '@type': 'UnitPriceSpecification', price: '100', priceCurrency: 'USD', unitText: 'MONTH' },
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'Raygency', url: 'https://www.raygency.com' },
  },
  provider: { '@type': 'Organization', name: 'Raygency', url: 'https://www.raygency.com' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to track competitor Meta ads with Volticlens',
  description: 'Monitor every ad your competitors run on Meta in three steps using Volticlens.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Connect your Meta account', text: 'Link your Meta ad account to Volticlens and set the competitors you want to monitor.' },
    { '@type': 'HowToStep', position: 2, name: 'See every competitor ad', text: 'Volticlens surfaces all active competitor ads on Meta — creative, copy, targeting signals, and launch dates.' },
    { '@type': 'HowToStep', position: 3, name: 'React faster', text: 'Understand what competitors are testing, identify winning patterns, and outpace them with your next campaign.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Volticlens?',
      acceptedAnswer: { '@type': 'Answer', text: 'Volticlens is a real-time Meta competitor ad intelligence tool. It shows you every ad your competitors are running on Meta — including creative, copy, and targeting signals — so you can move faster than they do.' },
    },
    {
      '@type': 'Question',
      name: 'Which platforms does Volticlens monitor?',
      acceptedAnswer: { '@type': 'Answer', text: 'Volticlens monitors the Meta advertising ecosystem, including Facebook and Instagram. It tracks competitor ads across Feed, Stories, and Reels placements.' },
    },
    {
      '@type': 'Question',
      name: 'How often is competitor ad data updated in Volticlens?',
      acceptedAnswer: { '@type': 'Answer', text: 'Volticlens provides real-time competitor ad intelligence. New ads from competitors are surfaced as soon as they go live, so you always have the latest picture of what is running in your space.' },
    },
    {
      '@type': 'Question',
      name: 'How much does Volticlens cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Volticlens costs $100/month with a 7-day free trial — no credit card required. An annual plan is available at 20% off with pricing locked for life.' },
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  )
}
