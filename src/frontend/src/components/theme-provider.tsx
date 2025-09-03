'use client'

import * as React from 'react'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

// Create Material-UI theme with Persian font support
const theme = createTheme({
  typography: {
    fontFamily: [
      'Vazirmatn',
      'IBM Plex Sans Arabic',
      'Noto Sans',
      'system-ui',
      'sans-serif'
    ].join(','),
    // Persian text specific typography
    h1: {
      fontFamily: 'Vazirmatn, IBM Plex Sans Arabic, system-ui, sans-serif',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h2: {
      fontFamily: 'Vazirmatn, IBM Plex Sans Arabic, system-ui, sans-serif',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: 'Vazirmatn, IBM Plex Sans Arabic, system-ui, sans-serif',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: 'Vazirmatn, IBM Plex Sans Arabic, system-ui, sans-serif',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h5: {
      fontFamily: 'Vazirmatn, IBM Plex Sans Arabic, system-ui, sans-serif',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h6: {
      fontFamily: 'Vazirmatn, IBM Plex Sans Arabic, system-ui, sans-serif',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    body1: {
      fontFamily: 'Vazirmatn, Noto Sans, system-ui, sans-serif',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: 'Vazirmatn, Noto Sans, system-ui, sans-serif',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: 'Vazirmatn, IBM Plex Sans Arabic, system-ui, sans-serif',
      fontWeight: 500,
    },
    caption: {
      fontFamily: 'Vazirmatn, Noto Sans, system-ui, sans-serif',
    },
    overline: {
      fontFamily: 'Vazirmatn, IBM Plex Sans Arabic, system-ui, sans-serif',
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          fontFamily: 'Vazirmatn, IBM Plex Sans Arabic, system-ui, sans-serif',
        },
        select: {
          fontFamily: 'Vazirmatn, IBM Plex Sans Arabic, system-ui, sans-serif',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: 'Vazirmatn, IBM Plex Sans Arabic, system-ui, sans-serif',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Vazirmatn, IBM Plex Sans Arabic, system-ui, sans-serif',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontFamily: 'Vazirmatn, IBM Plex Sans Arabic, system-ui, sans-serif',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          fontFamily: 'Vazirmatn, IBM Plex Sans Arabic, system-ui, sans-serif',
        },
      },
    },
  },
  direction: 'rtl',
})

export function ThemeProvider({ children, ...props }: { children: React.ReactNode }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
