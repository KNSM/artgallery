const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          additionalData: ' @import "@/assets/scss/styles.scss"',
          implementation: require('node-sass')
        }
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
      ? '/artgallery/'
      : '/'
})
