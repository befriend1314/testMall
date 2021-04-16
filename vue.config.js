module.exports = {
  publicPath: './',
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
  }
}