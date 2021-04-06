import type { Linter } from 'eslint';
import coreRules from './core';
import reactRules from './react';

const core: Linter.RulesRecord = {
  ...coreRules,
  ...reactRules,
};

export default core;
