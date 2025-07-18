/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'sakina-blue': '#1e3a8a',
        'sakina-gold': '#facc15',
        'sakina-green': '#16a34a',
        'sakina-red': '#dc2626',
        'sakina-green-light': '#22c55e',
        'sakina-red-light': '#ef4444',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}

