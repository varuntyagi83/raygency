'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Eye, BarChart2, TrendingUp, ArrowRight } from 'lucide-react'
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

        <div className="orb w-[500px] h-[500px] bg-[rgba(240,160,48,0.12)] top-[-100px] right-[-60px]" />
        <div className="orb w-[350px] h-[350px] bg-[rgba(22,58,196,0.18)] bottom-[-70px] left-[6%]" />

        <div className="glass-shape w-[170px] h-[170px] top-[80px] right-[100px] rounded-full" />
        <div className="glass-shape w-[95px] h-[95px] bottom-[120px] right-[250px] rounded-3xl rotate-[18deg]" />

        <div className="relative z-10 px-6 md:px-16 max-w-5xl hero-fade-in pt-24">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-6 h-6 text-teal-lt" />
            <p className="text-sm font-medium tracking-widest uppercase text-teal-lt">
              Volticlens
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#EAE8F4] mb-6">
            See every ad your competitors run on Meta. In real time.
          </h1>
          <p className="text-lg md:text-xl text-[rgba(234,232,244,0.75)] max-w-3xl mb-4 leading-relaxed">
            Know exactly what your competitors are testing on Meta: creative, copy, targeting signals, launch dates. Volticlens gives you real-time intelligence so you can move faster than they do.
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
            Start free trial. 7 days, no credit card.
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
            Performance marketers who need competitive intelligence on Meta.
          </h2>
          <div className="max-w-3xl space-y-4 fade-up">
            <p className="text-base md:text-lg text-[rgba(234,232,244,0.55)] leading-relaxed">
              Your competitors are running ads right now. You have no idea what creative is working for them, what angles they&apos;re testing, or how hard they&apos;re pushing. That information asymmetry costs you budget and time.
            </p>
            <p className="text-base md:text-lg text-[#EAE8F4] font-medium">
              Volticlens closes the gap. See everything they&apos;re running. React the same day.
            </p>
          </div>
          <ul className="mt-8 space-y-3 max-w-2xl fade-up">
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Real-time view of every active competitor ad on Meta</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Creative, copy, format, and launch date for each ad</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Targeting signal indicators to understand competitor audience strategy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Monitor multiple competitors simultaneously from one dashboard</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Identify winning creative patterns before spending to test</span>
            </li>
          </ul>
          <table className="w-full mt-8 border-collapse text-sm fade-up">
            <thead>
              <tr className="border-b border-[rgba(13,155,176,0.2)]">
                <th className="text-left py-3 pr-6 font-semibold text-[#EAE8F4]">Feature</th>
                <th className="text-left py-3 font-semibold text-[#EAE8F4]">Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[rgba(255,255,255,0.04)]"><td className="py-2.5 pr-6 text-[rgba(234,232,244,0.60)]">Price</td><td className="py-2.5 text-[#EAE8F4] font-medium">$100/month · annual plan 20% off</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.04)]"><td className="py-2.5 pr-6 text-[rgba(234,232,244,0.60)]">Free Trial</td><td className="py-2.5 text-[#EAE8F4] font-medium">7 days · no credit card required</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.04)]"><td className="py-2.5 pr-6 text-[rgba(234,232,244,0.60)]">Data Source</td><td className="py-2.5 text-[#EAE8F4] font-medium">Meta Ad Library, real-time</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.04)]"><td className="py-2.5 pr-6 text-[rgba(234,232,244,0.60)]">Coverage</td><td className="py-2.5 text-[#EAE8F4] font-medium">All active competitor ads on Meta</td></tr>
              <tr><td className="py-2.5 pr-6 text-[rgba(234,232,244,0.60)]">Tracking</td><td className="py-2.5 text-[#EAE8F4] font-medium">Multiple competitors from one dashboard</td></tr>
            </tbody>
          </table>
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
            Three steps. Full competitor picture.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <Eye className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">01</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                Connect your Meta account
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Link your Meta ad account and set the competitors you want to monitor. Setup takes minutes, no technical configuration needed.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <BarChart2 className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">02</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                See every competitor ad
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Volticlens surfaces all active competitor ads on Meta: creative, copy, targeting signals, and launch dates, updated in real time.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <TrendingUp className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">03</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                React faster than they do
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Understand what competitors are testing, spot winning patterns, and launch your response before they scale a winner.
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
            Start free trial. 7 days, no credit card.
          </a>
        </div>
      </section>

      <div className="section-divider" />

      {/* FAQ — Dark */}
      <section className="relative bg-bg z-30 py-24 md:py-32 px-6 md:px-16 overflow-hidden">
        <div className="orb w-[300px] h-[300px] bg-[rgba(13,155,176,0.06)] top-[-60px] right-[10%]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-teal-lt fade-up">
            Common questions
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-12 text-[#EAE8F4] fade-up">
            Everything you need to know about Volticlens.
          </h2>

          <div className="space-y-10">
            <div className="fade-up">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">What is Volticlens?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Volticlens is a real-time Meta competitor ad intelligence tool. It shows you every ad your competitors are running on Meta: creative, copy, targeting signals, and launch dates. So you can understand what&apos;s working in your category and move faster than the competition.
              </p>
            </div>

            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">Which platforms does Volticlens monitor?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Volticlens monitors the Meta ad network: Facebook and Instagram ads across Feed, Stories, and Reels placements. It tracks active competitor ads in real time so you always have a current view of what is running in your space.
              </p>
            </div>

            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">How often is competitor ad data updated?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Volticlens provides real-time competitor ad data. New competitor ads are surfaced as soon as they go live, and paused or stopped ads are flagged immediately. You always have an accurate, up-to-date view of what each competitor is actively spending on.
              </p>
            </div>

            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">How much does Volticlens cost?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Volticlens costs $100/month with a 7-day free trial included. No credit card required. An annual plan is available at 20% off with pricing locked for life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* UPSELL — Dark alt */}
      <section className="relative bg-[#0a0f1a] z-30 py-16 md:py-20 px-6 md:px-16 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-10 fade-up">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-sm text-teal-lt mb-2">See all products</p>
                <h3 className="text-xl md:text-2xl font-semibold text-[#EAE8F4] mb-2">
                  More tools built by Raygency.
                </h3>
                <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                  Kreashot, Rayprofit, ActGuard, LintVibe. All built for practitioners who need results, not demos.
                </p>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-8 py-3.5 rounded-full font-medium transition-colors whitespace-nowrap btn-hover"
              >
                See all products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
