import type { RulesConfig } from '@commitlint/types';

type HeaderRules = Pick<
  RulesConfig,
  'header-case' | 'header-full-stop' | 'header-max-length' | 'header-min-length'
>;

export const header: HeaderRules = {
  // Header has a specific casing requirement
  'header-case': [0],
  // Header ends in a full stop
  'header-full-stop': [2, 'never', '.'],
  // Header has a max length of 50
  'header-max-length': [2, 'always', 50],
  // Header has a min length of 16 (shortest type, shortest subject, plus colon and space)
  'header-min-length': [2, 'always', 15],
};
