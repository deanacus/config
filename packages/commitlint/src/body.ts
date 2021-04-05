import type { RuleSet } from '..';

/**
 * The Commitlint rules that defined the standards for
 * commit body text - the optional text that is placed on
 * lines subsequent to the commit type, scope and subject
 */

export const body: RuleSet = {
  // Commit body begins with blank line
  'body-leading-blank': [2, 'always'],
  // Commit body ends with '.'
  'body-full-stop': [2, 'always', '.'],
  // Commit body lines have 72 or fewer characters
  'body-max-line-length': [2, 'always', 72],
  // Commit body must be in Sentence case
  'body-case': [2, 'always', 'sentence-case'],
};
