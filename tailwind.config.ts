import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          bg: 'hsl(45 20% 94%)',
          surface: 'hsl(45 15% 90%)',
          fg: 'hsl(0 0% 8%)',
          accent: 'hsl(0 80% 52%)',
          muted: 'hsl(45 5% 55%)',
          border: 'hsl(0 0% 8%)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        sm: '0px',
        DEFAULT: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '0px',
      },
      transitionDuration: {
        DEFAULT: '150ms',
        fast: '100ms',
        normal: '200ms',
      },
      boxShadow: {
        brutal: '4px 4px 0px hsl(0 0% 8%)',
        'brutal-lg': '6px 6px 0px hsl(0 0% 8%)',
        'brutal-accent': '4px 4px 0px hsl(0 80% 52%)',
        'brutal-hover': '6px 6px 0px hsl(0 0% 8%)',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.06)' },
        },
      },
      animation: {
        'ken-burns': 'ken-burns 12s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config
