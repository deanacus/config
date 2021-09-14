import { Linter } from 'eslint';
import {
  getPlugins,
  getEnv,
  getParserOpts,
  getRules,
  hasTypescript,
  getOverrides,
  getSettings,
} from './utils'

const parser = hasTypescript ? '@typescript-eslint/parser' : undefined;
const plugins =  getPlugins();
const env =  getEnv();
const parserOptions =  getParserOpts();
const rules =  getRules();
const overrides = getOverrides();
const settings = getSettings();

const config: Linter.Config = {
  parser,
  plugins,
  env,
  parserOptions,
  rules,
  overrides,
  settings,
};

export = config;
