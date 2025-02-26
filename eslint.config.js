import { defineConfig } from 'eslint-define-config';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import babelParser from '@babel/eslint-parser';

export default defineConfig([
  {
    files: ['**/*.js', '**/*.jsx'], 
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        process: 'readonly',
        React: 'readonly',
      },
    },

    plugins: {
      react: eslintPluginReact,
      'jsx-a11y': eslintPluginJsxA11y,
    },

    rules: {
      'react/prop-types': 'off',
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'jsx-a11y/no-onchange': 'warn',
    },
  },

  {

    rules: {
      'react/prop-types': 'off',
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'jsx-a11y/no-onchange': 'warn',
    },
  },
]);