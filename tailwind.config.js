/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        colorOrange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayBlue: 'hsl(219, 9%, 45%)',
        grayBlue: 'hsl(220, 14%, 75%)',
        lightGrayBlue: 'hsl(223, 64%, 98%)',
        colorWhite: 'hsl(0, 0%, 100%)',
        colorBlack: 'hsl(0, 0%, 0%)',
      },
      fontFamily: {
        fontKumbh: ['Kumbh Sans', 'sans-serif'],
      },
      screens: {
        smobile: '290px',
        mmobile: '325px',
        stablet: '400px',
        mtablet: '500px',
        tablet: '700px',
        slaptop: '945px',
        laptop: '1150px',
      },
    },
  },
  plugins: [],
};
