const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require('webpack');
const config = require('./src/config');

module.exports = {
  entry: __dirname + "/src/app",
  module: {
    loaders: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader?module", "sass-loader"],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config.title,
      filename: 'index.html',
      template: __dirname + '/src/html.ejs',
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development') }),
  ],
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
    compress: true,
    port: 3001,    
  },
  output: {
    filename: "app.min.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
};
