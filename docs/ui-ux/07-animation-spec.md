# Raygency Animation Technical Specification

## Overview

This document provides the technical implementation guide for the "Sunrise" hero animation, inspired by Sunrise Robotics. The effect is achieved through **CSS layering and scroll positioning**, not complex JavaScript animation.

---

## The Core Concept

The "sunrise" effect is created by **two stacked sections** where the second (coral) section scrolls up and covers the first (grey) section. The sun is attached to the coral section with a negative offset, so it "rises" naturally with its parent.

```
┌─────────────────────────────────┐
│     GREY SECTION (Fixed)        │  ← position: fixed (doesn't move)
│  - Dark background #1A1A14      │
│  - Headline (white)             │
│  - Horizontal lines (horizon)   │
├─────────────────────────────────┤  ← This edge is the "horizon"
│         ◯ SUN                   │  ← Attached to TOP of coral section
│        ╱─╲                      │     with negative margin (sticks out 45%)
├───────╱───╲─────────────────────┤
│     ╱       ╲                   │
│    CORAL SECTION                │  ← position: relative (scrolls normally)
│    - Coral background #FA6147   │     margin-top: 100vh
│    - Content below sun          │
└─────────────────────────────────┘
```

---

## 1. HTML Structure

```jsx
// Hero component structure
<div className="hero-container" style={{ height: '300vh' }}>
  
  {/* LAYER 1: Grey Section (FIXED) */}
  <section className="grey-section">
    <nav>{/* Navigation */}</nav>
    <h1 className="headline">Intelligent automation...</h1>
    <div className="horizon-lines">{/* 20-25 horizontal lines */}</div>
  </section>
  
  {/* LAYER 2: Coral Section (SCROLLS) */}
  <section className="coral-section">
    <div className="sun" /> {/* Positioned to stick out above */}
    <div className="coral-content">{/* Content with top padding */}</div>
  </section>
  
  {/* LAYER 3: Cream Section (SCROLLS) */}
  <section className="cream-section">
    {/* Rest of page content */}
  </section>
  
</div>
```

---

## 2. CSS Implementation

### Grey Section (Fixed Background)

```css
.grey-section {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: #1A1A14;
  z-index: 1;
  overflow: hidden;
}
```

### Coral Section (Scrolls Over Grey)

```css
.coral-section {
  position: relative;
  margin-top: 100vh;        /* Start below the viewport */
  min-height: 100vh;
  background-color: #FA6147;
  z-index: 2;               /* Above grey section */
  overflow: visible;        /* Allow sun to stick out */
}
```

### The Sun

```css
.sun {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-45%);  /* Sticks out 45% above */
  width: 55vw;
  max-width: 500px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    #FFBFA0 0%,      /* Peachy pink at top */
    #FA6147 100%     /* Coral at bottom - MATCHES section bg! */
  );
  z-index: 3;
}
```

**CRITICAL:** The sun's bottom gradient color (`#FA6147`) MUST match the coral section background exactly. This creates a seamless blend.

### Headline

```css
.headline {
  position: absolute;
  top: 33%;
  left: 4rem;
  max-width: 600px;
  color: #E5E5DF;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 500;
  line-height: 1.1;
}
```

---

## 3. Horizon Lines Component

### React Implementation

```jsx
const HorizonLines = () => {
  const lines = [];
  const lineCount = 25;
  
  for (let i = 0; i < lineCount; i++) {
    // Perspective: lines closer together at horizon (top)
    const progress = i / lineCount;
    const yPercent = 100 - (Math.pow(1 - progress, 1.5) * 100);
    const opacity = 0.15 + (progress * 0.35);
    
    lines.push(
      <div
        key={i}
        className="absolute left-0 right-0 h-px"
        style={{
          top: `${yPercent}%`,
          backgroundColor: `rgba(202, 202, 196, ${opacity})`,
        }}
      />
    );
  }
  
  return (
    <div className="absolute bottom-0 left-0 right-0 h-1/2">
      {/* Gradient fade at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-1/3 z-10"
        style={{ 
          background: 'linear-gradient(180deg, #1A1A14, transparent)' 
        }}
      />
      {lines}
    </div>
  );
};
```

---

## 4. GSAP Animations (Optional Enhancements)

Install GSAP:
```bash
npm install gsap
```

### Headline Fade Out

```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Headline fades out as coral section covers it
gsap.to('.headline', {
  opacity: 0,
  y: -80,
  ease: 'none',
  scrollTrigger: {
    trigger: '.coral-section',
    start: 'top 80%',
    end: 'top 30%',
    scrub: 1,
  }
});
```

### Sun Scale Effect (Moon Illusion)

```javascript
// Sun appears larger at horizon, shrinks as it rises
gsap.fromTo('.sun', 
  { scale: 1.15 },
  { 
    scale: 0.95,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.coral-section',
      start: 'top bottom',
      end: 'top top',
      scrub: 1,
    }
  }
);
```

### Drawing Circle (Coral Section)

