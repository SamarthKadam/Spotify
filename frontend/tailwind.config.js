/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'roboto':['Roboto'],
      'poppins':['Poppins']
    },
    extend:{}
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}