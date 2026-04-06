'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
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
      {/* Hero — Dark */}
      <section className="relative bg-midnight pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-16 overflow-hidden transition-dark-to-light">
        <Navigation variant="dark" />

        <div className="orb w-[400px] h-[400px] bg-[rgba(250,97,71,0.12)] top-[-80px] right-[-40px]" />
        <div className="orb w-[300px] h-[300px] bg-[rgba(120,100,80,0.15)] bottom-[-60px] left-[5%]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-[#d4d0ca]/50 fade-up">
            About Raygency
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6 text-[#E5E5DF] leading-tight fade-up max-w-4xl">
            Two founders. One obsession: making your company the obvious answer.
          </h1>
          <p className="text-lg md:text-xl text-[#d4d0ca] leading-relaxed fade-up max-w-3xl mb-8">
            Raygency was built by an enterprise AI architect and an HR executive
            turned AI strategist. We combine deep technical capability with the
            business acumen to make it actually work inside your organization.
          </p>
          <div className="flex flex-wrap gap-3 fade-up">
            <span className="text-sm text-coral font-medium bg-coral/15 px-4 py-2 rounded-full">
              AEO Specialists
            </span>
            <span className="text-sm text-coral font-medium bg-coral/15 px-4 py-2 rounded-full">
              AI Systems Builders
            </span>
            <span className="text-sm text-coral font-medium bg-coral/15 px-4 py-2 rounded-full">
              35+ Years Combined Experience
            </span>
            <span className="text-sm text-coral font-medium bg-coral/15 px-4 py-2 rounded-full">
              5 Clients Max
            </span>
          </div>
        </div>
      </section>

      {/* Why Two Founders — Light */}
      <section className="relative bg-light-gray py-16 md:py-24 px-6 md:px-16 transition-light-to-dark">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-sand-80 fade-up">
            <span className="text-coral font-medium">Most agencies are either technical or strategic. Rarely both.</span>{' '}
            Varun brings 18+ years of enterprise AI, ML, and production automation.
            Renuka brings 17 years of understanding how organizations actually work,
            plus the AI strategy instinct to know{' '}
            <span className="text-coral font-medium">where technology creates real business leverage</span>.
            Together, we build systems that are{' '}
            <span className="text-coral font-medium">technically excellent and strategically sound</span>.
          </p>
        </div>
      </section>

      {/* Varun Section — Dark */}
      <section className="relative bg-midnight py-16 md:py-24 px-6 md:px-16 overflow-hidden transition-dark-to-light">
        <div className="orb w-[350px] h-[350px] bg-[rgba(120,100,80,0.12)] top-[-80px] right-[10%]" />
        <div className="orb w-[250px] h-[250px] bg-[rgba(250,97,71,0.08)] bottom-[-50px] left-[15%]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="fade-up order-2 md:order-1">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/varun-tyagi.jpg"
                  alt="Varun Tyagi - Co-Founder of Raygency"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="fade-up order-1 md:order-2">
              <span className="text-xs font-medium tracking-widest uppercase text-[#d4d0ca]/50">
                Co-Founder
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 mb-2 text-[#E5E5DF]">
                Varun Tyagi
              </h2>
              <p className="text-xl text-coral font-medium mb-6">
                AI Architecture & Automation
              </p>
              <p className="text-lg md:text-xl text-[#d4d0ca] leading-relaxed mb-6">
                For 18 years, Varun has been building at the intersection of AI,
                data, and business. Long before generative AI entered the mainstream.
                In April 2022, eight months before ChatGPT launched, he was already
                deploying GenAI in production.
              </p>
              <p className="text-lg md:text-xl text-[#E5E5DF] font-medium mb-8">
                What he learned across all of it: the most powerful systems
                aren&apos;t the most complex ones. They&apos;re the ones that actually
                get used.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-coral">18+</div>
                  <p className="text-xs md:text-sm text-[#d4d0ca] mt-1">Years in AI, ML & Data</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-coral">100+</div>
                  <p className="text-xs md:text-sm text-[#d4d0ca] mt-1">Production workflows running</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-coral">15-20</div>
                  <p className="text-xs md:text-sm text-[#d4d0ca] mt-1">Hours/week saved per client</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#E5E5DF] fade-up">
              From Enterprise AI Leader to Automation Architect
            </h3>
            <div className="space-y-6 text-lg md:text-xl text-[#d4d0ca] leading-relaxed">
              <p className="fade-up">
                Before Raygency, Varun led data and ML teams at companies like Movinga,
                Foodspring, and Sunday Natural, where he currently serves as Director of
                Data. He&apos;s built everything from classical ML and deep learning
                systems to 100+ production n8n workflows.
              </p>
              <p className="fade-up">
                Now at Raygency, he brings that enterprise thinking to a different
                context. Using multi-tool development workflows combining Claude Code,
                Lovable, and Cursor, combined with methodologies like the Ralph Loop to manage
                complexity. Everything is built to be production-ready, not just a prototype.
              </p>
              <p className="fade-up">
                He also teaches AI cohorts and mentors through the AI Catalyst program.
                He doesn&apos;t just build systems. He makes sure teams understand and adopt them.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="glass-card glass-card-hover p-8 fade-up">
              <h4 className="text-lg font-medium text-[#E5E5DF] mb-3">AI & Automation Architecture</h4>
              <p className="text-base text-[#d4d0ca] leading-relaxed">
                18+ years building intelligent systems, from classical ML to 100+
                production workflows. He knows what works at scale and what breaks.
              </p>
            </div>
            <div className="glass-card glass-card-hover p-8 fade-up">
              <h4 className="text-lg font-medium text-[#E5E5DF] mb-3">Systems That Ship</h4>
              <p className="text-base text-[#d4d0ca] leading-relaxed">
                Multi-tool development workflows with methodologies built to manage
                complexity. Everything is production-ready, not a prototype.
              </p>
            </div>
            <div className="glass-card glass-card-hover p-8 fade-up">
              <h4 className="text-lg font-medium text-[#E5E5DF] mb-3">Teaching & Enablement</h4>
              <p className="text-base text-[#d4d0ca] leading-relaxed">
                AI cohort instructor and AI Catalyst mentor. He doesn&apos;t just build
                systems. He makes sure your team understands and adopts them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Renuka Section — ALSO Dark (equal treatment) */}
      <section className="relative bg-midnight py-16 md:py-24 px-6 md:px-16 overflow-hidden">
        <div className="orb w-[300px] h-[300px] bg-[rgba(250,97,71,0.10)] top-[-60px] left-[20%]" />
        <div className="orb w-[250px] h-[250px] bg-[rgba(120,100,80,0.12)] bottom-[-50px] right-[10%]" />

        {/* Subtle divider between founders */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="w-16 h-0.5 bg-coral/30 mb-16" />

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="fade-up">
              <span className="text-xs font-medium tracking-widest uppercase text-[#d4d0ca]/50">
                Co-Founder
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 mb-2 text-[#E5E5DF]">
                Renuka Adnani
              </h2>
              <p className="text-xl text-coral font-medium mb-6">
                AI Strategy & Business Growth
              </p>
              <p className="text-lg md:text-xl text-[#d4d0ca] leading-relaxed mb-6">
                For 17 years, Renuka built the operational infrastructure that holds
                complex organizations together. Workforce frameworks, performance
                systems, transformation initiatives across global teams. She understands
                how companies actually work, not how they say they work.
              </p>
              <p className="text-lg md:text-xl text-[#E5E5DF] font-medium mb-8">
                That understanding is her superpower. She knows exactly where AI
                strategy will stick and where it will be ignored.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-coral">17</div>
                  <p className="text-xs md:text-sm text-[#d4d0ca] mt-1">Years in organizations & ops</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-coral">Global</div>
                  <p className="text-xs md:text-sm text-[#d4d0ca] mt-1">Teams across continents</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-coral">C-Suite</div>
                  <p className="text-xs md:text-sm text-[#d4d0ca] mt-1">Stakeholder fluency</p>
                </div>
              </div>
            </div>

            <div className="fade-up">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/renuka-adnani.jpg"
                  alt="Renuka Adnani - Co-Founder of Raygency"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#E5E5DF] fade-up">
              From HR Executive to AI Strategy Architect
            </h3>
            <div className="space-y-6 text-lg md:text-xl text-[#d4d0ca] leading-relaxed">
              <p className="fade-up">
                Most people in AI come from engineering. Renuka came from understanding
                people and organizations. That&apos;s exactly why her approach to AI
                strategy works differently.
              </p>
              <p className="fade-up">
                After 17 years designing how large organizations operate (performance
                systems, workforce planning, transformation programs) she developed
                an instinct for{' '}
                <span className="text-[#E5E5DF] font-medium">where systems break before they break</span>.
                Not the obvious bottleneck. The gap between what&apos;s documented and
                what actually happens. The assumption nobody questioned.
              </p>
              <p className="fade-up">
                When Answer Engines launched, she saw the same pattern: companies
                weren&apos;t ready. Their content wasn&apos;t structured. Their knowledge
                was scattered. Their positioning was confused. They were competing in
                a system they didn&apos;t understand.
              </p>
              <p className="fade-up text-[#E5E5DF] font-medium">
                At Raygency, Renuka leads AI and business strategy, translating
                technical capability into the outcomes CEOs and CFOs actually care
                about. She ensures every recommendation connects to revenue, adoption,
                and competitive advantage.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="glass-card glass-card-hover p-8 fade-up">
              <h4 className="text-lg font-medium text-[#E5E5DF] mb-3">AI Strategy & Positioning</h4>
              <p className="text-base text-[#d4d0ca] leading-relaxed">
                She knows where AI and AEO strategy creates real business leverage, not
                just technical capability, but competitive advantage your leadership team
                can see.
              </p>
            </div>
            <div className="glass-card glass-card-hover p-8 fade-up">
              <h4 className="text-lg font-medium text-[#E5E5DF] mb-3">C-Suite Translation</h4>
              <p className="text-base text-[#d4d0ca] leading-relaxed">
                17 years working with executive stakeholders means she speaks the
                language of CEOs and CFOs. Every recommendation ties to revenue and ROI.
              </p>
            </div>
            <div className="glass-card glass-card-hover p-8 fade-up">
              <h4 className="text-lg font-medium text-[#E5E5DF] mb-3">Organizational Adoption</h4>
              <p className="text-base text-[#d4d0ca] leading-relaxed">
                The best AI system is worthless if nobody uses it. Her HR and change
                management background ensures the systems we build actually get adopted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy — Light (breaking up the dark) */}
      <section className="relative bg-light-gray py-16 md:py-24 px-6 md:px-16 transition-light-to-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 text-charcoal fade-up">
            What We Believe
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream-white rounded-2xl p-8 md:p-10 border border-cream hover-lift fade-up">
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-charcoal">
                Systems First, Tools Second
              </h3>
              <p className="text-base md:text-lg text-stone leading-relaxed">
                Any fool can make a broken system faster. The harder question is whether
                the system itself is wrong. We start there. Every tool, every process,
                every automation aligns with your actual business logic.
              </p>
            </div>

            <div className="bg-cream-white rounded-2xl p-8 md:p-10 border border-cream hover-lift fade-up">
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-charcoal">
                Authority Over Volume
              </h3>
              <p className="text-base md:text-lg text-stone leading-relaxed">
                We don&apos;t chase rankings or impressions. We build authority. Your
                company becomes the obvious answer. Quality inbound. Shorter sales
                cycles. Higher lifetime value.
              </p>
            </div>

            <div className="bg-cream-white rounded-2xl p-8 md:p-10 border border-cream hover-lift fade-up">
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-charcoal">
                Your Competitive Moat
              </h3>
              <p className="text-base md:text-lg text-stone leading-relaxed">
                We don&apos;t deploy one-size-fits-all templates. We build systems around
                how you uniquely operate: your IP, your differentiators. That&apos;s
                your moat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote + CTA — Dark */}
      <section className="relative bg-midnight py-24 md:py-32 px-6 md:px-16 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-0.5 bg-coral mx-auto mb-8 fade-up" />
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-[#E5E5DF] leading-relaxed mb-4 fade-up">
            &ldquo;Automation should feel like gaining a team member, not learning a
            new tool. If it doesn&apos;t save you real hours every week, it&apos;s not
            worth building.&rdquo;
          </blockquote>
          <p className="text-sm text-[#d4d0ca]/50 font-medium mb-16 fade-up">Varun & Renuka, Co-Founders</p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#E5E5DF] fade-up">
            Let&apos;s talk about what&apos;s possible.
          </h2>
          <p className="text-lg md:text-xl text-[#d4d0ca] mb-10 fade-up">
            30 minutes. No pitch deck. Just clarity on where you stand in Answer
            Engines and what AI strategy could do for your business.
          </p>
          <a
            href="https://cal.com/raygency"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white px-10 py-5 rounded-full font-medium text-lg transition-colors btn-hover fade-up"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
