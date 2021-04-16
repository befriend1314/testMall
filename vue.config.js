module.exports = {
  publicPath: '/',
  outputDir: "docs",
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'views': '@/views',
        'components': '@/components',
        'network': '@/network'
      }
    },
  },
  chainWebpack: config =>{
    config.plugin('html').tap(args => {
      args[0].title = '商城';
      return args;
    })
  },
  devServer: {
    // history模式下的url会请求到服务器端，但是服务器端并没有这一个资源文件，就会返回404，所以需要配置这一项
    historyApiFallback: {
      index: '/index.html' //与output的publicPath
    },
  }
}