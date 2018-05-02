// 开发环境，需要起服务，不用进行代码压缩与分离
const webpack = require('webpack')
const baseConfig = require('./webpack.base.js')
const DefinePlugin = webpack.DefinePlugin

baseConfig.plugins.push(new DefinePlugin({
  "process.env": '"development"'
  // "process.env": JSON.stringify('development')
}))

module.exports = {
  ...baseConfig,
  devServer: {
    historyApiFallback: true,  //阻止404页面
    inline:true,        // 实时更新
    open:true,          // 自动打开浏览器
    port:3000,    
    noInfo:true // 隐藏过多的命令行信息
  },
  devtool: 'eval-source-map' // 提示错误出处
}