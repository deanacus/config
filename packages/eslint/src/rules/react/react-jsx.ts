import type { Linter } from 'eslint';

const reactJSX: Linter.RulesRecord = {
  'react/jsx-boolean-value': [2, 'never', { always: [] }],
  'react/jsx-handler-names': [
    2,
    { eventHandlerPrefix: 'handle', eventHandlerPropPrefix: 'on' },
  ],
  'react/jsx-key': ['off'],
  'react/jsx-no-bind': [
    2,
    {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    },
  ],
  'react/jsx-no-comment-textnodes': 2,
  'react/jsx-no-duplicate-props': [2, { ignoreCase: true }],
  'react/jsx-no-literals': ['off', { noStrings: true }],
  'react/jsx-no-target-blank': [2, { enforceDynamicLinks: 'always' }],
  'react/jsx-no-undef': 2,
  'react/jsx-pascal-case': [2, { allowAllCaps: true, ignore: [] }],
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
