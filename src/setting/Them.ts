import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#FFA09B', 
            contrastText: '#fff',
          },
          secondary: {
            main: '#FFC785',
          },
          background: {
            default: '#fff',
            paper: '#FFE6C9',
            contrastText:'#1f1e1d'
          },
          text: {
            primary: '#202020',
          },
          custom: {
            accent: '#FCC6FF',
            nav: '#FFA09B',
          }
        }
      : {
          primary: {
            main: '#343238', 
            contrastText: '#e8e3df',
          },
          secondary: {
            main: '#FFC785',
          },
          background: {
            default: '#1c1b1f',
            paper: '#2a292c',
            contrastText:'#faf2e8'
          },
          text: {
            primary: '#fff',          
          },
          custom: {
            accent: '#4e4b4f', 
            nav: '#474746',    
          }
        }),
  },
});
