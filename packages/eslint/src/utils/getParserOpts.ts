import { Linter } from 'eslint';
import { hasReact } from '.';

export const getParserOpts = (): Linter.Config['parserOptions'] => ({
  ecmaVersion: 2019,
  sourceType: 'module',
  ecmaFeatures: { ...(hasReact ? { jsx: true } : null) },
});
