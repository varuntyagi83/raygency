'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.fade-up').forEach((element) => {
        gsap.fromTo(
          element as Element,
          { opacity: 0, y: 40 },
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
    <div ref={containerRef}>
      <div className="noise-overlay" />

      {/* Hero — Dark */}
      <section className="relative bg-[#020810] pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-16 overflow-hidden transition-dark-to-light">
        <Navigation />

        <div className="orb w-[400px] h-[400px] bg-[rgba(240,160,48,0.12)] top-[-80px] right-[-40px]" />
        <div className="orb w-[300px] h-[300px] bg-[rgba(22,58,196,0.15)] bottom-[-60px] left-[5%]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-[rgba(234,232,244,0.50)] fade-up">
            About Raygency
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6 text-[#EAE8F4] leading-tight fade-up max-w-4xl">
            An AI product studio. Built by two people who ship.
          </h1>
          <p className="text-lg md:text-xl text-[rgba(234,232,244,0.75)] leading-relaxed fade-up max-w-3xl mb-8">
            Raygency builds AI-powered products for performance marketers.
            9 production apps shipped. 100+ automation workflows running.
            We build what we know, and we ship it fast.
          </p>
          <div className="flex flex-wrap gap-3 fade-up">
            <span className="text-sm text-teal-lt font-medium bg-teal/15 px-4 py-2 rounded-full">
              Builders Not Talkers
            </span>
            <span className="text-sm text-teal-lt font-medium bg-teal/15 px-4 py-2 rounded-full">
              Opinionated
            </span>
            <span className="text-sm text-teal-lt font-medium bg-teal/15 px-4 py-2 rounded-full">
              Fast
            </span>
            <span className="text-sm text-teal-lt font-medium bg-teal/15 px-4 py-2 rounded-full">
              Precise
            </span>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Brand Pillars — Dark alt */}
      <section className="relative bg-[#0a0f1a] py-16 md:py-24 px-6 md:px-16 transition-light-to-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 text-[#EAE8F4] fade-up">
            How we work.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[rgba(13,155,176,0.04)] rounded-2xl p-8 md:p-10 border border-[rgba(13,155,176,0.2)] hover-lift fade-up">
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#EAE8F4]">
                Builders Not Talkers
              </h3>
              <p className="text-base md:text-lg text-[rgba(234,232,244,0.55)] leading-relaxed">
                We don&apos;t write strategy decks. We build products.
                Every founder writes code, designs interfaces, and ships to production.
                If it isn&apos;t running, it doesn&apos;t count.
              </p>
            </div>

            <div className="bg-[rgba(13,155,176,0.04)] rounded-2xl p-8 md:p-10 border border-[rgba(13,155,176,0.2)] hover-lift fade-up">
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#EAE8F4]">
                Opinionated
              </h3>
              <p className="text-base md:text-lg text-[rgba(234,232,244,0.55)] leading-relaxed">
                We have a point of view on what works. We don&apos;t build to consensus.
                We build what we believe in, test it with real users, and iterate fast.
                Our products reflect conviction, not compromise.
              </p>
            </div>

            <div className="bg-[rgba(13,155,176,0.04)] rounded-2xl p-8 md:p-10 border border-[rgba(13,155,176,0.2)] hover-lift fade-up">
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#EAE8F4]">
                Fast
              </h3>
              <p className="text-base md:text-lg text-[rgba(234,232,244,0.55)] leading-relaxed">
                Speed is a feature. We ship products in weeks, not quarters.
                Small team, no approval chains, no meetings about meetings.
                The best ideas die in slow organizations. We don&apos;t let that happen.
              </p>
            </div>

            <div className="bg-[rgba(13,155,176,0.04)] rounded-2xl p-8 md:p-10 border border-[rgba(13,155,176,0.2)] hover-lift fade-up">
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#EAE8F4]">
                Precise
              </h3>
              <p className="text-base md:text-lg text-[rgba(234,232,244,0.55)] leading-relaxed">
                Every product solves one problem well. No feature bloat.
                No &ldquo;platform play.&rdquo; Clear scope, clear price, clear value.
                You know exactly what you&apos;re getting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Varun Section — Dark */}
      <section className="relative bg-[#020810] py-16 md:py-24 px-6 md:px-16 overflow-hidden transition-dark-to-light">
        <div className="orb w-[350px] h-[350px] bg-[rgba(22,58,196,0.12)] top-[-80px] right-[10%]" />
        <div className="orb w-[250px] h-[250px] bg-[rgba(240,160,48,0.08)] bottom-[-50px] left-[15%]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="fade-up order-2 md:order-1">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[rgba(13,155,176,0.15)]">
                <Image
                  src="/varun-tyagi.jpg"
                  alt="Varun Tyagi - Co-Founder of Raygency"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="fade-up order-1 md:order-2">
              <span className="text-xs font-medium tracking-widest uppercase text-[rgba(234,232,244,0.50)]">
                Co-Founder
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 mb-2 text-[#EAE8F4]">
                Varun Tyagi
              </h2>
              <p className="text-xl text-teal-lt font-medium mb-6">
                The builder.
              </p>
              <p className="text-lg md:text-xl text-[rgba(234,232,244,0.75)] leading-relaxed mb-6">
                Director of Data &amp; AI by day. AI product builder by nature.
                9 production apps shipped. 100+ n8n workflows running.
                AI cohort instructor. Building in public.
              </p>
              <p className="text-lg md:text-xl text-[#EAE8F4] font-medium mb-8">
                18+ years building at the intersection of AI, data, and business.
                The products at Raygency exist because Varun understands the problems
                firsthand and builds the solutions himself.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-copper-bright">9</div>
                  <p className="text-xs md:text-sm text-[rgba(234,232,244,0.75)] mt-1">Production apps shipped</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-copper-bright">100+</div>
                  <p className="text-xs md:text-sm text-[rgba(234,232,244,0.75)] mt-1">Workflows running</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-copper-bright">18+</div>
                  <p className="text-xs md:text-sm text-[rgba(234,232,244,0.75)] mt-1">Years in AI &amp; data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Renuka Section — Dark (equal treatment, with divider) */}
      <section className="relative bg-[#020810] py-16 md:py-24 px-6 md:px-16 overflow-hidden">
        <div className="orb w-[300px] h-[300px] bg-[rgba(240,160,48,0.10)] top-[-60px] left-[20%]" />
        <div className="orb w-[250px] h-[250px] bg-[rgba(22,58,196,0.12)] bottom-[-50px] right-[10%]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="w-16 h-0.5 bg-teal/30 mb-16" />

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="fade-up">
              <span className="text-xs font-medium tracking-widest uppercase text-[rgba(234,232,244,0.50)]">
                Co-Founder
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 mb-2 text-[#EAE8F4]">
                Renuka Adnani
              </h2>
              <p className="text-xl text-teal-lt font-medium mb-6">
                The human loop.
              </p>

              <div className="space-y-6 text-lg md:text-xl text-[rgba(234,232,244,0.75)] leading-relaxed mb-8">
                <p>
                  I started my career building. Websites, intranets, applications.
                </p>
                <p>
                  Then I spent 17 years inside organizations. Six industries: pharma,
                  semiconductors, IT services, biotech, startups, and design. I
                  wasn&apos;t consulting from the outside. I was in the rooms where
                  technology initiatives either took hold or quietly died. I learned
                  how organizations actually adopt things and why they resist them.
                </p>
                <p className="text-[#EAE8F4] font-medium">
                  That&apos;s not an HR background. That&apos;s systems thinking
                  applied to people and technology.
                </p>
                <p>
                  In 2025, I started building again. This time with 17 years of
                  organizational intelligence behind every product decision.
                </p>
                <p className="text-[#EAE8F4] font-medium">
                  That&apos;s what I bring to Raygency.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-copper-bright">17</div>
                  <p className="text-xs md:text-sm text-[rgba(234,232,244,0.75)] mt-1">Years inside organizations</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-copper-bright">6</div>
                  <p className="text-xs md:text-sm text-[rgba(234,232,244,0.75)] mt-1">Industries</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-copper-bright">2025</div>
                  <p className="text-xs md:text-sm text-[rgba(234,232,244,0.75)] mt-1">Started building again</p>
                </div>
              </div>
            </div>

            <div className="fade-up">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[rgba(13,155,176,0.15)]">
                <Image
                  src="/renuka-adnani.jpg"
                  alt="Renuka Adnani - Co-Founder of Raygency"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* The Human Loop — Dark alt */}
      <section className="relative bg-[#0a0f1a] py-16 md:py-24 px-6 md:px-16 transition-light-to-dark">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-[rgba(234,232,244,0.55)] fade-up">
            Design philosophy
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-8 text-[#EAE8F4] fade-up">
            The Human Loop
          </h2>
          <blockquote className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-[#EAE8F4] fade-up mb-6">
            &ldquo;The hardest part of any AI product isn&apos;t the technology.
            It&apos;s the human on the other side of the screen — time-poor,
            skeptical, with a workflow that already works well enough. Every
            product we build at Raygency is designed for that person. Not the
            enthusiast. The resistant one. Design for adoption, not just
            function.&rdquo;
          </blockquote>
          <p className="text-base text-[rgba(234,232,244,0.55)] font-medium fade-up">
            — Renuka Adnani
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA — Dark */}
      <section className="relative bg-[#020810] py-24 md:py-32 px-6 md:px-16 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-0.5 bg-teal mx-auto mb-8 fade-up" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#EAE8F4] fade-up">
            See what we&apos;ve built.
          </h2>
          <p className="text-lg md:text-xl text-[rgba(234,232,244,0.75)] mb-10 fade-up">
            Three products for performance marketers. All with a free trial.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white px-10 py-5 rounded-full font-medium text-lg transition-colors btn-hover fade-up"
          >
            View products
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
