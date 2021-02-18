const coreRules = require('./core');
const importRules = require('./import');
const jestRules = require('./jest');
const reactRules = require('./react');
const typescriptRules = require('./typescript');
const prettierRules = require('./prettier');

const core = {
  ...coreRules,
  ...importRules,
  ...jestRules,
  ...prettierRules,
};

const react = {
  ...reactRules,
};

const typescript = {
  ...typescriptRules,
};

module.exports = {
  core,
  react,
  typescript,
};
