'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Target, Sparkles, Compass, Network } from 'lucide-react'
import Navigation from '@/components/Navigation'
import ConcentricCircles from '@/components/ConcentricCircles'
import TestimonialCard from '@/components/TestimonialCard'
import MetricCard from '@/components/MetricCard'
import ServiceCard from '@/components/ServiceCard'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
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
      {/* SECTION 1: HERO — Dark */}
      <section className="relative min-h-screen flex flex-col justify-center bg-midnight z-0 overflow-hidden transition-dark-to-light">
        <Navigation variant="dark" />

        <div className="orb w-[500px] h-[500px] bg-[rgba(250,97,71,0.15)] top-[-100px] right-[-50px]" />
        <div className="orb w-[400px] h-[400px] bg-[rgba(120,100,80,0.2)] bottom-[-80px] left-[10%]" />
        <div className="orb w-[300px] h-[300px] bg-[rgba(250,97,71,0.08)] top-[40%] right-[30%]" />

        <div className="glass-shape w-[200px] h-[200px] top-[60px] right-[80px] rounded-full" />
        <div className="glass-shape w-[120px] h-[120px] bottom-[100px] right-[200px] rounded-3xl rotate-[15deg]" />
        <div className="glass-shape w-[80px] h-[80px] top-[200px] right-[350px] rounded-full" />

        <div className="relative z-10 px-6 md:px-16 max-w-5xl hero-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-[#E5E5DF] mb-6">
            Your competitors are already visible to AI. Are you?
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-[#d4d0ca] max-w-3xl mb-4 leading-relaxed">
            Raygency builds AEO, GEO, and SEO strategies that make your company
            the obvious answer in ChatGPT, Perplexity, Google AI Overviews, and
            every platform your buyers actually use. Then we build the AI systems
            to keep you there.
          </p>
          <p className="text-base md:text-lg text-[#d4d0ca]/50 mb-6 tracking-wide">
            For mid-market companies doing real revenue. Not templates. Not shortcuts.
          </p>
          <p className="text-lg md:text-xl text-[#d4d0ca] max-w-3xl mb-10 leading-relaxed">
            <span className="text-coral font-medium">Answer Engines are changing how buyers find solutions.</span>{' '}
            ChatGPT, Claude, Perplexity. These aren&apos;t search engines. They&apos;re
            decision-making machines. We build{' '}
            <span className="text-coral font-medium">complete AI search strategy</span>: AEO, GEO,
            traditional SEO, all integrated into one system that makes your company{' '}
            <span className="text-coral font-medium">impossible to ignore</span>.
          </p>
          <a
            href="https://cal.com/raygency"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white px-10 py-5 rounded-full font-medium text-lg transition-colors btn-hover"
          >
            Schedule Discovery Call
          </a>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM + WHAT CHANGES — Light */}
      <section className="relative bg-light-gray z-10 py-24 md:py-32 px-6 md:px-16 transition-light-to-dark">
        <div className="max-w-6xl mx-auto">
          {/* The Problem */}
          <div className="max-w-4xl mb-20">
            <span className="text-xs font-medium tracking-widest uppercase text-coral fade-up">
              Sound Familiar?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-charcoal fade-up">
              At your scale, being invisible to Answer Engines isn&apos;t a marketing
              problem. It&apos;s a revenue problem.
            </h2>
            <div className="space-y-4 fade-up">
              <p className="text-lg md:text-xl text-stone leading-relaxed">
                Your competitors are optimizing for Perplexity. Your SEO strategy
                was built for 2019 Google. Your knowledge base is locked behind a
                login. Meanwhile, 40% of buyers under 30 bypass Google entirely.
              </p>
              <p className="text-lg md:text-xl text-charcoal font-medium">
                You don&apos;t need more content. You need to become the answer
                in the systems your customers actually trust.
              </p>
            </div>
          </div>

          {/* What Changes — 3 cards on light bg */}
          <span className="text-xs font-medium tracking-widest uppercase text-stone fade-up">
            What Changes
          </span>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 mt-8">
            <div className="bg-cream-white rounded-2xl p-8 md:p-10 border border-cream hover-lift fade-up">
              <div className="flex justify-center mb-6">
                <ConcentricCircles rings={1} size={80} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-charcoal">
                Visibility
              </h3>
              <h4 className="text-base font-medium text-coral mb-3">Answer Engine Dominance</h4>
              <p className="text-base text-stone leading-relaxed">
                Your company becomes the preferred answer in Perplexity, ChatGPT,
                and emerging AI search. Not just indexed. Recommended.
              </p>
            </div>

            <div className="bg-cream-white rounded-2xl p-8 md:p-10 border border-cream hover-lift fade-up">
              <div className="flex justify-center mb-6">
                <ConcentricCircles rings={2} size={80} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-charcoal">
                Authority
              </h3>
              <h4 className="text-base font-medium text-coral mb-3">AI-First Knowledge System</h4>
              <p className="text-base text-stone leading-relaxed">
                A structured knowledge base that feeds both your customers and
                Answer Engines. Every resource builds your moat.
              </p>
            </div>

            <div className="bg-cream-white rounded-2xl p-8 md:p-10 border border-cream hover-lift fade-up">
              <div className="flex justify-center mb-6">
                <ConcentricCircles rings={3} size={80} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-charcoal">
                Advantage
              </h3>
              <h4 className="text-base font-medium text-coral mb-3">Compounding Returns</h4>
              <p className="text-base text-stone leading-relaxed">
                While competitors scramble to figure out AEO, you&apos;re already
                controlling the narrative. Revenue follows visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SOCIAL PROOF + SERVICES — Dark */}
      <section className="relative bg-midnight z-20 py-24 md:py-32 px-6 md:px-16 overflow-hidden transition-dark-to-light">
        <div className="orb w-[400px] h-[400px] bg-[rgba(120,100,80,0.12)] top-[-100px] left-[-50px]" />
        <div className="orb w-[300px] h-[300px] bg-[rgba(250,97,71,0.08)] bottom-[-50px] right-[10%]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Social Proof */}
          <span className="text-xs font-medium tracking-widest uppercase text-[#d4d0ca]/50 fade-up">
            Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-16 text-[#E5E5DF] fade-up">
            What Our Clients See
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
            <div className="text-center fade-up">
              <div className="text-4xl md:text-5xl font-semibold text-coral mb-2">23-40%</div>
              <p className="text-sm md:text-base text-[#d4d0ca] leading-relaxed">Average increase in qualified leads from AI search traffic</p>
            </div>
            <div className="text-center fade-up">
              <div className="text-4xl md:text-5xl font-semibold text-coral mb-2">8-12 mo</div>
              <p className="text-sm md:text-base text-[#d4d0ca] leading-relaxed">Typical timeline to dominant Answer Engine visibility</p>
            </div>
            <div className="text-center fade-up">
              <div className="text-4xl md:text-5xl font-semibold text-coral mb-2">5 max</div>
              <p className="text-sm md:text-base text-[#d4d0ca] leading-relaxed">Active client engagements at any time, because quality matters</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            <div className="glass-card p-8 md:p-10 fade-up">
              <blockquote className="text-base md:text-lg text-[#d4d0ca] leading-relaxed mb-6 italic">
                &ldquo;We were invisible in Perplexity. Six months after Raygency&apos;s AEO strategy, we&apos;re the first answer for three of our core use cases. Revenue impact: 23% increase in qualified inbound.&rdquo;
              </blockquote>
              <div className="flex flex-col gap-1">
                <span className="text-base font-medium text-[#E5E5DF]">Sarah Chen</span>
                <span className="text-sm text-[#d4d0ca]/70">VP Marketing, TechFlow</span>
              </div>
            </div>
            <div className="glass-card p-8 md:p-10 fade-up">
              <blockquote className="text-base md:text-lg text-[#d4d0ca] leading-relaxed mb-6 italic">
                &ldquo;Raygency didn&apos;t just optimize for Google. They built us a complete system: knowledge base, content strategy, AI agents. We went from invisible to authoritative in eight months.&rdquo;
              </blockquote>
              <div className="flex flex-col gap-1">
                <span className="text-base font-medium text-[#E5E5DF]">Marcus Johnson</span>
                <span className="text-sm text-[#d4d0ca]/70">CEO, Momentum Consulting</span>
              </div>
            </div>
            <div className="glass-card p-8 md:p-10 fade-up">
              <blockquote className="text-base md:text-lg text-[#d4d0ca] leading-relaxed mb-6 italic">
                &ldquo;The difference between an SEO agency and Raygency is that they actually understand AI. They don&apos;t treat AEO like a feature. It&apos;s the foundation of everything they recommend.&rdquo;
              </blockquote>
              <div className="flex flex-col gap-1">
                <span className="text-base font-medium text-[#E5E5DF]">Jennifer Torres</span>
                <span className="text-sm text-[#d4d0ca]/70">Chief of Staff, GrowthLabs</span>
              </div>
            </div>
          </div>

          <div className="text-center fade-up">
            <p className="text-sm text-[#d4d0ca]/50 mb-4">
              We optimize your presence across the platforms your customers use
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[#d4d0ca]/30 text-sm font-medium tracking-wider">
              <span>PERPLEXITY</span>
              <span>CHATGPT</span>
              <span>GOOGLE</span>
              <span>CLAUDE</span>
              <span>GEMINI</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES — Light */}
      <section id="services" className="relative bg-light-gray z-30 py-24 md:py-32 px-6 md:px-16 transition-light-to-dark">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-stone fade-up">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-16 text-charcoal fade-up">
            What We Build For You
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <ServiceCard
              icon={<Target className="w-10 h-10" />}
              headline="AEO & GEO Strategy"
              subheading="Control How AI Answers About You"
              copy="We audit, restructure, and optimize your presence in Answer Engines and generative search. Your company becomes the answer AI recommends."
              cta={{ text: 'Learn More', href: '/services#aeo' }}
            />
            <ServiceCard
              icon={<Compass className="w-10 h-10" />}
              headline="Advanced SEO Architecture"
              subheading="Built for 2025+, Not 2019"
              copy="Modern SEO integrating E-E-A-T signals, topical authority, and Answer Engine alignment into one coherent system."
              cta={{ text: 'Learn More', href: '/services#seo' }}
            />
            <ServiceCard
              icon={<Sparkles className="w-10 h-10" />}
              headline="AI Brain Development"
              subheading="Custom Knowledge Bases & RAG"
              copy="A searchable knowledge system powered by RAG. Feeds your AI agents, your customers, and Answer Engines with answers only you can provide."
              cta={{ text: 'Learn More', href: '/services#ai-brain' }}
            />
            <ServiceCard
              icon={<Network className="w-10 h-10" />}
              headline="Intelligent Automation"
              subheading="Systems That Learn & Improve"
              copy="AI agents that handle customer questions, qualify leads, and manage follow-up 24/7. Automations that get smarter as you use them."
              cta={{ text: 'Learn More', href: '/services#automation' }}
            />
          </div>

          {/* Entry-Point Offer */}
          <div className="mt-12 p-8 md:p-10 bg-cream-white rounded-2xl border border-cream fade-up">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-medium mb-2 text-charcoal">
                  Not sure where to start?
                </h3>
                <p className="text-base md:text-lg text-stone leading-relaxed">
                  Our AI Search Audit is a 4-week engagement. We audit your current Answer Engine
                  visibility, map competitors, and deliver a clear roadmap. Starting at $15,000.
                </p>
              </div>
              <Link
                href="/contact"
                className="bg-coral hover:bg-coral-hover text-white px-8 py-4 rounded-full font-medium transition-colors whitespace-nowrap btn-hover"
              >
                Schedule Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR APPROACH + QUOTE — Dark */}
      <section className="relative bg-midnight z-30 py-24 md:py-32 px-6 md:px-16 overflow-hidden transition-dark-to-light">
        <div className="orb w-[350px] h-[350px] bg-[rgba(250,97,71,0.08)] top-[-80px] right-[20%]" />
        <div className="orb w-[250px] h-[250px] bg-[rgba(120,100,80,0.12)] bottom-[-60px] left-[5%]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-[#d4d0ca]/50 fade-up">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-16 text-[#E5E5DF] fade-up">
            Audit. Architect. Activate.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20">
            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <div className="text-4xl font-semibold text-coral mb-4">01</div>
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#E5E5DF]">
                Answer Engine Audit
              </h3>
              <p className="text-base md:text-lg text-[#d4d0ca] leading-relaxed mb-4">
                We analyze where you appear in ChatGPT, Claude, Perplexity, and
                Google AI. We map competitors. We find the exact gaps costing you
                visibility and revenue.
              </p>
              <span className="text-sm text-coral font-medium">2-3 weeks</span>
            </div>

            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <div className="text-4xl font-semibold text-coral mb-4">02</div>
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#E5E5DF]">
                AI-First Strategy Design
              </h3>
              <p className="text-base md:text-lg text-[#d4d0ca] leading-relaxed mb-4">
                We design your complete system: content strategy, knowledge
                architecture, technical SEO, automation foundations. Everything
                works together.
              </p>
              <span className="text-sm text-coral font-medium">3-4 weeks</span>
            </div>

            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <div className="text-4xl font-semibold text-coral mb-4">03</div>
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#E5E5DF]">
                Build & Activate
              </h3>
              <p className="text-base md:text-lg text-[#d4d0ca] leading-relaxed mb-4">
                We build your knowledge system, implement AEO optimizations,
                deploy AI agents. Then hand over with full documentation and training.
              </p>
              <span className="text-sm text-coral font-medium">4-8 weeks</span>
            </div>
          </div>

          {/* Quote — with attribution */}
          <div className="max-w-3xl mx-auto text-center fade-up">
            <div className="w-12 h-0.5 bg-coral mx-auto mb-8" />
            <blockquote className="text-xl md:text-2xl font-medium text-[#E5E5DF] leading-relaxed mb-6">
              &ldquo;We don&apos;t optimize for the sake of optimizing. Every recommendation
              drives toward one outcome: your company becoming the obvious answer in
              the systems your customers use. That&apos;s it.&rdquo;
            </blockquote>
            <p className="text-sm text-[#d4d0ca]/60 font-medium">Raygency Philosophy</p>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA — Light */}
      <section className="relative bg-light-gray z-40 py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-charcoal fade-up">
            Let&apos;s talk about where you stand
            <br />
            in Answer Engines.
          </h2>
          <p className="text-lg md:text-xl text-stone mb-10 fade-up">
            30 minutes. No pitch deck. We&apos;ll look at your current AI search
            visibility and show you exactly what&apos;s possible.
          </p>
          <a
            href="https://cal.com/raygency"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white px-10 py-5 rounded-full font-medium text-lg transition-colors fade-up btn-hover"
          >
            Schedule Discovery Call
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
