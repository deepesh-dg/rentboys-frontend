/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       // Extend colors
      aftrelay: {
      'content': '',
      'position': 'absolute',
      'left': '0',
      'right': '0',
      'bottom': '0',
      'z-index': '1',
      'height': '100%',
      'background': 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)',
      'transition': 'all 0.4s ease',
      },},
  },
  plugins: [],
}