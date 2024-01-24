/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray/300': '#D0D5DD',
        'gray/100': '#F2F4F7',
        'gray/900': '#101828',
        'blue/400': '#528BFF',
        'gray/500': '#667085',
        'gray/400': '#98A2B3',
        'blue/700': '#175CD3',
        'gray/800': '#1D2939',
        'gray/700': '#344054',
        'gray/600': '#475467',
        'blue/200': '#B2DDFF',
        'blue/50': '#EFF8FF',
        'orange-dark/300': '#FF9C66',
        'gray-blue/300': '#B3B8DB',
        'moss/300': '#ACDC79',
        'primary/300': '#D6BBFB',
        'warning/300': '#FEC84B',
        'rose/300': '#FEA3B4',
        'blue/100': '#D1E9FF',
        'gray/50': '#F9FAFB',
        'gray/200': '#EAECF0',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/background-pattern.png')",
      }

    },
  },
  plugins: [],
}

