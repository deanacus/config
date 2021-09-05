import type { RulesConfig } from '@commitlint/types';

type FooterRules = Pick<
  RulesConfig,
  | 'footer-empty'
  | 'footer-leading-blank'
  | 'footer-max-length'
  | 'footer-max-line-length'
  | 'footer-min-length'
>;

export const footer: FooterRules = {
  // Commit footer can be empty
  'footer-empty': [0],
  // Commit footer begins with blank line
  'footer-leading-blank': [2, 'always'],
  // Commit footer max length
  'footer-max-length': [2, 'always', 72],
  // Commit footer lines has `value` or less characters
  'footer-max-line-length': [2, 'always', 72],
  // Commit footer min length
  'footer-min-length': [0],
};
