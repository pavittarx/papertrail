const path = require('path');
const babelJest = require('babel-jest');

console.log(path.resolve(__dirname, "server/.babelrc.js"));

module.exports = babelJest.default.createTransformer({
  configFile: path.resolve(__dirname, 'server/.babelrc'),
});