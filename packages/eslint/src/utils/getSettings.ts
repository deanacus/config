import { Linter } from 'eslint';
import { hasTypescript } from '.';

export const getSettings = (): Linter.Config['settings'] => ({
  'import/resolver': {
    node: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    ...(hasTypescript ? { typescript: {} } : null),
  },
});
