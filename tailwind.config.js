/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
     './src/**/*.{js,jsx,ts,tsx}',
     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Epilogue', 'Inter', 'sans-serif'],
        profile: ['Inter', 'sans-serif']
        //serif: ['Inter', 'serif'],
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        divider: '#EBEFF2',
        gray: {
          background: '#f5f6f8',          
          500: '#777777',
          400: '#717171',
          100: '#eaecf0',
          
        },
        orange: {
          500: '#f21a05',
          400: '#f43724',
        },
        blue: {
          800: '#00113d',
          600: '#213770',
          200: '#747d94',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

