var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write(String(Date.now()));
  fs.readFile('index.html',function(err, contents) {
    response.write(contents);
    response.end();
   });
 response.end();
}).listen(8080);

