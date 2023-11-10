/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}', ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        'pink-baby': '#F4ECF4',
        'pink-strong': '#FC7CAC',
        'pink-stronger': '#F2004B',
        'pink-dark': '#CF0242',
      },
    },
  },
  plugins: [],
}