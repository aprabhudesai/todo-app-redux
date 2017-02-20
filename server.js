var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, resp) {
  resp.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(9080, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Server Listening at http://localhost:9080');
});
