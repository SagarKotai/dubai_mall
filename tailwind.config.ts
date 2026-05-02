import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C97A',
          dark: '#8B6914',
          glow: 'rgba(201,168,76,0.15)',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          2: '#111111',
          3: '#1A1A1A',
          4: '#222222',
        },
        glass: 'rgba(255,255,255,0.04)',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #8B6914 100%)',
        'gold-gradient-h': 'linear-gradient(90deg, #C9A84C 0%, #E8C97A 100%)',
        'radial-gold': 'radial-gradient(ellipse 60% 60% at 30% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
