interface MetricCardProps {
  metric: string
  description: string
}

export default function MetricCard({ metric, description }: MetricCardProps) {
  return (
    <div className="text-center fade-up">
      <div className="text-4xl md:text-5xl font-semibold text-charcoal mb-2">{metric}</div>
      <p className="text-sm md:text-base text-stone leading-relaxed">{description}</p>
    </div>
  )
}
