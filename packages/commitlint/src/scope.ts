import type { RulesConfig } from '@commitlint/types';

type ScopeRules = Pick<
  RulesConfig,
  | 'scope-case'
  | 'scope-empty'
  | 'scope-enum'
  | 'scope-min-length'
  | 'scope-max-length'
>;

export const scope: ScopeRules = {
  // Commit scope is in lower case
  'scope-case': [2, 'always', 'lowerCase'],
  // Commit scope is empty
  'scope-empty': [0, 'never'],
  // Allowed scopes
  'scope-enum': [0],
  // Commit scope has 0 or more characters
  'scope-min-length': [2, 'always', 0],
  // Commit scope has 10 or less characters
  'scope-max-length': [2, 'always', 10],
};
