/**
 * The Commitlint rules that define the standards for
 * commit scopes - that is the pathenthised word that
 * immediately follows the commit type.
 */

module.exports = {
  // Commit scope is in lower case
  'scope-case': [2, 'always', 'lowerCase'],
  // Commit scope is empty
  'scope-empty': [0, 'never'],
  // Commit scope has 0 or more characters
  'scope-min-length': [2, 'always', 0],
  // Commit scope has 10 or less characters
  'scope-max-length': [2, 'aways', 10],
};
