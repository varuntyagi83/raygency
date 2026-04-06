import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rayprofit: Ad ROI Optimization Tool | Raygency',
  description: 'Know exactly where every ad dollar works and cut the rest. AI budget optimization for DTC brands and media buyers. 7-day free trial, no credit card.',
  alternates: { canonical: 'https://www.raygency.com/products/rayprofit' },
  openGraph: {
    title: 'Rayprofit: Ad ROI Optimization Tool | Raygency',
    description: 'Maximize ad ROI with AI budget optimization. Know which campaigns are profitable and where to reallocate.',
    url: 'https://www.raygency.com/products/rayprofit',
    type: 'website',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Rayprofit by Raygency' }],
  },
  twitter: {
    card: 'summary',
    title: 'Rayprofit: Ad ROI Optimization | Raygency',
    description: 'Know exactly where every ad dollar works. AI budget optimization.',
    images: ['/logo.png'],
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Rayprofit',
  description: 'Ad ROI optimization built on AI. Maximize your ad spend by knowing exactly which campaigns are profitable.',
  applicationCategory: 'BusinessApplication',
  url: 'https://www.rayprofit.com/overview',
  offers: {
    '@type': 'Offer',
    price: '200',
    priceCurrency: 'USD',
    priceSpecification: { '@type': 'UnitPriceSpecification', price: '200', priceCurrency: 'USD', unitText: 'MONTH' },
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'Raygency', url: 'https://www.raygency.com' },
  },
  provider: { '@type': 'Organization', name: 'Raygency', url: 'https://www.raygency.com' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to optimize ad ROI with Rayprofit',
  description: 'Maximize your ad spend and eliminate wasted budget in three steps using Rayprofit.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Connect your ad accounts', text: 'Link Meta, Google, and other ad platforms to Rayprofit. It pulls your spend and performance data automatically.' },
    { '@type': 'HowToStep', position: 2, name: 'AI surfaces what\'s working', text: 'Rayprofit scores each campaign by profitability and flags exactly where budget is being wasted across your account.' },
    { '@type': 'HowToStep', position: 3, name: 'Reallocate with confidence', text: 'Act on data-driven recommendations to shift budget to profitable campaigns and cut what is not delivering return.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Rayprofit?',
      acceptedAnswer: { '@type': 'Answer', text: 'Rayprofit is an ad ROI optimization platform built on AI. It connects to your ad accounts, scores each campaign by profitability, and tells you exactly where to reallocate budget to maximize return on ad spend.' },
    },
    {
      '@type': 'Question',
      name: 'Which ad platforms does Rayprofit connect to?',
      acceptedAnswer: { '@type': 'Answer', text: 'Rayprofit connects to Meta (Facebook and Instagram ads) and Google Ads, pulling spend and performance data automatically to give you a unified view of where your budget is working across platforms.' },
    },
    {
      '@type': 'Question',
      name: 'How does Rayprofit improve ad ROI?',
      acceptedAnswer: { '@type': 'Answer', text: 'Rayprofit uses AI to score every campaign and ad set by profitability. It identifies which spend is generating return, which is wasted, and provides specific recommendations for reallocation. Stop guessing and start acting on data.' },
    },
    {
      '@type': 'Question',
      name: 'How much does Rayprofit cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Rayprofit costs $200/month with a 7-day free trial. No credit card required. An annual plan is available at 20% off with pricing locked for life.' },
    },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3'] },
  url: 'https://www.raygency.com/products/rayprofit',
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
