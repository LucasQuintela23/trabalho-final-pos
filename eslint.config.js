import eslintPlugin from 'eslint/use-at-your-own-risk';

export default [
  {
    ignores: ['node_modules/**'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      eslint: eslintPlugin,
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
    },
  },
];
