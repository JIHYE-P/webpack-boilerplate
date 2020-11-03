const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
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
          {loader: MiniCssExtractPlugin.loader},
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
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimize: false
  }
}