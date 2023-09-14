const Path = require('path');
const glob = require('glob');

const apiFiles = glob.sync(Path.join(__dirname, './[!_]*.js'));

let data = {};

apiFiles.forEach((filePath) => {
  const api = require(filePath);
  let [, url] = filePath.split('mock/');

  url = url.replace('.js', ''); // remove .js
  for (let key in api) {
    if (api.hasOwnProperty(key)) {
      data[key] = api[key];
    }
  }
});
module.exports = () => data;
