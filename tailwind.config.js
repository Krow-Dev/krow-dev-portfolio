/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',                // Main HTML file
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        krowGold: '#ffb408', // Custom color
      },
      boxShadow: {
        'custom': '2px 2px 10px rgba(0, 0, 0, 0.5)', // Custom shadow
      },
    },
  },
  plugins: [],
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    slideDown: {
      '0%': { transform: 'translateY(-100%)' },
      '100%': { transform: 'translateY(0)' },
    }
  },
  animation: {
    'fade-in': 'fadeIn 1s ease-in-out',
    'slide-down': 'slideDown 1s ease-in-out',
  },
}

