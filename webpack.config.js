var path = require('path');

module.exports = {

  entry: [
    './src/react/index',
    // './src/angular2/index',
    // './src/angular1.5.3/index',
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },

  module: {
    loaders: [{
      test: function (filename) {
        if (filename.indexOf('node_modules') !== -1) {
          return false;
        } else {
          return /\.js$/.test(filename) !== -1;
        }
      },
      loaders: ['babel-loader']
    }]
  },

  resolve: {
    modulesDirectories: [path.join(__dirname, 'src'), 'node_modules']
  }

};
