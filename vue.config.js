module.exports = {
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
  }
}