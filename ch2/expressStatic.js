var express = require("express");
var path = require("path");
var http = require("http");

var app = express();

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use(function(req, res) {
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Looks like you didn't find the static file...did ya???");
});

http.createServer(app).listen(7411);