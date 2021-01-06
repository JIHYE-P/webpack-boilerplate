const webpack = require('webpack');
const config = require('./webpack.dev.config.js');
const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const path = require('path');
const express = require('express');
const app = express();

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

const RESULT_FILE = path.join(compiler.outputPath, 'index.html');
app.use(async(req, res, next) => {
  if(!req.method === 'GET') return next();
  
  if (process.env.NODE_ENV === "development") {
    compiler.outputFileSystem.readFile(RESULT_FILE, (err, result) => {
      if(err) return next(err);
      res.set('content-type','text/html');
      res.send(result);
      res.end();
    });
  }
  // if (process.env.NODE_ENV === "production") {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // }
});

app.listen(3000, function () {
  console.log('http://localhost:3000');
});
