import type { RuleSet } from '..';

/**
 * The Commitlint rules that define the standards for
 * commit footer text - the optional text that is placed on
 * lines subsequent to the commit body
 */

export const footer: RuleSet = {
  // Commit footer begins with blank line
  'footer-leading-blank': [2, 'always'],
  // Commit footer lines has `value` or less characters
  'footer-max-line-length': [2, 'always', 72],
};
