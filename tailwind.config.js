const aspectRatio = require('@tailwindcss/aspect-ratio')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#9a8989ff',
      red: '#E35050',
      'like-green': '#28646E',
      'like-cyan': '#50E3C2',
      'like-cyan-light': '#AAF1E7',
      'like-cyan-vlight': '#ffffffff',
      'dark-gray': '#ffffffff',
      'medium-gray': '#cac7c7ff',
      'shade-gray': '#d25d5dff',
      'light-gray': '#8b6b6bff',
      'airdrop-gold':'#D1AB79',
      'like-red': '#6e0000ff',
    },
    fontFamily: {
      'display': 'proxima-nova, sans-serif',
      'body': '"Open Sans", sans-serif',
    },
    extend: {
      keyframes: {
        ['key-visual-pulse']: {
          '0%, 100%': { opacity: '1' },
          '25%, 75%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [aspectRatio],
}
