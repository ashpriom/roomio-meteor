var http = require("http");

function connection(req,res){
	var body = 'Thanks for calling me!\n';
	var contentLength = body.length;
	res.writeHead(200, {
		'Content-Length' : contentLength,
		'Content-Type' : 'text/plain'
						});
	res.end(body);
}

var s = http.createServer(connection);
s.listen(8080);