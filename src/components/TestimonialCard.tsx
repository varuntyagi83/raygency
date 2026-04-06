interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  company: string
}

export default function TestimonialCard({ quote, name, title, company }: TestimonialCardProps) {
  return (
    <div className="bg-cream-white rounded-2xl p-8 md:p-10 border border-cream hover-lift fade-up">
      <blockquote className="text-base md:text-lg text-stone leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex flex-col gap-1">
        <span className="text-base font-medium text-charcoal">{name}</span>
        <span className="text-sm text-stone">{title}, {company}</span>
      </div>
    </div>
  )
}
