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
        // Sand Palette (Sunrise Robotics)
        sand: {
          0: '#ffffff',
          10: '#f8f7f7',
          20: '#ebebea',
          30: '#d8d6d4',
          40: '#b0adab',
          50: '#77736e',
          60: '#585450',
          70: '#3f3c39',
          80: '#2b2926',
          90: '#000000',
        },
        // Primary Accent: Orange (Sunrise) / Coral (alias)
        orange: {
          DEFAULT: '#fa6147',
          hover: '#e04a32',
          light: '#ffbfa0',
        },
        coral: {
          DEFAULT: '#fa6147',
          hover: '#e04a32',
          light: '#fee8e4',
        },
        // Backgrounds
        'light-gray': '#e5e5df',
        'mid-gray': '#cacac4',
        charcoal: '#0e0e08',
        'dark-gray': '#333328',
        midnight: {
          DEFAULT: '#110B1E',
          light: '#1a1230',
        },
        // Aliases for backward compatibility
        hero: {
          dark: '#110B1E',
        },
        cream: {
          DEFAULT: '#e5e5df',
          soft: '#f8f7f7',
          white: '#ffffff',
        },
        // Text
        stone: '#77736e',
        // Special
        slate: '#545268',
        horizon: 'rgba(202, 202, 196, 0.25)',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'sunrise-sm': '0 1px 3px rgba(46, 43, 41, 0.08)',
        'sunrise-md': '0 4px 8px rgba(46, 43, 41, 0.1)',
        'sunrise-lg': '0 8px 16px rgba(46, 43, 41, 0.12)',
        'sunrise-xl': '0 12px 24px rgba(46, 43, 41, 0.14)',
        'sunrise-2xl': '0 20px 40px rgba(46, 43, 41, 0.18)',
      },
    },
  },
  plugins: [],
}
export default config
