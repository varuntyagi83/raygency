'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Mail, CheckCircle } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div ref={containerRef}>
      <div className="noise-overlay" />

      {/* Hero — Dark */}
      <section className="relative bg-[#020810] pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-16 overflow-hidden transition-dark-to-light">
        <Navigation />

        <div className="orb w-[350px] h-[350px] bg-[rgba(240,160,48,0.15)] top-[-60px] right-[-30px]" />
        <div className="orb w-[250px] h-[250px] bg-[rgba(22,58,196,0.2)] bottom-[-40px] left-[10%]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-widest uppercase text-[rgba(234,232,244,0.50)] fade-up">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6 text-[#EAE8F4] fade-up">
              Two ways to get started.
            </h1>
            <p className="text-lg md:text-xl text-[rgba(234,232,244,0.75)] leading-relaxed fade-up">
              Try any product with a 7-day free trial. No credit card required. Or tell us about a custom build and we&apos;ll get back to you within 48 hours.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Two Paths — Dark alt */}
      <section className="relative bg-[#0a0f1a] py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Path 1: Free Trial */}
            <div className="fade-up">
              <div className="bg-gradient-to-br from-copper to-copper-bright rounded-2xl p-8 md:p-10 text-white h-full hover-lift">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Start a free trial
                </h2>
                <p className="text-white/90 text-lg leading-relaxed mb-4">
                  Pick a product. 7 days free, no credit card required.
                  Kreashot is where most people start.
                </p>
                <ul className="space-y-3 text-white/90 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-white font-medium mt-0.5">·</span>
                    <span><strong>Kreashot</strong>: AI ad creative generation. $150/month.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-medium mt-0.5">·</span>
                    <span><strong>Volticlens</strong>: Meta competitor ad intelligence. $100/month.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-medium mt-0.5">·</span>
                    <span><strong>Rayprofit</strong>: Ad ROI optimization. $200/month.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-medium mt-0.5">·</span>
                    <span><strong>ActGuard</strong>: EU AI Act compliance. Free to start.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-medium mt-0.5">·</span>
                    <span><strong>LintVibe</strong>: Code quality and security scanning. $40/month.</span>
                  </li>
                </ul>
                <table className="w-full mb-8 border-collapse text-sm text-white/90">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-2.5 pr-6 font-semibold">Product</th>
                      <th className="text-left py-2.5 pr-6 font-semibold">Category</th>
                      <th className="text-left py-2.5 font-semibold">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10"><td className="py-2 pr-6 font-medium">Kreashot</td><td className="py-2 pr-6 text-white/75">Ad Creative</td><td className="py-2 text-white/75">$150/mo</td></tr>
                    <tr className="border-b border-white/10"><td className="py-2 pr-6 font-medium">Volticlens</td><td className="py-2 pr-6 text-white/75">Competitor Intel</td><td className="py-2 text-white/75">$100/mo</td></tr>
                    <tr className="border-b border-white/10"><td className="py-2 pr-6 font-medium">Rayprofit</td><td className="py-2 pr-6 text-white/75">Ad ROI</td><td className="py-2 text-white/75">$200/mo</td></tr>
                    <tr className="border-b border-white/10"><td className="py-2 pr-6 font-medium">ActGuard</td><td className="py-2 pr-6 text-white/75">EU AI Act Compliance</td><td className="py-2 text-white/75">Free to start</td></tr>
                    <tr><td className="py-2 pr-6 font-medium">LintVibe</td><td className="py-2 pr-6 text-white/75">Code Quality</td><td className="py-2 text-white/75">$40/mo</td></tr>
                  </tbody>
                </table>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-white text-copper-bright hover:bg-white/90 px-8 py-4 rounded-full font-medium transition-colors btn-hover"
                >
                  See all products
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Path 2: Studio Inquiry */}
            <div className="fade-up">
              <div className="bg-[rgba(13,155,176,0.04)] rounded-2xl p-8 md:p-10 border border-[rgba(13,155,176,0.2)] h-full hover-lift">
                <Mail className="w-12 h-12 text-teal-lt mb-6" />
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#EAE8F4]">
                  Studio inquiry
                </h2>
                <p className="text-[rgba(234,232,244,0.55)] text-lg leading-relaxed mb-8">
                  Need a custom AI build? Tell us what you&apos;re working on
                  and we&apos;ll get back to you within 48 hours.
                </p>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <CheckCircle className="w-16 h-16 text-teal-lt mb-4" />
                    <h3 className="text-xl font-medium text-[#EAE8F4] mb-2">
                      Got it.
                    </h3>
                    <p className="text-[rgba(234,232,244,0.55)]">
                      We&apos;ll review your message and respond within 48 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-teal-lt hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#EAE8F4] mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[rgba(13,155,176,0.2)] bg-[rgba(13,155,176,0.04)] text-[#EAE8F4] placeholder:text-[rgba(234,232,244,0.30)] focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#EAE8F4] mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[rgba(13,155,176,0.2)] bg-[rgba(13,155,176,0.04)] text-[#EAE8F4] placeholder:text-[rgba(234,232,244,0.30)] focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#EAE8F4] mb-2"
                      >
                        What do you need built?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[rgba(13,155,176,0.2)] bg-[rgba(13,155,176,0.04)] text-[#EAE8F4] placeholder:text-[rgba(234,232,244,0.30)] focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors resize-none"
                        placeholder="A short description of what you need. We'll take it from there."
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-coral hover:bg-coral-hover disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full font-medium transition-colors btn-hover"
                    >
                      {isSubmitting ? 'Sending...' : 'Send inquiry'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FAQ — Dark */}
      <section className="relative bg-[#020810] py-24 md:py-32 px-6 md:px-16 overflow-hidden">
        <div className="orb w-[300px] h-[300px] bg-[rgba(13,155,176,0.06)] top-[-60px] right-[10%]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-teal-lt fade-up">
            Common questions
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-12 text-[#EAE8F4] fade-up">
            Frequently asked questions.
          </h2>

          <div className="space-y-10">
            <div className="fade-up">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">How quickly will I get a response?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Studio inquiries are reviewed within 48 hours on business days. Product support questions are typically answered same day. If you&apos;re asking about a specific product, the fastest path is to start a free trial directly from the product page.
              </p>
            </div>

            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">What products does Raygency offer?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Raygency builds five AI tools: Kreashot (ad creative generation), Volticlens (Meta competitor ad intelligence), Rayprofit (ad ROI optimization), ActGuard (EU AI Act compliance), and LintVibe (code quality and security scanning). All products are built for practitioners who need results, not demos.
              </p>
            </div>

            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">Do all products include a free trial?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Yes. Kreashot, Volticlens, and Rayprofit each include a 7-day free trial with no credit card required. ActGuard is free for your first AI system. LintVibe offers a free initial scan so you can see what it finds before committing.
              </p>
            </div>

            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">What kind of custom builds does Raygency Studio take on?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Raygency Studio builds custom AI automations, workflows, and tools for businesses that need something specific to their use case. If the problem you&apos;re solving doesn&apos;t fit an existing product, use the form above to tell us what you&apos;re working on.
              </p>
            </div>

            <div className="fade-up border-t border-[rgba(255,255,255,0.06)] pt-10">
              <h3 className="text-xl font-semibold text-[#EAE8F4] mb-3">Can I cancel my subscription at any time?</h3>
              <p className="text-base text-[rgba(234,232,244,0.75)] leading-relaxed">
                Yes. All Raygency product subscriptions can be cancelled at any time. There are no long-term contracts or cancellation fees. Annual plans are billed yearly but you can cancel before renewal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
