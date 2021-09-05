import type { RulesConfig } from '@commitlint/types';

type SubjectRules = Pick<
  RulesConfig,
  | 'subject-case'
  | 'subject-empty'
  | 'subject-full-stop'
  | 'subject-max-length'
  | 'subject-min-length'
>;

export const subject: SubjectRules = {
  // Commit subject is in lower case
  'subject-case': [2, 'always', 'lower-case'],
  // Commit subject is not empty
  'subject-empty': [2, 'never'],
  // Commit subject never ends with '.'
  'subject-full-stop': [2, 'never', '.'],
  // Commit subject has `value` or fewer characters
  'subject-max-length': [2, 'always', 44],
  // Commit subject has `value` or more characters
  'subject-min-length': [2, 'always', 10],
};
