let express = require('express');
let app = express();
app.listen(3000) //port 3000

app.set('view engine',"ejs"); //設定檔案預設值 
app.get('/test', function(req, res){  //port的位址指向/test
    res.render('lab')  //秀出lab.ejs的內容
})