var path = require('path');
var config = {
  entry: {
    'travel-finder':'./src/Resources/public/js/travel-finder.js',
    'tariff-finder':'./src/Resources/public/js/tariff-finder.js',
  },
  mode: "production",
  output: {
    filename: '[name].js',
    path: path.resolve('./src/Resources/public/build/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
        }],
        include: [
          path.resolve('.'),
          path.resolve('./../CoreBundle')
        ],
      }
    ]
  }
};

module.exports = config;