import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#152eff',
        secondary: '#3b82f6',
        accent: '#D4AF37',
        gold: '#D4AF37',
        'brand-blue': '#152eff',
        muted: '#94a3b8',
        slate: {
          panel: '#475569',
        },
      },
      fontFamily: {
        sans: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        header: '0 4px 15px rgba(0, 0, 0, 0.08)',
        panel: '0 10px 30px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
      },
      animation: {
        pulseRing: 'pulseRing 2s ease-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
