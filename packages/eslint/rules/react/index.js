const reactRules = require('./react');
const jsxRules = require('./jsx');
const hooksRules = require('./hooks');

module.exports = {
  ...reactRules,
  ...jsxRules,
  ...hooksRules,
};
