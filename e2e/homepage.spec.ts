import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    // Wait for the page to fully load
    await page.waitForLoadState('networkidle')
  })

  test('page loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Raygency/)
    // Check that the main headline is visible
    await expect(page.locator('h1')).toContainText('Your operations are costing you more than you think')
  })

  test('navigation links are present', async ({ page }) => {
    // Desktop navigation
    await expect(page.locator('nav').getByRole('link', { name: 'About us' })).toBeVisible()
    await expect(page.locator('nav').getByRole('link', { name: 'Services' })).toBeVisible()
    await expect(page.locator('nav').getByRole('link', { name: 'Contact' })).toBeVisible()
  })

  test('hero section has dark background and headline', async ({ page }) => {
    // Target the first section on the page (the hero)
    const heroSection = page.locator('section').first()
    await expect(heroSection).toBeVisible()

    // Check dark background color (#110B1E = rgb(17, 11, 30))
    const bgColor = await heroSection.evaluate(el => window.getComputedStyle(el).backgroundColor)
    expect(bgColor).toMatch(/rgb\(17,\s*11,\s*30\)|#110B1E/i)
  })

  test('hero has CTA linking to cal.com/raygency', async ({ page }) => {
    const cta = page.locator('a[href="https://cal.com/raygency"]').first()
    await expect(cta).toBeVisible()
    await expect(cta).toContainText('Book a Discovery Call')
  })

  test('hero displays tagline', async ({ page }) => {
    await expect(page.getByText('Agency-level capability. Boutique-level execution.')).toBeVisible()
  })
})

test.describe('Overlapping Sections', () => {
  test('overlap sections have correct z-index stacking', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Scroll to see overlapping sections
    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 2))
    await page.waitForTimeout(500)

    const overlapSections = page.locator('.overlap-section')
    const count = await overlapSections.count()

    // Should have multiple overlap sections
    expect(count).toBeGreaterThanOrEqual(3)

    // Get z-index values for each section
    const zIndexes: number[] = []
    for (let i = 0; i < count; i++) {
      const zIndex = await overlapSections.nth(i).evaluate(el => {
        const style = window.getComputedStyle(el)
        return parseInt(style.zIndex) || 0
      })
      zIndexes.push(zIndex)
    }

    // Each section should have higher z-index than the previous (for stacking)
    for (let i = 1; i < zIndexes.length; i++) {
      expect(zIndexes[i]).toBeGreaterThanOrEqual(zIndexes[i - 1])
    }
  })

  test('overlap sections have shadows', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Scroll to the overlap sections area
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.6))
    await page.waitForTimeout(1000)

    const overlapSections = page.locator('.overlap-section')
    const count = await overlapSections.count()
    expect(count).toBeGreaterThanOrEqual(2)

    // Check that at least one overlap section has a box shadow via inline style or class
    let hasShadow = false
    for (let i = 0; i < count; i++) {
      const shadow = await overlapSections.nth(i).evaluate(el =>
        window.getComputedStyle(el).boxShadow
      )
      if (shadow && shadow !== 'none') {
        hasShadow = true
        break
      }
    }
    expect(hasShadow).toBe(true)
  })
})

test.describe('Page Navigation', () => {
  test('About us link navigates correctly', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await page.locator('nav').getByRole('link', { name: 'About us' }).click()
    await page.waitForURL('**/about')

    await expect(page).toHaveURL(/\/about/)
  })

  test('Services anchor link scrolls to services section', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Click services link
    await page.locator('nav').getByRole('link', { name: 'Services' }).click()

    // Wait for smooth scroll
    await page.waitForTimeout(1000)

    // Check that services section is in view
    const servicesSection = page.locator('#services')
    await expect(servicesSection).toBeInViewport()
  })

  test('Contact link navigates correctly', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await page.locator('nav').getByRole('link', { name: 'Contact' }).click()
    await page.waitForURL('**/contact')

    await expect(page).toHaveURL(/\/contact/)
  })
})

test.describe('Content Sections', () => {
  test('coral section has problem statement content', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Scroll to coral section
    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.5))
    await page.waitForTimeout(500)

    const coralSection = page.locator('.coral-section')
    await expect(coralSection.locator('text=Sound Familiar?')).toBeVisible()
    await expect(coralSection.locator('h2')).toContainText("inefficiency isn't an inconvenience")
  })

  test('outcomes section has three columns', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Scroll to outcomes section
    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 2.5))
    await page.waitForTimeout(500)

    // Check for the three outcome headers
    await expect(page.locator('h3:has-text("Clarity")')).toBeVisible()
    await expect(page.locator('h3:has-text("Leverage")')).toBeVisible()
    await expect(page.locator('h3:has-text("Growth")')).toBeVisible()
  })

  test('services section has C-suite service cards', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Scroll to services section
    const servicesSection = page.locator('#services')
    await servicesSection.scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)

    // Check for updated service titles
    await expect(page.locator('h3:has-text("Revenue Operations")')).toBeVisible()
    await expect(page.locator('h3:has-text("Operational Intelligence")')).toBeVisible()
    await expect(page.locator('h3:has-text("Client Delivery")')).toBeVisible()
    await expect(page.locator('h3:has-text("Enterprise Workflow")')).toBeVisible()
  })

  test('CTA buttons are present and clickable', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Scroll to bottom for final CTA
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(500)

    const bookCallButton = page.getByRole('link', { name: 'Book a Discovery Call' }).first()
    await expect(bookCallButton).toBeVisible()
  })

  test('anti-position quote mentions CFO', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight - 500))
    await page.waitForTimeout(500)

    await expect(page.getByText('outcome your CFO can see')).toBeVisible()
  })
})

test.describe('Visual Regression - Screenshots', () => {
  test('homepage hero screenshot', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await expect(page).toHaveScreenshot('homepage-hero.png', {
      fullPage: false,
      maxDiffPixelRatio: 0.1,
    })
  })

  test('overlapping sections screenshot', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Scroll to overlapping area
    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 2.2))
    await page.waitForTimeout(1000)

    await expect(page).toHaveScreenshot('overlapping-sections.png', {
      fullPage: false,
      maxDiffPixelRatio: 0.15,
    })
  })
})
