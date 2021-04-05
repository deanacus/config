import lint from '@commitlint/lint';
import config from '..';

describe('Commit Header', () => {
  it('should fail due to being too short', async () => {
    const commit = 'fix: short msg';
    const result = await lint(commit, config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[1].message).toBe(
      `header must not be shorter than 15 characters, current length is ${commit.length}`,
    );
  });

  it('should fail due to being too long', async () => {
    const commit = 'delete(scope): some super duper long commit message';
    const result = await lint(commit, config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe(
      `header must not be longer than 50 characters, current length is ${commit.length}`,
    );
  });
});
