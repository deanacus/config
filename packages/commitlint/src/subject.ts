import type { RuleSet } from '..';
/**
 * The Commitlint rules that defined the standards for
 * commit subject text - the text that makes up the remainder
 * of the first line of the commit after the type and scope
 */

export const subject: RuleSet = {
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
