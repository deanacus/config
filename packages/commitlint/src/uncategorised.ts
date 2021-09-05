import type { RulesConfig } from '@commitlint/types';

type UncategorisedRules = Pick<
  RulesConfig,
  'references-empty' | 'signed-off-by' | 'trailer-exists'
>;

export const uncategorised: UncategorisedRules = {
  'references-empty': [0],
  'signed-off-by': [0],
  'trailer-exists': [0],
};
