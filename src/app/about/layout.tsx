import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Raygency – Builders Who Ship AI Products',
  description: 'Raygency builds AI tools that ship. Kreashot, Volticlens, Rayprofit, ActGuard, LintVibe. Built by practitioners for practitioners.',
  alternates: { canonical: 'https://www.raygency.com/about' },
  openGraph: {
    title: 'About Raygency – Builders Who Ship AI Products',
    description: 'We build AI tools for performance marketers, DTC brands, and compliance teams. Five products. One mission: AI that ships.',
    url: 'https://www.raygency.com/about',
    type: 'website',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Raygency' }],
  },
  twitter: {
    card: 'summary',
    title: 'About Raygency – AI that ships.',
    description: 'We build AI tools for marketers and builders. Five products in production.',
    images: ['/logo.png'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Raygency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raygency is an AI product studio that builds and ships AI tools for performance marketers, DTC brands, compliance teams, and developers. Every product is built by the founders themselves.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who are the founders of Raygency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raygency was founded by Renuka Adnani. Renuka brings 17 years inside organizations across six industries: pharma, semiconductors, IT services, biotech, startups, and design.',
      },
    },
    {
      '@type': 'Question',
      name: 'What products does Raygency offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raygency offers five AI tools: Kreashot (ad creative generation), Volticlens (Meta competitor ad intelligence), Rayprofit (ad ROI optimization), ActGuard (EU AI Act compliance), and LintVibe (code quality and security scanning). All products include a free trial.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Raygency Studio work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raygency Studio builds custom AI products for teams that need something specific. The process is: send a brief, have a scoping call to discuss feasibility and timeline, Raygency builds the product with visible progress throughout, then hands it off with full documentation.',
      },
    },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Raygency Studio builds custom AI products',
  description: 'The Raygency Studio process for custom AI product development.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Send a brief', text: 'Tell Raygency what you need to build: describe the problem, the user, and any constraints. No formal spec required.' },
    { '@type': 'HowToStep', position: 2, name: 'Scoping call', text: 'A short call to confirm feasibility, agree on scope, and set a delivery timeline. Raygency only takes projects that fit its product DNA.' },
    { '@type': 'HowToStep', position: 3, name: 'Build with visible progress', text: 'Raygency builds the product with updates throughout. No black-box development. You can see progress at every stage.' },
    { '@type': 'HowToStep', position: 4, name: 'Handoff with documentation', text: 'The finished product is handed off with full documentation. Raygency supports the transition to make sure it runs in production.' },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', 'h3'],
  },
  url: 'https://www.raygency.com/about',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      {children}
    </>
  )
}
