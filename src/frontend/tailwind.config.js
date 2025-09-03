/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Primary Persian font - Vazirmatn
        'persian': ['Vazirmatn', 'system-ui', 'sans-serif'],
        'persian-light': ['Vazirmatn', 'system-ui', 'sans-serif'],
        'persian-medium': ['Vazirmatn', 'system-ui', 'sans-serif'],
        'persian-bold': ['Vazirmatn', 'system-ui', 'sans-serif'],
        
        // Fallback fonts for mixed content
        'sans': ['Vazirmatn', 'Noto Sans', 'IBM Plex Sans Arabic', 'system-ui', 'sans-serif'],
        'display': ['Vazirmatn', 'IBM Plex Sans Arabic', 'system-ui', 'sans-serif'],
        'body': ['Vazirmatn', 'Noto Sans', 'system-ui', 'sans-serif'],
        
        // Monospace font
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        // Persian-optimized font sizes
        'xs': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0.025em' }],
        'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0.025em' }],
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
        '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0.025em' }],
        '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '0.025em' }],
        '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '0.025em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '0.025em' }],
      },
      lineHeight: {
        // Persian-optimized line heights
        'persian-tight': '1.3',
        'persian-normal': '1.6',
        'persian-relaxed': '1.8',
      },
    },
  },
  plugins: [],
}
