var http = require('http');

console.log("Creating Server");

var server = http.createServer(function(request, response) {
  response.writeHead(200);
  response.write('<!DOCTYPE html>\n\
    <html>\n\
      <head>\n\
      <script src="http://code.jquery.com/jquery-2.0.3.min.js"></script>\n\
      </head>\n\
      <body>\n\
        <h1>Hello World!</h1>\n\
        <p>I am excited to be here with you.</p>\n\
        <div id="image-placeholder"></div>\n\
      </body>\n\
      </html>');
  response.end();
});

var port = process.env.PORT || 3000;

server.listen(port, function() {
  console.log("Server Started on port " + port);
});

