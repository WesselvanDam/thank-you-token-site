/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
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
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-tyt_(red|yellow|green|blue)/,
    },
  ],
};
