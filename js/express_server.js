var http = require('http');
var fs = require('fs');

var express = require('express');

var server = express();
server.get('/', function(req, res){
  res.send('Hello world');
});
server.listen(8000);
