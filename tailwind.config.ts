/** @type {import('tailwindcss').Config} */
module.exports = {
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
          dark: '#A07830',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          2: '#111111',
          3: '#161616',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounceSlow 2s infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'stagger-in': 'fadeUp 0.6s ease forwards',
        'glow': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(201,168,76,0.5)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #A07830 100%)',
        'gold-gradient-h': 'linear-gradient(90deg, #C9A84C 0%, #E8C97A 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
