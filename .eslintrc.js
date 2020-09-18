module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-console': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'no-unused-expressions': 0,
    'max-classes-per-file': 0,
    'class-methods-use-this': 0,
  },
};
