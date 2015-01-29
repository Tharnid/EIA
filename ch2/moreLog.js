var express = require("express");
var logger = require("morgan");
var http = require("http");

var app = express();

app.use(logger());  // logger() returns a function

app.use(function(req, res) {
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Hello, using Morgan!!!");
});

http.createServer(app).listen(7411);