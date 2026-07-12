/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [],
}
