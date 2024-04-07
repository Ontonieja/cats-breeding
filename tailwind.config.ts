import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
    './helpers/**/*.{js,ts,jsx,tsx,mdx}',
    './constants/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px'],
    },
    extend: {
      colors: {
        'pale-blue': '#013D7B',
        'coral-red': '#EE6551',
        'light-blue': '#E4F1FC',
        'light-pink': '#F6E4EC',
        'light-green': '#E1F1ED',
      },
      height: {
        xs: '120px',
        small: '320px',
        'icon-medium': '25px',
      },
      width: {
        'half-screen': '50vw',
        half: '50%',
        'mobile-image': '80%',
        'icon-medium': '25px',
      },
      maxWidth: {
        medium: '60%',
        big: '75%',
        content: '95%',
      },
      maxHeight: {
        small: '320px',
      },
      spacing: {
        'lg-margin': '120px',
        'photo-gap': '0 .25rem .25rem 0',
      },
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
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
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
