import { Linter } from 'eslint';
import { hasReact, hasTypescript } from '.';

export const getSettings = (): Linter.Config['settings'] => ({
  'import/resolver': {
    node: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    ...(hasTypescript ? { typescript: {} } : null),
    ...(hasReact
      ? {
          react: {
            version: 'detect',
          },
        }
      : null),
  },
});
