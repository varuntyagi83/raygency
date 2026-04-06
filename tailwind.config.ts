import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // === RAYGENCY PALETTE (Cobalt + Teal + Copper) ===
        bg: '#020810',
        ink: '#030509',
        cobalt: '#163AC4',
        sapphire: '#1060C0',
        teal: {
          DEFAULT: '#0D9BB0',
          lt: '#18C0D9',
        },
        copper: {
          DEFAULT: '#C4612A',
          lt: '#E07840',
          bright: '#F0A030',
        },
        // Text
        text: '#EAE8F4',
        'text-dim': 'rgba(234,232,244,0.50)',
        'text-mid': 'rgba(234,232,244,0.75)',
        // Legacy aliases (mapped to new palette)
        orange: {
          DEFAULT: '#F0A030',
          hover: '#E07840',
          light: '#C4612A',
        },
        coral: {
          DEFAULT: '#F0A030',
          hover: '#E07840',
          light: '#C4612A',
        },
        'light-gray': '#0a0f1a',
        'mid-gray': '#0d1220',
        charcoal: '#EAE8F4',
        'dark-gray': '#141a2a',
        midnight: {
          DEFAULT: '#020810',
          light: '#0a0f1a',
        },
        hero: {
          dark: '#020810',
        },
        cream: {
          DEFAULT: 'rgba(13,155,176,0.15)',
          soft: '#030509',
          white: 'rgba(13,155,176,0.04)',
        },
        stone: 'rgba(234,232,244,0.55)',
        sand: {
          0: '#EAE8F4',
          10: '#030509',
          20: 'rgba(13,155,176,0.15)',
          30: 'rgba(13,155,176,0.20)',
          40: 'rgba(234,232,244,0.25)',
          50: 'rgba(234,232,244,0.55)',
          60: 'rgba(234,232,244,0.65)',
          70: '#0a0f1a',
          80: '#EAE8F4',
          90: '#000000',
        },
        slate: '#1060C0',
        horizon: 'rgba(13,155,176,0.15)',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'sunrise-sm': '0 1px 3px rgba(0, 0, 0, 0.15)',
        'sunrise-md': '0 4px 8px rgba(0, 0, 0, 0.20)',
        'sunrise-lg': '0 8px 16px rgba(0, 0, 0, 0.25)',
        'sunrise-xl': '0 12px 24px rgba(0, 0, 0, 0.30)',
        'sunrise-2xl': '0 20px 40px rgba(0, 0, 0, 0.35)',
        // Brutalist 3D shadows
        'brutal-teal': '6px 6px 0px #0D9BB0',
        'brutal-teal-hover': '3px 3px 0px #0D9BB0',
        'brutal-copper': '6px 6px 0px rgba(196,97,42,0.25)',
      },
    },
  },
  plugins: [],
}
export default config
