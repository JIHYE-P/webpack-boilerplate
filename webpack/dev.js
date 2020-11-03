const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const express = require('express');
const app = express();

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  noInfo: true, 
  publicPath: webpackConfig.output.publicPath,
  stats: 'minimal',
  historyApiFallback: true
}));

app.use(webpackHotMiddleware(compiler));
