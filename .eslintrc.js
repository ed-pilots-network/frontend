module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    babelOptions: {
      presets: [
        '@babel/preset-react',
      ],
      plugins: ['@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-top-level-await'],
    },
  },
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'plugin:react-hooks/recommended',
  ],
  overrides: [],
  rules: {
    'react/jsx-props-no-spreading': [2, {
      custom: 'ignore',
    }],
    radix: ['error', 'as-needed'],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
  },
};
