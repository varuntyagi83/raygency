import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact – Get in Touch with Raygency',
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
