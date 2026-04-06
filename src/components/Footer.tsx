import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sand-10 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Raygency" width={28} height={28} className="rounded-full" />
              <span className="text-sm font-medium tracking-wider text-sand-80">
                RAYGENCY
              </span>
            </div>
            <p className="text-sm text-sand-50">
              AI strategy &amp; search dominance for forward-thinking companies.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-8 text-sm text-sand-80">
            <Link href="/about" className="hover:text-orange transition-colors">
              About
            </Link>
            <Link href="/services" className="hover:text-orange transition-colors">
              Services
            </Link>
            <Link href="/contact" className="hover:text-orange transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-sand-30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-sand-50">
          <p>&copy; {currentYear} Raygency. All rights reserved.</p>
          <p>
            Built to dominate in Answer Engines.
          </p>
        </div>
      </div>
    </footer>
  )
}
