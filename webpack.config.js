const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var ExtractCSS = new ExtractTextPlugin('[name].css');


module.exports = [
  {
    entry: {
      global: './src/js/index.js',
      basic: './src/js/basic/index.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'js')
    }
  },
  {
    entry: {
      global: './src/css/index.css',
      basic: './src/css/basic/index.css',
    },
    output: {
      filename: '[name].css',
      path: path.resolve(__dirname, 'css')
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractCSS.extract({
             use: [
              { loader: 'css-loader', options: { importLoaders: 1 } },
              'postcss-loader'
             ],
          })
        }
      ]
    },
    plugins: [
      ExtractCSS
    ],
  }
];