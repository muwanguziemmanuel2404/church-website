// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA500',       // Orange default
      contrastText: '#000000' // Black text
    },
    secondary: {
      main: '#FFD740',       // Brighter gold accent if needed
      contrastText: '#000000'
    },
    background: {
      default: '#FAFAFA',
      paper: '#1C1C1C'
    },
    text: {
      primary: '#000000',
      secondary: '#000000'
    }
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontWeight: 700, color: '#000000' },
    h2: { fontWeight: 700, color: '#000000' },
    h3: { fontWeight: 700, color: '#000000' },
    body1: { fontWeight: 400, color: '#000000' },
    body2: { fontWeight: 400, color: '#000000' },
    button: { textTransform: 'none', fontWeight: 600 }
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          border: '2px solid transparent',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          }
        },
        containedPrimary: {
          backgroundColor: '#FFA500', // Orange
          color: '#000000',           // Black text
          border: '2px solid #FFA500',
          '&:hover': {
            backgroundColor: '#FF8C00', // Darker orange on hover
            color: '#000000',
            border: '2px solid #FF8C00'
          }
        },
        containedSecondary: {
          backgroundColor: '#FFD740',
          color: '#000000',
          border: '2px solid #FFD740',
          '&:hover': {
            backgroundColor: '#FFC107', // Darker gold
            color: '#000000',
            border: '2px solid #FFC107'
          }
        },
        outlined: {
          border: '2px solid #FFA500',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#FF8C00', // Darker orange on hover
            color: '#000000',
            border: '2px solid #FF8C00'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          borderRadius: 8,
          backgroundColor: '#1C1C1C',
          color: '#FFFFFF'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-root': {
            color: 'inherit'
          }
        }
      }
    }
  }
});

export default theme;
