import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'abu-tulisan': '#334155',
        'abu-pudar': '#D9D9D9',
        'background-abu': '#D9D9D9',
        'hijau-layout': '#a5beb0'
      },
      maxWidth: {
        'cardDesktop': '11rem',
        'cardMobile': '4rem'
      },
      fontSize: {
        'mobileSize': '8px',
      }
    },
  },
  plugins: [],
}
export default config
