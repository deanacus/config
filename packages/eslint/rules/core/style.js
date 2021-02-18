// Stylistic Issues
// These rules relate to style guidelines, and are therefore quite subjective

const style = {
  // Enforce linebreaks after opening and before closing array brackets
  'array-bracket-newline': 0,

  // Enforce consistent spacing inside array brackets
  'array-bracket-spacing': 0,

  // Enforce line breaks after each array element
  'array-element-newline': 0,

  // Disallow or enforce spaces inside of blocks after opening block and before closing block
  'block-spacing': 0,

  // Enforce consistent brace style for blocks
  'brace-style': 0,

  // Enforce camelcase naming convention
  camelcase: ['error', { properties: 'always', ignoreImports: true }],

  // Enforce or disallow capitalization of the first letter of a comment
  'capitalized-comments': [
    'error',
    'always',
    {
      ignoreConsecutiveComments: true,
      ignoreInlineComments: true,
      ignorePattern: 'pragma',
    },
  ],

  // Require or disallow trailing commas
  'comma-dangle': 0,

  // Enforce consistent spacing before and after commas
  'comma-spacing': 0,

  // Enforce consistent comma style
  'comma-style': 0,

  // Enforce consistent spacing inside computed property brackets
  'computed-property-spacing': 0,

  // Enforce consistent naming when capturing the current execution context
  'consistent-this': 0,

  // Require or disallow newline at the end of files
  'eol-last': 0,

  // Require or disallow spacing between function identifiers and their invocations
  'func-call-spacing': 0,

  // Require function names to match the name of the variable or property to which they are assigned
  'func-name-matching': 2,

  // Require or disallow named `function` expressions
  'func-names': ['error', 'as-needed'],

  // Enforce the consistent use of either `function` declarations or expressions
  'func-style': ['error', 'expression'],

  // Enforce line breaks between arguments of a function call
  'function-call-argument-newline': 0,

  // Enforce consistent line breaks inside function parentheses
  'function-paren-newline': 0,

  // Disallow specified identifiers
  // -- 'id-denylist': 0,

  // enforce minimum and maximum identifier lengths
  'id-length': ['error', { min: 2 }],

  // Require identifiers to match a specified regular expression
  // -- 'id-match': 0,

  // enforce the location of arrow function bodies
  'implicit-arrow-linebreak': 0,

  // Enforce consistent indentation
  indent: 0,

  // Enforce the consistent use of either double or single quotes in JSX attributes
  'jsx-quotes': 0,

  // Enforce consistent spacing between keys and values in object literal properties
  'key-spacing': 0,

  // Enforce consistent spacing before and after keywords
  'keyword-spacing': 0,

  // Enforce position of line comments
  'line-comment-position': 0,

  // Enforce consistent linebreak style
  'linebreak-style': 0,

  // Require empty lines around comments
  'lines-around-comment': ['error', { beforeBlockComment: true }],

  // Require or disallow an empty line between class members
  'lines-between-class-members': ['error', 'always'],

  // Enforce a maximum depth that blocks can be nested
  'max-depth': ['error', { max: 4 }],

  // Enforce a maximum line length
  'max-len': [
    'error',
    {
      code: 100,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    },
  ],

  // Enforce a maximum number of lines per file
  // -- 'max-lines': 0,

  // enforce a maximum number of line of code in a function
  // -- 'max-lines-per-function': 0,

  // enforce a maximum depth that callbacks can be nested
  'max-nested-callbacks': ['error', { max: 5 }],

  // Enforce a maximum number of parameters in function definitions
  'max-params': ['error', { max: 5 }],

  // Enforce a maximum number of statements allowed in function blocks
  // -- 'max-statements': 0,

  // enforce a maximum number of statements allowed per line
  'max-statements-per-line': ['error', { max: 1 }],

  // Enforce a particular style for multiline comments
  // -- 'multiline-comment-style': 0,

  // enforce newlines between operands of ternary expressions
  'multiline-ternary': 0,

  // Require constructor names to begin with a capital letter
  'new-cap': 2,

  // Enforce or disallow parentheses when invoking a constructor with no arguments
  'new-parens': 0,

  // Require a newline after each call in a method chain
  'newline-per-chained-call': 0,

  // Disallow `Array` constructors
  'no-array-constructor': 2,

  // Disallow bitwise operators
  'no-bitwise': 2,

  // Disallow `continue` statements
  'no-continue': 2,

  // Disallow inline comments after code
  // -- 'no-inline-comments': 0,

  // disallow `if` statements as the only statement in `else` blocks
  'no-lonely-if': 2,

  // Disallow mixed binary operators
  // -- 'no-mixed-operators': 0,

  // disallow mixed spaces and tabs for indentation
  'no-mixed-spaces-and-tabs': 0,

  // Disallow use of chained assignment expressions
  'no-multi-assign': 2,

  // Disallow multiple empty lines
  'no-multiple-empty-lines': 0,

  // Disallow negated conditions
  'no-negated-condition': 0,

  // Disallow nested ternary expressions
  'no-nested-ternary': 2,

  // Disallow `Object` constructors
  'no-new-object': 0,

  // Disallow the unary operators `++` and `--`
  'no-plusplus': 0,

  // Disallow specified syntax
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        'Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'ForOfStatement',
      message: 'Use an array iterator',
    },
    {
      selector: 'LabeledStatement',
      message: 'This is a GOTO',
    },
    {
      selector: 'WithStatement',
      message:
        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],

  // Disallow all tabs
  'no-tabs': 2,

  // Disallow ternary operators
  'no-ternary': 0,

  // Disallow trailing whitespace at the end of lines
  'no-trailing-spaces': 0,

  // Disallow dangling underscores in identifiers
  'no-underscore-dangle': 2,

  // Disallow ternary operators when simpler alternatives exist
  'no-unneeded-ternary': 2,

  // Disallow whitespace before properties
  'no-whitespace-before-property': 0,

  // Enforce the location of single-line statements
  'nonblock-statement-body-position': 0,

  // Enforce consistent line breaks inside braces
  'object-curly-newline': 0,

  // Enforce consistent spacing inside braces
  'object-curly-spacing': 0,

  // Enforce placing object properties on separate lines
  'object-property-newline': 0,

  // Enforce variables to be declared either together or separately in functions
  'one-var': ['error', 'never'],

  // Require or disallow newlines around variable declarations
  'one-var-declaration-per-line': 0,

  // Require or disallow assignment operator shorthand where possible
  'operator-assignment': ['error', 'always'],

  // Enforce consistent linebreak style for operators
  'operator-linebreak': 0,

  // Require or disallow padding within blocks
  'padded-blocks': 0,

  // Require or disallow padding lines between statements
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: '*', next: 'return' },
  ],

  // Disallow the use of `Math.pow` in favor of the `**` operator
  'prefer-exponentiation-operator': 0,

  // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
  'prefer-object-spread': 2,

  // Require quotes around object literal property names
  'quote-props': 0,

  // Enforce the consistent use of either backticks, double, or single quotes
  quotes: [
    'error',
    'single',
    { avoidEscape: true, allowTemplateLiterals: true },
  ],

  // Require or disallow semicolons instead of ASI
  semi: 0,

  // Enforce consistent spacing before and after semicolons
  'semi-spacing': 0,

  // Enforce location of semicolons
  'semi-style': 0,

  // Require object keys to be sorted
  // -- 'sort-keys': 0,

  // require variables within the same declaration block to be sorted
  // -- 'sort-vars': 0,

  // enforce consistent spacing before blocks
  'space-before-blocks': 0,

  // Enforce consistent spacing before `function` definition opening parenthesis
  'space-before-function-paren': 0,

  // Enforce consistent spacing inside parentheses
  'space-in-parens': 0,

  // Require spacing around infix operators
  'space-infix-ops': 0,

  // Enforce consistent spacing before or after unary operators
  'space-unary-ops': 0,

  // Enforce consistent spacing after the `// ` or `/*` in a comment
  'spaced-comment': ['error', 'always', { exceptions: ['*', '-', '=', '+'] }],

  // Enforce spacing around colons of switch statements
  'switch-colon-spacing': 0,

  // Require or disallow spacing between template tags and their literals
  'template-tag-spacing': 0,

  // Require or disallow Unicode byte order mark (BOM)
  'unicode-bom': 0,

  // Require parenthesis around regex literals
  'wrap-regex': 0,
};

module.exports = style;
