module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production' ? true : false,
    content: ['./pages/**/*.js', './components/**/*.js'],
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/custom-forms')],
}
