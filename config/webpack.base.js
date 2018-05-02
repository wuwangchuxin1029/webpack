const HtmlWebpackPlugin = require('html-webpack-plugin')
let dir = process.cwd() 
let baseConfig = {
  // 入口 （可以是字符串、数组、对象）
  entry: {
    // bundle: dir + '/src/main.js'
    bundle:dir+'/src/main'
  }, 
  // 出口
  output: {
    path: dir + '/dist',  //打包出口路径
    filename: '[name].js',    // 打包后的文件名
    publicPath: ''            //打包后的静态资源文件路径
  },
  // loader配置
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader']
      }
    ]
  },
  // 插件配置
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  //其它设置
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.json']
  },
  externals: {"react": 'react', "react-dom":'react-dom'}
}

module.exports = baseConfig