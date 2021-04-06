import { react, typescript, core } from './rules';
import { hasDependency } from './utils';

const hasTypescript = hasDependency('typescript');
const hasReact = hasDependency('react');
const hasJest = hasDependency('jest');

const getPlugins = () => [
  'import',
  ...(hasJest ? ['jest'] : []),
  ...(hasReact ? ['react', 'react-hooks', 'jsx-a11y'] : []),
  ...(hasTypescript ? ['@typescript-eslint'] : []),
];

const getRules = () => ({
  ...core,
  ...(hasReact ? react : {}),
  ...(hasTypescript ? typescript : {}),
});

const getEnv = () => ({
  ...(hasJest ? { jest: true } : {}),
  browser: true,
  node: true,
});

const getEcmaFeatures = () => ({
  ...(hasReact ? { jsx: true } : {}),
});

export const config = {
  parser: '@typescript-eslint/parser',
  plugins: getPlugins(),
  env: getEnv(),
  parserOptions: {
    ecmaFeatures: getEcmaFeatures(),
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: getRules(),
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
  },
};

export default config;
