// 生产环境，不需要起服务，但是要进行代码的压缩与分离
const webpack = require('webpack')
const baseConfig = require('./webpack.base')
const DefinePlugin = webpack.DefinePlugin
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin 

baseConfig.plugins.push(new UglifyJsPlugin()) //代码压缩
// 通过definePlugin插件判断运行的环境
baseConfig.plugins.push(new DefinePlugin({
  // "process.env": '"production"'
  "process.env": JSON.stringify('production')
}))

module.exports = {
  ...baseConfig
}


 


