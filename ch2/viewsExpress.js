var express = require("express"); 
var path = require("path");
var app = express();

app.set("views", path.resolve(__dirname, "views")); 

app.set("view engine", "ejs"); 