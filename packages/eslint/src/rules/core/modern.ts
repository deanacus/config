import type { Linter } from 'eslint';

const modern: Linter.RulesRecord = {
  'arrow-body-style': [2, 'as-needed'],
  'arrow-parens': [2, 'always'],
  'arrow-spacing': [2, { before: true, after: true }],
  'constructor-super': 2,
  'no-class-assign': 2,
  'no-confusing-arrow': 2,
  'no-const-assign': 2,
  'no-dupe-class-members': 2,
  'no-duplicate-imports': 2,
  'no-new-symbol': 2,
  'no-this-before-super': 2,
  'no-useless-computed-key': 2,
  'no-useless-constructor': 2,
  'no-useless-rename': 2,
  'no-var': 2,
  'object-shorthand': [2, 'always', { avoidQuotes: true }],
  'prefer-arrow-callback': 2,
  'prefer-const': 2,
  'prefer-destructuring': 2,
  'prefer-rest-params': 2,
  'prefer-spread': 2,
  'prefer-template': 2,
  'require-yield': 2,
  'symbol-description': 2,
};

export default modern;
