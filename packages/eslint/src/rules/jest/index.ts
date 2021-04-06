import type { Linter } from 'eslint';

const jestRules: Linter.RulesRecord = {
  'jest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
  'jest/expect-expect': ['error', { assertFunctionNames: ['expect'] }],
  'jest/lowercase-name': ['error', { ignore: ['describe'] }],
  'jest/no-alias-methods': 2,
  'jest/no-commented-out-tests': 2,
  'jest/no-conditional-expect': 2,
  'jest/no-deprecated-functions': 2,
  'jest/no-disabled-tests': 2,
  'jest/no-done-callback': 2,
  'jest/no-duplicate-hooks': 2,
  'jest/no-export': 2,
  'jest/no-focused-tests': 2,
  'jest/no-identical-title': 2,
  'jest/no-jasmine-globals': 2,
  'jest/no-jest-import': 2,
  'jest/no-mocks-import': 2,
  'jest/no-standalone-expect': 2,
  'jest/no-test-return-statement': 2,
  'jest/prefer-hooks-on-top': 2,
  'jest/prefer-spy-on': 2,
  'jest/prefer-strict-equal': 2,
  'jest/prefer-to-be-null': 2,
  'jest/prefer-to-be-undefined': 2,
  'jest/prefer-to-contain': 2,
  'jest/prefer-to-have-length': 2,
  'jest/require-to-throw-message': 2,
  'jest/require-top-level-describe': 2,
  'jest/valid-describe': 2,
  'jest/valid-title': [
    'error',
    {
      ignoreTypeOfDescribeName: false,
      disallowedWords: [],
      mustMatch: {
        it: '^should',
      },
    },
  ],
};

export default jestRules;
