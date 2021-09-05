import type { RulesConfig, TargetCaseType } from '@commitlint/types';

type BodyRules = Pick<
  RulesConfig,
  | 'body-case'
  | 'body-empty'
  | 'body-full-stop'
  | 'body-leading-blank'
  | 'body-max-length'
  | 'body-max-line-length'
  | 'body-min-length'
>;

export const body: BodyRules = {
  // Commit body must be in Sentence case
  'body-case': [2, 'always', 'sentence-case' as TargetCaseType],
  // Commit body can be empty
  'body-empty': [0],
  // Commit body ends with '.'
  'body-full-stop': [2, 'always', '.'],
  // Commit body begins with blank line
  'body-leading-blank': [2, 'always'],
  // Commit body has a max length
  'body-max-length': [0],
  // Commit body lines have 72 or fewer characters
  'body-max-line-length': [2, 'always', 72],
  // Commit body has a min length
  'body-min-length': [0],
};
