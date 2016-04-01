var path = require('path');

module.exports = {

  entry: [
    './js/app.js'
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
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