```javascript
// SVG circle draws on scroll
gsap.to('.drawing-circle path', {
  strokeDashoffset: 0,
  ease: 'none',
  scrollTrigger: {
    trigger: '.coral-section',
    start: 'top 60%',
    end: 'bottom 40%',
    scrub: 1,
  }
});
```

### Concentric Circles Orbiting Dot

```javascript
// Orbiting dot animation
gsap.to('.orbiting-dot', {
  rotation: 360,
  duration: 8,
  repeat: -1,
  ease: 'none',
  transformOrigin: 'center center',
  scrollTrigger: {
    trigger: '.outcomes-section',
    start: 'top 80%',
    toggleActions: 'play pause resume pause',
  }
});
```

---

## 5. Complete Hero Component (Next.js/React)

```jsx
'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const headlineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline fade
      gsap.to(headlineRef.current, {
        opacity: 0,
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: '.coral-section',
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ height: '300vh' }}>
      {/* Grey Section (Fixed) */}
      <section className="fixed top-0 left-0 right-0 h-screen bg-[#1A1A14] z-[1] overflow-hidden">
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#FFBFA0] to-[#FA6147]" />
            <span className="text-sm font-medium tracking-wider text-[#E5E5DF]">
              RAYGENCY
            </span>
          </div>
          <div className="flex gap-8 text-sm text-[#E5E5DF]">
            <a href="/about" className="hover:opacity-70">About</a>
            <a href="#how" className="hover:opacity-70">How I Work</a>
            <a href="/contact" className="hover:opacity-70">Contact</a>
          </div>
        </nav>

        {/* Headline */}
        <h1 
          ref={headlineRef}
          className="absolute top-1/3 left-6 md:left-16 max-w-2xl text-4xl md:text-6xl lg:text-7xl font-medium leading-tight text-[#E5E5DF]"
        >
          Intelligent automation<br/>
          transforming<br/>
          small business.
        </h1>

        {/* Horizon Lines */}
        <HorizonLines />
      </section>

      {/* Coral Section (Scrolls) */}
      <section className="coral-section relative mt-[100vh] min-h-screen bg-[#FA6147] z-[2] overflow-visible">
        {/* Sun */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[55vw] max-w-[500px] aspect-square rounded-full z-[3]"
          style={{ 
            background: 'linear-gradient(180deg, #FFBFA0 0%, #FA6147 100%)' 
          }}
        />
        
        {/* Content */}
        <div className="pt-64 md:pt-80 px-6 md:px-16 pb-24">
          <span className="text-xs font-medium tracking-widest uppercase text-white/70">
            Sound Familiar?
          </span>
          <h2 className="text-3xl md:text-5xl font-medium mt-6 leading-tight text-white max-w-2xl">
            You're spending your best hours on work that doesn't need you.
          </h2>
          {/* ... rest of content */}
        </div>
      </section>

      {/* Cream Section (Continues) */}
      <section className="relative bg-[#E5E5DF] z-[2]">
        {/* Rest of page */}
      </section>
    </div>
  );
}

// Horizon Lines Component
function HorizonLines() {
  const lines = [];
  for (let i = 0; i < 25; i++) {
    const progress = i / 25;
    const yPercent = 100 - (Math.pow(1 - progress, 1.5) * 100);
    const opacity = 0.15 + (progress * 0.35);
    
    lines.push(
      <div
        key={i}
        className="absolute left-0 right-0 h-px"
        style={{
          top: `${yPercent}%`,
          backgroundColor: `rgba(202, 202, 196, ${opacity})`,
        }}
      />
    );
  }
  
  return (
    <div className="absolute bottom-0 left-0 right-0 h-1/2">
      <div 
        className="absolute top-0 left-0 right-0 h-1/3 z-10"
        style={{ background: 'linear-gradient(180deg, #1A1A14, transparent)' }}
      />
      {lines}
    </div>
  );
}
```

---

## 6. Responsive Adjustments

```css
/* Mobile */
@media (max-width: 768px) {
  .sun {
    width: 80vw;
    max-width: 350px;
  }
  
  .headline {
    font-size: 2.5rem;
    left: 1.5rem;
    right: 1.5rem;
  }
}
```

---

## 7. Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  
  /* Show static risen state */
  .coral-section {
    margin-top: 0;
  }
}
```

---

## 8. Performance Checklist

- [ ] Use `will-change: transform, opacity` on animated elements
- [ ] Grey section is `position: fixed` (avoids repaints)
- [ ] Limit horizon lines to 25 max
- [ ] Test on mobile Safari (fixed positioning issues)
- [ ] Sun uses CSS gradient, not image
- [ ] GSAP `scrub: 1` for smooth scroll-linked animation

---

## 9. Common Mistakes

❌ Don't animate the sun's Y position independently  
✅ Let it move naturally with its parent (coral section)

❌ Don't use different colors for sun bottom and coral bg  
✅ Make them identical (`#FA6147`) for seamless blend

❌ Don't make the grey section scrollable  
✅ Make it `position: fixed`

❌ Don't put the sun in the grey section  
✅ Put the sun in the coral section with negative offset

---

*Animation Spec v1.0 — January 2026*
*Based on Sunrise Robotics analysis*
