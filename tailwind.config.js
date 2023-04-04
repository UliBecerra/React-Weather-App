/** @type {import('tailwindcss').Config} */
export default {
  variants:{
    backgroundColor: ({ before }) => before(['active']),
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
      'lato': ['Lato', 'sans-serif']
      },
      
      backgroundImage: {
        'dark': 'radial-gradient(50% 50% at 50% 50%, #53388F 0%, #2F2958 100%)',
        'light': 'radial-gradient(50% 50% at 50% 50%, #D5F3FF 0%, #51B4E8 100%)',
        'darkTemp': 'linear-gradient( to right, #E5F2FF 0%,  #D5F3FF 97.4%  )',
        '04n': 'url(public/images/icons/04n.png)',
        '01n': 'url(public/images/icons/01n.png)',
        
      },
      backgroundColor:{
        's-light': '#52B5E8',
        's-dark': '#201F3C',
        'sh-light': '#D5F3FF' ,
        'sh-dark': '#53388F',
        'b-light': '#38A0D8',
        'b-dark': '#7D69F1'
        
      },
      colors:{
        't-light': '#026EED',
        'i-light': '#56A5F1',
        'f-light': '#52B5E8',
        'w-light': '#D5F3FF', 
        't-dark': '#ffffff',
        'i-dark': '#9D7BFF',
        'f-dark': '#201F3C',
        'w-dark': '#76749E',
        
      },
      gridTemplateRows:{
        'tre': 'auto auto auto',
        'two': 'auto auto',
      }

    },
  },
  plugins: [],
}

