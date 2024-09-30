/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
    colors: {
      black: "#323232",
      white: "#FFFFFF",
    },
    extend: {
      colors: {
        tyt_red: "#EB5353",
        tyt_yellow: "#F9D923",
        tyt_green: "#36AE7C",
        tyt_blue: "#187498",
      },
      screens: {
        xs: "375px",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-tyt_(red|yellow|green|blue)/,
    },
  ],
};
