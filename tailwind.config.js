/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        amsterdam_graffiti: ['Amsterdam-Graffiti']
      },
    },
  },
  daisyui: {
    themes: ["dark"]
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
}
