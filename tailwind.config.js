/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",  
    "./src/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#F7F8F9",
        primary: "#374b80",
        accent: "#8f9cbc",
        secondary: "#616163",
      },
      animation: {
        scroll: 'scroll 80s linear infinite',
        scrollSlow: 'scroll 80s linear infinite',
        scrollSuperSlow: 'scroll 120s linear infinite',

        scrollReverse: 'scrollReverse 80s linear infinite',
        scrollReverseSlow: 'scrollReverse 80s linear infinite',
        scrollReverseSuperSlow: 'scrollReverse 120s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}

