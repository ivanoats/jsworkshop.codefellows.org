var http = require('http');

console.log("Creating Server");

var server = http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("hello world");
  response.end();
});

var port = process.env.PORT || 3000;

server.listen(port, function() {
  console.log("Server Started on port " + port);
});

