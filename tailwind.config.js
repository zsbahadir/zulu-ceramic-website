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
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // screens: {
    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },

//     screens: {
//       'sm': '640px',
//       // => @media (min-width: 640px) { ... }

//       'md': '768px',
//       // => @media (min-width: 768px) { ... }

//       'lg': '1024px',
//       // => @media (min-width: 1024px) { ... }

//       'xl': '1280px',
//       // => @media (min-width: 1280px) { ... }

//       '2xl': '1536px',
//       // => @media (min-width: 1536px) { ... }
//     }
//   }
// }
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors : {
        'nav-border': '#C6285D',
        'pink': '#D7648A',
        'black': '#000000',
        'text-brown': '#432C2C',
        'hover-pink': '#CC4974',
      },
      styles: {
        'body': {
          margin: '50px',
        },
        'body > *': {
          marginTop: '30px',
          marginBottom: '30px',
        },
        animation: {
          'spin-slow': 'move 3s linear infinite',
        }
    },
  },
},
  plugins: [],
}
