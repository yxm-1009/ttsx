module.exports = {
  devServer: {
    // 遮罩层提示错误
    // overlay: {
    //   warnings: false,
    //   errors: false
    // },
    // 反向代理
    proxy: {
      '/Service': {
        target: 'https://m.mtime.cn',
        changeOrigin: true
      }
    }

  },
  lintOnSave: false // 关了eslint 检查
}
