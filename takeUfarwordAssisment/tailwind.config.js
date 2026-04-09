/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1DA1F2',
        'primary-blue-dark': '#0f85ce',
        'panel-bg': '#ffffff',
        'text-main': '#333333',
        'text-muted': '#999999',
        'text-disabled': '#d0d0d0',
        'border-color': '#eaeaea',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}