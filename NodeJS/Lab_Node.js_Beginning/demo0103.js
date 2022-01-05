console.log("Starting...");
var fs = require("fs");
var host = "127.0.0.1";
var port = 3000;
var express = require("express");
var app = express();

app.get("/", function(request, response) {
    response.send("hello!");
});

app.listen(port, host);