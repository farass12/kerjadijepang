const aspectRatio = require('@tailwindcss/aspect-ratio')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      red: '#a9a0a0ff',
      red: '#ffffffff',
      'like-green': '#890e20ff',
      'like-cyan': '#50E3C2',
      'like-cyan-light': '#ffffffff',
      'like-cyan-vlight': '#ffffffff',
      'dark-gray': '#ffffffff',
      'medium-gray': '#cac7c7ff',
      'shade-gray': '#ffffffff',
      'light-gray': '#8b6b6ff',
      'airdrop-gold':'#D1AB79',
      'like-red-gradient': 'linear-gradient(to bottom, #5e0000ff 0%, #5e0000ff 100%)',

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
      backgroundImage: {
        // ✅ versi soft (biar video keliatan jelas)
        'like-red-soft': 'linear-gradient(to bottom, #6e000040 0%, #6e000020 50%, #00000060 100%)',

        // ✅ versi medium (agak gelap di bawah buat teks tetap kontras)
        'like-red-medium': 'linear-gradient(to bottom, #6e000060 0%, #6e000030 50%, #000000aa 100%)',

        // versi sebelumnya yang pekat (kalau butuh kontras banget)
        'like-red-strong': 'linear-gradient(to bottom, #6e0000ff 0%, #8b0000cc 50%, #000000ff 100%)',
      },
    },
  },
  plugins: [aspectRatio],
}
