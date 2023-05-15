/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'first':'Montserrat,sans-serif',
      'secondary':'Open Sans, sans-serif'
    }
  },
  plugins: [],
}
