/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, rgba(228, 228, 228, 0.01), rgba(252, 219, 134, 0.3))',
      },
    },
  },
  plugins: [],
}

