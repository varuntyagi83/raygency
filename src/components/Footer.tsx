import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink border-t border-[rgba(13,155,176,0.2)] py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Raygency" width={28} height={28} className="rounded-full" />
              <span className="text-sm font-medium tracking-wider text-text">
                RAYGENCY
              </span>
            </div>
            <p className="text-sm text-text-dim">
              AI that ships.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-8 text-sm text-text">
            <Link href="/products" className="hover:text-teal-lt transition-colors">
              Products
            </Link>
            <Link href="/studio" className="hover:text-teal-lt transition-colors">
              Studio
            </Link>
            <Link href="/about" className="hover:text-teal-lt transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-teal-lt transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[rgba(13,155,176,0.15)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-dim">
          <p>&copy; {currentYear} Raygency. All rights reserved.</p>
          <p>
            Built by practitioners. Shipped in production.
          </p>
        </div>
      </div>
    </footer>
  )
}
