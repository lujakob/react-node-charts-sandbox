const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin")


module.exports = {
  devtool: 'source-map',
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist')
  },
  devServer: {
    contentBase: './client/public',
    publicPath: '/dist/',
    historyApiFallback: true
  },
  module: {
    loaders: [
      // ES6 enabled
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader", options: {
              sourceMap: true
            }
          }, {
            loader: "sass-loader", options: {
              sourceMap: true
            }
          }],
          publicPath: ""
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
  ]
};