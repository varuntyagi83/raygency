'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Raygency?',
      acceptedAnswer: { '@type': 'Answer', text: 'Raygency is an AI product studio. We build, ship, and run production AI tools for performance marketers, developers, and compliance teams. We also take on custom builds through our Studio service.' },
    },
    {
      '@type': 'Question',
      name: 'What AI tools does Raygency offer?',
      acceptedAnswer: { '@type': 'Answer', text: 'Raygency offers five production AI tools: Kreashot (ad creative), Volticlens (competitor ad intelligence), Rayprofit (ad ROI optimization), ActGuard (EU AI Act compliance), and LintVibe (code quality and security scanner). All have free trials.' },
    },
    {
      '@type': 'Question',
      name: 'How do I get started with Raygency?',
      acceptedAnswer: { '@type': 'Answer', text: 'Every Raygency product has a free trial. No credit card required. Pick the tool that matches your biggest problem, start the trial, and see results before you pay. If you need a custom build, contact us through the Studio.' },
    },
    {
      '@type': 'Question',
      name: 'Can I use multiple Raygency tools together?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. All five tools run independently and can be combined. Bundle pricing is available: any 2 apps at $100/month, any 3 apps at $250/month, or the full suite of all 5 apps at $500/month.' },
    },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to get started with Raygency AI tools',
  description: 'Start using Raygency AI tools in three steps.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Pick a tool', text: 'Browse the five Raygency products and choose the one that solves your biggest problem: ad creative, competitor intel, ROI, compliance, or code quality.' },
    { '@type': 'HowToStep', position: 2, name: 'Start a free trial', text: 'Every product includes a free trial. No credit card required. Start immediately and see results before you commit.' },
    { '@type': 'HowToStep', position: 3, name: 'Ship faster', text: 'Use the tool in your workflow. If you need a custom build beyond what the products offer, contact the Studio.' },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3'] },
  url: 'https://www.raygency.com',
}

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <div className="noise-overlay" />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex flex-col justify-center bg-[#020810] z-0 overflow-hidden">
        <Navigation />

        <div className="orb w-[500px] h-[500px] bg-[rgba(240,160,48,0.15)] top-[-100px] right-[-50px]" />
        <div className="orb w-[400px] h-[400px] bg-[rgba(22,58,196,0.2)] bottom-[-80px] left-[10%]" />
        <div className="orb w-[300px] h-[300px] bg-[rgba(13,155,176,0.1)] top-[40%] right-[30%]" />

        <div className="relative z-10 px-6 md:px-16 max-w-[1100px] hero-fade-in">
          <div className="flex items-center gap-4 mb-7">
            <span className="block w-12 h-0.5 bg-gradient-to-r from-[#18C0D9] to-transparent" />
            <span className="text-xs font-extrabold tracking-[0.28em] uppercase text-[#18C0D9]">AI that ships.</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[76px] font-extrabold leading-[0.98] tracking-tight uppercase text-[#EAE8F4] mb-8">
            Five tools.<br />One studio.<br />
            <span className="text-gradient-teal-copper">All in production.</span>
          </h1>
          <p className="text-lg md:text-xl text-[rgba(234,232,244,0.75)] max-w-[600px] mb-12 leading-relaxed border-l-4 border-[#C4612A] pl-6">
            Ad creative. Competitor intel. ROI optimization. Compliance docs. Code quality. Five tools built for operators who need results. Plus a studio that builds whatever comes next.
          </p>
          <div className="flex gap-5 items-center flex-wrap">
            <Link href="/products" className="btn-brutal">
              See all products
            </Link>
            <Link href="/studio" className="btn-brutal-secondary">
              Tell us what you&apos;re building →
            </Link>
          </div>
          <p className="text-xs text-[rgba(234,232,244,0.50)] mt-5 flex items-center gap-2 font-medium tracking-wider">
            <span className="text-[#18C0D9]">✓</span>
            Free trial on every product. No credit card required.
          </p>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 border-y-[3px] border-[rgba(13,155,176,0.25)]">
        <div className="p-8 md:p-11 border-r border-[rgba(13,155,176,0.15)] fade-up">
          <div className="text-4xl md:text-[56px] font-extrabold leading-none mb-2.5 text-gradient-teal-copper">9</div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[rgba(234,232,244,0.50)] leading-snug">Production Apps<br />Shipped</div>
        </div>
        <div className="p-8 md:p-11 border-r border-[rgba(13,155,176,0.15)] fade-up">
          <div className="text-4xl md:text-[56px] font-extrabold leading-none mb-2.5 bg-gradient-to-r from-[#E07840] to-[#C4612A] bg-clip-text text-transparent">100+</div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[rgba(234,232,244,0.50)] leading-snug">Workflows in<br />Production</div>
        </div>
        <div className="p-8 md:p-11 border-r border-[rgba(13,155,176,0.15)] fade-up">
          <div className="text-4xl md:text-[56px] font-extrabold leading-none mb-2.5 text-gradient-teal-copper">18+</div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[rgba(234,232,244,0.50)] leading-snug">Years Cross-Industry<br />Experience</div>
        </div>
        <div className="p-8 md:p-11 fade-up">
          <div className="text-4xl md:text-[56px] font-extrabold leading-none mb-2.5 text-[#EAE8F4]">7</div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[rgba(234,232,244,0.50)] leading-snug">Day Free Trial<br />No Credit Card</div>
        </div>
      </div>

      <div className="section-divider" />

      {/* ═══ THREE PROBLEMS → THREE PRODUCTS ═══ */}
      <section className="relative bg-[#020810] z-10 py-24 md:py-28 px-6 md:px-14">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-extrabold tracking-[0.26em] uppercase text-[rgba(234,232,244,0.50)] mb-5 fade-up">Marketing &amp; growth</div>
          <h2 className="text-4xl md:text-[52px] font-extrabold uppercase tracking-tight leading-none text-[#EAE8F4] mb-3 fade-up">
            Three problems.<br />Three products.
          </h2>
          <p className="text-base text-[rgba(234,232,244,0.50)] mb-16 max-w-xl font-medium leading-relaxed fade-up">
            If you&apos;re running paid social at a growth-stage company, these hit in order. We built a product for each one.
          </p>

          {/* Problem Row 1 */}
          <div className="py-9 border-t border-[rgba(13,155,176,0.1)] fade-up">
            <div className="flex flex-col md:grid md:grid-cols-[64px_1fr_2fr] md:gap-x-10 md:items-center gap-4">
              <div className="text-xs font-extrabold text-[#18C0D9] tracking-widest uppercase">01.</div>
              <div>
                <h3 className="text-lg md:text-xl font-extrabold uppercase text-[#EAE8F4] mb-2 tracking-tight">You can&apos;t produce ad creatives fast enough.</h3>
                <p className="text-sm text-[rgba(234,232,244,0.50)] leading-relaxed font-medium">Brief to designer to revision to export. Too slow. Too expensive. You&apos;re leaving performance on the table while you wait.</p>
              </div>
              <Link href="/products/kreashot" className="flex items-center justify-between gap-5 p-5 bg-[rgba(13,155,176,0.05)] border-2 border-[rgba(13,155,176,0.2)] relative hover:bg-[rgba(13,155,176,0.09)] hover:border-[rgba(13,155,176,0.35)] transition-colors">
                <div>
                  <div className="text-sm font-extrabold text-[#18C0D9] uppercase tracking-wider">Kreashot</div>
                  <div className="text-xs text-[rgba(234,232,244,0.50)] mt-1 font-medium leading-snug">Product photo → Meta-ready ad creative in minutes.</div>
                </div>
                <span className="text-lg font-extrabold text-[#0D9BB0] flex-shrink-0">→</span>
              </Link>
            </div>
          </div>

          {/* Problem Row 2 */}
          <div className="py-9 border-t border-[rgba(13,155,176,0.1)] fade-up">
            <div className="flex flex-col md:grid md:grid-cols-[64px_1fr_2fr] md:gap-x-10 md:items-center gap-4">
              <div className="text-xs font-extrabold text-[#18C0D9] tracking-widest uppercase">02.</div>
              <div>
                <h3 className="text-lg md:text-xl font-extrabold uppercase text-[#EAE8F4] mb-2 tracking-tight">You don&apos;t know what your competitors are running.</h3>
                <p className="text-sm text-[rgba(234,232,244,0.50)] leading-relaxed font-medium">They&apos;re testing. They&apos;re learning. You&apos;re guessing. You need to see exactly what&apos;s working for them.</p>
              </div>
              <Link href="/products/volticlens" className="flex items-center justify-between gap-5 p-5 bg-[rgba(13,155,176,0.05)] border-2 border-[rgba(13,155,176,0.2)] relative hover:bg-[rgba(13,155,176,0.09)] hover:border-[rgba(13,155,176,0.35)] transition-colors">
                <div>
                  <div className="text-sm font-extrabold text-[#18C0D9] uppercase tracking-wider">Volticlens</div>
                  <div className="text-xs text-[rgba(234,232,244,0.50)] mt-1 font-medium leading-snug">Every ad your competitors are running on Meta. Real time.</div>
                </div>
                <span className="text-lg font-extrabold text-[#0D9BB0] flex-shrink-0">→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <div className="section-divider" />

      {/* ═══ PRODUCT CARDS ═══ */}
      <section className="relative bg-[#020810] z-20 py-24 md:py-28 px-6 md:px-14 overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-[rgba(22,58,196,0.12)] top-[-100px] left-[-50px]" />
        <div className="orb w-[300px] h-[300px] bg-[rgba(13,155,176,0.08)] bottom-[-50px] right-[10%]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-xs font-extrabold tracking-[0.26em] uppercase text-[rgba(234,232,244,0.50)] mb-5 fade-up">The toolkit</div>
          <h2 className="text-4xl md:text-[52px] font-extrabold uppercase tracking-tight leading-none text-[#EAE8F4] mb-3 fade-up">
            Pick what you need.
          </h2>
          <p className="text-base text-[rgba(234,232,244,0.50)] mb-16 font-medium fade-up">Five tools. All in production. Free trial on every one.</p>

          <div className="grid md:grid-cols-3 gap-7 mb-12">
            {/* Kreashot */}
            <div className="brutal-card fade-up">
              <div className="card-tag"><span className="card-dot" />Kreashot</div>
              <h3 className="text-[28px] font-extrabold uppercase leading-none mb-3.5 text-[#EAE8F4] tracking-tight">
                Ad Creative.<br />Fast.
              </h3>
              <p className="text-sm text-[rgba(234,232,244,0.50)] leading-relaxed mb-8 font-medium">
                Product photo to Meta-ready creative in minutes. Built for performance marketers who can&apos;t wait on designers.
              </p>
              <div className="card-price">$150<span>/month</span></div>
              <div className="card-trial">7 days free · no credit card</div>
              <Link href="/products/kreashot" className="btn-brutal w-full text-center">
                Start free trial
              </Link>
            </div>

            {/* Volticlens */}
            <div className="brutal-card fade-up">
              <div className="card-tag"><span className="card-dot" />Volticlens</div>
              <h3 className="text-[28px] font-extrabold uppercase leading-none mb-3.5 text-[#EAE8F4] tracking-tight">
                Competitor Intel.<br />Real Time.
              </h3>
              <p className="text-sm text-[rgba(234,232,244,0.50)] leading-relaxed mb-8 font-medium">
                See every ad your competitors are running on Meta. Know what they&apos;re testing. Move faster than they do.
              </p>
              <div className="card-price">$100<span>/month</span></div>
              <div className="card-trial">7 days free · no credit card</div>
              <Link href="/products/volticlens" className="btn-brutal-secondary w-full text-center">
                Start free trial
              </Link>
            </div>

            {/* Rayprofit */}
            <div className="brutal-card fade-up">
              <div className="card-tag"><span className="card-dot" />Rayprofit</div>
              <h3 className="text-[28px] font-extrabold uppercase leading-none mb-3.5 text-[#EAE8F4] tracking-tight">
                Ad ROI.<br />Maximized.
              </h3>
              <p className="text-sm text-[rgba(234,232,244,0.50)] leading-relaxed mb-8 font-medium">
                AI profitability scores for every campaign. Cut waste. Reallocate to winners. Across Meta and Google.
              </p>
              <div className="card-price">$200<span>/month</span></div>
              <div className="card-trial">7 days free · no credit card</div>
              <Link href="/products/rayprofit" className="btn-brutal-secondary w-full text-center">
                Start free trial
              </Link>
            </div>

            {/* ActGuard */}
            <div className="brutal-card fade-up">
              <div className="card-tag"><span className="card-dot" />ActGuard</div>
              <h3 className="text-[28px] font-extrabold uppercase leading-none mb-3.5 text-[#EAE8F4] tracking-tight">
                EU AI Act.<br />Covered.
              </h3>
              <p className="text-sm text-[rgba(234,232,244,0.50)] leading-relaxed mb-8 font-medium">
                From AI system description to audit-ready compliance package in minutes. Free for your first AI system.
              </p>
              <div className="card-price">Free<span> to start</span></div>
              <div className="card-trial">1 AI system included free</div>
              <Link href="/products/actguard" className="btn-brutal-secondary w-full text-center">
                Get started free
              </Link>
            </div>

            {/* LintVibe */}
            <div className="brutal-card fade-up">
              <div className="card-tag"><span className="card-dot" />LintVibe</div>
              <h3 className="text-[28px] font-extrabold uppercase leading-none mb-3.5 text-[#EAE8F4] tracking-tight">
                Vibe Code.<br />Production-ready.
              </h3>
              <p className="text-sm text-[rgba(234,232,244,0.50)] leading-relaxed mb-8 font-medium">
                Scan for bugs, security vulnerabilities, and production risks. Prioritized by severity. Ship with confidence.
              </p>
              <div className="card-price">$40<span>/month</span></div>
              <div className="card-trial">Free initial scan</div>
              <Link href="/products/lintvibe" className="btn-brutal-secondary w-full text-center">
                Start free scan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BUNDLE ═══ */}
      <section className="relative py-20 md:py-24 px-6 md:px-14 overflow-hidden border-y border-[rgba(13,155,176,0.12)] bg-[rgba(13,155,176,0.025)]">
        <div className="cell-overlay" />
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-0.5 bg-[#C4612A]" />
              <span className="text-xs font-extrabold tracking-[0.26em] uppercase text-[#E07840]">Raygency Suite</span>
            </div>
            <h2 className="text-3xl md:text-[44px] font-extrabold uppercase tracking-tight leading-none text-[#EAE8F4] mb-4 fade-up">
              All three.<br /><span className="text-gradient-teal-copper">One price.</span>
            </h2>
            <p className="text-base text-[rgba(234,232,244,0.50)] leading-relaxed mb-5 font-medium fade-up">
              Kreashot and Volticlens together. They solve your two biggest consecutive problems in order. The pair closes every gap.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#E07840] bg-[rgba(196,97,42,0.1)] border-2 border-[rgba(196,97,42,0.3)] px-4 py-1.5 fade-up">
              Save $100/month · 28% off
            </div>
            <p className="text-xs text-[rgba(234,232,244,0.50)] mt-3 font-medium fade-up">Annual plan available · 20% off · Price locked for life.</p>
          </div>
          <div className="flex-shrink-0 text-center fade-up">
            <div className="text-6xl md:text-7xl font-extrabold leading-none mb-1.5 text-gradient-teal-copper">$250</div>
            <div className="text-sm text-[rgba(234,232,244,0.50)] uppercase tracking-wider font-semibold mb-6">/month · all three</div>
            <div className="flex flex-col gap-2 text-left mb-7">
              <div className="text-sm text-[rgba(234,232,244,0.50)] flex items-center gap-2.5 font-medium"><span className="text-[#0D9BB0] font-extrabold">→</span> Kreashot: $150/month</div>
              <div className="text-sm text-[rgba(234,232,244,0.50)] flex items-center gap-2.5 font-medium"><span className="text-[#0D9BB0] font-extrabold">→</span> Volticlens: $100/month</div>
            </div>
            <Link href="/products/kreashot" className="btn-brutal">Start free trial</Link>
          </div>
        </div>
      </section>

      {/* ═══ PITCH LINE ═══ */}
      <section className="relative py-28 md:py-32 px-6 md:px-14 text-center overflow-hidden border-y border-[rgba(13,155,176,0.1)]">
        <div className="absolute w-[900px] h-[450px] rounded-full bg-[radial-gradient(ellipse,rgba(196,97,42,0.09)_0%,transparent_65%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-[50px]" />
        <div className="relative z-10 max-w-[900px] mx-auto">
          <p className="text-4xl md:text-[52px] font-extrabold uppercase tracking-tight leading-[1.1] text-[#EAE8F4] mb-9 fade-up">
            &ldquo;Most of what you need,<br />
            <span className="text-gradient-teal-copper">we have already built.</span><br />
            The rest, we build fast.&rdquo;
          </p>
          <div className="text-xs text-[rgba(234,232,244,0.50)] tracking-[0.14em] uppercase font-bold mb-10 fade-up">Raygency · AI Product Studio</div>
          <Link href="/studio" className="btn-brutal fade-up">Tell us what you&apos;re building</Link>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══ STUDIO STRIP ═══ */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-6 md:px-14 py-14 border-y border-[rgba(13,155,176,0.08)]">
        <div>
          <h3 className="text-xl md:text-[22px] font-extrabold uppercase text-[#EAE8F4] mb-2.5 tracking-tight">Need something custom?</h3>
          <p className="text-[15px] text-[rgba(234,232,244,0.50)] leading-relaxed max-w-xl font-medium">
            We build marketing tools, AI automation, and data products. Capacity is limited. We take on projects that fit our product DNA.
          </p>
        </div>
        <Link href="/studio" className="btn-brutal-secondary flex-shrink-0">Tell us what you&apos;re building →</Link>
      </div>

      {/* ═══ PROOF NUMBERS ═══ */}
      <section className="relative py-24 md:py-28 px-6 md:px-14 overflow-hidden">
        <div className="cell-overlay opacity-[0.28]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-xs font-extrabold tracking-[0.26em] uppercase text-[rgba(234,232,244,0.50)] mb-5 fade-up">Built by practitioners</div>
          <h2 className="text-4xl md:text-[52px] font-extrabold uppercase tracking-tight leading-none text-[#EAE8F4] mb-14 fade-up">
            Not consultants.<br />Builders.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-[rgba(13,155,176,0.15)] relative fade-up overflow-hidden md:overflow-visible">
            {/* Brutalist offset shadow */}
            <div className="hidden md:block absolute top-2 left-2 right-[-10px] bottom-[-10px] border-2 border-[rgba(196,97,42,0.15)] -z-10 pointer-events-none" />
            <div className="p-8 md:p-11 border-r border-[rgba(13,155,176,0.12)] bg-[rgba(13,155,176,0.03)]">
              <div className="text-4xl md:text-[52px] font-extrabold leading-none mb-3 text-gradient-teal-copper">9</div>
              <div className="text-sm text-[rgba(234,232,244,0.50)] leading-snug font-medium"><strong className="text-[#EAE8F4]">Production apps</strong> shipped and running</div>
            </div>
            <div className="p-8 md:p-11 border-r border-[rgba(13,155,176,0.12)] bg-[rgba(13,155,176,0.03)]">
              <div className="text-4xl md:text-[52px] font-extrabold leading-none mb-3 text-gradient-teal-copper">100+</div>
              <div className="text-sm text-[rgba(234,232,244,0.50)] leading-snug font-medium"><strong className="text-[#EAE8F4]">n8n workflows</strong> running in production</div>
            </div>
            <div className="p-8 md:p-11 border-r border-[rgba(13,155,176,0.12)] bg-[rgba(13,155,176,0.03)]">
              <div className="text-4xl md:text-[52px] font-extrabold leading-none mb-3 bg-gradient-to-r from-[#E07840] to-[#C4612A] bg-clip-text text-transparent">18+</div>
              <div className="text-sm text-[rgba(234,232,244,0.50)] leading-snug font-medium"><strong className="text-[#EAE8F4]">Years inside</strong> organisations where AI meets the real world</div>
            </div>
            <div className="p-8 md:p-11 bg-[rgba(13,155,176,0.03)]">
              <div className="text-4xl md:text-[52px] font-extrabold leading-none mb-3 bg-gradient-to-r from-[#E07840] to-[#C4612A] bg-clip-text text-transparent">6</div>
              <div className="text-sm text-[rgba(234,232,244,0.50)] leading-snug font-medium"><strong className="text-[#EAE8F4]">Industries</strong>: pharma, semis, IT, biotech, startups, design</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUOTE ═══ */}
      <section className="relative py-20 md:py-24 px-6 md:px-14 border-y border-[rgba(13,155,176,0.1)] overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(13,155,176,0.08)_0%,transparent_65%)] top-1/2 left-[-5%] -translate-y-1/2 pointer-events-none blur-[60px]" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(196,97,42,0.1)_0%,transparent_65%)] top-1/2 right-[-5%] -translate-y-1/2 pointer-events-none blur-[60px]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center fade-up">
          <blockquote className="text-xl md:text-2xl font-medium text-[#EAE8F4] leading-relaxed mb-6">
            &ldquo;The hardest part of any AI product isn&apos;t the technology.
            It&apos;s the human on the other side of the screen: time-poor,
            skeptical, with a workflow that already works well enough.
            Every product we build at Raygency is designed for that person.
            Not the enthusiast. The resistant one.
            Design for adoption, not just function.&rdquo;
          </blockquote>
          <p className="text-sm text-[rgba(234,232,244,0.50)] font-medium">Renuka Adnani, Co-founder</p>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative py-24 md:py-28 px-6 md:px-14 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(13,155,176,0.12)_0%,transparent_65%)] top-1/2 left-[-5%] -translate-y-1/2 pointer-events-none blur-[60px]" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(196,97,42,0.14)_0%,transparent_65%)] top-1/2 right-[-5%] -translate-y-1/2 pointer-events-none blur-[60px]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-[52px] font-extrabold uppercase tracking-tight leading-none text-[#EAE8F4] mb-5 fade-up">
            Pick a tool.<br />Start in minutes.
          </h2>
          <p className="text-base text-[rgba(234,232,244,0.50)] mb-10 font-medium fade-up">
            Five products. All free to try. No credit card on any of them.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center fade-up">
            <Link href="/products" className="btn-brutal text-base px-11 py-4">
              See all products
            </Link>
            <Link href="/studio" className="btn-brutal-secondary">
              Tell us what you&apos;re building →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="relative py-24 md:py-28 px-6 md:px-14">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs font-extrabold tracking-[0.26em] uppercase text-[rgba(234,232,244,0.50)] mb-5 fade-up">Common questions</div>
          <h2 className="text-3xl md:text-[44px] font-extrabold uppercase tracking-tight leading-none text-[#EAE8F4] mb-14 fade-up">
            Everything you need to know.
          </h2>

          <div className="space-y-0">
            <div className="fade-up border-t border-[rgba(13,155,176,0.15)] py-8">
              <h3 className="text-lg font-extrabold uppercase text-[#EAE8F4] mb-3 tracking-tight">What is Raygency?</h3>
              <p className="text-[rgba(234,232,244,0.60)] leading-relaxed font-medium">Raygency is an AI product studio. We build, ship, and run production AI tools for performance marketers, developers, and compliance teams. We also take on custom builds through our Studio service.</p>
            </div>

            <div className="fade-up border-t border-[rgba(13,155,176,0.15)] py-8">
              <h3 className="text-lg font-extrabold uppercase text-[#EAE8F4] mb-3 tracking-tight">What AI tools does Raygency offer?</h3>
              <p className="text-[rgba(234,232,244,0.60)] leading-relaxed font-medium mb-4">Raygency offers five production AI tools:</p>
              <ul className="space-y-2 text-[rgba(234,232,244,0.60)] font-medium">
                <li className="flex items-start gap-2.5"><span className="text-[#0D9BB0] font-extrabold flex-shrink-0">→</span> <strong className="text-[#EAE8F4]">Kreashot</strong>: product photo to Meta-ready ad creative</li>
                <li className="flex items-start gap-2.5"><span className="text-[#0D9BB0] font-extrabold flex-shrink-0">→</span> <strong className="text-[#EAE8F4]">Volticlens</strong>: competitor ad intelligence on Meta</li>
                <li className="flex items-start gap-2.5"><span className="text-[#0D9BB0] font-extrabold flex-shrink-0">→</span> <strong className="text-[#EAE8F4]">Rayprofit</strong>: ad spend ROI and budget optimization</li>
                <li className="flex items-start gap-2.5"><span className="text-[#0D9BB0] font-extrabold flex-shrink-0">→</span> <strong className="text-[#EAE8F4]">ActGuard</strong>: EU AI Act compliance documentation</li>
                <li className="flex items-start gap-2.5"><span className="text-[#0D9BB0] font-extrabold flex-shrink-0">→</span> <strong className="text-[#EAE8F4]">LintVibe</strong>: AI code quality and security scanner</li>
              </ul>
              <table className="w-full mt-6 border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[rgba(13,155,176,0.2)]">
                    <th className="text-left py-3 pr-6 font-semibold text-[#EAE8F4]">Product</th>
                    <th className="text-left py-3 pr-6 font-semibold text-[#EAE8F4]">Category</th>
                    <th className="text-left py-3 font-semibold text-[#EAE8F4]">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[rgba(255,255,255,0.04)]"><td className="py-2.5 pr-6 text-[#EAE8F4] font-medium">Kreashot</td><td className="py-2.5 pr-6 text-[rgba(234,232,244,0.60)]">Ad Creative Generation</td><td className="py-2.5 text-[rgba(234,232,244,0.60)]">$150/month</td></tr>
                  <tr className="border-b border-[rgba(255,255,255,0.04)]"><td className="py-2.5 pr-6 text-[#EAE8F4] font-medium">Volticlens</td><td className="py-2.5 pr-6 text-[rgba(234,232,244,0.60)]">Competitor Intelligence</td><td className="py-2.5 text-[rgba(234,232,244,0.60)]">$100/month</td></tr>
                  <tr className="border-b border-[rgba(255,255,255,0.04)]"><td className="py-2.5 pr-6 text-[#EAE8F4] font-medium">Rayprofit</td><td className="py-2.5 pr-6 text-[rgba(234,232,244,0.60)]">Ad ROI Optimization</td><td className="py-2.5 text-[rgba(234,232,244,0.60)]">$200/month</td></tr>
                  <tr className="border-b border-[rgba(255,255,255,0.04)]"><td className="py-2.5 pr-6 text-[#EAE8F4] font-medium">ActGuard</td><td className="py-2.5 pr-6 text-[rgba(234,232,244,0.60)]">EU AI Act Compliance</td><td className="py-2.5 text-[rgba(234,232,244,0.60)]">Free to start</td></tr>
                  <tr><td className="py-2.5 pr-6 text-[#EAE8F4] font-medium">LintVibe</td><td className="py-2.5 pr-6 text-[rgba(234,232,244,0.60)]">Code Quality &amp; Security</td><td className="py-2.5 text-[rgba(234,232,244,0.60)]">$40/month</td></tr>
                </tbody>
              </table>
            </div>

            <div className="fade-up border-t border-[rgba(13,155,176,0.15)] py-8">
              <h3 className="text-lg font-extrabold uppercase text-[#EAE8F4] mb-3 tracking-tight">How do I get started with Raygency?</h3>
              <p className="text-[rgba(234,232,244,0.60)] leading-relaxed font-medium">Every product has a free trial. No credit card required. Pick the tool that matches your biggest problem, start the trial, and see results before you pay. If you need something custom, tell us what you&apos;re building through the Studio.</p>
            </div>

            <div className="fade-up border-t border-b border-[rgba(13,155,176,0.15)] py-8">
              <h3 className="text-lg font-extrabold uppercase text-[#EAE8F4] mb-3 tracking-tight">Can I use multiple Raygency tools together?</h3>
              <p className="text-[rgba(234,232,244,0.60)] leading-relaxed font-medium">Yes. All five tools run independently and can be combined. Bundle pricing is available: any 2 apps at $100/month, any 3 apps at $250/month, or the full suite of all 5 apps at $500/month.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
