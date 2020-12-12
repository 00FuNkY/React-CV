module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    camelcase: 'off',
    'import/first': 'error',
  },
};
