// webpack基本配置文件
var path = require('path')
var dist = path.resolve(__dirname, './dist')
var main = path.resolve(__dirname, './src/main')
var main2 = path.resolve(__dirname, './src/main2')
var projectRoot = path.resolve(__dirname, './')
var webpack = require('webpack')
var fs = require('fs');

module.exports = {
  entry: {
    build1:[main],
    build2:[main2]
  },
  output: {
    path: dist,
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    },{
      test: /\.js$/,
      loader: 'babel',
      include: projectRoot,
      exclude: /node_modules/
    },{
      test: /\.json$/,
      loader: 'json'
    }]
  },
  
  plugins: [

  ]

}