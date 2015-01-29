var http = require("http");

var app = http.createServer(function(req, res) {
	var answer = "";
	answer += "Request URL: " + req.url + "\n";
	answer += "Request Type: " + req.method + "\n";
	answer += "Request Handlers: " + JSON.stringify(req.headers) + "\n";
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end(answer);
});

app.listen(1974, function() {
	console.log("Server running on port 1974");
}); // do not put localhost if you are running on a vm/container/droplet/whatever