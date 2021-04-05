import type { RuleSet } from '..';

/**
 * The Commitlint rules that define the standards for
 * commit header line - the text that consists of the
 * type, the scope, and the subject
 */

export const header: RuleSet = {
  // Header has a max length of 50
  'header-max-length': [2, 'always', 50],
  // Header has a min length of 16 (shortest type, shortest subject, plus colon and space)
  'header-min-length': [2, 'always', 15],
};
