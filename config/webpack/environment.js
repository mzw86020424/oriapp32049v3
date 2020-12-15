const { environment } = require('@rails/webpacker')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)

// Vue.js フル版（Compiler入り）
environment.config.resolve.alias = { 'vue$': 'vue/dist/vue.esm.js' }

// ここから
// jQueryとBootstapのJSを使えるように
const webpack = require('webpack')
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: 'popper.js'
  })
)
// ここまで
module.exports = environment
