# Raygency Website

## Project
Marketing website for Raygency — an automation consultancy targeting C-suite executives (CEO, COO, CFO) at established businesses.

**Goal:** Convert visitors into discovery call bookings via Cal.com.

## Target Audience
CEOs, CFOs, and COOs at established businesses ($10M+) who need operational automation to eliminate inefficiency, recover capacity, and scale without growing headcount.

## Stack
| Component | Technology |
|-----------|------------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS 3.4 |
| Animation | GSAP + ScrollTrigger |
| Font | Outfit (next/font/google) |
| Icons | Lucide React |
| Booking | Cal.com (https://cal.com/raygency) |
| Contact Form | Mock (Supabase integration planned) |
| Deployment | Vercel (raygency.vercel.app) |

## Phase Plan
| Phase | Name | Status |
|-------|------|--------|
| 1 | Project kickstart + C-suite repositioning + hero replacement | Complete |
| 1.5 | Midnight glassmorphism redesign + Outfit font | Complete |
| 2 | Services page + Supabase contact form + SEO metadata | Planned |
| 3 | Testimonials + case studies + analytics | Planned |
| 4 | Blog/content section (if needed) | Backlog |

## Design Direction
- **Theme:** Midnight glassmorphism with dark/light section rhythm
- **Hero:** Midnight purple-black (#110B1E) with gradient orbs + floating glass shapes
- **Section flow:** Dark (midnight + glass) → Light (cream) alternating pattern
- **Glass cards:** Used on dark sections (Outcomes, Process, How We Think, What to Expect)
- **Light sections:** Clean cards with cream/white backgrounds
- **Coral accent:** Used for problem sections and quotes

## File Structure
```
src/
  app/
    page.tsx              # Homepage
    about/page.tsx        # About page
    contact/page.tsx      # Contact page
    layout.tsx            # Root layout (Outfit font)
    globals.css           # CSS variables, animations, glass utilities
    icon.svg              # Favicon (glassmorphic orange orb)
  components/
    Navigation.tsx        # Fixed nav, dark/light variants
    Footer.tsx            # Site footer
    ConcentricCircles.tsx # Animated concentric rings
    DrawingCircle.tsx     # SVG stroke-draw animation
docs/
  prd/                    # Product requirements
  research/               # Positioning, site structure, messaging
  ui-ux/                  # Design guidelines, animation spec, content
  delivery/               # Delivery notes per phase
  brainstorms/            # Exploration docs
  plans/                  # Implementation plans
  solutions/              # Problem-solution docs
specs/
  features.md             # Feature specs (F###/AC## format)
tests/
  TEST_PLAN.md            # Test strategy
e2e/
  homepage.spec.ts        # Playwright E2E tests (17 tests)
_reference/               # Gitignored: source photos, design mockups, old docs
public/
  renuka-adnani.jpg       # Optimized about page photo
```

## Commands
- `npm run dev` — Start dev server (port 3000)
- `npm run build` — Production build
- `npx playwright test` — Run E2E tests
- `npx playwright test --update-snapshots` — Regenerate screenshot baselines

## Environment Variables
None currently. Future:
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anonymous key

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Midnight | #110B1E | Hero + dark sections background |
| Coral/accent | #FA6147 | Buttons, highlights, coral sections |
| Coral hover | #E04A32 | Button hover state |
| Cream | #E5E5DF | Light section backgrounds |
| Cream soft | #F8F7F7 | Alternate light backgrounds |
| Light text | #E5E5DF | Headings on dark sections |
| Muted text (dark) | #C0B8D0 | Body text on dark sections (purple-tinted) |
| Text primary | #2B2926 | Headings on light sections |
| Text secondary | #77736E | Body text on light sections |
| Orb coral | rgba(250,97,71,0.2) | Gradient orbs on dark sections |
| Orb purple | rgba(100,60,180,0.25) | Gradient orbs on dark sections |

## CSS Utilities
| Class | Purpose |
|-------|---------|
| `.glass-card` | Frosted glass card (backdrop-blur, subtle border) |
| `.glass-card-hover` | Hover state for glass cards |
| `.orb` | Absolute-positioned gradient blur orb |
| `.glass-shape` | Floating glass decorative shape |
| `.hero-fade-in` | CSS fade-in animation for hero content |
| `.fade-up` | GSAP scroll-triggered fade-up |
| `.overlap-section` | GSAP scroll-triggered slide-up overlap |
| `.hover-lift` | Card hover with translateY + shadow |
| `.btn-hover` | Button hover scale effect |

## Brand Voice
- Tone: Calm, strategic, advisor-level
- Register: Executive, not braggy
- Style: Plain language over jargon, specific over vague
- Tagline: "Agency-level capability. Boutique-level execution."
- Agency voice: Always "we/our", never "I/my" (except hero intro under Renuka's name)
- No em-dashes — use periods or commas instead

## Open Questions
| # | Question | Status |
|---|----------|--------|
| 1 | Is https://cal.com/raygency fully configured? | Open |
| 2 | Which Supabase project for contact form? | Open |
| 3 | Services page — separate page or homepage overview only? | Open |
| 4 | Domain — is raygency.com pointed to Vercel? | Open |
| 5 | Analytics — Google Analytics, Plausible, or Vercel Analytics? | Open |
