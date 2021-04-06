import type { Linter } from 'eslint';

const hooksRules: Linter.RulesRecord = {
  'react-hooks/rules-of-hooks': 2,
  'react-hooks/exhaustive-deps': 2,
};

export default hooksRules;
