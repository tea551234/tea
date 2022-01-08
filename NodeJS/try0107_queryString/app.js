var express = require("express");
var app = express();
app.listen(3000);
app.use(express.static("./public"));

app.post("/doPost", function (req, res) {
    res.send("OK, I got post data.");
})