var express = require("express");
var http = require("http");
var app = express();

app.use(function(req, res) {
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Hello, from the expressive node world!!!");
});

http.createServer(app).listen(1113);