module.exports = {
  transpileDependencies: true,
  devServer: {
    port:8080,
    open: false,
    host: "localhost",
    proxy: {
      '/api': {
        target: "http://1.116.64.64:5004",
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api2': ''
        // }
      }
    }
  },
};
