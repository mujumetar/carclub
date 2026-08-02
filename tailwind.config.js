/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brutal-base': '#080A10',
        'brutal-primary': '#F8FAFC',
        'brutal-red': '#E1251B',
        'brutal-orange': '#F59E0B',
        'brutal-pink': '#FF3B5C',
        'brutal-gray': '#111520',
        'brutal-dark-gray': '#94A3B8',
        'luxury-dark': '#080A10',
        'luxury-card': '#111520',
        'luxury-border': 'rgba(255, 255, 255, 0.1)',
        'luxury-gold': '#F59E0B',
        'luxury-cyan': '#00F2FE',
      },
      fontFamily: {
        clash: ['"Clash Display"', '"Anek Gujarati"', '"Noto Sans Gujarati"', 'sans-serif'],
        satoshi: ['"Satoshi"', '"Noto Sans Gujarati"', '"Anek Gujarati"', 'sans-serif'],
        gujarati: ['"Anek Gujarati"', '"Noto Sans Gujarati"', 'sans-serif'],
      },
      transitionTimingFunction: {
        'brutal-ease': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        pulseBlob: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1) translate(0px, 0px)' },
          '50%': { opacity: '0.9', transform: 'scale(1.08) translate(15px, -15px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'pulse-blob': 'pulseBlob 12s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}
