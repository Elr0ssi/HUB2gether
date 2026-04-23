import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#090B14',
        card: '#11152A',
        primary: '#4F8CFF',
        muted: '#A1B0D3'
      }
    }
  },
  plugins: []
};

export default config;
