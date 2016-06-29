var webpack = require('webpack')
var getConfig = require('hjs-webpack')
var swig  = require('swig')

var config = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  html: function (data) {
    return {
      'index.html': swig.renderFile(__dirname + '/tpls/index.tpl', data)
    }
  }
})

config.resolve.alias = { jquery: 'jquery/src/jquery.js' }
config.plugins.push(
  new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    'window.jQuery': 'jquery'
  })
)
module.exports = config

