const { merge } = require('webpack-merge')

// const { ProgressPlugin } = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const baseConfig = require('./webpack.config.js')

const testConfig = {
  watch: true,
  performance: {
    hints: false
  },
  plugins: [
    // new ProgressPlugin({ percentBy: 'entries' }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    })
  ]
}

module.exports = merge(baseConfig, testConfig)
