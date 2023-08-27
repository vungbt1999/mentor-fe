import { UITailwindConfig } from '.';

export enum EThemeMode {
  LIGHT = 'light',
  Dark = 'dark',
  Dracula = 'dracula'
}

const themeConfig: UITailwindConfig = {
  screens: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 976,
    xl: 1140
  },
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    success: {
      100: '#C4EFC6',
      200: '#5CA860',
      300: '#7CCA7F'
    },
    error: {
      100: '#F44336',
      200: '#FF5858'
    },
    info: {
      100: '#B2D1FF',
      200: '#2196F3',
      300: '#E6EEFA'
    },
    warning: {
      100: '#B7992F'
    },
    gray: {
      default: '#ABABA',
      100: '#ABABAB',
      200: '#757575',
      300: '#9E9E9E',
      400: '#E0E0E0',
      500: '#F3F3F3',
      600: '#F8F5F5',
      700: '#616161'
    }
  },
  fontFamily: {
    primary: ['exo', ' sans-serif']
  },
  daisyui: {
    themes: [EThemeMode.LIGHT, EThemeMode.Dark, EThemeMode.Dracula],
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: '',
    logs: true
  }
};

const getTailwindThemeUI = (config: UITailwindConfig) => {
  const { screens, colors, daisyui, ...reset } = config;

  return {
    tailwindTheme: {
      ...reset,
      colors: {
        ...colors
      },
      screens: {
        xs: `${screens.xs}px`,
        sm: `${screens.sm}px`,
        md: `${screens.md}px`,
        lg: `${screens.lg}px`,
        xl: `${screens.xl}px`
      }
    },
    daisyuiTheme: { ...daisyui }
  };
};

export default getTailwindThemeUI(themeConfig);
