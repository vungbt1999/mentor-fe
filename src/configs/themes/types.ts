export type UITailwindConfig = {
  screens: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  colors: ColorPalette;
  fontFamily: {
    primary: string | string[];
    secondary?: string;
    tertiary?: string;
  };
  stylesheets?: string[];
};

export type ColorPalette = {
  transparent: string;
  black: string;
  white: string;
  body: string;

  primary: ColorPaletteConfig;
  secondary?: ColorPaletteConfig;
  tertiary?: ColorPaletteConfig;

  success: ColorPaletteConfig;
  danger: ColorPaletteConfig;
  info: ColorPaletteConfig;
  warn: ColorPaletteConfig;

  gray: ColorPaletteConfig;
};

export type ColorPaletteConfig = {
  default: string;
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
};

export const ScreenConfig = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 976,
  xl: 1140,
  '2xl': 1536,
  '3xl': 1728
};

export type ScreenConfigKey = keyof typeof ScreenConfig;

export type Screen = {
  sizes: Record<ScreenConfigKey, boolean>;
  width: number;
  height: number;
  isMobile: boolean;
};
