'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sparkles, Zap, Radar, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function ProductsPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.fade-up').forEach((element) => {
        gsap.fromTo(
          element as Element,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element as Element,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <div className="noise-overlay" />

      {/* HERO — Dark */}
      <section className="relative min-h-[60vh] flex flex-col justify-center bg-bg z-0 overflow-hidden">
        <Navigation />

        <div className="orb w-[500px] h-[500px] bg-[rgba(240,160,48,0.12)] top-[-100px] right-[-50px]" />
        <div className="orb w-[300px] h-[300px] bg-[rgba(22,58,196,0.15)] bottom-[-80px] left-[10%]" />

        <div className="glass-shape w-[160px] h-[160px] top-[80px] right-[100px] rounded-full" />
        <div className="glass-shape w-[100px] h-[100px] bottom-[120px] right-[240px] rounded-3xl rotate-[15deg]" />

        <div className="relative z-10 px-6 md:px-16 max-w-5xl hero-fade-in pt-24">
          <p className="text-sm font-medium tracking-widest uppercase text-teal-lt mb-6">
            Products
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-[#EAE8F4] mb-6">
            The toolkit. Pick what you need.
          </h1>
          <p className="text-lg md:text-xl text-[rgba(234,232,244,0.75)] max-w-3xl leading-relaxed">
            Three products for performance marketers. Each solves a specific problem.
            All include a 7-day free trial, no credit card required.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* PRODUCT CARDS — Dark */}
      <section className="relative bg-[#0a0f1a] z-10 py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-7">
            {/* Kreashot */}
            <div className="brutal-card fade-up flex flex-col">
              <div className="card-tag"><span className="card-dot" />Kreashot</div>
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase leading-none mb-3 text-[#EAE8F4] tracking-tight">
                Ad Creative.<br />Fast.
              </h2>
              <p className="text-sm text-[rgba(234,232,244,0.50)] leading-relaxed mb-8 font-medium flex-1">
                Product photo to Meta-ready creative in minutes. Built for performance marketers who can&apos;t wait on designers.
              </p>
              <div className="card-price">$150<span>/month</span></div>
              <div className="card-trial">7 days free · no credit card</div>
              <Link href="/products/kreashot" className="btn-brutal w-full text-center mb-3">
                Start free trial
              </Link>
              <Link href="/products/kreashot" className="inline-flex items-center justify-center gap-2 text-teal-lt font-semibold text-xs uppercase tracking-wider">
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Voltic */}
            <div className="brutal-card fade-up flex flex-col">
              <div className="card-tag"><span className="card-dot" />Volticlens</div>
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase leading-none mb-3 text-[#EAE8F4] tracking-tight">
                Competitor Intel.<br />Real Time.
              </h2>
              <p className="text-sm text-[rgba(234,232,244,0.50)] leading-relaxed mb-8 font-medium flex-1">
                See every ad your competitors are running on Meta. Know what they&apos;re testing. Move faster than they do.
              </p>
              <div className="card-price">$100<span>/month</span></div>
              <div className="card-trial">7 days free · no credit card</div>
              <Link href="/products/volticlens" className="btn-brutal-secondary w-full text-center mb-3">
                Start free trial
              </Link>
              <Link href="/products/volticlens" className="inline-flex items-center justify-center gap-2 text-teal-lt font-semibold text-xs uppercase tracking-wider">
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* GeoRaydar */}
            <div className="brutal-card fade-up flex flex-col">
              <div className="card-tag"><span className="card-dot" />GeoRaydar</div>
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase leading-none mb-3 text-[#EAE8F4] tracking-tight">
                AI Search.<br />Owned.
              </h2>
              <p className="text-sm text-[rgba(234,232,244,0.50)] leading-relaxed mb-8 font-medium flex-1">
                Track your brand visibility across ChatGPT, Gemini, Perplexity, and Claude. See every gap. Fix it.
              </p>
              <div className="card-price">$100<span>/month</span></div>
              <div className="card-trial">7 days free · no credit card</div>
              <Link href="/products/georadar" className="btn-brutal-secondary w-full text-center mb-3">
                Start free trial
              </Link>
              <Link href="/products/georadar" className="inline-flex items-center justify-center gap-2 text-teal-lt font-semibold text-xs uppercase tracking-wider">
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Rayprofit */}
            <div className="brutal-card fade-up flex flex-col">
              <div className="card-tag"><span className="card-dot" />Rayprofit</div>
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase leading-none mb-3 text-[#EAE8F4] tracking-tight">
                Ad Spend.<br />Profitable.
              </h2>
              <p className="text-sm text-[rgba(234,232,244,0.50)] leading-relaxed mb-8 font-medium flex-1">
                Maximize your ad ROI with AI-powered budget optimization. Know exactly where every dollar works — and cut what doesn&apos;t.
              </p>
              <div className="card-price">$200<span>/month</span></div>
              <div className="card-trial">7 days free · no credit card</div>
              <Link href="/products/rayprofit" className="btn-brutal-secondary w-full text-center mb-3">
                Start free trial
              </Link>
              <Link href="/products/rayprofit" className="inline-flex items-center justify-center gap-2 text-teal-lt font-semibold text-xs uppercase tracking-wider">
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* ActGuard */}
            <div className="brutal-card fade-up flex flex-col">
              <div className="card-tag"><span className="card-dot" />ActGuard</div>
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase leading-none mb-3 text-[#EAE8F4] tracking-tight">
                Compliance.<br />Automated.
              </h2>
              <p className="text-sm text-[rgba(234,232,244,0.50)] leading-relaxed mb-8 font-medium flex-1">
                From AI system description to audit-ready documentation in minutes. Built for compliance officers who can&apos;t wait on lawyers.
              </p>
              <div className="card-price" style={{ fontSize: '24px' }}>Free to Start</div>
              <div className="card-trial">1 AI system free · more require subscription</div>
              <Link href="/products/actguard" className="btn-brutal-secondary w-full text-center mb-3">
                Get started free
              </Link>
              <Link href="/products/actguard" className="inline-flex items-center justify-center gap-2 text-teal-lt font-semibold text-xs uppercase tracking-wider">
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* LintVibe */}
            <div className="brutal-card fade-up flex flex-col">
              <div className="card-tag"><span className="card-dot" />LintVibe</div>
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase leading-none mb-3 text-[#EAE8F4] tracking-tight">
                Code Quality.<br />Automated.
              </h2>
              <p className="text-sm text-[rgba(234,232,244,0.50)] leading-relaxed mb-8 font-medium flex-1">
                Scan your codebase for bugs, security threats, and production issues. Make your app hack-proof and launch-ready.
              </p>
              <div className="card-price">$40<span>/month</span></div>
              <div className="card-trial">or $400/year · save 2 months</div>
              <Link href="/products/lintvibe" className="btn-brutal-secondary w-full text-center mb-3">
                Start scanning
              </Link>
              <Link href="/products/lintvibe" className="inline-flex items-center justify-center gap-2 text-teal-lt font-semibold text-xs uppercase tracking-wider">
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* BUNDLE — Dark */}
      <section id="suite" className="relative bg-bg z-20 py-24 md:py-32 px-6 md:px-16 overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-[rgba(240,160,48,0.1)] top-[-100px] left-[-80px]" />
        <div className="orb w-[300px] h-[300px] bg-[rgba(22,58,196,0.12)] bottom-[-60px] right-[5%]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-xs font-medium tracking-widest uppercase text-teal-lt fade-up">
            Best value
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-[#EAE8F4] fade-up">
            Raygency Suite
          </h2>
          <p className="text-lg md:text-xl text-[rgba(234,232,244,0.75)] mb-4 fade-up">
            All three products. One subscription.
          </p>

          <div className="glass-card p-8 md:p-12 mt-12 fade-up">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
              <span className="text-5xl md:text-6xl font-semibold text-copper-bright">$250</span>
              <span className="text-xl text-[rgba(234,232,244,0.75)]">/month</span>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-8 text-[rgba(234,232,244,0.75)]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-lt" />
                <span>Kreashot</span>
              </div>
              <span className="hidden md:inline text-[rgba(234,232,244,0.30)]">+</span>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-teal-lt" />
                <span>Volticlens</span>
              </div>
              <span className="hidden md:inline text-[rgba(234,232,244,0.30)]">+</span>
              <div className="flex items-center gap-2">
                <Radar className="w-5 h-5 text-teal-lt" />
                <span>GeoRaydar</span>
              </div>
            </div>

            <div className="space-y-2 mb-8 text-sm text-[rgba(234,232,244,0.40)]">
              <p>Save $100/month vs buying individually ($350 → $250)</p>
              <p>Annual plan: 20% off. Price locked for life.</p>
              <p>7-day free trial. No credit card required.</p>
            </div>

            <Link
              href="/products/kreashot"
              className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white px-10 py-4 rounded-full font-medium text-lg transition-colors btn-hover"
            >
              Start free trial
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
