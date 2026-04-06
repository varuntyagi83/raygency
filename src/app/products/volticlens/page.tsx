'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Search, BarChart3, Bell, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function VolticlensPage() {
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
      <section className="relative min-h-[70vh] flex flex-col justify-center bg-bg z-0 overflow-hidden">
        <Navigation />

        <div className="orb w-[500px] h-[500px] bg-[rgba(240,160,48,0.12)] top-[-120px] right-[-80px]" />
        <div className="orb w-[350px] h-[350px] bg-[rgba(22,58,196,0.18)] bottom-[-60px] left-[8%]" />

        <div className="glass-shape w-[160px] h-[160px] top-[90px] right-[110px] rounded-full" />
        <div className="glass-shape w-[90px] h-[90px] bottom-[130px] right-[280px] rounded-3xl rotate-[25deg]" />

        <div className="relative z-10 px-6 md:px-16 max-w-5xl hero-fade-in pt-24">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-6 h-6 text-teal-lt" />
            <p className="text-sm font-medium tracking-widest uppercase text-teal-lt">
              Volticlens
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#EAE8F4] mb-6">
            See every ad your competitors are running. In real time.
          </h1>
          <p className="text-lg md:text-xl text-[rgba(234,232,244,0.75)] max-w-3xl mb-4 leading-relaxed">
            Stop guessing what&apos;s working for the competition. Volticlens gives you
            real-time intelligence on every Meta ad in your space. See their creatives,
            copy, targeting signals, and spend patterns.
          </p>
          <p className="text-2xl font-semibold text-copper-bright mb-8">
            $100<span className="text-base font-normal text-[rgba(234,232,244,0.75)]">/month</span>
          </p>
          <a
            href="https://www.volticlens.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white px-10 py-5 rounded-full font-medium text-lg transition-colors btn-hover"
          >
            Start free trial — 7 days, no credit card
          </a>
        </div>
      </section>

      <div className="section-divider" />

      {/* WHO IT'S FOR — Dark alt */}
      <section className="relative bg-[#0a0f1a] z-10 py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-teal-lt fade-up">
            Built for
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-8 text-[#EAE8F4] fade-up">
            Performance marketers who need competitive intel on Meta.
          </h2>
          <div className="max-w-3xl space-y-4 fade-up">
            <p className="text-base md:text-lg text-[rgba(234,232,244,0.55)] leading-relaxed">
              You&apos;re spending real money on Meta ads. You know competitors are
              testing creatives, shifting budgets, launching new campaigns. But you
              can&apos;t see any of it. You&apos;re making decisions blind.
            </p>
            <p className="text-base md:text-lg text-[#EAE8F4] font-medium">
              Volticlens opens the window. Every competitor ad, every creative, every move.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* HOW IT WORKS — Dark */}
      <section className="relative bg-bg z-20 py-24 md:py-32 px-6 md:px-16 overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-[rgba(22,58,196,0.1)] top-[-80px] left-[-60px]" />
        <div className="orb w-[300px] h-[300px] bg-[rgba(240,160,48,0.08)] bottom-[-50px] right-[10%]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-teal-lt fade-up">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-16 text-[#EAE8F4] fade-up">
            Three steps. Full visibility.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <Search className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">01</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                Add your competitors
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Tell Volticlens who you&apos;re watching. Brands, categories, or specific advertisers.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <BarChart3 className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">02</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                See their ads in real time
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Every creative, every copy variant, every active campaign. Updated continuously.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <Bell className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">03</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                Act on the intelligence
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Spot trends, find gaps, and adjust your campaigns with data instead of guesswork.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* PRICING + CTA — Dark alt */}
      <section className="relative bg-[#0a0f1a] z-30 py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#EAE8F4] fade-up">
            $100/month. Start free.
          </h2>
          <p className="text-lg md:text-xl text-[rgba(234,232,244,0.55)] mb-4 fade-up">
            7-day free trial. No credit card required. Cancel anytime.
          </p>
          <p className="text-base text-[rgba(234,232,244,0.40)] mb-10 fade-up">
            Annual plan: 20% off, price locked for life.
          </p>
          <a
            href="https://www.volticlens.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white px-10 py-5 rounded-full font-medium text-lg transition-colors fade-up btn-hover"
          >
            Start free trial — 7 days, no credit card
          </a>
        </div>
      </section>

      <div className="section-divider" />

      {/* UPSELL — Dark */}
      <section className="relative bg-bg z-30 py-16 md:py-20 px-6 md:px-16 overflow-hidden">
        <div className="orb w-[300px] h-[300px] bg-[rgba(240,160,48,0.06)] top-[-60px] right-[15%]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-10 fade-up">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-sm text-teal-lt mb-2">Next step</p>
                <h3 className="text-xl md:text-2xl font-semibold text-[#EAE8F4] mb-2">
                  Winning on paid social? Make sure you own AI search too.
                </h3>
                <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                  Add GeoRaydar to track your brand visibility across ChatGPT, Gemini, Perplexity, and Claude.
                </p>
              </div>
              <Link
                href="/products/georadar"
                className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-8 py-3.5 rounded-full font-medium transition-colors whitespace-nowrap btn-hover"
              >
                See GeoRaydar <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
