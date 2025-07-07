import js from '@eslint/js';
import tslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import unicorn from 'eslint-plugin-unicorn';
import playwright from 'eslint-plugin-playwright';

export default [
  js.configs.recommended,
  ...tslint.configs.recommended,
  ...tslint.configs.stylistic,
  prettier,
  {
    plugins: { '@typescript-eslint': tslint.plugin, unicorn, playwright },
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'variableLike', format: ['camelCase'] },
      ],
      'unicorn/filename-case': ['error', { cases: { camelCase: true } }],
      'unicorn/no-array-for-each': 'off',
      ...playwright.configs['recommended'].rules,
    },
    languageOptions: {
      parser: tslint.parser,
    },
  },
];

// For ignores:
export const ignores = ['node_modules', 'playwright-report', 'test-results'];
