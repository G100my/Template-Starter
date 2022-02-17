module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'cypress/globals': true,
  },
  // prettier-ignore
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    "plugin:cypress/recommended",
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', 'cypress'],
  rules: {
    'no-console': process.env.NODE_MODE === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_MODE === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    'no-undef': 'warn',
    'vue/no-unused-components': 'warn',
    'vue/require-v-for-key': 'warn',
    'vue/valid-template-root': 'warn',
    'vue/multi-word-component-names': ['warn', { ignores: ['index'] }],
    'vue/attribute-hyphenation': 0,
  },
}
