import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6',
        'background-light': '#f5f7f8',
        'background-dark': '#0d021f',
        'neon-cyan': '#ff00ff',
        'neon-purple': '#bc13fe',
        'violet-accent': '#a855f7',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Noto Sans KR', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
} satisfies Config
