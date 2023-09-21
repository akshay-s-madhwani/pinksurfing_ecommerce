/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#1e1e1e",
        whitesmoke: "#f1f1f1",
        gainsboro: {
          "100": "#e8e8e8",
          "200": "#d9d9d9",
        },
        darkgray: "#a8a8a8",
        black: "#000",
      },
      spacing: {
        "128": '50rem',
        // Increase the spacing between the image and the product title to 128px
        "128px": "50rem",
        // Increase the spacing between the product title and the product description to 16px
        "16px": "8rem",
        // Increase the spacing between the product description and the price tag to 16px
        "16px": "8rem",
        // Increase the spacing between the price tag and the counter to 16px
        "16px": "8rem",
      },
      fontFamily: {
        inter: "Inter",
        inherit: "inherit",
      },
      fontSize: {
        xl: "20px",
        "17xl": "36px",
        inherit: "inherit",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'xs': '480px',
    },
    corePlugins: {
      preflight: false,
    },
  },
  plugins: [require("daisyui")],
};