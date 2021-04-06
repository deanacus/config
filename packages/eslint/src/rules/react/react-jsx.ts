import type { Linter } from 'eslint';

const reactJSX: Linter.RulesRecord = {
  'react/jsx-boolean-value': ['error', 'never', { always: [] }],
  'react/jsx-handler-names': [
    'error',
    { eventHandlerPrefix: 'handle', eventHandlerPropPrefix: 'on' },
  ],
  'react/jsx-key': ['off'],
  'react/jsx-no-bind': [
    'error',
    {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    },
  ],
  'react/jsx-no-comment-textnodes': 2,
  'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
  'react/jsx-no-literals': ['off', { noStrings: true }],
  'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
  'react/jsx-no-undef': 2,
  'react/jsx-pascal-case': ['error', { allowAllCaps: true, ignore: [] }],
  'react/jsx-sort-default-props': ['off', { ignoreCase: true }],
  'react/jsx-sort-prop-types': ['off'],
  'react/jsx-sort-props': [
    'off',
    {
      ignoreCase: true,
      callbacksLast: false,
      shorthandFirst: false,
      shorthandLast: false,
      noSortAlphabetically: false,
      reservedFirst: true,
    },
  ],
  'react/jsx-space-before-closing': ['off', 'always'],
  'react/jsx-uses-react': 2,
  'react/jsx-uses-vars': 2,
};

export default reactJSX;
