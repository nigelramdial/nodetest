var http = require('http');
var fileSystem = require('fs');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-type': 'text/plain'});

	var read_stream = fileSystem.createReadStream('myfile.txt');
	read_stream.on('data', writeCallback);
	read_stream.on('close', closeCallback);

	function writeCallback(data){
		console.log('Reader Started');
		response.write(data);
	}

	function closeCallback(){
		console.log('Reader Finished');
		response.end();
	}

}).listen(8080);

console.log('Server Started');