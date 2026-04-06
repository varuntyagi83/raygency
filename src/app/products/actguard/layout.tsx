import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ActGuard: EU AI Act Compliance Documentation | Raygency',
  description: 'From AI system description to audit-ready EU AI Act docs in minutes. Classify risk tier, generate compliance package. Free to start. 1 AI system included.',
  alternates: { canonical: 'https://www.raygency.com/products/actguard' },
  openGraph: {
    title: 'ActGuard: EU AI Act Compliance Documentation | Raygency',
    description: 'Classify your AI risk tier and get a full EU AI Act compliance package in minutes. Built for compliance officers.',
    url: 'https://www.raygency.com/products/actguard',
    type: 'website',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'ActGuard by Raygency' }],
  },
  twitter: {
    card: 'summary',
    title: 'ActGuard: EU AI Act Compliance | Raygency',
    description: 'AI system to audit-ready EU AI Act docs in minutes. Free to start.',
    images: ['/logo.png'],
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ActGuard',
  description: 'EU AI Act compliance automation. Generate audit-ready documentation for your AI systems in minutes.',
  applicationCategory: 'BusinessApplication',
  url: 'https://actguard-production.up.railway.app/',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: '1 AI system free. Additional systems require subscription.',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'Raygency', url: 'https://www.raygency.com' },
  },
  provider: { '@type': 'Organization', name: 'Raygency', url: 'https://www.raygency.com' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to generate EU AI Act compliance documentation with ActGuard',
  description: 'Produce audit-ready EU AI Act compliance documentation in three steps using ActGuard.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Describe your AI system', text: 'Tell ActGuard what your AI system does, who it affects, and how it makes decisions.' },
    { '@type': 'HowToStep', position: 2, name: 'AI classifies your risk tier', text: 'ActGuard applies EU AI Act criteria to classify your system as minimal, limited, high, or unacceptable risk.' },
    { '@type': 'HowToStep', position: 3, name: 'Download your compliance package', text: 'Receive full audit-ready documentation generated instantly, ready for regulators, auditors, and legal review.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the EU AI Act?',
      acceptedAnswer: { '@type': 'Answer', text: 'The EU AI Act is a regulation that classifies AI systems by risk tier: minimal, limited, high, and unacceptable risk. Organizations must produce compliance documentation for each system they deploy in the EU.' },
    },
    {
      '@type': 'Question',
      name: 'How does ActGuard generate compliance documentation?',
      acceptedAnswer: { '@type': 'Answer', text: 'You describe your AI system: what it does, who it affects, and how it makes decisions. ActGuard applies EU AI Act criteria to classify your risk tier, then generates a full audit-ready compliance package instantly.' },
    },
    {
      '@type': 'Question',
      name: 'What does ActGuard\'s compliance package include?',
      acceptedAnswer: { '@type': 'Answer', text: 'ActGuard generates a complete EU AI Act compliance package including risk tier classification, technical documentation, conformity assessment records, and transparency disclosures. All outputs are formatted for regulatory audit.' },
    },
    {
      '@type': 'Question',
      name: 'Is ActGuard free to use?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. ActGuard is free to start. 1 AI system is documented at no cost. Additional AI systems require a subscription. No credit card required to get started.' },
    },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3'] },
  url: 'https://www.raygency.com/products/actguard',
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
