var http = require('http');
var vue = require('./Vue/document');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});
	var doc = vue.Document();
	res.end(doc.end());

});

server.listen(8080);