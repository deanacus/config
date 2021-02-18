// Modern JS
// These rules relate to post-ES2015 JavaScript (Pretty much just the stuff added in es2015, though)

const modern = {
  // Require braces around arrow function bodies
  'arrow-body-style': ['error', 'as-needed'],

  // Require parentheses around arrow function arguments
  'arrow-parens': ['error', 'always'],

  // Enforce consistent spacing before and after the arrow in arrow functions
  'arrow-spacing': ['error', { before: true, after: true }],

  // Require `super()` calls in constructors
  'constructor-super': 2,

  // Disallow reassigning class members
  'no-class-assign': 2,

  // Disallow arrow functions where they could be confused with comparisons
  'no-confusing-arrow': 2,

  // Disallow reassigning `const` variables
  'no-const-assign': 2,

  // Disallow duplicate class members
  'no-dupe-class-members': 2,

  // Disallow duplicate module imports
  'no-duplicate-imports': 2,

  // Disallow `new` operators with the `Symbol` object
  'no-new-symbol': 2,

  // Disallow `this`/`super` before calling `super()` in constructors
  'no-this-before-super': 2,

  // Disallow unnecessary computed property keys in objects and classes
  'no-useless-computed-key': 2,

  // Disallow unnecessary constructors
  'no-useless-constructor': 2,

  // Disallow renaming import, export, and destructured assignments to the same name
  'no-useless-rename': 2,

  // Require `let` or `const` instead of `var`
  'no-var': 2,

  // Require or disallow method and property shorthand syntax for object literals
  'object-shorthand': ['error', 'always', { avoidQuotes: true }],

  // Require using arrow functions for callbacks
  'prefer-arrow-callback': 2,

  // Require `const` declarations for variables that are never reassigned after declared
  'prefer-const': 2,

  // Require destructuring from arrays and/or objects
  'prefer-destructuring': 2,

  // Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
  'prefer-numeric-literals': 0,

  // Require rest parameters instead of `arguments`
  'prefer-rest-params': 2,

  // Require spread operators instead of `.apply()`
  'prefer-spread': 2,

  // Require template literals instead of string concatenation
  'prefer-template': 2,

  // Require generator functions to contain `yield`
  'require-yield': 2,

  // Enforce spacing between rest and spread operators and their expressions
  'rest-spread-spacing': 0,

  // Require symbol descriptions
  'symbol-description': 2,

  // Require or disallow spacing around embedded expressions of template strings
  'template-curly-spacing': 0,

  // Require or disallow spacing around the `*` in `yield*` expressions
  'yield-star-spacing': 0,
};

module.exports = modern;
