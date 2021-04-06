import type { Linter } from 'eslint';

const importRules: Linter.RulesRecord = {
  'import/default': 2,
  'import/export': 2,
  'import/extensions': [
    'error',
    {
      ignorePackages: true,
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
  'import/first': 2,
  'import/named': 2,
  'import/newline-after-import': 2,
  'import/no-absolute-path': 2,
  'import/no-amd': 2,
  'import/no-anonymous-default-export': [
    'off',
    {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    },
  ],
  'import/no-cycle': [
    'error',
    {
      maxDepth: 1,
    },
  ],
  'import/no-duplicates': 2,
  'import/no-dynamic-require': 2,
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: true,
      optionalDependencies: true,
      peerDependencies: true,
    },
  ],
  'import/no-mutable-exports': 2,
  'import/no-named-as-default': 2,
  'import/no-named-as-default-member': 2,
  'import/no-named-default': 2,
  'import/no-self-import': 2,
  'import/no-unresolved': [
    'error',
    {
      commonjs: true,
      caseSensitive: true,
    },
  ],
  'import/no-unused-modules': [
    'off',
    {
      ignoreExports: [],
      missingExports: true,
      unusedExports: true,
    },
  ],
  'import/no-useless-path-segments': [
    'error',
    {
      commonjs: true,
    },
  ],
  'import/no-webpack-loader-syntax': 2,
  'import/order': [
    'error',
    {
      groups: [['builtin', 'external', 'internal']],
    },
  ],
  'import/prefer-default-export': 2,
};

export default importRules;
