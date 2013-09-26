var http = require('http');

console.log("Creating Server");

var server = http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("hello on my computer");
  response.end();
});

server.listen(3000, function() {
  console.log("Server Started");
});

