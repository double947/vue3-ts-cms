/* eslint-disable @typescript-eslint/no-var-requires */
// import { resolve } from 'path'

const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const pathSrc = path.resolve(__dirname, 'src')

module.exports = {
  outputDir: './build',
  configureWebpack: {
    resolve: {
      alias: {
        '@': pathSrc,
        views: '@/views',
        assets: '@/assets'
      }
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   },
  // }
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', resolve(__dirname, 'src'))
  //     .set('views', '@/views')
  // }
}
