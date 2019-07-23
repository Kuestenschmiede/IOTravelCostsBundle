var path = require('path');
var config = {
  entry: {
    'travel-finder':'./Resources/public/js/travel-finder.js',
    'tariff-finder':'./Resources/public/js/tariff-finder.js',
  },
  mode: "development",
  output: {
    filename: '[name].js',
    path: path.resolve('./Resources/public/build/')
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "echo-loader",
        }, {
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