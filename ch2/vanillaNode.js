var http = require('http');

var app = http.createServer(function(req, res) {
	res.writeHead(200, {
		"Content-Type": "text/plain"
	});

	res.end("Hello, World!");
})

app.listen(1974, function() {
	console.log("Server is running on port 1974");
});