const errors = require('./errors');
const bestPractices = require('./bestPractices');
const style = require('./style');
const variables = require('./variables');
const modern = require('./modern');

const coreRules = {
  ...errors,
  ...bestPractices,
  ...style,
  ...variables,
  ...modern,
};

module.exports = coreRules;
