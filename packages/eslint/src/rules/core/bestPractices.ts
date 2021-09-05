import type { Linter } from 'eslint';

/** Best Practices
 * These rules relate to better ways of doing things to help you avoid problems:
 */

const bestPractices: Linter.RulesRecord = {
  'array-callback-return': 2,
  'block-scoped-var': 2,
  'class-methods-use-this': 2,
  'consistent-return': 2,
  curly: 2,
  'default-case': 2,
  'default-case-last': 2,
  'default-param-last': 2,
  'dot-notation': 2,
  eqeqeq: 2,
  'grouped-accessor-pairs': [2, 'setBeforeGet'],
  'guard-for-in': 2,
  'max-classes-per-file': 2,
  'no-alert': 2,
  'no-caller': 2,
  'no-case-declarations': 2,
  'no-constructor-return': 2,
  'no-div-regex': 2,
  'no-else-return': 2,
  'no-empty-function': 2,
  'no-empty-pattern': 2,
  'no-eq-null': 2,
  'no-eval': 2,
  'no-extend-native': 2,
  'no-extra-bind': 2,
  'no-extra-label': 2,
  'no-global-assign': 2,
  'no-implicit-globals': 2,
  'no-implied-eval': 2,
  'no-invalid-this': 2,
  'no-iterator': 2,
  'no-labels': 2,
  'no-lone-blocks': 2,
  'no-loop-func': 2,
  'no-magic-numbers': 0,
  'no-multi-str': 2,
  'no-new': 2,
  'no-new-func': 2,
  'no-new-wrappers': 2,
  'no-nonoctal-decimal-escape': 2,
  'no-octal': 2,
  'no-octal-escape': 2,
  'no-param-reassign': 2,
  'no-proto': 2,
  'no-redeclare': 2,
  'no-return-assign': 1,
  'no-return-await': 2,
  'no-script-url': 2,
  'no-self-assign': 2,
  'no-self-compare': 2,
  'no-sequences': 2,
  'no-throw-literal': 2,
  'no-unmodified-loop-condition': 1,
  'no-unused-expressions': 2,
  'no-unused-labels': 2,
  'no-useless-call': 2,
  'no-useless-catch': 2,
  'no-useless-concat': 2,
  'no-useless-escape': 2,
  'no-useless-return': 1,
  'no-void': 2,
  'no-with': 2,
  'prefer-named-capture-group': 1,
  'prefer-promise-reject-errors': [2, { allowEmptyReject: true }],
  'prefer-regex-literals': 2,
  radix: 2,
  'require-await': 2,
  'vars-on-top': 2,
  yoda: 1,
};

export default bestPractices;
