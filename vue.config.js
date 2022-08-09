// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// import { resolve } from 'path'

module.exports = {
  outputDir: './build',
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       views: '@/views'
  //     }
  //   }
  // }
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      views: '@/views'
    }
  }
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', resolve(__dirname, 'src'))
  //     .set('views', '@/views')
  // }
}
