import { Linter } from 'eslint';

export const getSettings = (
  includeTypescript = false,
): Linter.Config['settings'] => ({
  'import/resolver': {
    node: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    ...(includeTypescript ? { typescript: {} } : null),
  },
});
