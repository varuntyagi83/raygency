# Raygency Website — Feature Specifications

## F001: Homepage

### F001-01: Hero Section
- **AC01:** Full viewport height, midnight background (#110B1E)
- **AC02:** Gradient orbs (coral + purple) as background decoration
- **AC03:** Floating glass shapes (circle, rounded square) on right side
- **AC04:** Headline: "Your operations are costing you more than you think." in off-white (#E5E5DF)
- **AC05:** Subhead in muted purple-tinted gray (#C0B8D0)
- **AC06:** Tagline: "Agency-level capability. Boutique-level execution."
- **AC07:** Coral CTA button linking to https://cal.com/raygency
- **AC08:** CSS fade-in animation on page load
- **AC09:** Respects prefers-reduced-motion

### F001-02: Intro Statement
- **AC01:** Light cream background (#E5E5DF)
- **AC02:** Copy positions Raygency as built for operational complexity
- **AC03:** Orange-highlighted key phrases
- **AC04:** Fade-up animation on scroll

### F001-03: Problem Section (Coral)
- **AC01:** Full-width coral background (#FA6147)
- **AC02:** "Sound Familiar?" overline
- **AC03:** Headline: "At your scale, inefficiency isn't an inconvenience. It's a liability."
- **AC04:** Body copy addresses disconnected systems, manual processes, institutional knowledge
- **AC05:** Drawing circle SVG animation on scroll

### F001-04: Outcomes Section (Dark Glass)
- **AC01:** Midnight background (#110B1E) with gradient orbs
- **AC02:** Three glass cards: Operational Visibility, Precision Execution, Scalable Capacity
- **AC03:** Section header: "What Changes" / "Clarity. Leverage. Growth."
- **AC04:** Concentric circle animations with orbiting dot
- **AC05:** Glass card hover effect (brighten bg + border)
- **AC06:** Fade-up animations on scroll

### F001-05: Services Overview (Light)
- **AC01:** Light cream-soft background (#F8F7F7)
- **AC02:** Five service cards: Revenue Operations Automation, Operational Intelligence Platform, Client Delivery Automation, Enterprise Workflow Integration, Operational Assessment
- **AC03:** Each card has icon, title, tagline
- **AC04:** Assessment card has CTA linking to /contact

### F001-06: Process Section (Dark Glass)
- **AC01:** Midnight background (#110B1E) with gradient orbs
- **AC02:** Three glass cards: Operational Assessment, System Architecture, Build & Transfer
- **AC03:** Numbered 01/02/03 in coral
- **AC04:** Glass card hover effect

### F001-07: Anti-Position Quote
- **AC01:** Coral background, centered white text
- **AC02:** Quote references CFO-visible outcomes
- **AC03:** Overlap section animation

### F001-08: Final CTA (Light)
- **AC01:** "Ready to turn operational drag into competitive advantage?"
- **AC02:** "30 minutes. No pitch deck." subhead
- **AC03:** "Book a Discovery Call" coral button linking to https://cal.com/raygency

## F002: About Page

### F002-01: Hero (Dark)
- **AC01:** Midnight background with gradient orbs
- **AC02:** Two-column layout (text + photo)
- **AC03:** Name: "Renuka Adnani", Title: "Founder, Raygency"
- **AC04:** Intro paragraph in personal voice ("For 17 years, I built...")
- **AC05:** Optimized photo (<500KB) with subtle border
- **AC06:** Dark variant navigation

### F002-02: Story Section (Light)
- **AC01:** Headline: "We see where systems break before they break."
- **AC02:** Narrative emphasizes pattern-spotting, systems thinking, anti-fragility
- **AC03:** Agency voice ("We") throughout
- **AC04:** No references to solopreneurs/small teams
- **AC05:** Mentions CEOs, CFOs, COOs as target clients

### F002-03: How We Think (Dark Glass)
- **AC01:** Midnight background with gradient orbs
- **AC02:** Three glass cards: Pattern Recognition, Systems Architecture, Anti-Fragility Design
- **AC03:** Glass card hover effect

### F002-04: How We Work (Light)
- **AC01:** Three cards: Diagnosis Before Prescription, Architecture Not Patches, Built to Scale
- **AC02:** Hover lift effect on cards

### F002-05: Anti-Position Callout
- **AC01:** Coral background, C-suite version of quote

### F002-06: CTA (Light)
- **AC01:** "Book a Discovery Call" linking to https://cal.com/raygency (external, new tab)
- **AC02:** "30 minutes. No pitch deck." subhead

## F003: Contact Page

### F003-01: Hero (Dark)
- **AC01:** Midnight background with gradient orbs
- **AC02:** "Let's talk about what's costing you." headline
- **AC03:** Dark variant navigation

### F003-02: Book a Call Card
- **AC01:** Coral card with Cal.com booking link
- **AC02:** Links to https://cal.com/raygency (opens new tab)

### F003-03: Contact Form
- **AC01:** Name (required), Email (required), Message (optional)
- **AC02:** Client-side validation
- **AC03:** Success state with confirmation message
- **AC04:** TODO: Supabase backend integration

### F003-04: What to Expect (Dark Glass)
- **AC01:** Midnight background with gradient orbs
- **AC02:** Three glass cards explaining discovery call process (C-suite framing)
- **AC03:** Glass card hover effect

### F003-05: Bottom CTA (Light)
- **AC01:** "Book Your Discovery Call" linking to https://cal.com/raygency

## F004: Navigation & Footer

### F004-01: Navigation
- **AC01:** Fixed top nav, z-index 100
- **AC02:** Dark variant (midnight pages) and light variant (scrolled/light pages)
- **AC03:** Mobile hamburger menu (midnight background)
- **AC04:** Links: About us, Services (#services anchor), Contact
- **AC05:** Logo: gradient circle + "RAYGENCY" text
- **AC06:** Transitions from transparent to cream with blur on scroll

### F004-02: Footer
- **AC01:** Logo, tagline ("Intelligent automation for established businesses"), nav links
- **AC02:** Copyright with dynamic year

### F004-03: Favicon
- **AC01:** SVG glassmorphic orange orb
- **AC02:** Radial gradient (peach to coral) with glass highlight overlay

## F005: Animations

### F005-01: Hero Fade-In
- **AC01:** CSS-only fade-in with translateY(20px → 0)
- **AC02:** 800ms duration, 200ms delay, ease-out
- **AC03:** Respects prefers-reduced-motion

### F005-02: Fade-Up
- **AC01:** Elements with `.fade-up` class animate on scroll
- **AC02:** 600ms duration, power2.out easing
- **AC03:** Triggered at 85% viewport intersection

### F005-03: Overlap Sections
- **AC01:** Sections with `.overlap-section` slide up 8% on scroll
- **AC02:** Creates layered paper stacking effect

### F005-04: Concentric Circles
- **AC01:** Configurable ring count (1-3)
- **AC02:** Orbiting coral dot with 8s rotation

### F005-05: Drawing Circle
- **AC01:** SVG stroke draws on scroll in coral section
- **AC02:** Scroll-scrubbed animation

### F005-06: Glassmorphism
- **AC01:** `.glass-card` with backdrop-blur(16px), rgba(255,255,255,0.05) bg, subtle border
- **AC02:** `.glass-card-hover` brightens bg and border on hover
- **AC03:** `.orb` gradient blurred circles as background decoration
- **AC04:** `.glass-shape` floating frosted glass decorative elements

## F006: Services Page (Planned — Phase 2)
- **Status:** Not yet built
- **AC01:** Dedicated page at /services
- **AC02:** Individual sections for each of 5 services
- **AC03:** C-suite language matching homepage positioning
- **AC04:** See docs/ui-ux/09-services-content.md for original content (needs C-suite rewrite)
