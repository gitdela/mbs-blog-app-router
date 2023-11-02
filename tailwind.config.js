/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#2349a9',
          50: '#e9edf6',
          100: '#bbc7e4',
          200: '#9aabd7',
          300: '#6c85c5',
          400: '#4f6dba',
          500: '#2349a9',
          600: '#20429a',
          700: '#193478',
          800: '#13285d',
          900: '#0f1f47',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
