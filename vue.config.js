const { defineConfig } = require('@vue/cli-service')
// const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    host: "localhost",
  },
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "src/"),
  //   },
  // },
});
