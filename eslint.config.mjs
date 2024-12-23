export default [
  {
    ignores: ['dist/', 'dist/bundle.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
      },
    },
    plugins: ['prettier'], // Add Prettier plugin
    extends: [
      'plugin:prettier/recommended', // Extend Prettier configuration
    ],
    rules: {
      'no-unused-vars': 'warn',
      'prettier/prettier': 'error', // Ensure Prettier formatting is enforced
    },
  },
];
