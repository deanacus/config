import lint from '@commitlint/lint';
import type { RuleConfigQuality, RulesConfig } from '@commitlint/types';
import config from '..';

const rules = config.rules as Partial<RulesConfig<RuleConfigQuality.Qualified>>;

describe('Commit Scope', () => {
  describe('Valid', () => {
    it('should pass with scope "scope"', async () => {
      const commit = 'add(scope): some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
    });

    it('should pass with scope "some-scope"', async () => {
      const commit = 'add(some-scope): some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
    });

    it('should pass with no scope', async () => {
      const commit = 'add: some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
    });
  });

  describe('Invalid due to casing', () => {
    it('should fail due to not being UPPERCASE', async () => {
      const commit = 'add(SCOPE): some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toBe('scope must be lowerCase');
    });

    it('should fail due to not being camelCase', async () => {
      const commit = 'fix(someScope): some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toBe('scope must be lowerCase');
    });

    it('should fail due to not being Capitalised', async () => {
      const commit = 'fix(Scope): some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toBe('scope must be lowerCase');
    });

    it('should fail due to not being SaRcAsM CaSe', async () => {
      const commit = 'delete(ScOpE): some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toBe('scope must be lowerCase');
    });
  });

  describe('Invalid due to length', () => {
    it('should fail due to scope being incorrect length', async () => {
      const commit = 'refactor(superscoped): some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toBe(
        'scope must not be longer than 10 characters',
      );
    });
  });
});
