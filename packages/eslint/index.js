const rules = require('./rules');
const { hasDependency } = require('./utils');

const hasTypescript = hasDependency('typescript');
const hasReact = hasDependency('react');
const hasJest = hasDependency('jest');

const plugins = () => [
  'import',
  ...(hasJest ? ['jest'] : []),
  ...(hasReact ? ['react', 'react-hooks', 'jsx-a11y'] : []),
  ...(hasTypescript ? ['@typescript-eslint'] : []),
];

const rules = () => ({
  ...rules.core,
  ...(hasReact ? rules.react : {}),
  ...(hasTypescript ? rules.typescript : {}),
});

const env = () => ({
  ...(hasJest ? { 'jest/globals': true } : {}),
  browser: true,
  node: true,
});

const ecmaFeatures = () => ({
  ...(hasReact ? { jsx: true } : {}),
});

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: plugins(),
  env: env(),
  parserOptions: {
    ecmaFeatures: ecmaFeatures(),
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: rules(),
};
