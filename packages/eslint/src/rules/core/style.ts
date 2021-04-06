import type { Linter } from 'eslint';

const style: Linter.RulesRecord = {
  camelcase: ['error', { properties: 'always', ignoreImports: true }],
  'capitalized-comments': [
    'error',
    'always',
    {
      ignoreConsecutiveComments: true,
      ignoreInlineComments: true,
      ignorePattern: 'pragma',
    },
  ],
  'func-name-matching': 2,
  'func-names': ['error', 'as-needed'],
  'func-style': ['error', 'expression'],
  'id-length': ['error', { min: 2 }],
  'lines-around-comment': ['error', { beforeBlockComment: true }],
  'lines-between-class-members': ['error', 'always'],
  'max-depth': ['error', { max: 4 }],
  'max-len': [
    'error',
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
  'max-nested-callbacks': ['error', { max: 5 }],
  'max-params': ['error', { max: 5 }],
  'max-statements-per-line': ['error', { max: 1 }],
  'new-cap': 2,
  'no-array-constructor': 2,
  'no-bitwise': 2,
  'no-continue': 2,
  'no-lonely-if': 2,
  'no-multi-assign': 2,
  'no-nested-ternary': 2,
  'no-restricted-syntax': [
    'error',
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
  'one-var': ['error', 'never'],
  'operator-assignment': ['error', 'always'],
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: '*', next: 'return' },
  ],
  'prefer-object-spread': 2,
  quotes: [
    'error',
    'single',
    { avoidEscape: true, allowTemplateLiterals: true },
  ],
  'spaced-comment': ['error', 'always', { exceptions: ['*', '-', '=', '+'] }],
};

export default style;
