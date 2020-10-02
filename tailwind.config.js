module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enable: process.env.NODE_ENV === 'production',
    content: ['src/**/*.tsx', 'public/index.html']
  },
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      },
      backgroundImage: theme => ({
        pattern: "url('/images/pattern-bg.png')"
      })
    },
  },
  variants: {},
  plugins: [],
}