/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fly-1': 'fly 3s ease-in-out infinite',
        'fly-2': 'fly 3.5s ease-in-out infinite',
        'fly-3': 'fly 4s ease-in-out infinite',
        'fly-4': 'fly 4.5s ease-in-out infinite',
      },
      keyframes: {
        'fly': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

