import lint from '@commitlint/lint';
import type { RuleConfigQuality, RulesConfig } from '@commitlint/types';
import config from '..';

const rules = config.rules as Partial<RulesConfig<RuleConfigQuality.Qualified>>;

describe('Commit Subject', () => {
  describe('Valid', () => {
    it('should pass with subject "some message"', async () => {
      const commit = 'add: some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
    });

    it('should pass with subject "another message"', async () => {
      const commit = 'add: another message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
    });

    it('should pass with subject "yet another message"', async () => {
      const commit = 'add: yet another message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
    });
  });

  describe('Invalid due to casing', () => {
    it('should fail due to not being UPPERCASE', async () => {
      const commit = 'add: SOME MESSAGE';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toBe('subject must be lower-case');
    });

    it('should fail due to not being camelCase', async () => {
      const commit = 'refactor: someMessage';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toBe('subject must be lower-case');
    });

    it('should fail due to not being Sentence case', async () => {
      const commit = 'delete: Some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toBe('subject must be lower-case');
    });

    it('should fail due to not being SaRcAsM CaSe', async () => {
      const commit = 'fix: SoMe MeSsAgE';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toBe('subject must be lower-case');
    });
  });

  describe('Invalid due to length', () => {
    it('should fail due to subject being too long', async () => {
      const result = await lint(
        'fix: some super duper long commit message to break the length rule',
        rules,
      );
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toBe(
        'subject must not be longer than 44 characters',
      );
    });

    it('should fail due to subject being too short', async () => {
      const commit = 'delete: short msg';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toBe(
        'subject must not be shorter than 10 characters',
      );
    });

    it('should fail due to missing subject', async () => {
      const commit = 'refactor(scope)';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(false);
      expect(result.errors[1].message).toBe('subject may not be empty');
    });
  });

  describe('Invalid due to trailing punctuation', () => {
    it('should fail due to trailing period', async () => {
      const commit = 'add: some message.';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toBe(
        'subject may not end with full stop',
      );
    });
  });
});
