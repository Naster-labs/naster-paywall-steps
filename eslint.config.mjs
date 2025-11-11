// eslint.config.mjs
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import ts from 'typescript-eslint';

export default [
  // Ignory
  {
    ignores: [
      '**/dist/**',
      '**/build/**',
      '**/.astro/**',
      '**/node_modules/**',
      '**/.turbo/**',
      '**/*.min.*',
      'third_party_licenses/**',
    ],
  },

  // Baseline dla JS
  js.configs.recommended,

  // ✅ TypeScript bez type-checkingu (na start)
  // Gdy będziesz gotów na typed linting, zamień na:
  // ...ts.configs.recommendedTypeChecked i dodaj tsconfig.eslint.json
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...ts.configs.recommended,
    languageOptions: {
      parserOptions: {
        project: false, // ważne: wyłącz typed linting na teraz
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: { prettier },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-debugger': 'warn',
    },
  },

  // ✅ CommonJS dla *.cjs (żeby 'module' i 'require' były znane)
  {
    files: ['**/*.cjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
    plugins: { prettier },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },

  // Skrypty narzędziowe – pozwól na console
  {
    files: ['tools/**/*.{js,ts}'],
    rules: {
      'no-console': 'off',
    },
  },
];
