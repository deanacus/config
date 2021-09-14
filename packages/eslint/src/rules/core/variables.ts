import type { Linter } from 'eslint';

const variables: Linter.RulesRecord = {
  'init-declarations': [2, 'always'],
  'no-delete-var': 2,
  'no-label-var': 2,
  'no-restricted-globals': 2,
  'no-shadow': 2,
  'no-shadow-restricted-names': 2,
  'no-undef': 2,
  'no-undefined': 0,
  'no-unused-vars': 2,
  'no-use-before-define': 2,
};

export default variables;
