# Raygency UI/UX Design Guidelines v3.0

## Design Philosophy

The Raygency website combines **Japandi warmth** (cream backgrounds, natural tones) with **Sunrise-inspired animations** (rising sun, confident coral accent). The result feels like a calm, confident advisor who brings clarity to chaos.

**Visual Personality:** Morning light breaking through — warm, clear, inevitable.

---

## 1. Color Palette

### Primary Accent: Coral

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| **Primary** | Sunrise Coral | `#FA6147` | Buttons, sun, highlights |
| **Hover** | Deep Coral | `#E04A32` | Button hover |
| **Light** | Pale Coral | `#FEE8E4` | Light backgrounds |
| **Sun Top** | Soft Peach | `#FFBFA0` | Sun gradient top |

### Backgrounds

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| **Hero Dark** | Charcoal | `#1A1A14` | Dark hero |
| **Primary** | Warm Cream | `#E5E5DF` | Main sections |
| **Secondary** | Soft Beige | `#F0EBE3` | Alternate sections |
| **Tertiary** | Warm White | `#FAF8F5` | Cards |

### Text

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| **On Dark** | Off-White | `#E5E5DF` | Hero text |
| **Primary** | Charcoal | `#2D2A26` | Headings, body |
| **Secondary** | Warm Stone | `#6B6560` | Subheadings |
| **Accent** | Coral | `#FA6147` | Highlights |

### Special

| Role | Hex | Usage |
|------|-----|-------|
| **Horizon Lines** | `rgba(202, 202, 196, 0.25)` | Hero grid |
| **Slate Section** | `#545268` | Dark content section |

---

## 2. Typography

**Font:** Inter (weights 400, 500 only)

| Element | Tailwind |
|---------|----------|
| H1 Hero | `text-4xl md:text-6xl lg:text-7xl font-medium leading-tight` |
| H2 Section | `text-3xl md:text-4xl lg:text-5xl font-medium` |
| H3 Card | `text-xl md:text-2xl font-medium` |
| Body Large | `text-lg md:text-xl leading-relaxed` |
| Body | `text-base md:text-lg leading-relaxed` |
| Overline | `text-xs font-medium tracking-widest uppercase` |

**Rules:** Never use bold (700). Medium (500) is max weight.

---

## 3. Sun Element

| Property | Value |
|----------|-------|
| Size | `55vw` (max 500px) |
| Gradient | `#FFBFA0` top → `#FA6147` bottom |
| Position | `translateY(-45%)` above coral section |

**Critical:** Sun bottom color MUST match coral section background.

---

## 4. Components

### Primary Button
```jsx
<button className="bg-[#FA6147] hover:bg-[#E04A32] text-white px-8 py-4 rounded-full font-medium">
  Book a Discovery Call
</button>
```

### Secondary Button (on dark)
```jsx
<button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium">
  See How It Works
</button>
```

### Card
```jsx
<div className="bg-[#FAF8F5] rounded-2xl p-8 md:p-10 border border-[#E5E5DF]">
  {/* Content */}
</div>
```

---

## 5. Page Section Flow

```
Hero (Dark #1A1A14)
  ↓ Sun rises
Coral Section (#FA6147) — Problems
  ↓
Cream Section (#E5E5DF) — Intro + Outcomes
  ↓
Beige Section (#F0EBE3) — How I Work
  ↓
Coral Callout (#FA6147) — Anti-position
  ↓
Cream Section (#E5E5DF) — About / CTA
  ↓
Footer (#F0EBE3)
```

---

## 6. Animation Guidelines

- **Sunrise:** Section overlap technique (no JS animation needed)
- **GSAP scrub:** 1 second for smooth scroll-linked animations
- **Fade-up:** 600ms, `power2.out` easing
- Respect `prefers-reduced-motion`

---

*UI/UX Guidelines v3.0 — January 2026*
