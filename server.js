var express = require('express');
var parser = require('body-parser');
var app = express();

var morgan = require('morgan');
var path = require('path');

app.use(morgan('dev'));
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;


app.listen(port, () => {
  console.info('server connected at http://localhost:8080');
});

module.exports = app;