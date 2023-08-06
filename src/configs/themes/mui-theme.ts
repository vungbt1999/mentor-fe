'use client';
import { createTheme } from '@mui/material/styles';
import { getThemeMUI } from './themes';
const themes = getThemeMUI();

export const materialUiTheme = createTheme({ ...themes });
