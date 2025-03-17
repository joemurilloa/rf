/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1.5s ease-out',
        slideInLeft: 'slideInLeft 0.8s ease-out',
        growWidth: 'growWidth 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        growWidth: {
          '0%': { width: '0' },
          '100%': { width: '6rem' },
        },
      },
    },
  },
  plugins: [],
}