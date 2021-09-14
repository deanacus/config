import { Linter } from 'eslint';
import { hasTypescript, hasReact, hasJest } from '.';

export const getPlugins = (): Linter.Config['plugins'] => [
  'import',
  ...(hasJest ? ['jest'] : []),
  ...(hasReact ? ['react', 'react-hooks', 'jsx-a11y'] : []),
  ...(hasTypescript ? ['@typescript-eslint'] : []),
];
