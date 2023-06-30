/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors : {
        'nav-border': '#C6285D',
        'light-pink': 'D7648A',
        'black-100': '#000000',
        'text-brown': '#432C2C'
      },
      styles: {
        'body': {
          margin: '50px',
        },
        'body > *': {
          marginTop: '30px',
          marginBottom: '30px',
        },
    },
  },
},
  plugins: [],
}
