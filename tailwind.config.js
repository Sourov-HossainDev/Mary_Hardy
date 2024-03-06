/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth :{
        container : '1140px'
      },
      fontFamily : {
        openSans : ['Open Sans', 'sans-serif']
      },
      colors :{
        btnColor : '#FD6E0A'
      },
      boxShadow: {
        'cardShadow': '0px 6px 50px 0px rgba(0, 0, 0, 0.06)',
         
      }
    },
  },
  plugins: [],
}