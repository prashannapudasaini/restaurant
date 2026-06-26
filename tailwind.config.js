/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#111827',
        richBlack: '#0F172A',
        warmIvory: '#FAF7F2',
        softCream: '#F8F5F0',
        premiumGold: '#D4AF37',
        wineRed: '#7F1D1D',
        copperBronze: '#B87333'
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
