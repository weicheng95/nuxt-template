module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:nuxt/recommended',
    'airbnb-base',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'import/no-unresolved': [0, { caseSensitive: false }],
    'max-len': ['error', { code: 300 }],
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 'never',
  },
};
