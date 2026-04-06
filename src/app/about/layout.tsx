import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About – The Team Behind Raygency',
  description: 'Raygency builds AI-powered tools that actually ship — Kreashot, Volticlens, GeoRaydar, Rayprofit, ActGuard, and LintVibe. Built by practitioners for practitioners.',
  alternates: { canonical: 'https://www.raygency.com/about' },
  openGraph: {
    title: 'About – The Team Behind Raygency',
    description: 'We build AI tools for performance marketers, DTC brands, and compliance teams. Six products. One mission: AI that ships.',
    url: 'https://www.raygency.com/about',
    type: 'website',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Raygency' }],
  },
  twitter: {
    card: 'summary',
    title: 'About Raygency – AI that ships.',
    description: 'We build AI tools for marketers and builders. Six products in production.',
    images: ['/logo.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
