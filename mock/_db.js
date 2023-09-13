const Path = require('path');
const glob = require('glob');

const apiFiles = glob.sync(Path.join(__dirname, './**/[!_]*.js'));

let data = {};

apiFiles.forEach((filePath) => {
  const api = require(filePath);
  let [, url] = filePath.split('mock/');
  url = url.slice(0, url.length - 3); // remove .js
  data[url.replace(/\//g, '-')] = api;
});

module.exports = () => data;
