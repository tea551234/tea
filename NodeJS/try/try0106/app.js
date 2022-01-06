var express = require("express");
var app = express();
app.listen(3000);
var userRouter = require("./users.js");
app.use("/lab/users", userRouter);

