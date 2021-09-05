import lint from '@commitlint/lint';
import type { RuleConfigQuality, RulesConfig } from '@commitlint/types';
import config from '..';

const rules = config.rules as Partial<RulesConfig<RuleConfigQuality.Qualified>>;

describe('Commit Footer', () => {
  it('should pass', async () => {
    const commit = `fix: some message\n\nA valid commit body.\n\nBREAKING CHANGE: description`;
    const result = await lint(commit, rules);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
  });

  it('should fail due to no leading blank line before footer', async () => {
    const commit = 'fix: some message\n\nBody.\nBREAKING CHANGE: description';
    const result = await lint(commit, rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe(
      'footer must have leading blank line',
    );
  });

  it('should fail due to footer text exceeding line-length', async () => {
    const commit =
      'fix: some message\n\nA valid commit body.\n\nBREAKING CHANGE: footer has a message that is too long and will break the line-length setting.';
    const result = await lint(commit, rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe(
      `footer must not be longer than 72 characters`,
    );
  });
});
