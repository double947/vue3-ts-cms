// 文档：https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
    'postcss-import': {}
  }
}
