import { Linter } from 'eslint';
import { hasTypescript } from '.';

const typescriptOverride: Linter.Config['overrides'] = [
  {
    files: ['*.spec.*'],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/ban-ts-comment': 0,
    },
  },
];

export const getOverrides = (): Linter.Config['overrides'] => [
  ...(hasTypescript ? typescriptOverride : []),
];
