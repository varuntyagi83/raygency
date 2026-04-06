'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Target, Compass, Sparkles, Network, Search } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function ServicesPage() {
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
      {/* Hero — Dark Midnight */}
      <section className="relative bg-midnight pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-16 overflow-hidden transition-dark-to-light">
        <Navigation variant="dark" />

        <div className="orb w-[400px] h-[400px] bg-[rgba(250,97,71,0.15)] top-[-80px] right-[-40px]" />
        <div className="orb w-[300px] h-[300px] bg-[rgba(120,100,80,0.2)] bottom-[-60px] left-[5%]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-medium tracking-widest uppercase text-[#d4d0ca]/60 fade-up">
              Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6 text-[#E5E5DF] fade-up">
              Your AI & Search Strategy
            </h1>
            <p className="text-lg md:text-xl text-[#d4d0ca] leading-relaxed fade-up">
              AEO, GEO, SEO, AI systems, and the automation that ties it all
              together. Every service is designed to make your company the
              obvious answer.
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: AEO & GEO — Light */}
      <section id="aeo" className="relative bg-light-gray py-16 md:py-24 px-6 md:px-16 transition-light-to-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="fade-up">
              <Target className="w-12 h-12 text-coral mb-6" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-sand-80">
                AEO & GEO Strategy
              </h2>
              <p className="text-lg md:text-xl text-sand-50 leading-relaxed mb-6">
                Answer Engines (ChatGPT, Claude, Perplexity) and generative search
                (Google&apos;s AI Overviews) are fundamentally different from traditional
                search. They reward authoritative, structured knowledge. Clear
                positioning. Content that addresses specific use cases.
              </p>
              <p className="text-lg md:text-xl text-sand-80 font-medium mb-8">
                Most agencies treat AEO like an SEO afterthought. We build it as
                the foundation.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="text-sm text-coral font-medium bg-coral-light px-4 py-2 rounded-full">$25K-50K</span>
                <span className="text-sm text-sand-60 bg-sand-20 px-4 py-2 rounded-full">12-16 weeks</span>
              </div>
            </div>
            <div className="fade-up">
              <div className="bg-cream-white rounded-2xl p-8 border border-cream">
                <h3 className="text-lg font-medium text-charcoal mb-6">What We Do</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">01</span>
                    <p className="text-base text-sand-50">Audit your current visibility in major Answer Engines</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">02</span>
                    <p className="text-base text-sand-50">Analyze competitor positioning and gaps</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">03</span>
                    <p className="text-base text-sand-50">Restructure your content and knowledge architecture</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">04</span>
                    <p className="text-base text-sand-50">Implement technical optimizations specific to AI systems</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">05</span>
                    <p className="text-base text-sand-50">Establish a content calendar that feeds Answer Engines</p>
                  </div>
                </div>
              </div>
              <div className="bg-cream-white rounded-2xl p-8 border border-cream mt-6">
                <h3 className="text-lg font-medium text-charcoal mb-4">Outcomes</h3>
                <div className="space-y-3 text-base text-sand-50">
                  <p>40-60% increase in Answer Engine visibility (typical)</p>
                  <p>Higher-quality inbound from AI-recommended sources</p>
                  <p>Positioning as &ldquo;the answer&rdquo; in your category</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: SEO — Dark */}
      <section id="seo" className="relative bg-midnight py-16 md:py-24 px-6 md:px-16 overflow-hidden transition-dark-to-light">
        <div className="orb w-[350px] h-[350px] bg-[rgba(120,100,80,0.15)] top-[-80px] right-[10%]" />
        <div className="orb w-[250px] h-[250px] bg-[rgba(250,97,71,0.1)] bottom-[-50px] left-[15%]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="fade-up">
              <Compass className="w-12 h-12 text-coral mb-6" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#E5E5DF]">
                Advanced SEO Architecture
              </h2>
              <p className="text-lg md:text-xl text-[#d4d0ca] leading-relaxed mb-6">
                Traditional SEO isn&apos;t dead, but it has evolved. Modern SEO integrates
                E-E-A-T signals, topical authority, semantic relevance, and Answer
                Engine positioning into one system.
              </p>
              <p className="text-lg md:text-xl text-[#E5E5DF] font-medium mb-8">
                We build SEO strategy that works in 2025+.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="text-sm text-coral font-medium bg-coral/20 px-4 py-2 rounded-full">$15K-35K</span>
                <span className="text-sm text-[#d4d0ca] bg-white/10 px-4 py-2 rounded-full">8-12 weeks</span>
              </div>
            </div>
            <div className="fade-up">
              <div className="glass-card p-8">
                <h3 className="text-lg font-medium text-[#E5E5DF] mb-6">What We Do</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">01</span>
                    <p className="text-base text-[#d4d0ca]">Comprehensive technical SEO audit</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">02</span>
                    <p className="text-base text-[#d4d0ca]">Keyword and topical authority mapping</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">03</span>
                    <p className="text-base text-[#d4d0ca]">Content strategy for E-E-A-T signals</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">04</span>
                    <p className="text-base text-[#d4d0ca]">Technical implementation (schema, architecture, performance)</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">05</span>
                    <p className="text-base text-[#d4d0ca]">Integration with Answer Engine strategy</p>
                  </div>
                </div>
              </div>
              <div className="glass-card p-8 mt-6">
                <h3 className="text-lg font-medium text-[#E5E5DF] mb-4">Outcomes</h3>
                <div className="space-y-3 text-base text-[#d4d0ca]">
                  <p>Top 3 rankings for high-intent keywords</p>
                  <p>50%+ increase in qualified organic traffic</p>
                  <p>Strong E-E-A-T signals across your domain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: AI Brain — Light */}
      <section id="ai-brain" className="relative bg-light-gray py-16 md:py-24 px-6 md:px-16 transition-light-to-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="fade-up">
              <Sparkles className="w-12 h-12 text-coral mb-6" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-sand-80">
                AI Brain Development
              </h2>
              <p className="text-lg md:text-xl text-sand-50 leading-relaxed mb-6">
                Your AI Brain is a structured knowledge system that powers your AI
                agents and chatbots, feeds Answer Engines with authoritative answers,
                provides a searchable resource for your team, and learns as you use it
                via RAG (Retrieval-Augmented Generation).
              </p>
              <p className="text-lg md:text-xl text-sand-80 font-medium mb-8">
                This isn&apos;t a generic chatbot. It&apos;s your company&apos;s institutional
                knowledge, organized and accessible.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="text-sm text-coral font-medium bg-coral-light px-4 py-2 rounded-full">$20K-40K</span>
                <span className="text-sm text-sand-60 bg-sand-20 px-4 py-2 rounded-full">6-12 weeks</span>
              </div>
            </div>
            <div className="fade-up">
              <div className="bg-cream-white rounded-2xl p-8 border border-cream">
                <h3 className="text-lg font-medium text-charcoal mb-6">What We Do</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">01</span>
                    <p className="text-base text-sand-50">Audit and structure your existing knowledge</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">02</span>
                    <p className="text-base text-sand-50">Design RAG architecture</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">03</span>
                    <p className="text-base text-sand-50">Build your knowledge base (typically 50-300 documents)</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">04</span>
                    <p className="text-base text-sand-50">Integrate with your systems (Slack, website, AI agents)</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">05</span>
                    <p className="text-base text-sand-50">Establish maintenance and improvement process</p>
                  </div>
                </div>
              </div>
              <div className="bg-cream-white rounded-2xl p-8 border border-cream mt-6">
                <h3 className="text-lg font-medium text-charcoal mb-4">Outcomes</h3>
                <div className="space-y-3 text-base text-sand-50">
                  <p>Single source of truth for company knowledge</p>
                  <p>Improved customer support via AI-powered tools</p>
                  <p>Foundation for all intelligent automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Automation — Dark */}
      <section id="automation" className="relative bg-midnight py-16 md:py-24 px-6 md:px-16 overflow-hidden transition-dark-to-light">
        <div className="orb w-[300px] h-[300px] bg-[rgba(250,97,71,0.12)] top-[-60px] left-[20%]" />
        <div className="orb w-[200px] h-[200px] bg-[rgba(120,100,80,0.15)] bottom-[-40px] right-[10%]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="fade-up">
              <Network className="w-12 h-12 text-coral mb-6" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#E5E5DF]">
                Intelligent Automation
              </h2>
              <p className="text-lg md:text-xl text-[#d4d0ca] leading-relaxed mb-6">
                Intelligent automation goes beyond workflow optimization. AI agents
                that handle customer questions, lead qualification, proposal
                generation, follow-up, and content synthesis. Automations that learn
                from interactions and improve.
              </p>
              <p className="text-lg md:text-xl text-[#E5E5DF] font-medium mb-8">
                Your AI brain, working 24/7.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="text-sm text-coral font-medium bg-coral/20 px-4 py-2 rounded-full">$25K-60K</span>
                <span className="text-sm text-[#d4d0ca] bg-white/10 px-4 py-2 rounded-full">8-14 weeks</span>
              </div>
            </div>
            <div className="fade-up">
              <div className="glass-card p-8">
                <h3 className="text-lg font-medium text-[#E5E5DF] mb-6">What We Do</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">01</span>
                    <p className="text-base text-[#d4d0ca]">Map highest-leverage automation opportunities</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">02</span>
                    <p className="text-base text-[#d4d0ca]">Design agent and automation architecture</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">03</span>
                    <p className="text-base text-[#d4d0ca]">Build AI agents (powered by Claude, GPT, etc.)</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">04</span>
                    <p className="text-base text-[#d4d0ca]">Integrate with existing tools and test</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-coral font-medium text-sm mt-0.5">05</span>
                    <p className="text-base text-[#d4d0ca]">Hand over with full documentation and training</p>
                  </div>
                </div>
              </div>
              <div className="glass-card p-8 mt-6">
                <h3 className="text-lg font-medium text-[#E5E5DF] mb-4">Outcomes</h3>
                <div className="space-y-3 text-base text-[#d4d0ca]">
                  <p>20-40% reduction in manual operational tasks</p>
                  <p>24/7 customer response capability</p>
                  <p>Measurable ROI tied to specific processes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid — Dark */}
      <section id="products" className="relative bg-midnight py-16 md:py-24 px-6 md:px-16 overflow-hidden transition-dark-to-light">
        <div className="orb w-[400px] h-[400px] bg-[rgba(250,97,71,0.1)] top-[-80px] right-[5%]" />
        <div className="orb w-[300px] h-[300px] bg-[rgba(120,100,80,0.12)] bottom-[-60px] left-[10%]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-[#d4d0ca]/50 fade-up">
            Live Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-[#E5E5DF] fade-up">
            Tools We&apos;ve Built
          </h2>
          <p className="text-lg text-[#d4d0ca] mb-16 max-w-2xl fade-up">
            Beyond consulting, we ship production-grade AI tools. Each one solves a specific problem, fast.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Kreashot */}
            <div className="glass-card glass-card-hover p-8 flex flex-col gap-6 fade-up">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-coral inline-block" />
                  <span className="text-xs font-medium tracking-widest uppercase text-[#d4d0ca]/60">Kreashot</span>
                </div>
                <span className="text-xs font-medium tracking-widest uppercase text-coral border border-coral/40 px-2 py-0.5 rounded">Live</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#E5E5DF] leading-tight mb-3">
                  Ad Creative.<br />Fast.
                </h3>
                <p className="text-sm text-[#d4d0ca] leading-relaxed">
                  Product photo to Meta-ready creative in minutes. Built for performance marketers who can&apos;t wait on designers.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['AI', 'Ad Creative', 'Meta', 'Marketing'].map(tag => (
                  <span key={tag} className="text-xs text-[#d4d0ca]/50 border border-[#d4d0ca]/20 px-2.5 py-1 rounded">{tag}</span>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href="https://www.kreashot.com/auth/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-coral hover:bg-coral-hover text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
                >
                  Try Kreashot
                </a>
              </div>
            </div>

            {/* Volticlens */}
            <div className="glass-card glass-card-hover p-8 flex flex-col gap-6 fade-up">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-coral inline-block" />
                  <span className="text-xs font-medium tracking-widest uppercase text-[#d4d0ca]/60">Volticlens</span>
                </div>
                <span className="text-xs font-medium tracking-widest uppercase text-coral border border-coral/40 px-2 py-0.5 rounded">Live</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#E5E5DF] leading-tight mb-3">
                  Competitor Intel.<br />Real Time.
                </h3>
                <p className="text-sm text-[#d4d0ca] leading-relaxed">
                  See every ad your competitors are running on Meta. Know what they&apos;re testing. Move faster than they do.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Intelligence', 'Competitor Analysis', 'Meta', 'Marketing'].map(tag => (
                  <span key={tag} className="text-xs text-[#d4d0ca]/50 border border-[#d4d0ca]/20 px-2.5 py-1 rounded">{tag}</span>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href="https://www.volticlens.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-coral hover:bg-coral-hover text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
                >
                  Try Volticlens
                </a>
              </div>
            </div>

            {/* Georaydar */}
            <div className="glass-card glass-card-hover p-8 flex flex-col gap-6 fade-up">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-coral inline-block" />
                  <span className="text-xs font-medium tracking-widest uppercase text-[#d4d0ca]/60">Georaydar</span>
                </div>
                <span className="text-xs font-medium tracking-widest uppercase text-coral border border-coral/40 px-2 py-0.5 rounded">Live</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#E5E5DF] leading-tight mb-3">
                  AI Search.<br />Owned.
                </h3>
                <p className="text-sm text-[#d4d0ca] leading-relaxed">
                  Track your brand visibility across ChatGPT, Gemini, Perplexity, and Claude. See every gap. Fix it.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['AEO', 'AI Search', 'Brand', 'Analytics'].map(tag => (
                  <span key={tag} className="text-xs text-[#d4d0ca]/50 border border-[#d4d0ca]/20 px-2.5 py-1 rounded">{tag}</span>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href="https://www.georaydar.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-coral hover:bg-coral-hover text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
                >
                  Try Georaydar
                </a>
              </div>
            </div>

            {/* Rayprofit */}
            <div className="glass-card glass-card-hover p-8 flex flex-col gap-6 fade-up">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-coral inline-block" />
                  <span className="text-xs font-medium tracking-widest uppercase text-[#d4d0ca]/60">Rayprofit</span>
                </div>
                <span className="text-xs font-medium tracking-widest uppercase text-coral border border-coral/40 px-2 py-0.5 rounded">Live</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#E5E5DF] leading-tight mb-3">
                  Ad Spend.<br />Profitable.
                </h3>
                <p className="text-sm text-[#d4d0ca] leading-relaxed">
                  Maximize your ad ROI with AI-powered budget optimization. Know exactly where every dollar works — and cut what doesn&apos;t.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['ROI', 'Budget Optimization', 'DTC', 'Analytics'].map(tag => (
                  <span key={tag} className="text-xs text-[#d4d0ca]/50 border border-[#d4d0ca]/20 px-2.5 py-1 rounded">{tag}</span>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href="https://www.rayprofit.com/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-coral hover:bg-coral-hover text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
                >
                  Try Rayprofit
                </a>
              </div>
            </div>

            {/* ActGuard */}
            <div className="glass-card glass-card-hover p-8 flex flex-col gap-6 fade-up">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-coral inline-block" />
                  <span className="text-xs font-medium tracking-widest uppercase text-[#d4d0ca]/60">ActGuard</span>
                </div>
                <span className="text-xs font-medium tracking-widest uppercase text-coral border border-coral/40 px-2 py-0.5 rounded">Live</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#E5E5DF] leading-tight mb-3">
                  Compliance.<br />Automated.
                </h3>
                <p className="text-sm text-[#d4d0ca] leading-relaxed">
                  From AI system description to audit-ready documentation in minutes. Built for compliance officers who can&apos;t wait on lawyers.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['AI', 'Compliance', 'EU AI Act', 'Legal Tech'].map(tag => (
                  <span key={tag} className="text-xs text-[#d4d0ca]/50 border border-[#d4d0ca]/20 px-2.5 py-1 rounded">{tag}</span>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href="https://actguard-production.up.railway.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-coral hover:bg-coral-hover text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
                >
                  Try ActGuard
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entry Point: AI Search Audit — Light with coral accent */}
      <section id="audit" className="relative bg-light-gray py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center fade-up">
            <Search className="w-16 h-16 text-coral mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-charcoal">
              Start Here: AI Search Audit
            </h2>
            <p className="text-lg md:text-xl text-stone leading-relaxed mb-8 max-w-2xl mx-auto">
              A 4-week engagement where we audit your current position in Answer
              Engines, map competitors, and deliver a clear roadmap for AEO/GEO/SEO
              strategy. Perfect if you&apos;re not yet sure where to start.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-cream-white rounded-2xl p-8 border border-cream fade-up">
              <h3 className="text-lg font-medium text-charcoal mb-6">Deliverables</h3>
              <div className="space-y-3 text-stone">
                <p>Answer Engine visibility audit (ChatGPT, Claude, Perplexity, Google AI)</p>
                <p>Competitor positioning analysis</p>
                <p>Content gap analysis</p>
                <p>Technical SEO assessment</p>
                <p>20-page recommendations roadmap</p>
                <p>60-minute strategy session with findings</p>
              </div>
            </div>
            <div className="bg-cream-white rounded-2xl p-8 border border-cream fade-up">
              <h3 className="text-lg font-medium text-charcoal mb-6">Details</h3>
              <div className="space-y-6">
                <div>
                  <span className="text-sm text-stone uppercase tracking-wider">Investment</span>
                  <p className="text-3xl font-semibold text-coral mt-1">$15,000</p>
                  <p className="text-sm text-stone">Fixed price</p>
                </div>
                <div>
                  <span className="text-sm text-stone uppercase tracking-wider">Timeline</span>
                  <p className="text-3xl font-semibold text-coral mt-1">4 weeks</p>
                </div>
                <div>
                  <span className="text-sm text-stone uppercase tracking-wider">Next Steps</span>
                  <p className="text-base text-sand-80 mt-1">
                    Roadmap informs which services to pursue (AEO, SEO, AI Brain, Automation)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 fade-up">
            <a
              href="https://cal.com/raygency"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white px-10 py-5 rounded-full font-medium text-lg transition-colors btn-hover"
            >
              Schedule Audit Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA — Light */}
      <section className="relative bg-light-gray py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-sand-80 fade-up">
            Which service is right for you?
          </h2>
          <p className="text-lg md:text-xl text-sand-50 mb-10 fade-up">
            Each company&apos;s situation is unique. We recommend starting with an AI
            Search Audit to map your current state and identify the biggest opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up">
            <a
              href="https://cal.com/raygency"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-coral hover:bg-coral-hover text-white px-10 py-5 rounded-full font-medium text-lg transition-colors btn-hover"
            >
              Schedule Audit
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-sand-40 text-sand-80 hover:border-sand-60 px-10 py-5 rounded-full font-medium text-lg transition-colors"
            >
              Tell Us About Your Situation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
