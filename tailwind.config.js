/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1140px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      primary: '#0052CC',
      body: '#212121',
      success: {
        default: '#71BD74',
        100: '#C4EFC6',
        200: '#5CA860',
        300: '#7CCA7F'
      },
      danger: {
        default: '#E83131',
        100: '#F44336',
        200: '#FF5858'
      },
      info: {
        default: '#1271FF',
        100: '#B2D1FF',
        200: '#2196F3'
      },
      warn: {
        default: '#E8AA31',
        100: '#B7992F'
      },
      gray: {
        100: '#ABABAB',
        200: '#757575',
        300: '#9E9E9E'
      }
    },
    fontFamily: {
      'primary': ['exo', ' sans-serif'],
    }
  },
  plugins: [],
}
