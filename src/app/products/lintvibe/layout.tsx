import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LintVibe: AI Code Quality and Security Scanner | Raygency',
  description: 'Scan your codebase for bugs, security vulnerabilities, and production issues. Prioritized fixes included. $40/month or $400/year. Start scanning today.',
  alternates: { canonical: 'https://www.raygency.com/products/lintvibe' },
  openGraph: {
    title: 'LintVibe: AI Code Quality and Security Scanner | Raygency',
    description: 'Vibe coded your app? Make it production-ready. LintVibe scans for bugs, security issues, and production risks with prioritized fixes.',
    url: 'https://www.raygency.com/products/lintvibe',
    type: 'website',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'LintVibe by Raygency' }],
  },
  twitter: {
    card: 'summary',
    title: 'LintVibe: AI Code Quality & Security Scanner | Raygency',
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
      priceSpecification: { '@type': 'UnitPriceSpecification', price: '40', priceCurrency: 'USD', unitText: 'MONTH' },
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Raygency', url: 'https://www.raygency.com' },
    },
    {
      '@type': 'Offer',
      name: 'Annual',
      price: '400',
      priceCurrency: 'USD',
      priceSpecification: { '@type': 'UnitPriceSpecification', price: '400', priceCurrency: 'USD', unitText: 'ANN' },
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Raygency', url: 'https://www.raygency.com' },
    },
  ],
  provider: { '@type': 'Organization', name: 'Raygency', url: 'https://www.raygency.com' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to scan your codebase for bugs and security issues with LintVibe',
  description: 'Find and fix bugs, security vulnerabilities, and production issues in three steps using LintVibe.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Connect your codebase', text: 'Link your GitHub repository or upload your code directly. LintVibe scans everything — no manual configuration required.' },
    { '@type': 'HowToStep', position: 2, name: 'AI finds bugs and threats', text: 'LintVibe detects bugs, security vulnerabilities (SQL injection, XSS, exposed secrets), and production risks, prioritized by severity.' },
    { '@type': 'HowToStep', position: 3, name: 'Fix and ship', text: 'Receive actionable fixes for every issue. Resolve them, rescan, and ship knowing your code is production-ready.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does LintVibe scan for?',
      acceptedAnswer: { '@type': 'Answer', text: 'LintVibe scans your codebase for bugs, security vulnerabilities (including SQL injection, XSS, and exposed secrets), unhandled errors, performance issues, and production risks. Each finding is prioritized by severity so you know what to fix first.' },
    },
    {
      '@type': 'Question',
      name: 'How do I connect my codebase to LintVibe?',
      acceptedAnswer: { '@type': 'Answer', text: 'Link your GitHub repository or upload your code directly to LintVibe. No manual setup or configuration is required — LintVibe scans everything automatically.' },
    },
    {
      '@type': 'Question',
      name: 'What is vibe coding and why does it need scanning?',
      acceptedAnswer: { '@type': 'Answer', text: 'Vibe coding refers to building apps quickly using AI coding assistants like Cursor or GitHub Copilot. The speed is real, but AI-generated code often contains security holes, unhandled edge cases, and production issues that are invisible until they fail in front of users. LintVibe catches these before launch.' },
    },
    {
      '@type': 'Question',
      name: 'How much does LintVibe cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'LintVibe costs $40/month or $400/year — the annual plan saves 2 months compared to monthly billing. Cancel anytime.' },
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  )
}
