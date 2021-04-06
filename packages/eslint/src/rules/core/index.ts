import type { Linter } from 'eslint';
import bestPractices from './bestPractices';
import errors from './errors';
import modern from './modern';
import style from './style';
import variables from './variables';

const coreRules: Linter.RulesRecord = {
  ...bestPractices,
  ...errors,
  ...modern,
  ...style,
  ...variables,
};

export default coreRules;
