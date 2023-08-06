import { ThemeOptions } from '@mui/material';
import { UITailwindConfig } from '.';

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
    body: '#212121',
    primary: {
      default: '#0052CC'
    },
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
      200: '#2196F3',
      300: '#E6EEFA'
    },
    warn: {
      default: '#E8AA31',
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
  }
};

const getThemeMUI = (): ThemeOptions => {
  const { screens, fontFamily, colors } = themeConfig;
  const { black, white, primary, success, info, warn, danger, body, gray } = colors;

  return {
    breakpoints: {
      values: { ...screens }
    },
    palette: {
      common: {
        black: black,
        white: white
      },
      primary: {
        main: primary.default
      },
      success: {
        main: success.default,
        ...success
      },
      info: {
        main: info.default,
        ...info
      },
      warning: {
        main: warn.default,
        ...warn
      },
      error: {
        main: danger.default,
        ...danger
      },
      text: {
        primary: body,
        secondary: gray?.[200]
      }
    },
    typography: {
      fontFamily: [fontFamily.primary].join(',')
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderWidth: '1px !important'
          }
        }
      },
      MuiButton: {
        variants: [
          {
            props: { variant: 'outlined' },
            style: ({ theme }) => {
              const palettes: any = theme.palette;
              return {
                background: palettes.info['300']
              };
            }
          },
          {
            props: { variant: 'contained' },
            style: ({ theme }) => {
              const palettes: any = theme.palette;
              return {
                background: `linear-gradient(90deg, ${palettes.primary.main} 0%, ${palettes.info['200']} 100%)`
              };
            }
          }
        ],
        styleOverrides: {
          root: {
            fontWeight: 'bold',
            textTransform: 'initial'
          }
        }
      }
    }
  };
};
// .css-ghx1h1-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline

// .css-18ouvg6-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root:hover .MuiOutlinedInput-notchedOutline
const getTailwindThemeUI = () => {
  const { screens, colors } = themeConfig;

  return {
    ...themeConfig,
    colors: {
      ...colors,
      primary: colors.primary.default
    },
    screens: {
      xs: `${screens.xs}px`,
      sm: `${screens.sm}px`,
      md: `${screens.md}px`,
      lg: `${screens.lg}px`,
      xl: `${screens.xl}px`
    }
  };
};

export { getThemeMUI };
export default getTailwindThemeUI();
