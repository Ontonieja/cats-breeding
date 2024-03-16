import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pale-blue': '#013D7B',
        'coral-red': '#EE6551',
      },
      height: {},
      width: {
        'half-screen': '50vw',
        half: '50%',
      },
      maxWidth: {
        big: '75%',
        content: '95%',
      },
      maxHeight: {},
      spacing: {},
      translate: {
        center: '-50%',
      },
      fontFamily: {
        madimi: ['var(--font-madimi)'],
      },
      lineHeight: {
        big: '5.4rem',
      },
      boxShadow: {
        separator: '0 .125rem .675rem rgba(0,0,0,.08)',
        card: '0 .125rem .35rem rgba(0,0,0,.15)',
        'card-strong': '0 .5rem 1rem rgba(0,0,0,.25)',
      },
      transitionProperty: {
        card: 'box-shadow, transform, -webkit-box-shadow, -webkit-transform',
      },
      transitionDuration: {
        '250': '0.25s',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
