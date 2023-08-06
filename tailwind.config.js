/** @type {import('tailwindcss').Config} */
const themes = require('./src/configs/themes/themes').default;
delete themes.getThemeMUI

module.exports = {
  corePlugins: {
    preflight: false
  },
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  important: '#__next',
  theme: {
    ...themes
  },
  plugins: []
};
