import prettier from 'prettier';
import { Schema, validate } from 'jsonschema';
import schema from './__fixtures__/prettierrc.schema.json';
import prettierConfig from '..';
import {
  commaArray,
  commaObject,
  commaFn,
  printWidthFix,
  printWidthLeave,
  proseWrapFix,
  proseWrapLeave,
  quotesFix,
  quotesLeave,
} from './__fixtures__/fixtures';

describe('Prettier configuration', () => {
  it('should be a valid config', () => {
    expect(validate(prettierConfig, schema as Schema).valid).toBe(true);
  });

  it('should add trailing commas to arrays', () => {
    const output = prettier.format(commaArray.input, {
      ...prettierConfig,
      parser: 'babel',
    });

    expect(output).toBe(commaArray.expected);
  });

  it('should add trailing commas to objects', () => {
    const output = prettier.format(commaObject.input, {
      ...prettierConfig,
      parser: 'babel',
    });

    expect(output).toBe(commaObject.expected);
  });

  it('should add trailing commas to function args', () => {
    const output = prettier.format(commaFn.input, {
      ...prettierConfig,
      parser: 'babel',
    });

    expect(output).toBe(commaFn.expected);
  });

  it('should add break up lines longer than config.printWidth', () => {
    const output = prettier.format(printWidthFix.input, {
      ...prettierConfig,
      parser: 'babel',
    });

    expect(output).toBe(printWidthFix.expected);
  });

  it('should leave lines shorter than config.printWidth', () => {
    const output = prettier.format(printWidthLeave.input, {
      ...prettierConfig,
      parser: 'babel',
    });

    expect(output).toBe(printWidthLeave.expected);
  });

  it('should add line breaks to prose lines longer than config.printWidth', () => {
    const output = prettier.format(proseWrapFix.input, {
      ...prettierConfig,
      parser: 'markdown',
    });

    expect(output).toBe(proseWrapFix.expected);
  });

  it('should leave prose lines shorter than config.printWidth', () => {
    const output = prettier.format(proseWrapLeave.input, {
      ...prettierConfig,
      parser: 'markdown',
    });

    expect(output).toBe(proseWrapLeave.expected);
  });

  it('should swap double quotes for single quotes', () => {
    const output = prettier.format(quotesFix.input, {
      ...prettierConfig,
      parser: 'babel',
    });

    expect(output).toBe(quotesFix.expected);
  });

  it('should leave single quotes', () => {
    const output = prettier.format(quotesLeave.input, {
      ...prettierConfig,
      parser: 'babel',
    });

    expect(output).toBe(quotesLeave.expected);
  });
});
