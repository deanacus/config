/**
 * The Commitlint rules that define the standards for
 * commit type - that is the very first word on the very
 * first line of the commit.
 */

module.exports = {
  // Commit type is one of
  'type-enum': [
    2,
    'always',
    ['add', 'delete', 'fix', 'revert', 'refactor', 'enhance', 'chore'],
  ],
  // Commit type is in lower case
  'type-case': [2, 'always', 'lower-case'],
  // Commit type is never empty
  'type-empty': [2, 'never'],
  // Commit type has 0 or more characters
  'type-min-length': [2, 'always', 3],
  // Commit type has Infinity or less characters
  'type-max-length': [2, 'always', 8],
};
