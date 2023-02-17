module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'import/no-unresolved': 'off',
    'vue/no-unused-components': 'off',
    'no-unresolved': 'off',
    'no-empty-function': 'off',
    'no-unused-vars': 'off',
    'no-alert': 'off',
    'prefer-template': 'off',
    'no-unused-expressions': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/form-control-has-label': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
  },
};
