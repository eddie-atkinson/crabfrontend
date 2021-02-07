module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        myCoolImage: "url('/crab.webp')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
