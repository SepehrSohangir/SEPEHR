import React from 'react'
import { Typography as MuiTypography, TypographyProps } from '@mui/material'

interface CustomTypographyProps extends Omit<TypographyProps, 'fontFamily'> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline'
  children: React.ReactNode
  className?: string
}

export function Typography({ 
  variant = 'body1', 
  children, 
  className = '',
  sx,
  ...props 
}: CustomTypographyProps) {
  // Default Persian font styling based on variant
  const getDefaultSx = () => {
    const baseSx = {
      fontFamily: 'Vazirmatn, IBM Plex Sans Arabic, system-ui, sans-serif',
      textAlign: 'right' as const,
      direction: 'rtl' as const,
    }

    switch (variant) {
      case 'h1':
        return {
          ...baseSx,
          fontSize: '3rem',
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: '0.025em',
        }
      case 'h2':
        return {
          ...baseSx,
          fontSize: '2.25rem',
          fontWeight: 800,
          lineHeight: 1.2,
          letterSpacing: '0.025em',
        }
      case 'h3':
        return {
          ...baseSx,
          fontSize: '1.875rem',
          fontWeight: 700,
          lineHeight: 1.3,
          letterSpacing: '0.025em',
        }
      case 'h4':
        return {
          ...baseSx,
          fontSize: '1.5rem',
          fontWeight: 700,
          lineHeight: 1.4,
          letterSpacing: '0.025em',
        }
      case 'h5':
        return {
          ...baseSx,
          fontSize: '1.25rem',
          fontWeight: 600,
          lineHeight: 1.4,
          letterSpacing: '0.025em',
        }
      case 'h6':
        return {
          ...baseSx,
          fontSize: '1.125rem',
          fontWeight: 600,
          lineHeight: 1.4,
          letterSpacing: '0.025em',
        }
      case 'body1':
        return {
          ...baseSx,
          fontSize: '1rem',
          fontWeight: 500,
          lineHeight: 1.6,
          letterSpacing: '0.025em',
        }
      case 'body2':
        return {
          ...baseSx,
          fontSize: '0.875rem',
          fontWeight: 500,
          lineHeight: 1.5,
          letterSpacing: '0.025em',
        }
      case 'caption':
        return {
          ...baseSx,
          fontSize: '0.75rem',
          fontWeight: 400,
          lineHeight: 1.4,
          letterSpacing: '0.025em',
        }
      case 'overline':
        return {
          ...baseSx,
          fontSize: '0.75rem',
          fontWeight: 500,
          lineHeight: 1.4,
          letterSpacing: '0.1em',
          textTransform: 'uppercase' as const,
        }
      default:
        return baseSx
    }
  }

  return (
    <MuiTypography
      variant={variant}
      className={className}
      sx={{
        ...getDefaultSx(),
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiTypography>
  )
}
