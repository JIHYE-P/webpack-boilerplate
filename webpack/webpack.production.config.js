const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const path = require('path');
const webpack = require('webpack');
const pathResolve = (...v) => path.resolve(__dirname, '..',...v);

module.exports = {
  mode: 'production',
  entry: pathResolve('webpack/entry.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.html\.hamlc$/,
        loader: 'haml-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/'
            }
          },
          'css-loader',
          'sass-loader',
          'postcss-loader'
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
        exclude: /node_modules/,
        use: ['babel-loader'],
        options: {
          presets: [ '@babel/preset-env', '@babel/preset-react' ]
        }
      },
      { 
        test: /\.txt$/, 
        use: 'raw-loader' 
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html'}),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '~': path.join(__dirname, 'src')
    }
  },
  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCssAssetsPlugin()
    ]
  }
}