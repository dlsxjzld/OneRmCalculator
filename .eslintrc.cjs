module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort', 'unused-imports'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'max-depth': ['error', 2],
    'no-console': ['error'], //콘솔로그 사용시 에러...,

    /* simple-sort */
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^\\u0000', '^@?\\w', '^[^.]', '^\\.']],
      },
    ],
    'simple-import-sort/exports': 'error',

    /* ts enum error */
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    /* unused-imports */
    'unused-imports/no-unused-imports': 'error',
  },
};
