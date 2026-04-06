import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: {
    default: 'Raygency – AI Tools for Marketers, Builders and Teams',
    template: '%s | Raygency',
  },
  description: 'Six AI tools for performance marketers. Free trials, no credit card. Kreashot, Volticlens, GeoRaydar, Rayprofit, ActGuard, LintVibe.',
  keywords: 'AI ad creative, Meta ad intelligence, competitor ad research, AI brand visibility, performance marketing tools, ad ROI optimization, EU AI Act compliance, code quality scanning, Kreashot, Volticlens, GeoRaydar, Rayprofit, ActGuard, LintVibe',
  metadataBase: new URL('https://www.raygency.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Raygency',
    title: 'Raygency | AI that ships.',
    description: 'AI-powered tools for performance marketers. Kreashot, Volticlens, GeoRaydar, Rayprofit, ActGuard — built by practitioners, shipped in production.',
    url: 'https://www.raygency.com',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Raygency' }],
  },
  twitter: {
    card: 'summary',
    title: 'Raygency | AI that ships.',
    description: 'AI-powered tools for performance marketers. Kreashot, Volticlens, GeoRaydar, Rayprofit, ActGuard — built by practitioners.',
    images: ['/logo.png'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Raygency',
  url: 'https://www.raygency.com',
  logo: 'https://www.raygency.com/logo.png',
  description: 'AI-powered SaaS tools for performance marketers, DTC brands, and compliance teams. Kreashot, Volticlens, GeoRaydar, Rayprofit, ActGuard, LintVibe.',
  sameAs: ['https://www.raygency.com'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    url: 'https://www.raygency.com/contact',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <main className="page-enter">{children}</main>
      </body>
    </html>
  )
}
