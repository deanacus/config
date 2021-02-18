// Variables
// These rules relate to variable declarations

const variables = {
  // Require or disallow initialization in variable declarations
  'init-declarations': ['error', 'always'],

  // Disallow deleting variables
  'no-delete-var': 2,

  // Disallow labels that share a name with a variable
  'no-label-var': 2,

  // Disallow specified global variables
  'no-restricted-globals': 2,

  // Disallow variable declarations from shadowing variables declared in the outer scope
  'no-shadow': 2,

  // Disallow identifiers from shadowing restricted names
  'no-shadow-restricted-names': 2,

  // Disallow the use of undeclared variables unless mentioned in `/*global */` comments
  'no-undef': 2,

  // Disallow initializing variables to `undefined`
  'no-undef-init': 0,

  // Disallow the use of `undefined` as an identifier
  'no-undefined': 2,

  // Disallow unused variables
  'no-unused-vars': 2,

  // Disallow the use of variables before they are defined
  'no-use-before-define': 2,
};

module.exports = variables;
