/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0b1a2e',
        'primary-mid': '#1a3a5c',
        'gold': '#facc15',
        'gold-dark': '#f59e0b',
        'soft-bg': '#f8fafc',
        'text-dark': '#1e293b',
        'text-muted': '#64748b',
        'text-light': '#94a3b8',
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#facc15',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        brand: {
          dark: '#0b1a2e',
          mid: '#1a3a5c',
          gold: '#facc15',
          goldDark: '#f59e0b',
          softBg: '#f8fafc',
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      borderRadius: {
        'sm': '16px',
        'md': '20px',
        'lg': '24px',
      },
      boxShadow: {
        'sm': '0 4px 16px rgba(0, 0, 0, 0.04)',
        'md': '0 8px 30px rgba(0, 0, 0, 0.06)',
        'lg': '0 20px 60px rgba(0, 0, 0, 0.1)',
        'xl': '0 30px 80px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
