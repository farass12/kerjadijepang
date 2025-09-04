const aspectRatio = require('@tailwindcss/aspect-ratio')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',

      gray: '#951b1bff',
      red: '#ffffffff',
      'like-green': '#f7f4f4ff',
      'like-cyan': '#50E3C2',
      'like-cyan-light': '#631111ff',
      'like-cyan-vlight': '#731d1dff',
      'dark-gray': '#ffffffff',
      'medium-gray': '#cac7c7ff',
      'shade-gray': '#ffffffff',
      'light-gray': '#8b6b6ff',
      'airdrop-gold': '#D1AB79',
      'like-red-gradient': 'linear-gradient(to bottom, #5e0000ff 0%, #5e0000ff 100%)',
    },
    fontFamily: {
      display: 'proxima-nova, sans-serif',
      body: '"Open Sans", sans-serif',
    },
    extend: {
      keyframes: {
        ['key-visual-pulse']: {
          '0%, 100%': { opacity: '1' },
          '25%, 75%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'like-red-soft':
          'linear-gradient(to bottom, #6e000040 0%, #6e000020 50%, #00000060 100%)',
        'like-red-medium':
          'linear-gradient(to bottom, #6e000060 0%, #6e000030 50%, #000000aa 100%)',
        'like-red-strong':
          'linear-gradient(to bottom, #6e0000ff 0%, #8b0000cc 50%, #000000ff 100%)',
      },
    },
  },
  plugins: [
    aspectRatio,
    require('@tailwindcss/typography'), // ✅ tambahin plugin typography
  ],
}
