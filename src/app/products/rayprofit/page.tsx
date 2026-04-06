'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TrendingUp, PieChart, Target, Zap, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function RayprofitPage() {
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
            <TrendingUp className="w-6 h-6 text-teal-lt" />
            <p className="text-sm font-medium tracking-widest uppercase text-teal-lt">
              Rayprofit
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#EAE8F4] mb-6">
            Know exactly where every ad dollar works. Cut the rest.
          </h1>
          <p className="text-lg md:text-xl text-[rgba(234,232,244,0.75)] max-w-3xl mb-4 leading-relaxed">
            Maximize your ad ROI with AI-powered budget optimization. Rayprofit shows you which campaigns are profitable, which are wasting spend, and exactly where to reallocate for maximum return — across Meta, Google, and more.
          </p>
          <p className="text-2xl font-semibold text-copper-bright mb-8">
            $200<span className="text-base font-normal text-[rgba(234,232,244,0.75)]">/month</span>
          </p>
          <a
            href="https://www.rayprofit.com/overview"
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
            DTC brands and media buyers who need ROI clarity.
          </h2>
          <div className="max-w-3xl space-y-4 fade-up">
            <p className="text-base md:text-lg text-[rgba(234,232,244,0.55)] leading-relaxed">
              You&apos;re spending serious budget across multiple campaigns and channels. You know some of it is working. You suspect some of it isn&apos;t. But you can&apos;t see which is which fast enough to do anything about it.
            </p>
            <p className="text-base md:text-lg text-[#EAE8F4] font-medium">
              Rayprofit makes it obvious. Every dollar tracked. Every decision backed by data.
            </p>
          </div>
          <ul className="mt-8 space-y-3 max-w-2xl fade-up">
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Connects to Meta, Google, and other major ad platforms</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">AI profitability score for every campaign and ad set</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Flags wasted spend with specific reallocation recommendations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Unified cross-platform view of all ad spend and performance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Real-time alerts when campaigns shift from profitable to losing</span>
            </li>
          </ul>
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
            Three steps. Full ROI picture.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <Zap className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">01</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                Connect your ad accounts
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Link Meta, Google, and other platforms. Rayprofit pulls your spend and performance data automatically — no manual exports.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <PieChart className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">02</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                AI surfaces what&apos;s working
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Rayprofit scores each campaign by profitability and flags exactly where budget is being wasted across your account.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <Target className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">03</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                Reallocate with confidence
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Act on AI-powered recommendations to shift budget to profitable campaigns and cut what is not delivering return.
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
            $200/month. Start free.
          </h2>
          <p className="text-lg md:text-xl text-[rgba(234,232,244,0.55)] mb-4 fade-up">
            7-day free trial. No credit card required. Cancel anytime.
          </p>
          <p className="text-base text-[rgba(234,232,244,0.40)] mb-10 fade-up">
            Annual plan: 20% off, price locked for life.
          </p>
          <a
            href="https://www.rayprofit.com/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white px-10 py-5 rounded-full font-medium text-lg transition-colors fade-up btn-hover"
          >
            Start free trial — 7 days, no credit card
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
            Everything you need to know about Rayprofit.
          </h2>

          <div className="space-y-10">
            <div className="fade-up">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">What is Rayprofit?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Rayprofit is an AI-powered ad ROI optimization platform. It connects to your ad accounts across Meta and Google, scores every campaign by profitability, and tells you exactly where to reallocate budget to maximize return on ad spend — replacing guesswork with data-backed decisions.
              </p>
            </div>

            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">Which ad platforms does Rayprofit connect to?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Rayprofit connects to Meta (Facebook and Instagram ads) and Google Ads, pulling spend and performance data automatically. This gives you a unified cross-platform view of where your budget is working and where it is being wasted.
              </p>
            </div>

            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">How does Rayprofit improve ad ROI?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Rayprofit uses AI to score every campaign and ad set by profitability in real time. It identifies which spend is generating return and which is wasted, then provides specific reallocation recommendations — so you stop guessing and start acting on data immediately.
              </p>
            </div>

            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">How much does Rayprofit cost?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Rayprofit costs $200/month with a 7-day free trial — no credit card required. An annual plan is available at 20% off with pricing locked for life.
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
                <p className="text-sm text-teal-lt mb-2">Next step</p>
                <h3 className="text-xl md:text-2xl font-semibold text-[#EAE8F4] mb-2">
                  You&apos;re optimizing spend. Now see what competitors are running.
                </h3>
                <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                  Add Volticlens to get real-time intelligence on every Meta ad in your space.
                </p>
              </div>
              <Link
                href="/products/volticlens"
                className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-8 py-3.5 rounded-full font-medium transition-colors whitespace-nowrap btn-hover"
              >
                See Volticlens <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
