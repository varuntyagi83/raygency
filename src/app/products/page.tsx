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
            Six AI tools for performance marketers, DTC brands, compliance teams, and developers. Each solves a specific problem. All include a free trial — no credit card required.
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

        <div className="relative z-10 max-w-6xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-teal-lt fade-up">
            Bundle plans
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-[#EAE8F4] fade-up">
            Use more. Pay less.
          </h2>
          <p className="text-base text-[rgba(234,232,244,0.55)] mb-14 font-medium fade-up">
            Pick any combination. The more you bundle, the more you save.
          </p>

          <div className="grid md:grid-cols-3 gap-7">
            {/* Duo */}
            <div className="glass-card p-8 md:p-10 fade-up flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-lt mb-4">Duo Plan</p>
              <div className="text-5xl font-extrabold text-copper-bright mb-1">$100<span className="text-base font-normal text-[rgba(234,232,244,0.55)]">/mo</span></div>
              <p className="text-sm text-[rgba(234,232,244,0.40)] mb-6">Any 2 products of your choice</p>
              <ul className="space-y-2 text-sm text-[rgba(234,232,244,0.75)] mb-8 flex-1">
                <li className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-teal-lt flex-shrink-0" />Pick any 2 from the full toolkit</li>
                <li className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-teal-lt flex-shrink-0" />7-day free trial on each</li>
                <li className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-teal-lt flex-shrink-0" />Cancel anytime</li>
              </ul>
              <Link href="/contact" className="btn-brutal-secondary w-full text-center">Get started</Link>
            </div>

            {/* Trio */}
            <div className="glass-card p-8 md:p-10 fade-up flex flex-col border-[rgba(196,97,42,0.4)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-copper-bright mb-4">Trio Plan · Most Popular</p>
              <div className="text-5xl font-extrabold text-copper-bright mb-1">$250<span className="text-base font-normal text-[rgba(234,232,244,0.55)]">/mo</span></div>
              <p className="text-sm text-[rgba(234,232,244,0.40)] mb-6">Any 3 products of your choice</p>
              <ul className="space-y-2 text-sm text-[rgba(234,232,244,0.75)] mb-8 flex-1">
                <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-copper-bright flex-shrink-0" />Pick any 3 from the full toolkit</li>
                <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-copper-bright flex-shrink-0" />7-day free trial on each</li>
                <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-copper-bright flex-shrink-0" />Annual plan: 20% off, locked for life</li>
              </ul>
              <Link href="/contact" className="btn-brutal w-full text-center">Get started</Link>
            </div>

            {/* Full Suite */}
            <div className="glass-card p-8 md:p-10 fade-up flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-lt mb-4">Full Suite</p>
              <div className="text-5xl font-extrabold text-copper-bright mb-1">$500<span className="text-base font-normal text-[rgba(234,232,244,0.55)]">/mo</span></div>
              <p className="text-sm text-[rgba(234,232,244,0.40)] mb-6">All 6 products included</p>
              <ul className="space-y-2 text-sm text-[rgba(234,232,244,0.75)] mb-8 flex-1">
                <li className="flex items-center gap-2"><Radar className="w-4 h-4 text-teal-lt flex-shrink-0" />Kreashot, Volticlens, GeoRaydar</li>
                <li className="flex items-center gap-2"><Radar className="w-4 h-4 text-teal-lt flex-shrink-0" />Rayprofit, ActGuard, LintVibe</li>
                <li className="flex items-center gap-2"><Radar className="w-4 h-4 text-teal-lt flex-shrink-0" />Annual plan: 20% off, locked for life</li>
              </ul>
              <Link href="/contact" className="btn-brutal-secondary w-full text-center">Get started</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FAQ — Dark alt */}
      <section className="relative bg-[#0a0f1a] z-30 py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-teal-lt fade-up">Common questions</span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-12 text-[#EAE8F4] fade-up">
            Frequently asked questions.
          </h2>
          <div className="space-y-10">
            <div className="fade-up">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">What products does Raygency offer?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Raygency offers six AI-powered tools: Kreashot ($150/month) for ad creative generation, Volticlens ($100/month) for Meta competitor ad intelligence, GeoRaydar ($100/month) for AI search brand visibility, Rayprofit ($200/month) for ad ROI optimization, ActGuard (free to start) for EU AI Act compliance documentation, and LintVibe ($40/month) for code quality and security scanning.
              </p>
            </div>
            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">Which product should I start with?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Start with the product that solves your most immediate problem. Performance marketers typically start with Kreashot. Teams spending on Meta ads who want competitive intelligence start with Volticlens. If you need to track AI search visibility, start with GeoRaydar. Compliance teams start with ActGuard — it&apos;s free for your first AI system. Developers ship with LintVibe.
              </p>
            </div>
            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">Can I bundle multiple Raygency products?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Yes. Raygency offers three bundle plans: the Duo Plan (any 2 products for $100/month), the Trio Plan (any 3 products for $250/month), and the Full Suite (all 6 products for $500/month). All bundles include 7-day free trials and annual plan options with 20% off.
              </p>
            </div>
            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">Do all Raygency products include a free trial?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Yes. Kreashot, Volticlens, GeoRaydar, and Rayprofit each include a 7-day free trial with no credit card required. ActGuard is free for your first AI system with no credit card needed. LintVibe offers a free initial scan. All subscriptions can be cancelled at any time — no long-term contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
