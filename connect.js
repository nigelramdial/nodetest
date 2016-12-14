var http = require('http');
var url = require('url');
var cp = require('child_process');

function onRequest(request, response){
	var pathname = url.parse(request.url).pathname;
	if (pathname == '/wait' ){
		cp.exec('node block.js', myCallback);
	}
	else{
		response.writeHead(200, {'Content-type': 'text/plain'});
		response.write('Helloblock!\n');
		response.end();
	}

	console.log('New Connection');
	function myCallback(){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write('Thanks for waiting!\n');
		response.end();
	}
}

http.createServer(onRequest).listen(8080);
console.log('Server Started');