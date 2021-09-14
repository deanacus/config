import { Linter } from 'eslint';
import { hasJest } from '.';

export const getEnv = (): Linter.Config['env'] => ({
  jest: hasJest,
  browser: true,
  node: true,
});
