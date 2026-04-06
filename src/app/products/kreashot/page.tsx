'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sparkles, Upload, Wand2, Download, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function KreashotPage() {
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

        <div className="orb w-[500px] h-[500px] bg-[rgba(240,160,48,0.15)] top-[-100px] right-[-50px]" />
        <div className="orb w-[350px] h-[350px] bg-[rgba(22,58,196,0.18)] bottom-[-80px] left-[5%]" />

        <div className="glass-shape w-[180px] h-[180px] top-[70px] right-[90px] rounded-full" />
        <div className="glass-shape w-[100px] h-[100px] bottom-[140px] right-[260px] rounded-3xl rotate-[20deg]" />

        <div className="relative z-10 px-6 md:px-16 max-w-5xl hero-fade-in pt-24">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-teal-lt" />
            <p className="text-sm font-medium tracking-widest uppercase text-teal-lt">
              Kreashot
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#EAE8F4] mb-6">
            Product photo to Meta-ready ad creative in minutes.
          </h1>
          <p className="text-lg md:text-xl text-[rgba(234,232,244,0.75)] max-w-3xl mb-4 leading-relaxed">
            Stop waiting on designers. Stop bottlenecking campaigns.
            Upload a product photo, Kreashot generates scroll-stopping ad creatives
            ready for Meta. Variants, formats, copy included.
          </p>
          <p className="text-2xl font-semibold text-copper-bright mb-8">
            $150<span className="text-base font-normal text-[rgba(234,232,244,0.75)]">/month</span>
          </p>
          <Link
            href="/products/kreashot"
            className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white px-10 py-5 rounded-full font-medium text-lg transition-colors btn-hover"
          >
            Start free trial — 7 days, no credit card
          </Link>
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
            Performance marketers running Meta ads.
          </h2>
          <div className="max-w-3xl space-y-4 fade-up">
            <p className="text-base md:text-lg text-[rgba(234,232,244,0.55)] leading-relaxed">
              You&apos;re spending real budget on paid social. You need more creative variants,
              faster. Your design team is a bottleneck. Your competitors are outproducing you 10 to 1.
            </p>
            <p className="text-base md:text-lg text-[#EAE8F4] font-medium">
              Kreashot fixes that. One product photo in, Meta-ready creatives out.
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
            Three steps. That&apos;s it.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <Upload className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">01</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                Upload your product photo
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Any product shot. Kreashot handles the rest.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <Wand2 className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">02</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                AI generates ad creatives
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Multiple variants, formats, and ad copy. Optimized for Meta.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <Download className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">03</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                Export to Meta
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Download ready-to-run creatives. Launch your campaign.
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
            $150/month. Start free.
          </h2>
          <p className="text-lg md:text-xl text-[rgba(234,232,244,0.55)] mb-4 fade-up">
            7-day free trial. No credit card required. Cancel anytime.
          </p>
          <p className="text-base text-[rgba(234,232,244,0.40)] mb-10 fade-up">
            Annual plan: 20% off, price locked for life.
          </p>
          <Link
            href="/products/kreashot"
            className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white px-10 py-5 rounded-full font-medium text-lg transition-colors fade-up btn-hover"
          >
            Start free trial — 7 days, no credit card
          </Link>
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
                  You&apos;re making great ads. Now see what your competitors are running.
                </h3>
                <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                  Add Voltic to get real-time competitive intelligence on every Meta ad in your space.
                </p>
              </div>
              <Link
                href="/products/voltic"
                className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-8 py-3.5 rounded-full font-medium transition-colors whitespace-nowrap btn-hover"
              >
                See Voltic <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
