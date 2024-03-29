import coreRules from './core';
import importRules from './import';
import jestRules from './jest';
import reactRules from './react';
import typescriptRules from './typescript';
import prettierRules from './prettier';

export const core = {
  ...coreRules,
  ...importRules,
  ...prettierRules,
};

export const react = {
  ...reactRules,
};

export const typescript = {
  ...typescriptRules,
};

export const jest = {
  ...jestRules,
};
