import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Raygency | Answer Engine Optimization & AI Strategy',
  description: 'Elite AI strategy firm specializing in AEO, GEO, SEO, and custom AI systems for mid-market companies. We make your company the obvious answer.',
  keywords: 'answer engine optimization, AEO, GEO, AI strategy, SEO, knowledge base, RAG, AI agents, generative search optimization, intelligent automation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans antialiased">
        <main className="page-enter">{children}</main>
      </body>
    </html>
  )
}
