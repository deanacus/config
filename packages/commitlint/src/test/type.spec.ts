import lint from '@commitlint/lint';
import type { RuleConfigQuality, RulesConfig } from '@commitlint/types';
import config from '..';

const rules = config.rules as Partial<RulesConfig<RuleConfigQuality.Qualified>>;

describe('Commit Type', () => {
  describe('Valid', () => {
    it('should pass with type "add"', async () => {
      const commit = 'add: some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
    });

    it('should pass with type "delete"', async () => {
      const commit = 'delete: some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
    });

    it('should pass with type "fix"', async () => {
      const commit = 'fix: some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
    });

    it('should pass with type "revert"', async () => {
      const commit = 'revert: some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
    });

    it('should pass with type "refactor"', async () => {
      const commit = 'refactor: some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
    });

    it('should pass with type "enhance"', async () => {
      const commit = 'enhance: some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
    });

    it('should pass with type "chore"', async () => {
      const commit = 'chore: some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
    });

    it('should pass with type "docs"', async () => {
      const commit = 'docs: some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
    });

    it('should pass with type "feat"', async () => {
      const commit = 'feat: some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
    });

    it('should pass with type "test"', async () => {
      const commit = 'test: some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
    });
  });

  describe('Invalid due to unknown type', () => {
    it('should fail with type "build"', async () => {
      const commit = 'build: some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toBe(
        'type must be one of [add, delete, fix, revert, refactor, enhance, chore, feat, docs, test]',
      );
    });

    it('should fail with type "ci"', async () => {
      const commit = 'ci: some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toBe(
        'type must be one of [add, delete, fix, revert, refactor, enhance, chore, feat, docs, test]',
      );
    });

    it('should fail with type "perf"', async () => {
      const commit = 'perf: some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toBe(
        'type must be one of [add, delete, fix, revert, refactor, enhance, chore, feat, docs, test]',
      );
    });
  });

  describe('Invalid due to no type', () => {
    it('should fail due to missing commit type', async () => {
      const commit = 'some message';
      const result = await lint(commit, rules);
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toBe('type may not be empty');
    });
  });
});
