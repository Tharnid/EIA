var express = require("express");

var app = express();

// app.get("/random/:min/:max", function(req, res) {
// 	var min = parseInt(req.params.min);
// 	var max = parseInt(req.params.max);

// 	if (isNaN(min) || isNaN(max)) {
// 		res.status(400);
// 		res.json({ error: "Bad Request!!!" });
// 		return;
// 	}

// 	var result = Math.round((Math.random() * (max = min)) + min);

// 	res.json({ result: result });
// });

app.get("/random/:min/:max", function(req, res) {
	var min = parseInt(req.params.min); 
	var max = parseInt(req.params.max); 
	if (isNaN(min) || isNaN(max)) { 
		res.status(400); 
		res.json({ error: "Bad request." }); 
		return;
	} 
	var result = Math.round((Math.random() * (max - min)) + min); 
	
	res.json({ result: result }); 
});

app.listen(3000, function() {
	console.log("App started on port 3000");
});

// fuser 8080/tcp || shows what is using a particular port
//  fuser -k 8080/tcp will kill the process on that port

// var express = require("express");
// var app = express();
// app.get("/random/:min/:max", function(req, res) {
// var min = parseInt(req.params.min); #A
// var max = parseInt(req.params.max); #A
// if (isNaN(min) || isNaN(max)) { #B
// res.status(400); #B
// res.json({ error: "Bad request." }); #B
// return; #B
// } #B
// var result = Math.round((Math.random() * (max - min)) + min); #C
// res.json({ result: result }); #C
// });
// app.listen(3000, function() {
// console.log("App started on port 3000");
// });