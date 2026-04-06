import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Studio – Custom AI Builds and Automations',
  description: 'Raygency Studio builds custom AI products, automations, and data tools. Project-based. Scoped tight. Shipped in production. Not generic dev — AI products.',
  alternates: { canonical: 'https://www.raygency.com/studio' },
  openGraph: {
    title: 'Raygency Studio – Custom AI Builds and Automations',
    description: 'Custom AI automations, workflows, and tools built for your specific problem. Not a product — a build.',
    url: 'https://www.raygency.com/studio',
    type: 'website',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Raygency Studio' }],
  },
  twitter: {
    card: 'summary',
    title: 'Raygency Studio – Custom AI Builds',
    description: 'Custom AI automations and tools built for your specific use case.',
    images: ['/logo.png'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to commission a custom AI build with Raygency Studio',
  description: 'Get a custom AI product, automation, or data tool built by Raygency in four steps.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Send a brief',
      text: 'Tell Raygency what you need. A paragraph describing the problem is enough to start the conversation.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Scoping call',
      text: 'Raygency discusses feasibility, timeline, and cost. No surprises — everything is agreed upfront.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Build phase',
      text: 'Raygency builds the product with visible progress throughout. No black box — you see the work as it happens.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Handoff',
      text: 'Receive the finished product, full documentation, and the knowledge to run it independently.',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Raygency Studio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raygency Studio is the custom build arm of Raygency. It builds AI products, automation systems, and data tools for teams that need something specific to their use case — not an off-the-shelf subscription.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of projects does Raygency Studio take on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raygency Studio builds marketing tools, AI automation workflows, and data products. This includes creative automation systems, campaign intelligence tools, n8n or similar workflow automation, dashboards, and internal AI tools. Raygency does not do generic app development — only AI products.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Raygency Studio build process work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The process has four steps: send a brief describing what you need, have a scoping call to agree on feasibility and timeline, Raygency builds with visible progress throughout, then hands off the finished product with documentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a Raygency Studio project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Timeline varies by scope. Raygency is a small team that builds everything themselves, which means projects move in weeks rather than months — but capacity is limited. If a project cannot be given the attention it needs, Raygency will say so upfront.',
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
  url: 'https://www.raygency.com/studio',
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
