var fs = require('fs');
var http = require('http');
  
 var requestHandler = function (request, response) {
	
	filename = request.url.replace(/^\//, '');
	
	fs.readFile(filename, function (err, data) {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end(data);
	});
 };

var server = http.createServer(requestHandler);

var port = 8124;
var ip = '127.0.0.1';

server.listen(port);
  
console.log('Server running at http://' + ip + ':' + port + '/');