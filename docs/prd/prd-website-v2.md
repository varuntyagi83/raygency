# Raygency Website — Product Requirements Document v2.0

## Overview

**Project:** Marketing website for Raygency, an automation consultancy  
**Goal:** Convert visitors into discovery call bookings  
**Primary CTA:** "Book a Discovery Call" → Cal.com  
**Design Inspiration:** Sunrise Robotics (sunriserobotics.co)

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS 3.4+ |
| UI Components | shadcn/ui (optional) |
| Animation | GSAP + ScrollTrigger |
| Font | Inter (next/font/google) |
| Icons | Lucide React |
| Booking | Cal.com (external link) |
| Contact Form | Supabase |
| Deployment | Vercel |

---

## Site Structure

```
/ (Homepage)
├── Hero with Sunrise Animation
├── Problem Section (Coral)
├── Intro Statement
├── Services Overview (3-4 cards)
├── Outcomes (3-column)
├── Anti-Position Callout
├── Final CTA

/about
├── Hero (name, title, photo, stats)
├── The Story
├── Experience Timeline
├── Philosophy (3 cards)
├── CTA

/services (or individual service pages)
├── Lead Capture & Nurture
├── Business Intelligence Hub
├── Client Operations System
├── Connected Operations
├── AI Readiness Assessment

/contact
├── Contact form
├── Cal.com booking link
```

---

## Services (Outcome-Focused Names)

| Service | Description |
|---------|-------------|
| **Lead Capture & Nurture** | Automated lead identification, qualification, and follow-up |
| **Business Intelligence Hub** | Searchable knowledge system (RAG) for instant business answers |
| **Client Operations System** | End-to-end client onboarding, tracking, and delivery automation |
| **Connected Operations** | Custom workflow automation connecting your existing tools |
| **AI Readiness Assessment** | Strategic session to identify highest-impact automation opportunities |

See `09-services-content.md` for full descriptions.

---

## Page 1: Homepage

### Section 1: Hero (Sunrise Animation)

**Architecture:**
```
┌─────────────────────────────┐
│  GREY SECTION (Fixed)       │ ← position: fixed
│  - Dark bg (#1A1A14)        │
│  - Headline (white)         │
│  - Horizon lines            │
├─────────────────────────────┤
│       ◯ SUN                 │ ← Attached to coral, sticks out 45%
├─────────────────────────────┤
│  CORAL SECTION (Scrolls)    │ ← position: relative, margin-top: 100vh
│  - Coral bg (#FA6147)       │
│  - Content below sun        │
└─────────────────────────────┘
```

**Grey Section (Fixed):**
- Background: `#1A1A14`
- Position: `fixed`, full viewport
- Z-index: 1

**Headline:**
```
Intelligent automation
transforming
small business.
```
- Color: `#E5E5DF` (off-white)
- Size: `text-4xl md:text-6xl lg:text-7xl`
- Position: Top 1/3 of viewport, left-aligned
- Animation: Fades out + moves up as coral section covers it

**Horizon Lines:**
- 20-25 horizontal lines
- Color: `rgba(202, 202, 196, 0.25)`
- Perspective spacing (closer at horizon)
- Positioned in bottom 50% of grey section
- Gradient fade at top edge

**The Sun:**
- Size: 55vw (max 500px)
- Gradient: `#FFBFA0` (top) → `#FA6147` (bottom)
- Position: Attached to top of coral section
- Transform: `translateX(-50%) translateY(-45%)`
- Z-index: 3

**Coral Section (Scrolls):**
- Background: `#FA6147`
- Position: `relative`
- Margin-top: `100vh` (starts below viewport)
- Z-index: 2
- Overflow: `visible` (sun sticks out)

### Section 2: Problem (Inside Coral Section)

**Overline:** "Sound Familiar?"

**Headline:**
```
You're spending your best hours
on work that doesn't need you.
```

**Body (right-aligned):**
```
Your tools don't talk to each other. Leads slip through the cracks.
Client knowledge lives in your inbox. You've built something valuable—
but you're still the glue holding it together.
```

**CTA:** "See How It Works" (white outline button)

**Decoration:** Large drawing circle (SVG) on left side, animates on scroll

### Section 3: Intro Statement

**Background:** `#E5E5DF` (cream)

**Text (large, with coral highlights):**
```
[Raygency is a new kind of automation consultancy.] We don't just
build workflows — we shape how your business operates. Our
[intelligent automation systems] transform existing processes,
effortlessly scale capacity, and [empower you] to focus on the
most valuable work.
```
- Bracketed phrases in coral (`#FA6147`)
- Font size: `text-xl md:text-2xl`

### Section 4: Outcomes (3-Column)

**Background:** `#E5E5DF` (cream)

**Overline:** "What Changes"

**Headline:** "Clarity. Leverage. Growth."

**Columns:**

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| **See. Think. Act.** | **Get the Job Done** | **Grow on Demand** |
| Systems that observe your business, interpret what matters, and execute without you. | Built for your actual workflow. Each automation adapts to how you work. | Add capacity when you need it—without hiring, training, or managing. |
| Circle: 1 ring | Circle: 2 rings | Circle: 3 rings |

**Animated Circles:** Concentric circles with orbiting dot (see Animation Spec)

