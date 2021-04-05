import lint from '@commitlint/lint';
import config from '..';

describe('Valid type', () => {
  it('should pass with type "add"', async () => {
    const commit = 'add: some message';
    const result = await lint(commit, config.rules);
    expect(result.errors).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
  });

  it('should pass with type "delete"', async () => {
    const commit = 'delete: some message';
    const result = await lint(commit, config.rules);
    expect(result.errors).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
  });

  it('should pass with type "fix"', async () => {
    const commit = 'fix: some message';
    const result = await lint(commit, config.rules);
    expect(result.errors).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
  });

  it('should pass with type "revert"', async () => {
    const commit = 'revert: some message';
    const result = await lint(commit, config.rules);
    expect(result.errors).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
  });

  it('should pass with type "refactor"', async () => {
    const commit = 'refactor: some message';
    const result = await lint(commit, config.rules);
    expect(result.errors).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
  });

  it('should pass with type "enhance"', async () => {
    const commit = 'enhance: some message';
    const result = await lint(commit, config.rules);
    expect(result.errors).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
  });

  it('should pass with type "chore"', async () => {
    const commit = 'chore: some message';
    const result = await lint(commit, config.rules);
    expect(result.errors).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
  });
});

describe('Invalid type due to casing', () => {
  it('should fail due to type being UPPERCASE', async () => {
    const commit = 'ADD: some message';
    const result = await lint(commit, config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[1].message).toBe('type must be lower-case');
  });

  it('should fail due to type being SaRcAsM case', async () => {
    const commit = 'DeLeTe: some message';
    const result = await lint(commit, config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[1].message).toBe('type must be lower-case');
  });

  it('should fail due to type being Capitalised', async () => {
    const commit = 'Fix: some message';
    const result = await lint(commit, config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[1].message).toBe('type must be lower-case');
  });
});

describe('Invalid type due to incorrect type', () => {
  it('should fail with type "build"', async () => {
    const commit = 'build: some message';
    const result = await lint(commit, config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe(
      'type must be one of [add, delete, fix, revert, refactor, enhance, chore]',
    );
  });

  it('should fail with type "ci"', async () => {
    const commit = 'ci: some message';
    const result = await lint(commit, config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe(
      'type must be one of [add, delete, fix, revert, refactor, enhance, chore]',
    );
  });

  it('should fail with type "docs"', async () => {
    const commit = 'docs: some message';
    const result = await lint(commit, config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe(
      'type must be one of [add, delete, fix, revert, refactor, enhance, chore]',
    );
  });

  it('should fail with type "feat"', async () => {
    const commit = 'feat: some message';
    const result = await lint(commit, config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe(
      'type must be one of [add, delete, fix, revert, refactor, enhance, chore]',
    );
  });

  it('should fail with type "perf"', async () => {
    const commit = 'perf: some message';
    const result = await lint(commit, config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe(
      'type must be one of [add, delete, fix, revert, refactor, enhance, chore]',
    );
  });

  it('should fail with type "test"', async () => {
    const commit = 'test: some message';
    const result = await lint(commit, config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe(
      'type must be one of [add, delete, fix, revert, refactor, enhance, chore]',
    );
  });
});

describe('Invalid type due to no type', () => {
  it('should fail due to missing commit type', async () => {
    const result = await lint('some message', config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe('type may not be empty');
  });
});
