module.exports = {
  devServer:{
    proxy:{
      "/api":{
        target:"http://221.130.179.166:8080"
      }
    }
  }
}