/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
  
        'custom-gradient': 'linear-gradient(to right, #1e3a8a, #6366f1)',
      })
    },
  },
  plugins: [],
  darkMode: "class",
  plugins: [nextui()],
}

