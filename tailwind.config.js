/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      black: {
        light: '#85d7ff',
        DEFAULT: '#212434',
        dark: '#009eeb',
      },
      yellow: {
        light: '#85d7ff',
        DEFAULT: '#ffd082',
        dark: '#009eeb',
      },
      purple: {
        light: '#85d7ff',
        DEFAULT: '#3f4465',
        dark: '#009eeb',
      },
      gray: {
        light: '#85d7ff',
        DEFAULT: '#d7d7d7',
        dark: '#4e4e4e',
      },
      pink: {
        light: '#85d7ff',
        DEFAULT: '#ff8282',
        dark: '#009eeb',
      },
  
      },
    extend: {},
  },
  plugins: [],
}