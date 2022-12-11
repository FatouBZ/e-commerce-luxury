module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 11,
  },
  rules: {
    'no-console': 0,
    'import/no-extraneous-dependencies': 0,
    'space-before-function-paren': 0,
    ' arrow-spacing': 0,
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    'no-nested-ternary': 0,
    'import/newline-after-import': 0
  },
};
