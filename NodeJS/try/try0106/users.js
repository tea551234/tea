var express = require("express");
var userRouter = express.Router();
userRouter.get("/", function (req, res) {
    res.send("userRouter home page");
})
module.exports = userRouter;