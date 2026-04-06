'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShieldCheck, FileText, CheckCircle, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function ActGuardPage() {
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
            <ShieldCheck className="w-6 h-6 text-teal-lt" />
            <p className="text-sm font-medium tracking-widest uppercase text-teal-lt">
              ActGuard
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#EAE8F4] mb-6">
            AI compliance documentation in minutes, not months.
          </h1>
          <p className="text-lg md:text-xl text-[rgba(234,232,244,0.75)] max-w-3xl mb-4 leading-relaxed">
            From AI system description to audit-ready EU AI Act documentation in minutes.
            Built for compliance officers who can&apos;t wait on lawyers. Classify your
            risk tier. Get a full compliance package instantly.
          </p>
          <p className="text-2xl font-semibold text-copper-bright mb-8">
            Free to Start<span className="text-base font-normal text-[rgba(234,232,244,0.75)]"> · 1 AI system included</span>
          </p>
          <a
            href="https://actguard-production.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white px-10 py-5 rounded-full font-medium text-lg transition-colors btn-hover"
          >
            Get started free. No credit card.
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
            Compliance officers and legal teams navigating the EU AI Act.
          </h2>
          <div className="max-w-3xl space-y-4 fade-up">
            <p className="text-base md:text-lg text-[rgba(234,232,244,0.55)] leading-relaxed">
              The EU AI Act is here. You need to classify your AI systems, document their risk tiers, and produce audit-ready compliance packages. The traditional process takes weeks and expensive legal hours. ActGuard does it in minutes.
            </p>
            <p className="text-base md:text-lg text-[#EAE8F4] font-medium">
              Describe your AI system. Get your compliance package. Done.
            </p>
          </div>
          <ul className="mt-8 space-y-3 max-w-2xl fade-up">
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Automatic risk tier classification: minimal, limited, high, or unacceptable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Full audit-ready documentation package generated instantly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Technical documentation, conformity assessment records, and transparency disclosures</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Formatted for regulators, auditors, and legal review</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-lt font-medium mt-0.5">→</span>
              <span className="text-base text-[rgba(234,232,244,0.75)]">Free for your first AI system. No credit card required.</span>
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
              <tr className="border-b border-[rgba(255,255,255,0.04)]"><td className="py-2.5 pr-6 text-[rgba(234,232,244,0.60)]">Price</td><td className="py-2.5 text-[#EAE8F4] font-medium">Free for first AI system. Subscription for more.</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.04)]"><td className="py-2.5 pr-6 text-[rgba(234,232,244,0.60)]">Free Trial</td><td className="py-2.5 text-[#EAE8F4] font-medium">1 AI system free. No credit card required.</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.04)]"><td className="py-2.5 pr-6 text-[rgba(234,232,244,0.60)]">Standard</td><td className="py-2.5 text-[#EAE8F4] font-medium">EU AI Act</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.04)]"><td className="py-2.5 pr-6 text-[rgba(234,232,244,0.60)]">Risk Tiers</td><td className="py-2.5 text-[#EAE8F4] font-medium">Minimal, limited, high, unacceptable</td></tr>
              <tr><td className="py-2.5 pr-6 text-[rgba(234,232,244,0.60)]">Output</td><td className="py-2.5 text-[#EAE8F4] font-medium">Audit-ready compliance package, instantly</td></tr>
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
            Three steps. Audit-ready output.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <FileText className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">01</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                Describe your AI system
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Tell ActGuard what your AI system does, who it affects, and how it makes decisions. No technical jargon required.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <ShieldCheck className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">02</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                AI classifies your risk tier
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                ActGuard applies EU AI Act criteria to classify your system: minimal, limited, high, or unacceptable risk. Instantly.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <CheckCircle className="w-8 h-8 text-teal-lt mb-4" />
              <div className="text-3xl font-semibold text-copper-bright mb-4">03</div>
              <h3 className="text-xl font-medium mb-3 text-[#EAE8F4]">
                Download your compliance package
              </h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Full audit-ready documentation generated instantly. Ready for regulators, auditors, and legal review.
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
            Free to start. Scales as you grow.
          </h2>
          <p className="text-lg md:text-xl text-[rgba(234,232,244,0.55)] mb-4 fade-up">
            1 AI system included free. Additional systems require a subscription.
          </p>
          <p className="text-base text-[rgba(234,232,244,0.40)] mb-10 fade-up">
            No credit card required to get started.
          </p>
          <a
            href="https://actguard-production.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white px-10 py-5 rounded-full font-medium text-lg transition-colors fade-up btn-hover"
          >
            Get started free
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
            Everything you need to know about ActGuard.
          </h2>

          <div className="space-y-10">
            <div className="fade-up">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">What is the EU AI Act?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                The EU AI Act is a regulation that classifies AI systems by risk tier: minimal, limited, high, and unacceptable risk. It requires organizations to produce compliance documentation for each AI system they deploy in the EU. Non-compliance carries significant penalties.
              </p>
            </div>

            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">How does ActGuard generate compliance documentation?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                You describe your AI system: what it does, who it affects, and how it makes decisions. ActGuard applies EU AI Act criteria to classify your risk tier, then generates a full audit-ready compliance package instantly. No lawyers, no weeks of work.
              </p>
            </div>

            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">What does the ActGuard compliance package include?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                ActGuard generates a complete EU AI Act compliance package including risk tier classification, technical documentation, conformity assessment records, and transparency disclosures. All formatted for regulatory audit, legal review, and internal governance.
              </p>
            </div>

            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">Is ActGuard free to use?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Yes. ActGuard is free to start. Your first AI system is documented at no cost. Additional AI systems require a subscription. No credit card required to get started.
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
                  Kreashot, Volticlens, GeoRaydar, Rayprofit. All built for practitioners who need results, not demos.
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