### Section 5: How I Work (Optional Section)

**Background:** `#F0EBE3` (beige)

**Overline:** "How I Work"

**Headline:** "Understand. Build. Support."

**3 Steps:**
1. **Discovery** — 30-minute call to understand your operations
2. **Design** — Map out automation that fits your workflow
3. **Deliver** — Build, test, and hand over systems that work

### Section 6: Anti-Position Callout

**Background:** `#FA6147` (coral)

**Quote:**
```
"I don't sell one-off automations or tool setups without context.
If a system won't meaningfully change how your business operates,
it won't get built."
```
- White text, centered
- Font size: `text-xl md:text-2xl lg:text-3xl`

### Section 7: Final CTA

**Background:** `#E5E5DF` (cream)

**Headline:**
```
Ready to build systems
that scale without you?
```

**Subhead:** "30 minutes. No pitch. Just clarity."

**CTA:** "Book a Discovery Call" (coral button)

---

## Page 2: About

### Section 1: About Hero

**Background:** `#E5E5DF` (cream)

**Layout:** Two columns on desktop

**Left Column:**
- Overline: "About"
- Name: "Renuka Adnani"
- Title: "Founder, Raygency"
- Brief intro paragraph

**Right Column:**
- Professional photo (optional)

**Stats Row:**
| Stat | Value |
|------|-------|
| Years Experience | 17+ |
| Projects Delivered | 100+ |
| Industries Served | 8+ |

### Section 2: The Story

**Headline:** "From HR Leader to Automation Architect"

**Content:**
```
For 17 years, I built and optimized organizational systems—
onboarding programs, performance frameworks, workforce planning models.
I saw firsthand how the right systems create leverage, and how the
wrong ones drain energy.

Now I help solopreneurs and small teams build that same leverage
through intelligent automation. Not by replacing what makes their
business unique, but by removing the friction that holds them back.
```

### Section 3: Experience Timeline

**Background:** `#F0EBE3` (beige)

**Headline:** "Experience"

**Timeline Items:**

1. **Founder — Raygency** (2024 - Present)
   - Building automation systems for solopreneurs and small teams

2. **Strategic People Business Partner — OnePlus** (Previous)
   - Led organizational transformation for high-growth tech company

3. **HR & People Consultant** (Previous)
   - Advised startups and SMBs on scalable people operations

4. **Senior HR Business Partner** (Previous)
   - Built foundational HR systems for multiple organizations

### Section 4: Philosophy

**Background:** `#E5E5DF` (cream)

**Headline:** "My Approach"

**Content Cards (3 columns):**

| Understanding First | Systems, Not Tools | Built to Last |
|--------------------|--------------------|---------------|
| Every engagement starts with deep listening. I map how your business actually works before proposing solutions. | I don't sell software subscriptions. I build systems that integrate what you already use into something greater. | Automations should work for years, not weeks. I build for maintainability and hand over full documentation. |

### Section 5: CTA

**Background:** `#FA6147` (coral)

**Headline:** "Let's talk about what's possible."

**CTA:** "Book a Discovery Call" (white button)

---

## Page 3: Contact

### Contact Form

**Fields:**
- Name (required)
- Email (required)
- Message (optional)

**Submit:** Stores to Supabase + sends email notification

### Booking Link

"Prefer to book directly? [Schedule a discovery call](cal.com link)"

---

## Supabase Schema

```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'new'
);
```

---

## Animation Requirements

### GSAP + ScrollTrigger

```bash
npm install gsap
```

### Required Animations

1. **Sunrise Effect** — Section overlap (see Animation Spec)
2. **Headline Fade** — Fades out as coral section covers
3. **Drawing Circles** — SVG stroke animation on scroll
4. **Concentric Circles** — Orbiting dots when in view
5. **Text Fade-Up** — Staggered reveal on scroll

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Implementation Phases

### Phase 1: Setup (30 min)
- [ ] Create Next.js project
- [ ] Configure Tailwind + Inter font
- [ ] Install GSAP
- [ ] Set up color variables

### Phase 2: Homepage Hero (2 hrs)
- [ ] Grey section (fixed)
- [ ] Horizon lines component
- [ ] Sun element
- [ ] Coral section (scrolling)
- [ ] Headline fade animation

### Phase 3: Homepage Sections (2 hrs)
- [ ] Problem section content
- [ ] Intro statement with highlights
- [ ] 3-column outcomes
- [ ] Concentric circles
- [ ] Anti-position callout
- [ ] Final CTA

### Phase 4: About Page (1.5 hrs)
- [ ] About hero with stats
- [ ] Story section
- [ ] Experience timeline
- [ ] Philosophy cards
- [ ] CTA section

### Phase 5: Contact + Polish (1 hr)
- [ ] Contact form + Supabase
- [ ] Cal.com integration
- [ ] Navigation
- [ ] Footer
- [ ] Mobile responsive
- [ ] Accessibility review

---

## Open Questions

1. **Photo:** Do you want to include a professional photo on the About page?
2. **Testimonials:** Do you have testimonials to include?
3. **Case Studies:** Should we add a Results/Portfolio page later?
4. **Cal.com:** What's your Cal.com booking link?

---

*PRD v2.0 — January 2026*
*Includes: Sunrise Animation + About Page*
