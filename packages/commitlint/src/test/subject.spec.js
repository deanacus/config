import lint from '@commitlint/lint';
import config from '..';

describe('Valid Subject', () => {
  it('should pass with subject "some message"', async () => {
    const result = await lint('add: some message', config.rules);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
  });

  it('should pass with subject "another message"', async () => {
    const result = await lint('add: another message', config.rules);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
  });

  it('should pass with subject "yet another message"', async () => {
    const result = await lint('add: yet another message', config.rules);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
  });
});

describe('Invalid Subject due to casing', () => {
  it('should fail due to not being UPPERCASE', async () => {
    const result = await lint('add: SOME MESSAGE', config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe('subject must be lower-case');
  });

  it('should fail due to not being camelCase', async () => {
    const result = await lint('refactor: someMessage', config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe('subject must be lower-case');
  });

  it('should fail due to not being Sentence case', async () => {
    const result = await lint('delete: Some message', config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe('subject must be lower-case');
  });

  it('should fail due to not being SaRcAsM CaSe', async () => {
    const result = await lint('fix: SoMe MeSsAgE', config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe('subject must be lower-case');
  });
});

describe('Invalid Subject due to length', () => {
  it('should fail due to subject being too long', async () => {
    const result = await lint(
      'fix: some super duper long commit message to break the length rule',
      config.rules,
    );
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe(
      'subject must not be longer than 44 characters',
    );
  });

  it('should fail due to subject being too short', async () => {
    const result = await lint('delete: short msg', config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe(
      'subject must not be shorter than 10 characters',
    );
  });

  it('should fail due to missing subject', async () => {
    const result = await lint('refactor(scope)', config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[1].message).toBe('subject may not be empty');
  });
});

describe('Invalid Subject due to trailing punctuation', () => {
  it('should fail due to trailing period', async () => {
    const result = await lint('add: some message.', config.rules);
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toBe('subject may not end with full stop');
  });
});
