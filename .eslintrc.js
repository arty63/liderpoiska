module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["prettier"],
  extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "indent": ['error', 2],
    "no-plusplus": 0,
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': [2, { 'allowAfterThis': true }],
    'quotes': ["error", "single", { 'allowTemplateLiterals': true }],
    'class-methods-use-this' : 0,
    'no-param-reassign' : 0
  },
};
