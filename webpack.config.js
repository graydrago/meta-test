"use strict";

let webpack = require('webpack');
//let htmlWebpackPlugin = require('html-webpack-plugin');
let nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    context: __dirname,
    entry: "./main.js",
    output: {
      //path: __dirname + "/build/public/",
      filename: "script.js",
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-0'],
              plugins: ['transform-decorators-legacy']
            }
          }
        },
        { test: /\.css$/, loader: "style-loader!css-loader" }
      ]
    },
    //plugins: [
      //new htmlWebpackPlugin({
        //template: __dirname + "/src/client/index.template.html",
        //filename: "index.html"
      //})
    //],
    devtool: "source-map"
  }
];
