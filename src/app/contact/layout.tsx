import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact – Free Trials, Custom Builds, and Support',
  description: 'Start a free trial or send a studio inquiry. Raygency responds within 48 hours. No credit card required for any free trial.',
  alternates: { canonical: 'https://www.raygency.com/contact' },
  openGraph: {
    title: 'Contact Raygency – Get in Touch',
    description: 'Questions about our AI tools? Want a custom build? Reach out to the Raygency team.',
    url: 'https://www.raygency.com/contact',
    type: 'website',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Raygency' }],
  },
  twitter: {
    card: 'summary',
    title: 'Contact Raygency',
    description: 'Questions about our AI tools? Reach out — we respond within 48 hours.',
    images: ['/logo.png'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to get started with Raygency',
  description: 'Two ways to get started with Raygency — free trial or studio inquiry.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Choose your path',
      text: 'Select a product to try free (7-day trial, no credit card) or use the studio inquiry form for a custom AI build.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Start a free trial',
      text: 'Visit any product page — Kreashot, Volticlens, GeoRaydar, Rayprofit, ActGuard, or LintVibe — and start your free trial in minutes.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Or send a studio inquiry',
      text: 'Fill in your name, email, and a description of what you need built. Raygency reviews studio inquiries within 48 hours on business days.',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly will I get a response?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Studio inquiries are reviewed within 48 hours on business days. Product support questions are typically answered same day. If you are asking about a specific product, the fastest path is to start a free trial directly from the product page.',
      },
    },
    {
      '@type': 'Question',
      name: 'What products does Raygency offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raygency builds six AI-powered tools: Kreashot (ad creative generation), Volticlens (Meta competitor ad intelligence), GeoRaydar (AI search brand visibility), Rayprofit (ad ROI optimization), ActGuard (EU AI Act compliance), and LintVibe (code quality and security scanning).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do all products include a free trial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Kreashot, Volticlens, GeoRaydar, and Rayprofit each include a 7-day free trial with no credit card required. ActGuard is free for your first AI system. LintVibe offers a free initial scan so you can see what it finds before committing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of custom builds does Raygency Studio take on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raygency Studio builds custom AI automations, workflows, and tools for businesses that need something specific to their use case. If the problem you are solving does not fit an existing product, use the contact form to tell us what you are working on.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I cancel my subscription at any time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All Raygency product subscriptions can be cancelled at any time. There are no long-term contracts or cancellation fees. Annual plans are billed yearly but you can cancel before renewal.',
      },
    },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', 'h3'],
  },
  url: 'https://www.raygency.com/contact',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      {children}
    </>
  )
}
