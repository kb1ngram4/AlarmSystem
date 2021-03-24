module.exports = {
  devServer:{
    disableHostCheck: true,
    hot: false,
    proxy:{
      // 测试
      "/api":{
        target:"http://221.130.179.166:8110",
        changeOrigin: true
      }
    }
  }
}