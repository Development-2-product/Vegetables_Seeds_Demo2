/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FBF9F4',
          100: '#F7F3EA',
          200: '#EFE9DA',
          300: '#E3DAC6',
        },
        ink: {
          900: '#1F1D1A',
          800: '#2B2823',
          700: '#3D3933',
          600: '#524D45',
          500: '#6B655B',
          400: '#8A8478',
        },
        terracotta: {
          50: '#FCF1ED',
          100: '#F8E1D8',
          400: '#D96D43',
          500: '#C75A30',
          600: '#A8472A',
          700: '#8A3922',
        },
        mustard: {
          50: '#FDF6E3',
          100: '#FAEBB8',
          400: '#E0B83A',
          500: '#CFA020',
          600: '#A8841A',
        },
        cobalt: {
          50: '#EAF0FA',
          100: '#D2E0F5',
          400: '#2D63C8',
          500: '#1E4FA8',
          600: '#163D82',
        },
        leaf: {
          400: '#5B8C3E',
          500: '#4A7332',
          600: '#3A5C27',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'headline': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        'edge': '1320px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
        'scale-in': 'scale-in 0.25s ease-out forwards',
      },
    },
  },
  plugins: [],
};
