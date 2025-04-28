// import { PaletteOptions, Palette } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      accent: string;
      nav: string;
    };
    background: Palette['background'] & {
      contrastText: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      accent: string;
      nav: string;
    };
    background?: PaletteOptions['background'] & {
      contrastText?: string;
    };
  }
}
