var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
	var indexPath = __dirname + "/index.html";

	if (req.url === "/") {
		fs.readFile(indexPath, function(err, data) {
			// Show an error if we have one...
			if (err) {
				res.writeHead(500);
				res.end();
				return;
			}

			// ..and render the page if hasn't been rendered yet
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		});
	}

	// Not found, I guess!!!
	else {
		res.writeHead(404, { "Content-Type": 'text/html' });
		res.end("<html><body><h1>404 Error...cannot be found!!!</h1></body></html>")
	}
}).listen(6969);