const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: isDev ? ['webpack-hot-middleware/client', './webpack/entry.js'] : './webpack/entry.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isDev ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/'
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 0,
              name: 'assets/[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html'}),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
      chunkFilename: 'assets/[id].css'
    }),
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '~/*': path.resolve(__dirname, './src/*')
    }
  },
  optimization: {
    minimize: !isDev
  }
}