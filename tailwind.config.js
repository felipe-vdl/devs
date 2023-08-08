/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'up': '0 -1px 3px 0 rgb(0, 0, 0)'
      },
      colors: {
        'mesquita': '#342a54',
        'roxo': '#342a54',
        'dourado': {
          100: '#dac9a3 ',
          500: '#bfa15f',
          900: ' #5b4924'
        }
      }
    },
  },
  plugins: [],
}
