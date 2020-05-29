const path = require('path');

module.exports = {
  entry: './src/index.js', //where you bundle the javascript code to use in entire program
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), // where it goes to be bundled
  },
};