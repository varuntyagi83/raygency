'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Bug, ShieldAlert, Rocket, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function LintVibePage() {
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
            <Bug className="w-6 h-6 text-teal-lt" />
            <p className="text-sm font-medium tracking-widest uppercase text-teal-lt">
              LintVibe
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#EAE8F4] mb-6">
            Vibe coded your app. Now make it production-ready.
          </h1>
          <p className="text-lg md:text-xl text-[rgba(234,232,244,0.75)] max-w-3xl mb-4 leading-relaxed">
            LintVibe scans your codebase for bugs, security vulnerabilities, and
            production issues. Get a prioritized report with fixes — so your app
            is hack-proof, stable, and ready to ship.
          </p>
          <p className="text-2xl font-semibold text-copper-bright mb-8">
            $40<span className="text-base font-normal text-[rgba(234,232,244,0.75)]">/month · or $400/year</span>
          </p>
          <a
            href="https://www.lintvibe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white px-10 py-5 rounded-full font-medium text-lg transition-colors btn-hover"
          >
            Start scanning your code
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
            Developers and founders who need production-grade code, fast.
          </h2>
          <div className="max-w-3xl space-y-4 fade-up">
            <p className="text-base md:text-lg text-[rgba(234,232,244,0.55)] leading-relaxed">
              You moved fast. You built something real with AI coding assistants. But now you&apos;re launching to real users and you need to know: what&apos;s broken, what&apos;s exploitable, what&apos;s going to cause an incident at 2am. LintVibe tells you — before your users do.
            </p>
            <p className="text-base md:text-lg text-[#EAE8F4] font-medium">
              Bugs found. Security fixed. Production ready.
            </p>
          </div>
          <ul className="mt-8 space-y-3 max-w-2xl fade-up">
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Detects security vulnerabilities: SQL injection, XSS, exposed secrets</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Finds bugs, unhandled errors, and edge cases before users do</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Issues prioritized by severity — fix critical problems first</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Works with any codebase — GitHub connect or direct upload</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Actionable fix recommendations, not just issue reports</span>
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
            Three steps. Ship with confidence.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <Bug className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">01</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                Connect your codebase
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Link your GitHub repo or upload your code. LintVibe scans everything — no configuration or setup required.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <ShieldAlert className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">02</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                AI finds bugs and threats
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                LintVibe detects bugs, security vulnerabilities, and production risks — each one prioritized by severity so you know what to fix first.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <Rocket className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">03</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                Fix and ship
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Get actionable fixes for every issue. Resolve them, rescan, and ship knowing your code is solid and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* PRICING — Dark alt */}
      <section className="relative bg-[#0a0f1a] z-30 py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-[#EAE8F4] fade-up">
            Simple pricing.
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10 fade-up">
            <div className="glass-card p-8 text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-lt mb-3">Monthly</p>
              <div className="text-4xl font-semibold text-copper-bright mb-1">$40<span className="text-base font-normal text-[rgba(234,232,244,0.55)]">/month</span></div>
              <p className="text-sm text-[rgba(234,232,244,0.40)] mb-6">Cancel anytime</p>
              <a
                href="https://www.lintvibe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white w-full py-3 rounded-full font-medium transition-colors btn-hover"
              >
                Get started
              </a>
            </div>
            <div className="glass-card p-8 text-left border-[rgba(196,97,42,0.4)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-copper-bright mb-3">Annual · Best Value</p>
              <div className="text-4xl font-semibold text-copper-bright mb-1">$400<span className="text-base font-normal text-[rgba(234,232,244,0.55)]">/year</span></div>
              <p className="text-sm text-teal-lt mb-6">Save $80 — 2 months free</p>
              <a
                href="https://www.lintvibe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white w-full py-3 rounded-full font-medium transition-colors btn-hover"
              >
                Get started
              </a>
            </div>
          </div>
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
            Everything you need to know about LintVibe.
          </h2>

          <div className="space-y-10">
            <div className="fade-up">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">What does LintVibe scan for?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                LintVibe scans your codebase for bugs, security vulnerabilities (including SQL injection, XSS, and exposed secrets), unhandled errors, performance issues, and production risks. Each finding is prioritized by severity so you know exactly what to fix first before launch.
              </p>
            </div>

            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">What is vibe coding and why does it need scanning?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Vibe coding means building apps quickly using AI coding assistants like Cursor or GitHub Copilot. The speed is real, but AI-generated code often contains security holes, unhandled edge cases, and production issues that are invisible until they fail in front of real users. LintVibe catches these before launch — not after.
              </p>
            </div>

            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">How do I connect my codebase to LintVibe?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Link your GitHub repository or upload your code directly to LintVibe. No manual setup or configuration is required — LintVibe scans your entire codebase automatically and returns a prioritized issue report.
              </p>
            </div>

            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">How much does LintVibe cost?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                LintVibe costs $40/month or $400/year — the annual plan saves 2 months compared to monthly billing. Cancel anytime.
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
                  Kreashot, Volticlens, GeoRaydar, Rayprofit, ActGuard — all built for practitioners who need results.
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
