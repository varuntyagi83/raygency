'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Radar, Globe, Eye, TrendingUp, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function GeoRaydarPage() {
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
            <Radar className="w-6 h-6 text-teal-lt" />
            <p className="text-sm font-medium tracking-widest uppercase text-teal-lt">
              GeoRaydar
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#EAE8F4] mb-6">
            When buyers ask ChatGPT who to call — are you the answer?
          </h1>
          <p className="text-lg md:text-xl text-[rgba(234,232,244,0.75)] max-w-3xl mb-4 leading-relaxed">
            Buyers are asking AI for recommendations. ChatGPT, Gemini, Perplexity, Claude.
            GeoRaydar shows you exactly where your brand appears, where competitors appear,
            and how it changes over time — so you can fix the gaps before they cost you deals.
          </p>
          <p className="text-2xl font-semibold text-copper-bright mb-8">
            $100<span className="text-base font-normal text-[rgba(234,232,244,0.75)]">/month</span>
          </p>
          <Link
            href="/products/georadar"
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
            Growth teams who care about brand visibility in AI search.
          </h2>
          <div className="max-w-3xl space-y-4 fade-up">
            <p className="text-base md:text-lg text-[rgba(234,232,244,0.55)] leading-relaxed">
              When someone asks ChatGPT for a recommendation in your category, does your brand come up? Or does your competitor&apos;s? Right now, you have no way to know — and no way to fix what you can&apos;t measure.
            </p>
            <p className="text-base md:text-lg text-[#EAE8F4] font-medium">
              GeoRaydar gives you visibility into AI visibility. Measure it. Track it. Own it.
            </p>
          </div>
          <ul className="mt-8 space-y-3 max-w-2xl fade-up">
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Track brand mentions across ChatGPT, Gemini, Perplexity, and Claude</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">See exactly which queries surface your brand — and which don&apos;t</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Benchmark your visibility against named competitors</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Week-over-week tracking to see what is improving or slipping</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Actionable gap reports showing where to focus content and PR efforts</span>
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
            Three steps. Full AI visibility picture.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <Globe className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">01</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                Set your brand and competitors
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Tell GeoRaydar your brand name, your product category, and the competitors you want to benchmark against.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <Eye className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">02</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                See where you appear
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                GeoRaydar scans ChatGPT, Gemini, Perplexity, and Claude. You see exactly where your brand shows up and where it doesn&apos;t.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <TrendingUp className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">03</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                Track changes over time
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Monitor your AI visibility week over week. See what&apos;s improving, what&apos;s slipping, and where competitors are gaining ground.
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
          <Link
            href="/products/georadar"
            className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white px-10 py-5 rounded-full font-medium text-lg transition-colors fade-up btn-hover"
          >
            Start free trial — 7 days, no credit card
          </Link>
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
            Everything you need to know about GeoRaydar.
          </h2>

          <div className="space-y-10">
            <div className="fade-up">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">What is GeoRaydar?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                GeoRaydar is an AI search brand visibility tracker. It monitors how often and how prominently your brand appears when users ask ChatGPT, Gemini, Perplexity, and Claude for recommendations in your category — and shows you exactly where competitors are appearing instead.
              </p>
            </div>

            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">Which AI platforms does GeoRaydar track?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                GeoRaydar tracks brand visibility across ChatGPT, Gemini, Perplexity, and Claude — the four major AI search and answer engines where buyers now research products and request vendor recommendations.
              </p>
            </div>

            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">What is AI search visibility and why does it matter?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                AI search visibility measures how often your brand is recommended when buyers ask AI engines like ChatGPT questions in your category. As more buyers use AI for research instead of traditional search, appearing in these results drives real pipeline — and being absent means losing to competitors who do appear.
              </p>
            </div>

            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">How much does GeoRaydar cost?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                GeoRaydar costs $100/month with a 7-day free trial included — no credit card required. An annual plan is available at 20% off with pricing locked for life.
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
                <p className="text-sm text-teal-lt mb-2">Get everything</p>
                <h3 className="text-xl md:text-2xl font-semibold text-[#EAE8F4] mb-2">
                  Get all three. Raygency Suite — $250/month.
                </h3>
                <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                  Kreashot + Volticlens + GeoRaydar. Save $100/month vs buying individually.
                </p>
              </div>
              <Link
                href="/products#suite"
                className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-8 py-3.5 rounded-full font-medium transition-colors whitespace-nowrap btn-hover"
              >
                See the suite <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
