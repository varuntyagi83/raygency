import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Studio – Custom AI Builds by Raygency',
  description: 'Need something built that doesn\'t exist yet? The Raygency Studio builds custom AI automations, workflows, and tools for your specific use case.',
  alternates: { canonical: 'https://www.raygency.com/studio' },
  openGraph: {
    title: 'Studio – Custom AI Builds by Raygency',
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
