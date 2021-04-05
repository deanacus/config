import lint from '@commitlint/lint';
import config from '..';

describe('Commit Body', () => {
  it('should pass', async () => {
    const commit = `fix: some message\n\nA valid commit body.`;
    const result = await lint(commit, config.rules);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
  });

  it('should fail due to not being sentence cased', async () => {
    const result = await lint('fix: some message\n\nbody.', config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe('body must be sentence-case');
  });

  it('should fail due to no leading blank line before body', async () => {
    const result = await lint('fix: some message\nBody.', config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe('body must have leading blank line');
  });

  it('should fail due to body text exceeding line-length', async () => {
    const commit =
      'fix: some message\n\nBody has a message that is too long and will break the line-length setting.';
    const result = await lint(commit, config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe(
      "body's lines must not be longer than 72 characters",
    );
  });

  it('should fail due to body not ending with a period', async () => {
    const commit = `fix: some message\n\nBody that doesn't end in a period`;
    const result = await lint(commit, config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe('body must end with full stop');
  });
});
