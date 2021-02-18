/**
 * The Commitlint rules that defined the standards for
 * commit subject text - the text that makes up the remainder
 * of the first line of the commit after the type and scope
 */

module.exports = {
  // Commit subject
  // Commit subject is in lower case
  'subject-case': [2, 'always', 'lowerCase'],
  // Commit subject is not empty
  'subject-empty': [2, 'never'],
  // Commit subject never ends with '.'
  'subject-full-stop': [2, 'never', '.'],
  // Commit subject has `value` or more characters
  'subject-min-length': [2, 'always', 10],
  // Commit subject is verbalized in tense present in `value`
  'subject-tense': [2, 'always', 'present-imperative'],
};
