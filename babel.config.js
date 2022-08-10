module.exports = {
  plugins: [
    // [
    //   'import',
    //   {
    //     libraryName: 'element-plus',
    //     customStyleName: (name) => {
    //       return `element-plus/theme-chalk/${name}`
    //     }
    //   }
    // ]
    // [
    //   'import',
    //   {
    //     libraryName: 'element-plus',
    //     customStyleName: (name) => {
    //       return `element-plus/theme-chalk/${name}.css`
    //     },
    //     customName: (name) => {
    //       let nameList = name.split('-')
    //       let slength = '-item'.length
    //       let nlength = String(name).length
    //       //对item结尾组件处理
    //       if (nameList.length && nameList.includes('item')) {
    //         return `element-plus/lib/components/${name.slice(
    //           3,
    //           nlength - slength
    //         )}`
    //       }
    //       return `element-plus/lib/components/${name.slice(3)}`
    //     }
    //   }
    // ]
    // [
    //   'import',
    //   {
    //     libraryName: 'element-plus', // 包名
    //     libraryDirectory: 'theme-chalk', // 目录，默认 lib
    //     css: true // 是否引入 style
    //   },
    //   'element-plus'
    // ]
  ],
  presets: ['@vue/cli-plugin-babel/preset']
}
