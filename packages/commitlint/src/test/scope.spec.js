import lint from '@commitlint/lint';
import config from '..';

describe('Valid Scope', () => {
  it('should pass with scope "scope"', async () => {
    const result = await lint('add(scope): some message', config.rules);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
  });

  it('should pass with scope "some-scope"', async () => {
    const result = await lint('add(some-scope): some message', config.rules);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
  });

  it('should pass with no scope', async () => {
    const result = await lint('add: some message', config.rules);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
  });
});

describe('Invalid Scope due to casing', () => {
  it('should fail due to not being UPPERCASE', async () => {
    const result = await lint('add(SCOPE): some message', config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe('scope must be lowerCase');
  });

  it('should fail due to not being camelCase', async () => {
    const result = await lint('fix(someScope): some message', config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe('scope must be lowerCase');
  });

  it('should fail due to not being Capitalised', async () => {
    const result = await lint('fix(Scope): some message', config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe('scope must be lowerCase');
  });

  it('should fail due to not being SaRcAsM CaSe', async () => {
    const result = await lint('delete(ScOpE): some message', config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe('scope must be lowerCase');
  });
});

describe('Invalid Scope due to length', () => {
  it('should fail due to scope being incorrect length', async () => {
    const result = await lint(
      'refactor(superscoped): some message',
      config.rules,
    );
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe(
      'scope must not be longer than 10 characters',
    );
  });
});
