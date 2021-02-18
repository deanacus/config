/**
 * The Commitlint rules that defined the standards for
 * commit body text - the optional text that is placed on
 * lines subsequent to the commit type, scope and subject
 */

module.exports = {
  // Commit body begins with blank line
  'body-leading-blank': [2, 'always'],
  // Commit body ends with '.'
  'body-full-stop': [2, 'always', '.'],
  // Commit body lines have 72 or fewer characters
  'body-max-line-length': [2, 'always', 72],
  // Commit body is verbalized in tense present in `value`
  'body-tense': [2, 'always', 'present-imperative'],
};
