import type { Linter } from 'eslint';
import reactRules from './react';
import reactJSX from './react-jsx';
import jsxa11y from './jsx-a11y';
import hooksRules from './hooks';

const coreRules: Linter.RulesRecord = {
  ...reactRules,
  ...jsxa11y,
  ...reactJSX,
  ...hooksRules,
};

export default coreRules;
