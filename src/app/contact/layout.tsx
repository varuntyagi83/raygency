import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact – Get in Touch with Raygency',
  description: 'Have a question about Kreashot, Volticlens, GeoRaydar, Rayprofit, ActGuard, or LintVibe? Contact the Raygency team — we typically respond within 24 hours.',
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
    description: 'Questions about our AI tools? Reach out — we respond within 24 hours.',
    images: ['/logo.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
