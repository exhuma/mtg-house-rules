module.exports = {
  content: [
    './_includes/**/*.njk',
    './pages/**/*.md',
    './index.md',
  ],
  theme: {
    extend: {
      colors: {
        mtgBlack: '#231f20',
        mtgRed: '#be2d26',
        mtgBlue: '#1e6ba8',
        mtgGreen: '#217346',
        mtgWhite: '#f8f6e7',
        mtgGold: '#c7a008',
      },
      fontFamily: {
        mtg: ['Beleren', 'serif'],
      },
      boxShadow: {
        mtg: '0 4px 16px 0 rgba(35,31,32,0.25)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
