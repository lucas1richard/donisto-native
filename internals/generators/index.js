const componentGenerator = require('./component/index.js');
const containerGenerator = require('./container/index.js');
const directory = require('inquirer-directory');

module.exports = function donistoNativeGenerator(plop) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.addPrompt('directory', directory);
  plop.addHelper('cwd', () => `${process.cwd()}/src`
  );
};
