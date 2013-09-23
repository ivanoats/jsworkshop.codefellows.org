var http = require('http');

console.log("Creating Server");

var server = http.createServer(function(request, response) {
  response.writeHead(200);
  response.write('<!DOCTYPE html><html>        \
    <head>                                     \
    <script src="http://code.jquery.com/jquery-2.0.3.min.js"></script>             \
    </head>                                    \
    <body>                                     \
      <h1>Hello World!</h1>                     \
      <p>I am excited to be here with you.</p> \
    </body>                                    \
    </html>');
  response.end();
});

var port = process.env.PORT || 3000;

server.listen(port, function() {
  console.log("Server Started on port " + port);
});

