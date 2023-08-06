/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/sections/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {

      'small': {'min': '0px', 'max': '334px'},

      'tablet': {'min': '335px', 'max': '739px'},

    },
    extend: {
      gap: {
        '100' : '520px',
      }
    },
  },
  plugins: [],
}

