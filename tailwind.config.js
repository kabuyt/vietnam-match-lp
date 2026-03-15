/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          blue:   '#D0EEFF',
          blueMid:'#A8D8F0',
          blueDeep:'#6BB8E0',
          mint:   '#C8F0E8',
          mintMid:'#8ED8C8',
          mintDeep:'#5BBFAA',
          beige:  '#FAF5EE',
          beigeDeep:'#EDE4D4',
          sky:    '#E8F6FF',
        },
        accent: {
          teal:   '#3AAFA9',
          tealDark:'#2C9090',
          warm:   '#B07D5A',
          gold:   '#C9A84C',
        },
        ink: {
          DEFAULT: '#2D3A3A',
          light:   '#5A6B6B',
          soft:    '#8A9B9B',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', 'serif'],
        sans:  ['"Noto Sans JP"', 'sans-serif'],
      },
      letterSpacing: {
        relaxed: '0.06em',
        wide:    '0.12em',
        wider:   '0.2em',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}
