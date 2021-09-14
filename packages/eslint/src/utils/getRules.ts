import { Linter } from 'eslint';
import { hasTypescript, hasReact, hasJest } from '.';
import { core, react, typescript, jest } from '../rules';

export const getRules = (): Linter.RulesRecord => ({
  ...core,
  ...(hasReact ? react : {}),
  ...(hasJest ? jest : {}),
  ...(hasTypescript ? typescript : {}),
});
