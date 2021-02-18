const coreRules = require('./core');
const reactRules = require('./react');

module.exports = {
  ...coreRules,
  ...reactRules,
};
