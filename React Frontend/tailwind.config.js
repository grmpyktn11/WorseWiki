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
        'fading': 'fading 1.5s ease-in-out infinite',
        'slide-left': 'slide-left 1.5s ease-in-out',
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
        'fading': {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0.7,
          },
        },
        'slide-left': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-10px)',
          },
        }
      },
      backgroundImage: {
        'main': "url('./src/images/background.jpg')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

