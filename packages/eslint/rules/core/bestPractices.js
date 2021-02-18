// Best Practices
// These rules relate to better ways of doing things to help you avoid problems:
const bestPractices = {
  // Enforce `return` statements in callbacks of array methods
  'array-callback-return': 2,

  // Enforce the use of variables within the scope they are defined
  'block-scoped-var': 2,

  // Enforce that class methods utilize `this`
  'class-methods-use-this': 2,

  // Require `return` statements to either always or never specify values
  'consistent-return': 2,

  // Enforce consistent brace style for all control statements
  curly: 2,

  // Require `default` cases in `switch` statements
  'default-case': 2,

  // Enforce default clauses in switch statements to be last
  'default-case-last': 2,

  // Enforce default parameters to be last
  'default-param-last': 2,

  // Enforce consistent newlines before and after dots
  'dot-location': 0,

  // Enforce dot notation whenever possible
  'dot-notation': 2,

  // Require the use of `===` and `!==`
  eqeqeq: 2,

  // Require grouped accessor pairs in object literals and classes
  'grouped-accessor-pairs': ['error', 'setBeforeGet'],

  // Require `for-in` loops to include an `if` statement
  'guard-for-in': 2,

  // Enforce a maximum number of classes per file
  'max-classes-per-file': 2,

  // Disallow the use of `alert`, `confirm`, and `prompt`
  'no-alert': 2,

  // Disallow the use of `arguments.caller` or `arguments.callee`
  'no-caller': 2,

  // Disallow lexical declarations in case clauses
  'no-case-declarations': 2,

  // Disallow returning value from constructor
  'no-constructor-return': 2,

  // Disallow division operators explicitly at the beginning of regular expressions
  'no-div-regex': 2,

  // Disallow `else` blocks after `return` statements in `if` statements
  'no-else-return': 2,

  // Disallow empty functions
  'no-empty-function': 2,

  // Disallow empty destructuring patterns
  'no-empty-pattern': 2,

  // Disallow `null` comparisons without type-checking operators
  'no-eq-null': 2,

  // Disallow the use of `eval()`
  'no-eval': 2,

  // Disallow extending native types
  'no-extend-native': 2,

  // Disallow unnecessary calls to `.bind()`
  'no-extra-bind': 2,

  // Disallow unnecessary labels
  'no-extra-label': 2,

  // Disallow fallthrough of `case` statements
  'no-fallthrough': 0,

  // Disallow leading or trailing decimal points in numeric literals
  'no-floating-decimal': 0,

  // Disallow assignments to native objects or read-only global variables
  'no-global-assign': 2,

  // Disallow declarations in the global scope
  'no-implicit-globals': 2,

  // Disallow the use of `eval()`-like methods
  'no-implied-eval': 2,

  // Disallow `this` keywords outside of classes or class-like objects
  'no-invalid-this': 2,

  // Disallow the use of the `__iterator__` property
  'no-iterator': 2,

  // Disallow labeled statements
  'no-labels': 2,

  // Disallow unnecessary nested blocks
  'no-lone-blocks': 2,

  // Disallow function declarations that contain unsafe references inside loop statements
  'no-loop-func': 2,

  // Disallow magic numbers
  'no-magic-numbers': 2,

  // Disallow multiple spaces
  'no-multi-spaces': 0,

  // Disallow multiline strings
  'no-multi-str': 2,

  // Disallow `new` operators outside of assignments or comparisons
  'no-new': 2,

  // Disallow `new` operators with the `Function` object
  'no-new-func': 2,

  // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
  'no-new-wrappers': 2,

  // Disallow `\8` and `\9` escape sequences in string literals
  'no-nonoctal-decimal-escape': 2,

  // Disallow octal literals
  'no-octal': 2,

  // Disallow octal escape sequences in string literals
  'no-octal-escape': 2,

  // Disallow reassigning `function` parameters
  'no-param-reassign': 2,

  // Disallow the use of the `__proto__` property
  'no-proto': 2,

  // Disallow variable redeclaration
  'no-redeclare': 2,

  // Disallow certain properties on certain objects
  'no-restricted-properties': 0,

  // Disallow assignment operators in `return` statements
  'no-return-assign': 1,

  // Disallow unnecessary `return await`
  'no-return-await': 2,

  // Disallow `javascript:` urls
  'no-script-url': 2,

  // Disallow assignments where both sides are exactly the same
  'no-self-assign': 2,

  // Disallow comparisons where both sides are exactly the same
  'no-self-compare': 2,

  // Disallow comma operators
  'no-sequences': 2,

  // Disallow throwing literals as exceptions
  'no-throw-literal': 2,

  // Disallow unmodified loop conditions
  'no-unmodified-loop-condition': 1,

  // Disallow unused expressions
  'no-unused-expressions': 2,

  // Disallow unused labels
  'no-unused-labels': 2,

  // Disallow unnecessary calls to `.call()` and `.apply()`
  'no-useless-call': 2,

  // Disallow unnecessary `catch` clauses
  'no-useless-catch': 2,

  // Disallow unnecessary concatenation of literals or template literals
  'no-useless-concat': 2,

  // Disallow unnecessary escape characters
  'no-useless-escape': 2,

  // Disallow redundant return statements
  'no-useless-return': 1,

  // Disallow `void` operators
  'no-void': 2,

  // Disallow specified warning terms in comments
  'no-warning-comments': 0,

  // Disallow `with` statements
  'no-with': 2,

  // Enforce using named capture group in regular expression
  'prefer-named-capture-group': 1,

  // Require using Error objects as Promise rejection reasons
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

  // Disallow use of the `RegExp` constructor in favor of regular expression literals
  'prefer-regex-literals': 2,

  // Enforce the consistent use of the radix argument when using `parseInt()`
  radix: 2,

  // Disallow async functions which have no `await` expression
  'require-await': 2,

  // Enforce the use of `u` flag on RegExp
  'require-unicode-regexp': 0,

  // Require `var` declarations be placed at the top of their containing scope
  'vars-on-top': 2,

  // Require parentheses around immediate `function` invocations
  'wrap-iife': 0,

  // Require or disallow "Yoda" conditions
  yoda: 1,
};

module.exports = bestPractices;
