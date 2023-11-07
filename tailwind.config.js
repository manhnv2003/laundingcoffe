/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sobrebg': "url(./assets/Background.png)",
        'meow-bg-left': 'linear-gradient(203deg, rgba(84, 21, 17, 0.66) 4.72%, #F3C7C4 102.83%)',
        'meow-bg-right': 'linear-gradient(203deg, #8F423D 4.72%, #FFF 102.83%)',
      },
      colors: {
        'textsobre': '#4D1D1D',
        'text-meow': '#ffff',
        'text-main': '#3C0E0E',
      },
      scale: {
        '30': '.3',
      },
      rounded: {
        roundedLevamos: '25px'
      }
    },
  },
  plugins: [],
}

