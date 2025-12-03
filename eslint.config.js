import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactPlugin from 'eslint-plugin-react'
import nextPlugin from '@next/eslint-plugin-next'
import { defineConfig, globalIgnores } from 'eslint/config'

const nextRecommendedRules = nextPlugin.configs.recommended.rules
const nextCoreWebVitalsRules = nextPlugin.configs['core-web-vitals'].rules

export default defineConfig([
  globalIgnores(['dist', '.next', '.turbo', 'out']),
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      '@next/next': nextPlugin,
      react: reactPlugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...nextRecommendedRules,
      ...nextCoreWebVitalsRules,
      ...reactHooks.configs.flat.recommended.rules,
      '@next/next/no-img-element': 'off',
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
