let express = require('express');
let app = express();
app.listen(3000);

app.get('/test', function(req, res){
    // res.send("ok")
    res.render("test.ejs", {"userName" : "demo"})
})