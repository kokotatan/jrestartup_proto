import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'var(--font-noto-sans)', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f4f2',
          100: '#dae7df',
          500: '#5e8d71',
          600: '#4a6b5a',
          700: '#3d5a4a',
          800: '#2d4338',
          900: '#1e2d25',
        },
        accent: {
          400: '#38e07b',
          500: '#04af48',
        },
        text: {
          primary: '#111714',
          secondary: '#648772',
          muted: '#5f8c71',
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
}

export default config