/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        brand: ['"Instrument Sans"', 'Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        green: {
          50:  '#edf7f2',
          100: '#c9e9d8',
          200: '#99d4b8',
          300: '#63bc95',
          400: '#2f9e6e',
          500: '#1a6641',
          600: '#0C3D22',
          700: '#092d19',
          800: '#061e10',
          900: '#030f08',
        },
        sand: {
          50:  '#FBFAF7',
          100: '#F6F5F1',
          200: '#ECEAE2',
          300: '#DAD7CB',
        },
        ink: {
          DEFAULT: '#131714',
          soft: '#3F4842',
          mute: '#5C655F',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(12,61,34,.05), 0 18px 40px -18px rgba(12,61,34,.22)',
        pop: '0 2px 4px rgba(12,61,34,.06), 0 40px 90px -30px rgba(12,61,34,.45)',
        cta: '0 1px 0 rgba(255,255,255,.14) inset, 0 12px 28px -10px rgba(12,61,34,.6)',
      },
      letterSpacing: {
        display: '-0.035em',
      },
    },
  },
  plugins: [],
}
