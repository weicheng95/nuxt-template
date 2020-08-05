/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: [
    './**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: [
          'Raleway',
        ],
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover'],
  },
};
