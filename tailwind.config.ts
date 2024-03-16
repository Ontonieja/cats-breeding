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
        'primary-dark': '#000035',
        primary: '#03024e',
        'primary-bg': '#F8F8FB',
        'secondary-bg': '#fff',
        'primary-light-text': '#fff',
        'primary-dark-text': '#141414',
        'gray-dark': '#686868',
        'gray-light': '#f8f8fb',
      },
      height: {
        popup: '75vh',
        'popup-content': '80%',
        'unsplash-photo': '20vh',
      },
      width: {
        'half-screen': '50vw',
        half: '50%',
        'course-item-lg': '16.6%',
      },
      maxWidth: {
        'course-list-lg': '16.6%',
        popup: '65%',
        big: '75%',
        small: '25%',
      },
      maxHeight: {
        popup: '80%',
        '100': '100%',
        'popup-content': '25vh',
      },
      spacing: {
        '16px': '16px',
        'negative-16': '-16px',
        'p-cover': '56.25%',
        'photo-gap': '0 .25rem .25rem 0',
      },
      translate: {
        center: '-50%',
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
