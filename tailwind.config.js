/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae3',
          300: '#aab3c4',
          400: '#7a8499',
          500: '#566077',
          600: '#3d4659',
          700: '#2b3142',
          800: '#1a1e2c',
          900: '#0c0f17'
        },
        brand: {
          50: '#eefcf6',
          100: '#d5f7e8',
          200: '#aeecd2',
          300: '#79dbb6',
          400: '#42c294',
          500: '#1ea679',
          600: '#118661',
          700: '#0f6a4f',
          800: '#0f5440',
          900: '#0d4536'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif']
      },
      boxShadow: {
        soft: '0 6px 24px -8px rgba(15, 23, 42, 0.18)',
        ring: '0 0 0 4px rgba(30, 166, 121, 0.15)'
      }
    }
  },
  plugins: []
};
