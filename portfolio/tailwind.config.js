/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#080b12',
          900: '#0d121c',
          800: '#141b29',
          700: '#1d2636',
          600: '#2a3548',
        },
        accent: {
          DEFAULT: '#f59e0b',
          soft: '#fbbf24',
        },
        sky2: '#38bdf8',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        flow: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 24px' },
        },
        flowx: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '24px 0' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        flow: 'flow 1.2s linear infinite',
        flowx: 'flowx 1.2s linear infinite',
        pulseDot: 'pulseDot 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
