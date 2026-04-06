'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const textColor = 'text-text'
  const bgColor = isScrolled
    ? 'bg-bg/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-[rgba(13,155,176,0.12)]'
    : 'bg-transparent'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-8 py-4 md:py-5 transition-all duration-300 ${bgColor}`}>
      <Link href="/" className="flex items-center gap-3">
        <Image src="/logo.png" alt="Raygency" width={36} height={36} className="rounded-full" />
        <span className={`text-sm font-medium tracking-wider ${textColor}`}>
          RAYGENCY
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <div className={`flex gap-8 text-sm ${textColor}`}>
          <Link href="/" className="link-underline">
            Home
          </Link>
          <Link href="/products" className="link-underline">
            Products
          </Link>
          <Link href="/studio" className="link-underline">
            Studio
          </Link>
          <Link href="/about" className="link-underline">
            About
          </Link>
        </div>
        <Link
          href="/products/kreashot"
          className="bg-coral hover:bg-coral-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors btn-hover"
        >
          Start Free Trial
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className={`md:hidden ${textColor}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-midnight md:hidden">
          <div className="flex flex-col p-6 gap-4 text-light-gray">
            <Link
              href="/"
              className="hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/studio"
              className="hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Studio
            </Link>
            <Link
              href="/about"
              className="hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/products/kreashot"
              className="bg-coral hover:bg-coral-hover text-white px-6 py-3 rounded-full text-sm font-medium transition-colors text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
