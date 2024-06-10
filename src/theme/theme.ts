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