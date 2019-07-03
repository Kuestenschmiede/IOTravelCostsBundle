var path = require('path');
var config = {
  entry: {
    'taxi-finder':'./Resources/public/js/taxi-finder.js',
    'tariff-finder':'./Resources/public/js/tariff-finder.js',
  },
  mode: "production",
  output: {
    filename: '[name].js',
    path: path.resolve('./Resources/public/build/')
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