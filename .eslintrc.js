const INLINE_ELEMENTS = require('./node_modules/eslint-plugin-vue/lib/utils/inline-non-void-elements.json')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'never',
        component: 'always'
      }
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 10
    }],
    'vue/singleline-html-element-content-newline': ['error', {
      ignores: [
        'pre',
        'template',
        'textarea',
        'v-btn',
        'v-icon',
        'v-slot',
        'z-fab',
        ...INLINE_ELEMENTS
      ]
    }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'arrow-parens': 'off'
  }
}
