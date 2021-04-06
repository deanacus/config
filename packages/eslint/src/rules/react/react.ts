import type { Linter } from 'eslint';

const reactRules: Linter.RulesRecord = {
  'react/button-has-type': [
    'error',
    {
      button: true,
      submit: true,
      reset: false,
    },
  ],
  'react/default-props-match-prop-types': [
    'error',
    {
      allowRequiredDefaults: false,
    },
  ],
  'react/destructuring-assignment': ['error', 'always'],
  'react/forbid-foreign-prop-types': [
    'warn',
    {
      allowInPropTypes: true,
    },
  ],
  'react/forbid-prop-types': [
    'error',
    {
      forbid: ['any', 'array', 'object'],
      checkContextTypes: false,
      checkChildContextTypes: false,
    },
  ],
  'react/function-component-definition': [
    'error',
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],
  'react/no-access-state-in-setstate': 2,
  'react/no-array-index-key': 2,
  'react/no-children-prop': 2,
  'react/no-danger': 2,
  'react/no-danger-with-children': 2,
  'react/no-deprecated': 2,
  'react/no-did-mount-set-state': 2,
  'react/no-did-update-set-state': 2,
  'react/no-direct-mutation-state': 2,
  'react/no-find-dom-node': 2,
  'react/no-is-mounted': 2,
  'react/no-multi-comp': 2,
  'react/no-redundant-should-component-update': 2,
  'react/no-render-return-value': 2,
  'react/no-string-refs': 2,
  'react/no-this-in-sfc': 2,
  'react/no-typos': 2,
  'react/no-unescaped-entities': 2,
  'react/no-unknown-property': 2,
  'react/no-unsafe': 2,
  'react/no-unused-prop-types': [
    'error',
    {
      customValidators: [],
      skipShapeProps: true,
    },
  ],
  'react/no-unused-state': 2,
  'react/no-will-update-set-state': 2,
  'react/prefer-es6-class': ['error', 'always'],
  'react/prefer-stateless-function': 2,
  'react/prop-types': [
    'error',
    {
      ignore: [],
      customValidators: [],
      skipUndeclared: false,
    },
  ],
  'react/react-in-jsx-scope': 2,
  'react/require-render-return': 2,
  'react/self-closing-comp': 2,
  'react/sort-comp': [
    'error',
    {
      order: ['static-methods', 'lifecycle', 'everything-else', 'render'],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'state',
          'getInitialState',
          'getChildContext',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount',
        ],
      },
    },
  ],
  'react/state-in-constructor': ['error', 'always'],
  'react/static-property-placement': ['error', 'property assignment'],
  'react/style-prop-object': 2,
  'react/void-dom-elements-no-children': 2,
};

export default reactRules;
