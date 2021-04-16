module.exports = {
  publicPath: './',
  outputDir: "docs",
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