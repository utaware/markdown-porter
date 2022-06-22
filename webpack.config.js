const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve (args) {
  return path.resolve(__dirname, args)
}

module.exports = {
  mode: 'production',
  entry: {
    background: './src/background/index.js',
    content_script: './src/content/index.js',
    options: './src/options/index.js'
  },
  output: {
    clean: true,
    filename: '[name].js',
    path: resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ],
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['options'],
      filename: 'options.html',
      template: './src/options/index.html',
      title: 'options'
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'manifest.json' },
        { from: 'src/assets' },
      ]
    })
  ]
}
