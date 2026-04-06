'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, Mail, ArrowRight, CheckCircle } from 'lucide-react'
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
      {/* Hero — Dark Midnight */}
      <section className="relative bg-midnight pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-16 overflow-hidden transition-dark-to-light">
        <Navigation variant="dark" />

        <div className="orb w-[350px] h-[350px] bg-[rgba(250,97,71,0.15)] top-[-60px] right-[-30px]" />
        <div className="orb w-[250px] h-[250px] bg-[rgba(120,100,80,0.2)] bottom-[-40px] left-[10%]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-widest uppercase text-[#d4d0ca]/60 fade-up">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6 text-[#E5E5DF] fade-up">
              Let&apos;s talk about your AI & search strategy.
            </h1>
            <p className="text-lg md:text-xl text-[#d4d0ca] leading-relaxed fade-up">
              Whether you want to audit your Answer Engine visibility, explore AEO
              opportunities, or discuss a full AI brain implementation, we&apos;d
              like to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options — Light */}
      <section className="relative bg-light-gray py-16 md:py-24 px-6 md:px-16 transition-light-to-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Book a Call */}
            <div className="fade-up">
              <div className="bg-orange rounded-2xl p-8 md:p-10 text-white h-full hover-lift">
                <Calendar className="w-12 h-12 mb-6" />
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Book a Discovery Call
                </h2>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  30 minutes. No pitch deck. We&apos;ll look at your current AI search
                  visibility and discuss what&apos;s possible for your company.
                </p>
                <a
                  href="https://cal.com/raygency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-orange hover:bg-white/90 px-8 py-4 rounded-full font-medium transition-colors btn-hover"
                >
                  Schedule Now
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-white/60 text-sm mt-6">
                  Pick a time that works for you
                </p>
              </div>
            </div>

            {/* Send a Message */}
            <div className="fade-up">
              <div className="bg-sand-0 rounded-2xl p-8 md:p-10 border border-sand-20 h-full hover-lift">
                <Mail className="w-12 h-12 text-orange mb-6" />
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-sand-80">
                  Send a Message
                </h2>
                <p className="text-sand-50 text-lg leading-relaxed mb-8">
                  Not ready for a call? Tell us about your situation and we&apos;ll
                  get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <CheckCircle className="w-16 h-16 text-orange mb-4" />
                    <h3 className="text-xl font-medium text-sand-80 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-sand-50">
                      Thanks for reaching out. We&apos;ll get back to you soon.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-orange hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-sand-80 mb-2"
                      >
                        Name <span className="text-orange">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-sand-20 bg-white focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-sand-80 mb-2"
                      >
                        Email <span className="text-orange">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-sand-20 bg-white focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-sand-80 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-sand-20 bg-white focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors resize-none"
                        placeholder="Tell us about your company and what you're looking to achieve with AI and search strategy..."
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange hover:bg-orange-hover disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full font-medium transition-colors btn-hover"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect — Dark Midnight + Glass */}
      <section className="relative bg-midnight py-16 md:py-24 px-6 md:px-16 overflow-hidden transition-dark-to-light">
        <div className="orb w-[300px] h-[300px] bg-[rgba(120,100,80,0.12)] top-[-60px] left-[20%]" />
        <div className="orb w-[200px] h-[200px] bg-[rgba(250,97,71,0.08)] bottom-[-40px] right-[15%]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-[#E5E5DF] fade-up">
            What to Expect
          </h2>

          <div className="space-y-6">
            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <h3 className="text-xl md:text-2xl font-medium mb-3 text-[#E5E5DF]">
                On our discovery call
              </h3>
              <p className="text-lg text-[#d4d0ca] leading-relaxed">
                We&apos;ll spend 30 minutes understanding your current AI search
                visibility, your competitive landscape, and where AEO/GEO/SEO
                strategy could create the biggest impact. No sales pitch. Just an
                honest conversation about what&apos;s possible.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <h3 className="text-xl md:text-2xl font-medium mb-3 text-[#E5E5DF]">
                After our call
              </h3>
              <p className="text-lg text-[#d4d0ca] leading-relaxed">
                If there&apos;s a good fit, we&apos;ll typically recommend starting with
                an AI Search Audit ($15K, 4 weeks) to map your current state and
                build a clear roadmap. If our services aren&apos;t the right solution,
                we&apos;ll tell you that too.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8 md:p-10 fade-up">
              <h3 className="text-xl md:text-2xl font-medium mb-3 text-[#E5E5DF]">
                No pressure
              </h3>
              <p className="text-lg text-[#d4d0ca] leading-relaxed">
                We work with a maximum of 5 clients at a time to ensure quality.
                If we&apos;re not the right fit or timing isn&apos;t right, we&apos;re
                happy to point you toward other resources that might help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Light */}
      <section className="relative bg-light-gray py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-sand-80 fade-up">
            Ready to see where you stand in Answer Engines?
          </h2>
          <p className="text-lg md:text-xl text-sand-50 mb-10 fade-up">
            30 minutes. No pitch deck. Just clarity on what&apos;s possible.
          </p>
          <a
            href="https://cal.com/raygency"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-white px-10 py-5 rounded-full font-medium text-lg transition-colors btn-hover fade-up"
          >
            Book Your Discovery Call
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
