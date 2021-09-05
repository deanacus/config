import type { RulesConfig } from '@commitlint/types';

type TypeRules = Pick<
  RulesConfig,
  | 'type-case'
  | 'type-empty'
  | 'type-enum'
  | 'type-min-length'
  | 'type-max-length'
>;

export const type: TypeRules = {
  // Commit type is in lower case
  'type-case': [2, 'always', 'lower-case'],
  // Commit type is never empty
  'type-empty': [2, 'never'],
  // Commit type is one of
  'type-enum': [
    2,
    'always',
    [
      'add',
      'delete',
      'fix',
      'revert',
      'refactor',
      'enhance',
      'chore',
      'feat',
      'docs',
      'test',
    ],
  ],
  // Commit type has 0 or more characters
  'type-min-length': [2, 'always', 3],
  // Commit type has Infinity or less characters
  'type-max-length': [2, 'always', 8],
};
