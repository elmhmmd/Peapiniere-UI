/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3A5F0B',
        'primary-light': '#5A8F1F',
        'primary-dark': '#2A4A00',
        accent: '#8BC34A',
        text: '#333333',
        light: '#FFFFFF',
        grey: '#F7F9F4',
        'grey-dark': '#E0E0E0',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      boxShadow: {
        header: '0 2px 10px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
};