import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import ts from 'typescript-eslint';
import vueTsEslintConfig from '@vue/eslint-config-typescript';

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...vueTsEslintConfig(),
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'vue/html-closing-bracket-newline': [
        'error',
        {
          singleline: 'never',
          multiline: 'always',
          selfClosingTag: {
            singleline: 'never',
            multiline: 'always',
          },
        },
      ],
      'vue/html-self-closing': ['off'],
      'vue/singleline-html-element-content-newline': [
        'off',
        {
          ignoreWhenNoAttributes: true,
          ignoreWhenEmpty: true,
          ignores: ['pre', 'textarea'],
          externalIgnores: [],
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 3,
          },
          multiline: {
            max: 3,
          },
        },
      ],
    },
    ignores: ['.config/*', 'node_modules'],
  },
];
