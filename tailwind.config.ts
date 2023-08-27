import type { Config } from 'tailwindcss';
const themes = require('./src/config/themes/themes').default;
const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/custom-views/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    ...themes.tailwindTheme
  },
  daisyui: {...themes.daisyuiTheme},
  plugins: [require('daisyui')]
};
export default config;
