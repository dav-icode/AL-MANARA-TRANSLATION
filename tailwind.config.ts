import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f7fb',
          100: '#e8eef6',
          200: '#d7e1f0',
          300: '#b8cce5',
          400: '#93b1d7',
          500: '#4F6A8B', // azul Al Manara
          600: '#3d5570',
          700: '#32445a',
          800: '#2b3a4c',
          900: '#273241',
        },
        accent: {
          50: '#fafce8',
          100: '#f5f9c5',
          200: '#eff58e',
          300: '#e5ed4d',
          400: '#BFCC2E', // verde limão Al Manara
          500: '#a8b41f',
          600: '#848f17',
          700: '#636c16',
          800: '#505616',
          900: '#444917',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#9B9B96', // cinza Al Manara
          600: '#78716c',
          700: '#57534e',
          800: '#44403c',
          900: '#292524',
        },
        cream: '#F3EFB6',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'], // títulos elegantes
        sans: ['Montserrat', 'system-ui', 'sans-serif'], // corpo
        heading: ['var(--font-cinzel)', 'serif'],
      },
      backgroundImage: {
        'gradient-arabic': 'linear-gradient(135deg, #4F6A8B 0%, #BFCC2E 100%)',
        'gradient-hero': 'linear-gradient(to right, #4F6A8B, #3d5570, #2b3a4c)',
        'arch-pattern': "url('/patterns/arabic-arch.svg')",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        float: 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite', // ✅ ADICIONAR
        'float-slow': 'floatSlow 20s ease-in-out infinite', // ✅ ADICIONAR
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatSlow: {
          // ✅ ADICIONAR
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      borderRadius: {
        arch: '50% 50% 0 0', // arco árabe
      },
    },
  },
  plugins: [],
};

export default config;
