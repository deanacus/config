import type { Linter } from 'eslint';

const style: Linter.RulesRecord = {
  camelcase: [2, { properties: 'always', ignoreImports: true }],
  'func-name-matching': 2,
  'func-names': [2, 'as-needed'],
  'func-style': [2, 'expression'],
  'id-length': [2, { min: 2 }],
  'lines-around-comment': [2, { beforeBlockComment: true }],
  'lines-between-class-members': [2, 'always'],
  'max-depth': [2, { max: 4 }],
  'max-len': [
    2,
    {
      code: 100,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    },
  ],
  'max-nested-callbacks': [2, { max: 5 }],
  'max-params': [2, { max: 5 }],
  'max-statements-per-line': [2, { max: 1 }],
  'new-cap': 2,
  'no-array-constructor': 2,
  'no-bitwise': 2,
  'no-continue': 2,
  'no-lonely-if': 2,
  'no-multi-assign': 2,
  'no-nested-ternary': 2,
  'no-restricted-syntax': [
    2,
    {
      selector: 'ForInStatement',
      message:
        'Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'ForOfStatement',
      message: 'Use an array iterator',
    },
    {
      selector: 'LabeledStatement',
      message: 'This is a GOTO',
    },
    {
      selector: 'WithStatement',
      message:
        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],
  'no-tabs': 2,
  'no-underscore-dangle': 2,
  'no-unneeded-ternary': 2,
  'one-var': [2, 'never'],
  'operator-assignment': [2, 'always'],
  'padding-line-between-statements': [
    2,
    { blankLine: 'always', prev: '*', next: 'return' },
  ],
  'prefer-object-spread': 2,
  quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  'spaced-comment': [2, 'always', { exceptions: ['*', '-', '=', '+'] }],
};

export default style;
