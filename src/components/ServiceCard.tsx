import Link from 'next/link'

interface ServiceCardProps {
  icon: React.ReactNode
  headline: string
  subheading: string
  copy: string
  cta?: { text: string; href: string }
}

export default function ServiceCard({ icon, headline, subheading, copy, cta }: ServiceCardProps) {
  return (
    <div className="bg-cream-white rounded-2xl p-8 md:p-10 border border-cream fade-up hover-lift">
      <div className="w-10 h-10 text-coral mb-6">{icon}</div>
      <h3 className="text-xl md:text-2xl font-medium mb-2 text-charcoal">{headline}</h3>
      <p className="text-base font-medium text-coral mb-3">{subheading}</p>
      <p className="text-base md:text-lg text-stone leading-relaxed">{copy}</p>
      {cta && (
        <Link
          href={cta.href}
          className="inline-flex items-center mt-6 text-coral hover:text-coral-hover font-medium transition-colors link-underline"
        >
          {cta.text}
        </Link>
      )}
    </div>
  )
}
