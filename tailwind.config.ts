import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Your existing color scheme
        'aleo-yellow': 'var(--aleo-yellow)',
        'aleo-mint': 'var(--aleo-mint)',
        'aleo-coral': 'var(--aleo-coral)',
        'aleo-pink': 'var(--aleo-pink)',
      },
    },
  },
  plugins: [],
}

export default config
