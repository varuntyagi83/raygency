import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Raygency | AI that ships.',
  description: 'AI-powered tools for performance marketers. Kreashot, Voltic, and GeoRaydar — built by practitioners, shipped in production. Free trial, no credit card.',
  keywords: 'AI ad creative, Meta ad intelligence, competitor ad research, AI brand visibility, performance marketing tools, ad creative automation, AI search visibility, Kreashot, Voltic, GeoRaydar',
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
