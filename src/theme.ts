import { createTheme, type ThemeOptions } from '@mui/material/styles'

export type ColorVariant = 'rose' | 'lavender' | 'mint'
export type ThemeMode = 'light' | 'dark'

const FONT_HEADING = "'Playfair Display', 'Georgia', serif"
const FONT_BODY = "'Lato', 'Helvetica Neue', sans-serif"

const paletteVariants: Record<ColorVariant, { primary: string; secondary: string; accent: string }> = {
  rose: {
    primary: '#d4849a',
    secondary: '#f7c5d0',
    accent: '#b5536a',
  },
  lavender: {
    primary: '#a88fd4', // richer blue-purple, matches logo's lavender blobs
    secondary: '#d8caee',
    accent: '#6e4faa',
  },
  mint: {
    primary: '#5ec9a8', // more teal, matches logo's mint/teal blobs
    secondary: '#aae8d4',
    accent: '#2e9474',
  },
}

export function buildTheme(mode: ThemeMode, variant: ColorVariant) {
  const colors = paletteVariants[variant]
  const isLight = mode === 'light'

  const options: ThemeOptions = {
    palette: {
      mode,
      primary: {
        main: colors.primary,
        dark: colors.accent,
        light: colors.secondary,
      },
      secondary: {
        main: colors.secondary,
        dark: colors.primary,
      },
      background: {
        default: isLight ? '#fdf8f5' : '#1a1217',
        paper: isLight ? '#ffffff' : '#271d23',
      },
      text: {
        primary: isLight ? '#2c1f26' : '#f2e8ed',
        secondary: isLight ? '#6b5060' : '#c4a8b5',
      },
    },
    typography: {
      fontFamily: FONT_BODY,
      h1: { fontFamily: FONT_HEADING, fontWeight: 700 },
      h2: { fontFamily: FONT_HEADING, fontWeight: 600 },
      h3: { fontFamily: FONT_HEADING, fontWeight: 600 },
      h4: { fontFamily: FONT_HEADING, fontWeight: 500 },
      h5: { fontFamily: FONT_HEADING, fontWeight: 500 },
      h6: { fontFamily: FONT_HEADING, fontWeight: 500 },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 24,
            textTransform: 'none',
            fontFamily: FONT_BODY,
            fontWeight: 600,
            letterSpacing: '0.04em',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: isLight ? '0 4px 20px rgba(0,0,0,0.07)' : '0 4px 20px rgba(0,0,0,0.4)',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  }

  return createTheme(options)
}
