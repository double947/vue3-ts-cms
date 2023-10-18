module.exports = {
  mode: 'jit',
  corePlugins: {
    preflight: false
  },
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.vue',
    './public/index.html'
  ],
  darkMode: false,
  theme: {},
  variants: {
    extend: {}
  },
  plugins: []
}
