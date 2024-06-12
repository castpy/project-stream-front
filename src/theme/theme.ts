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
    // Customizando o MuiInputBase, que afeta o TextField
    MuiInputBase: {
      styleOverrides: {
        root: {
          // Estilo para o estado padrão
          backgroundColor: Colors.grey,
          borderRadius: '4px',
          // '&:hover': {
          //   // Estilo para o estado de hover
          //   backgroundColor: 'rgba(0, 0, 0, 0.13)',
          // },
          '&.Mui-focused': {
            // Estilo para o estado de foco
            borderColor: 'primary.main',
            boxShadow: `0 0 0 2px rgba(0, 123, 255, 0.25)`,
          },
          '&.Mui-error': {
            // Estilo para o estado de erro
            borderColor: 'error.main',
          },
        },
        input: {
          // Estilos para o elemento input dentro do TextField
          padding: '10px',
          color: Colors.white,
        },
      },
    },
    // Se você estiver usando MuiOutlinedInput (para TextField variant="outlined"), você pode querer customizá-lo também
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // Customizações específicas para a variante outlined
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.light',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main',
            borderWidth: '2px',
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: 'error.main',
          },
        },
        notchedOutline: {
          borderColor: 'rgba(0, 0, 0, 0.23)',
        },
      },
    },
  },
});

export default theme;