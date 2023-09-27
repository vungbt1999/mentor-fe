'use client';
import React, { ReactNode, createContext, useCallback, useState, useEffect } from 'react';
import daisyTheme from 'daisyui/src/theming/themes';
import daisyThemSe from 'daisyui/src/index';
import tailwindColors from 'tailwindcss/colors';
import { CustomTheme, Theme } from 'daisyui';
import { DefaultColors } from 'tailwindcss/types/generated/colors';

export type ThemeContextType = {
  colors: {
    daisyUI: any;
    tailwind: DefaultColors;
  };
  themeMode: Theme | CustomTheme;
  onChangeMode: (mode: Theme | CustomTheme) => void;
};

const initState: ThemeContextType = {
  colors: {
    daisyUI: daisyTheme['[data-theme=light]'],
    tailwind: tailwindColors
  },
  themeMode: 'light',
  onChangeMode: (_theme: Theme | CustomTheme) => {}
};
const ThemeContext = createContext<ThemeContextType>(initState);

export type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const colorExtend = daisyThemSe.config?.theme?.extend?.colors
  const [themeMode, setThemeMode] = useState<Theme>('light');
  const [themeColors, setThemeColors] = useState({
    daisyUI: {...colorExtend, ...daisyTheme['[data-theme=light]']},
    tailwind: tailwindColors
  });

  useEffect(() => {
    const getDaisyThem = (daisyTheme as any)[`[data-theme=${themeMode}]`];
    setThemeColors((values) => ({ ...values, daisyUI: {...values.daisyUI, ...getDaisyThem} }));
  }, [themeMode]);

  const setMode = useCallback((mode: Theme | CustomTheme) => {
    if (!document) return;
    setThemeMode(mode as any);
    const html = document.querySelector('html');
    if (!html) return;
    html.setAttribute('data-theme', (mode as any) ?? 'light');
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        colors: themeColors,
        onChangeMode: setMode,
        themeMode: themeMode
      }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => React.useContext(ThemeContext);
