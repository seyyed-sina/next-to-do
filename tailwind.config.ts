import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5274F9',
        red: '#EA2D2D',
        gray: {
          1000: '#F6F6F6',
          2000: '#DEDEDE',
          3000: '#CCCCCC',
          4000: '#444444',
          5000: '#777777',
        },
      },
    },
  },
  plugins: [],
};
export default config;
