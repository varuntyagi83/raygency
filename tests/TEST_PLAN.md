# Raygency Website — Test Plan

## E2E Tests (Playwright)

### Current: 17 tests, all passing

### Smoke Tests
- [x] All pages load (/, /about, /contact)
- [x] Navigation works between pages
- [ ] No console errors on page load

### Hero Tests
- [x] Midnight background (#110B1E / rgb(17, 11, 30)) visible
- [x] Headline text: "Your operations are costing you more than you think."
- [x] CTA button links to https://cal.com/raygency
- [x] Tagline: "Agency-level capability. Boutique-level execution."
- [x] Fade-in animation plays (or static if reduced motion)

### Content Tests
- [x] Intro statement section visible
- [x] Coral problem section with "Sound Familiar?" visible
- [x] Outcomes section has 3 columns
- [x] Services section has 5 cards (C-suite service names)
- [x] Process section has 3 steps
- [x] Anti-position quote visible (mentions CFO)
- [x] Final CTA visible

### Overlapping Sections
- [x] Z-index stacking order correct
- [x] Shadows present on overlap sections

### Visual Regression
- [x] Homepage hero screenshot baseline
- [x] Overlapping sections screenshot baseline

### Contact Page Tests
- [ ] Form validation (required fields)
- [x] Cal.com link correct (https://cal.com/raygency)
- [ ] Form submission shows success state

### About Page Tests
- [ ] Photo loads (renuka-adnani.jpg)
- [ ] Name displays as "Renuka Adnani"
- [ ] Dark hero with midnight background

### Responsive Tests
- [ ] Mobile navigation hamburger works
- [ ] Hero readable on mobile
- [ ] Glass cards stack on mobile
- [ ] No horizontal overflow

### Accessibility Tests
- [ ] prefers-reduced-motion respected
- [ ] All images have alt text
- [ ] Form labels connected to inputs
- [ ] Sufficient color contrast (especially on glass cards)

### Glassmorphism-Specific Tests (TODO)
- [ ] Glass cards visible on midnight sections
- [ ] Gradient orbs render (not visible as elements, but bg effect present)
- [ ] Glass card hover state works
- [ ] Backdrop-filter supported (graceful fallback check)

## Running Tests
```bash
npx playwright test                    # All tests
npx playwright test e2e/homepage.spec  # Homepage only
npx playwright test --ui               # UI mode
npx playwright show-report             # View report
npx playwright test --update-snapshots # Regenerate baselines
```
