/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         colors: {
        primary_BG: '#a0d8ef',
        primary_Text: '#a0d8ef',
      },
      animation: {
        'UpDown-sm': 'UpDown-sm 6s ease-in-out infinite',
        'UpDown-md': 'UpDown-md 6s ease-in-out infinite',
        'UpDown-lg': 'UpDown-lg 6s ease-in-out infinite',
        'marquee': 'marquee 5s linear infinite',
      },
      keyframes: {
        'UpDown-sm': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-50px)' },
        },
        'UpDown-md': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-80px)' },
        },
        'UpDown-lg': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-120px)' },
        }
      }
    },
  },
  plugins: [],
}




