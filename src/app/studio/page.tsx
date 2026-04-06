'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function StudioPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({ name: '', email: '', brief: '' })
  const [submitted, setSubmitted] = useState(false)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div ref={containerRef} className="relative">
      <div className="noise-overlay" />

      {/* HERO — Dark */}
      <section className="relative min-h-[70vh] flex flex-col justify-center bg-[#020810] z-0 overflow-hidden transition-dark-to-light">
        <Navigation />

        <div className="orb w-[500px] h-[500px] bg-[rgba(240,160,48,0.12)] top-[-100px] right-[-60px]" />
        <div className="orb w-[350px] h-[350px] bg-[rgba(22,58,196,0.18)] bottom-[-70px] left-[6%]" />

        <div className="glass-shape w-[180px] h-[180px] top-[70px] right-[90px] rounded-full" />
        <div className="glass-shape w-[110px] h-[110px] bottom-[130px] right-[240px] rounded-3xl rotate-[20deg]" />

        <div className="relative z-10 px-6 md:px-16 max-w-5xl hero-fade-in pt-24">
          <p className="text-sm font-medium tracking-widest uppercase text-teal-lt mb-6">
            Raygency Studio
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#EAE8F4] mb-6">
            &ldquo;Most of what you need, we have already built. The rest, we build fast.&rdquo;
          </h1>
          <p className="text-lg md:text-xl text-[rgba(234,232,244,0.75)] max-w-3xl leading-relaxed">
            Custom AI products for teams that need more than off-the-shelf.
            Project-based. Scoped tight. Shipped in production.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* WHAT WE BUILD — Dark alt */}
      <section className="relative bg-[#0a0f1a] z-10 py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-[rgba(234,232,244,0.55)] fade-up">
            What we build
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-8 text-[#EAE8F4] fade-up">
            AI products that fit the Raygency DNA.
          </h2>
          <div className="max-w-3xl space-y-4 mb-16 fade-up">
            <p className="text-base md:text-lg text-[rgba(234,232,244,0.55)] leading-relaxed">
              Marketing tools. Automation systems. Data products. Internal AI that
              actually gets used. If it fits what we know how to build well, we build it fast.
            </p>
            <p className="text-base md:text-lg text-[#EAE8F4] font-medium">
              We don&apos;t do generic app development. We build AI products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[rgba(13,155,176,0.04)] rounded-2xl p-8 border border-[rgba(13,155,176,0.2)] fade-up">
              <h3 className="text-lg font-semibold text-[#EAE8F4] mb-3">Marketing tools</h3>
              <p className="text-base text-[rgba(234,232,244,0.55)] leading-relaxed">
                Creative automation, campaign intelligence, audience tools.
                Built for teams running real ad spend.
              </p>
            </div>
            <div className="bg-[rgba(13,155,176,0.04)] rounded-2xl p-8 border border-[rgba(13,155,176,0.2)] fade-up">
              <h3 className="text-lg font-semibold text-[#EAE8F4] mb-3">AI automation</h3>
              <p className="text-base text-[rgba(234,232,244,0.55)] leading-relaxed">
                Workflows, agents, data pipelines. Systems that do the work
                so your team doesn&apos;t have to.
              </p>
            </div>
            <div className="bg-[rgba(13,155,176,0.04)] rounded-2xl p-8 border border-[rgba(13,155,176,0.2)] fade-up">
              <h3 className="text-lg font-semibold text-[#EAE8F4] mb-3">Data products</h3>
              <p className="text-base text-[rgba(234,232,244,0.55)] leading-relaxed">
                Dashboards, intelligence platforms, monitoring systems.
                Turn raw data into decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* HOW IT WORKS — Dark */}
      <section className="relative bg-[#020810] z-20 py-24 md:py-32 px-6 md:px-16 overflow-hidden transition-dark-to-light">
        <div className="orb w-[400px] h-[400px] bg-[rgba(22,58,196,0.1)] top-[-80px] left-[-60px]" />
        <div className="orb w-[300px] h-[300px] bg-[rgba(240,160,48,0.08)] bottom-[-50px] right-[10%]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-[rgba(234,232,244,0.50)] fade-up">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-16 text-[#EAE8F4] fade-up">
            Brief to build. No bloat.
          </h2>

          <div className="grid md:grid-cols-4 gap-6 md:gap-8">
            <div className="glass-card p-6 md:p-8 fade-up">
              <div className="text-2xl font-semibold text-copper-bright mb-3">01</div>
              <h3 className="text-lg font-medium mb-2 text-[#EAE8F4]">Brief</h3>
              <p className="text-sm text-[rgba(234,232,244,0.75)] leading-relaxed">
                Tell us what you need. A paragraph is enough to start the conversation.
              </p>
            </div>
            <div className="glass-card p-6 md:p-8 fade-up">
              <div className="text-2xl font-semibold text-copper-bright mb-3">02</div>
              <h3 className="text-lg font-medium mb-2 text-[#EAE8F4]">Scoping call</h3>
              <p className="text-sm text-[rgba(234,232,244,0.75)] leading-relaxed">
                We discuss feasibility, timeline, and cost. No surprises.
              </p>
            </div>
            <div className="glass-card p-6 md:p-8 fade-up">
              <div className="text-2xl font-semibold text-copper-bright mb-3">03</div>
              <h3 className="text-lg font-medium mb-2 text-[#EAE8F4]">Build</h3>
              <p className="text-sm text-[rgba(234,232,244,0.75)] leading-relaxed">
                We build it. You see progress throughout. No black box.
              </p>
            </div>
            <div className="glass-card p-6 md:p-8 fade-up">
              <div className="text-2xl font-semibold text-copper-bright mb-3">04</div>
              <h3 className="text-lg font-medium mb-2 text-[#EAE8F4]">Handoff</h3>
              <p className="text-sm text-[rgba(234,232,244,0.75)] leading-relaxed">
                You get the product, the documentation, and the knowledge to run it.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center fade-up">
            <p className="text-base text-[rgba(234,232,244,0.50)]">
              Scope varies. Let&apos;s talk.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CAPACITY NOTE + FORM — Dark alt */}
      <section className="relative bg-[#0a0f1a] z-30 py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 fade-up">
            <p className="text-base md:text-lg text-[rgba(234,232,244,0.55)] leading-relaxed">
              We take on a limited number of Studio projects at a time.
              This isn&apos;t a sales tactic. We&apos;re a small team that builds
              everything ourselves. If we can&apos;t give your project the attention
              it needs, we&apos;ll tell you.
            </p>
          </div>

          <div className="bg-[rgba(13,155,176,0.04)] rounded-2xl p-8 md:p-12 border border-[rgba(13,155,176,0.2)] fade-up">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#EAE8F4] mb-2">
              Tell us what you&apos;re building.
            </h2>
            <p className="text-base text-[rgba(234,232,244,0.55)] mb-8">
              A short description is enough to start. We&apos;ll be in touch within 48 hours.
            </p>

            {submitted ? (
              <div className="text-center py-8">
                <h3 className="text-xl font-semibold text-[#EAE8F4] mb-2">Got it.</h3>
                <p className="text-base text-[rgba(234,232,244,0.55)]">
                  We&apos;ll review your brief and respond within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#EAE8F4] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(13,155,176,0.2)] bg-[rgba(13,155,176,0.04)] text-[#EAE8F4] placeholder:text-[rgba(234,232,244,0.30)] focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#EAE8F4] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(13,155,176,0.2)] bg-[rgba(13,155,176,0.04)] text-[#EAE8F4] placeholder:text-[rgba(234,232,244,0.30)] focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="brief" className="block text-sm font-medium text-[#EAE8F4] mb-2">
                    What do you need built?
                  </label>
                  <textarea
                    id="brief"
                    required
                    rows={5}
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(13,155,176,0.2)] bg-[rgba(13,155,176,0.04)] text-[#EAE8F4] placeholder:text-[rgba(234,232,244,0.30)] focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors resize-none"
                    placeholder="A paragraph is enough. What problem are you solving? What does the product need to do?"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-coral hover:bg-coral-hover text-white px-8 py-4 rounded-full font-medium transition-colors btn-hover"
                >
                  Send brief
                </button>
              </form>
            )}
          </div>

          {/* Products nudge */}
          <div className="mt-12 text-center fade-up">
            <p className="text-base text-[rgba(234,232,244,0.55)] mb-4">
              Looking for ready-made tools instead?
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-teal-lt font-medium hover:gap-3 transition-all"
            >
              See our products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FAQ — Dark */}
      <section className="relative bg-[#020810] py-24 md:py-32 px-6 md:px-16 overflow-hidden">
        <div className="orb w-[300px] h-[300px] bg-[rgba(13,155,176,0.06)] top-[-60px] right-[10%]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-teal-lt fade-up">Common questions</span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-12 text-[#EAE8F4] fade-up">
            Everything you need to know about Raygency Studio.
          </h2>
          <div className="space-y-10">
            <div className="fade-up">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">What is Raygency Studio?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Raygency Studio is the custom build arm of Raygency. It builds AI products, automation systems, and data tools for teams that need something specific to their use case — not an off-the-shelf subscription. If your problem doesn&apos;t fit an existing product, Studio builds it.
              </p>
            </div>
            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">What kind of projects does Raygency Studio take on?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Studio builds in three areas:
              </p>
              <ul className="mt-4 space-y-2 text-base text-[rgba(234,232,244,0.75)]">
                <li className="flex items-start gap-2"><span className="text-teal-lt mt-0.5">→</span><span><strong className="text-[#EAE8F4]">Marketing tools</strong> — Creative automation, campaign intelligence, audience tools built for teams running real ad spend</span></li>
                <li className="flex items-start gap-2"><span className="text-teal-lt mt-0.5">→</span><span><strong className="text-[#EAE8F4]">AI automation</strong> — Workflows, agents, and data pipelines that do the work so your team doesn&apos;t have to</span></li>
                <li className="flex items-start gap-2"><span className="text-teal-lt mt-0.5">→</span><span><strong className="text-[#EAE8F4]">Data products</strong> — Dashboards, intelligence platforms, and monitoring systems that turn raw data into decisions</span></li>
              </ul>
            </div>
            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">How does the Raygency Studio build process work?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                The process has four steps: send a brief describing what you need (a paragraph is enough), have a scoping call to agree on feasibility, timeline, and cost, Raygency builds the product with visible progress throughout, then hands off the finished product with full documentation and the knowledge to run it independently.
              </p>
            </div>
            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">How long does a Raygency Studio project take?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Timeline varies by scope. Raygency is a small team that builds everything themselves, which means projects move in weeks rather than months. Capacity is limited — if a project can&apos;t be given the attention it needs, Raygency will say so upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
