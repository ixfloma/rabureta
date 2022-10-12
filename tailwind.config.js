/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'mclaren': ['"McLaren"'],
        'rouge': ['"Rouge Script"'],
        'patrick': ['"Patrick Hand"']
      }
    },
  },
  plugins: [],
};
