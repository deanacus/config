// Possible Errors
// These rules relate to possible syntax or logic errors in JavaScript code

const errors = {
  // Enforce "for" loop update clause moving the counter in the right direction.
  'for-direction': 2,

  // Enforce `return` statements in getters
  'getter-return': 2,

  // Disallow using an async function as a Promise executor
  'no-async-promise-executor': 2,

  // Disallow `await` inside of loops
  'no-await-in-loop': 2,

  // Disallow comparing against -0
  'no-compare-neg-zero': 2,

  // Disallow assignment operators in conditional expressions
  'no-cond-assign': 2,

  // Disallow the use of `console`
  'no-console': 1,

  // Disallow constant expressions in conditions
  'no-constant-condition': ['error', { checkLoops: false }],

  // Disallow control characters in regular expressions
  'no-control-regex': 2,

  // Disallow the use of `debugger`
  'no-debugger': 1,

  // Disallow duplicate arguments in `function` definitions
  'no-dupe-args': 2,

  // Disallow duplicate conditions in if-else-if chains
  'no-dupe-else-if': 2,

  // Disallow duplicate keys in object literals
  'no-dupe-keys': 2,

  // Disallow duplicate case labels
  'no-duplicate-case': 2,

  // Disallow empty block statements
  'no-empty': 2,

  // Disallow empty character classes in regular expressions
  'no-empty-character-class': 2,

  // Disallow reassigning exceptions in `catch` clauses
  'no-ex-assign': 2,

  // Disallow unnecessary boolean casts
  'no-extra-boolean-cast': 1,

  // Disallow unnecessary parentheses
  'no-extra-parens': 0,

  // Disallow unnecessary semicolons
  'no-extra-semi': 0,

  // Disallow reassigning `function` declarations
  'no-func-assign': 2,

  // Disallow assigning to imported bindings
  'no-import-assign': 2,

  // Disallow invalid regular expression strings in `RegExp` constructors
  'no-invalid-regexp': 2,

  // Disallow irregular whitespace
  'no-irregular-whitespace': 2,

  // Disallow literal numbers that lose precision
  'no-loss-of-precision': 2,

  // Disallow characters which are made with multiple code points in character class syntax
  'no-misleading-character-class': 2,

  // Disallow calling global object properties as functions
  'no-obj-calls': 2,

  // Disallow returning values from Promise executor functions
  'no-promise-executor-return': 2,

  // Disallow calling some `Object.prototype` methods directly on objects
  'no-prototype-builtins': 2,

  // Disallow multiple spaces in regular expressions
  'no-regex-spaces': 2,

  // Disallow sparse arrays
  'no-sparse-arrays': 1,

  // Disallow template literal placeholder syntax in regular strings
  'no-template-curly-in-string': 1,

  // Disallow confusing multiline expressions
  'no-unexpected-multiline': 2,

  // Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
  'no-unreachable': 2,

  // Disallow loops with a body that allows only one iteration
  'no-unreachable-loop': 2,

  // Disallow control flow statements in `finally` blocks
  'no-unsafe-finally': 2,

  // Disallow negating the left operand of relational operators
  'no-unsafe-negation': 2,

  // Disallow use of optional chaining in contexts where the `undefined` value is not allowed
  'no-unsafe-optional-chaining': 2,

  // Disallow useless backreferences in regular expressions
  'no-useless-backreference': 2,

  // Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
  'require-atomic-updates': 2,

  // Require calls to `isNaN()` when checking for `NaN`
  'use-isnan': 2,

  // Enforce comparing `typeof` expressions against valid strings
  'valid-typeof': 2,
};

module.exports = errors;
