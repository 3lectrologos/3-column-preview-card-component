import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brightorange': 'hsl(31, 77%, 52%)',
        'darkcyan': 'hsl(184, 100%, 22%)',
        'verydarkcyan': 'hsl(179, 100%, 13%)',
        'transparentwhite': 'hsla(0, 0%, 100%, 0.75)',
        'verylightgray': 'hsl(0, 0%, 95%)'
      },
      fontFamily: {
        'body': ['var(--font-lexend-deca)'],
        'heading': ['var(--font-big-shoulders-display)']
      }
    },
  },
  plugins: [],
}
export default config
