'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { Colors } from './colors';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      color: Colors.white,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: Colors.white,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: Colors.white,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 300,
      color: Colors.grey,
    }
  },
  palette: {
    mode: "light",
    primary: {
      main: Colors.primary,
      // light: "",
      // dark: "",
    },
    secondary: {
      main: Colors.secondary,
      // light: "",
      // dark: "",
    },
    info: {
      main: Colors.info,
      // light: "",
      // dark: "",
    },
    error: {
      main: Colors.error,
      // light: "",
      // dark: "",
    },
    warning: {
      main: Colors.warning,
      // light: "",
      // dark: "",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        ${roboto}
      `,
    },
  },
});

export default theme;