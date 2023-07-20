/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './page-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2rem',
        },
      },
      backgroundImage: {
        cardBg:
          'linear-gradient(290.55deg, #2565D0 15.48%, #2769B3 53.63%, #3CC9CD 93.52%, #42E8E0 102.2%)',
        section_background:
          'linear-gradient(124.5deg, #00C9D6 1.37%, #2565D0 100%)',
        contacts: "url('/images/contacts.svg')",
        modal:
          "url('/images/modal/left-cube.svg'), url('/images/modal/right-cube.svg')",
        modalMd:
          "url('/images/modal/left-cube-md.svg'), url('/images/modal/right-cube-md.svg')",
        modalXl:
          "url('/images/modal/left-cube-xl.svg'), url('/images/modal/right-cube-xl.svg')",
        stickBg: "url('/images/stick-left.svg')",
        stickBgRight: "url('/images/stick-right.svg')",
      },
      colors: {
        dark: '#212B36',
        primary: '#2565D0',
        hover: '#0A5ADF',
        secondary: '#18B2A3',
        gray_light: '#637381',
        white_light: '#F8F8F8',

        black: '#151515',
        blackBlue: '#182936',
        blackBlue2: '#0F1C26',
        border: '#fcfcfc',
        inputColor: '#33404B',
        gray: '#313030',
        lightGray: '#D9D9D9',
        neon: '#20BCC6',
        red: '#f43f5e',
        stroke: '#5C666F',
        white: '#FDFDFD',
        blue: '#203642',
        number: '#324d5e',
        section: '#182936',
        feature: '#313030',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      boxShadow: {
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
        header: '1px 2px 8px rgba(37, 101, 208, 0.14)',
        card: '1px 2px 8px rgba(37, 101, 208, 0.14)',
        card_hover: '6px 8px 12px rgba(37, 101, 208, 0.18)',
        button_hover: '1px 2px 8px rgba(255, 255, 255, 0.54)',
        input: '1px 2px 8px rgba(37, 101, 208, 0.14)',
      },
      // KEYFRAMES
      keyframes: {
        cube1: {
          '0%, 22%': { color: '#00F0FF' },
          '23%, 100%': { color: '#ffffff' },
        },
        cube2: {
          '0%, 24%': { color: '#ffffff' },
          '25%, 47%': { color: '#00F0FF' },
          '48%, 100%': { color: '#ffffff' },
        },
        cube3: {
          '0%, 49%': { color: '#ffffff' },
          '50%, 72%': { color: '#00F0FF' },
          '73%, 100%': { color: '#ffffff' },
        },
        cube4: {
          '0%, 74%': { color: '#ffffff' },
          '75%, 100%': { color: '#00F0FF' },
        },
      },
      // ANIMATION
      animation: {
        cube1: 'cube1 3s linear infinite',
        cube2: 'cube2 3s linear infinite',
        cube3: 'cube3 3s linear infinite',
        cube4: 'cube4 3s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/line-clamp'),
  ],
};
