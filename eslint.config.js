// eslint.config.js
import js from '@eslint/js'            // base “recommended” rules
import node from 'eslint-plugin-node'  // Node-specific checks
import prettier from 'eslint-config-prettier'
import globals from 'globals'
import nodePlugin from 'eslint-plugin-node'
import jestPlugin from 'eslint-plugin-jest'

export default [
  js.configs.recommended,

  {
    files: ['**/*.js'],          // lint all .js files
    languageOptions: {
      sourceType: 'commonjs',    // Use 'commonjs' for Node.js (or 'module' for ESM)
      ecmaVersion: 'latest',
      globals: {
        ...globals.node, // ⬅️ brings in process, console, __dirname, …
      },
    },
    plugins: { node },
    rules: {
      'no-console': 'off',       // sample override
    },
  },

   // 4️⃣ Special settings for Jest test files
  {
    files: ['test/**/*.js', '**/*.test.js', '**/*.spec.js'],
    plugins: { jest: jestPlugin },
    languageOptions: {
      globals: {
        ...globals.node,
        ...jestPlugin.environments.globals.globals, // ⬅️ describe, test, expect
      },
    },
    rules: {
      // a few helpful Jest rules
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },

  { ignores: ['node_modules/**', 'coverage/**', 'eslint.config.*'] },  // optional

  prettier,                       // keep style-rule conflicts off last
];
