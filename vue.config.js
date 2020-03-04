module.exports = {
  devServer: {
    // 遮罩层提示错误
    // overlay: {
    //   warnings: false,
    //   errors: false
    // },
    // 反向代理
    proxy: {
      '/api': {
        target: 'http://m.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/kerwin': ''
        }
        /* /kerwin/ajax/comingList  ====> /ajax/comingList  */
      }
    }

  },
  lintOnSave: false // 关了eslint 检查
}
