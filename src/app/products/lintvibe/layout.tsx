import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LintVibe – AI Code Quality & Security Scanner',
  description: 'Scan your codebase for bugs, security vulnerabilities, and production issues. Get prioritized fixes so your app is hack-proof and launch-ready. $40/month.',
  alternates: { canonical: 'https://www.raygency.com/products/lintvibe' },
  openGraph: {
    title: 'LintVibe – AI Code Quality & Security Scanner | Raygency',
    description: 'Vibe coded your app? Now make it production-ready. LintVibe scans for bugs, security issues, and production risks with prioritized fixes.',
    url: 'https://www.raygency.com/products/lintvibe',
    type: 'website',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'LintVibe by Raygency' }],
  },
  twitter: {
    card: 'summary',
    title: 'LintVibe – AI Code Quality & Security Scanner | Raygency',
    description: 'Scan your codebase for bugs and security issues. Get prioritized fixes. $40/month.',
    images: ['/logo.png'],
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LintVibe',
  description: 'AI-powered code quality and security scanner. Find bugs, vulnerabilities, and production risks with prioritized fixes.',
  applicationCategory: 'DeveloperApplication',
  url: 'https://www.lintvibe.com',
  offers: [
    {
      '@type': 'Offer',
      name: 'Monthly',
      price: '40',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '40',
        priceCurrency: 'USD',
        unitText: 'MONTH',
      },
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Raygency', url: 'https://www.raygency.com' },
    },
    {
      '@type': 'Offer',
      name: 'Annual',
      price: '400',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '400',
        priceCurrency: 'USD',
        unitText: 'ANN',
      },
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Raygency', url: 'https://www.raygency.com' },
    },
  ],
  provider: { '@type': 'Organization', name: 'Raygency', url: 'https://www.raygency.com' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does LintVibe scan for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LintVibe scans your codebase for bugs, security vulnerabilities (like SQL injection, XSS, exposed secrets), and production risks such as unhandled errors and performance issues. Each finding is prioritized by severity so you know what to fix first.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I connect my codebase to LintVibe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Link your GitHub repository or upload your code directly. LintVibe scans everything with no manual setup required.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LintVibe cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LintVibe costs $40/month or $400/year — saving 2 months compared to monthly billing.',
      },
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
