let express = require('express');
let app = express();
app.listen(3000) //port 3000

app.set('view engine',"ejs"); //設定檔案預設值 
app.get('/test', function(req, res){  //port的位址指向/test
    res.render('lab',{
        userName : "demo",
        tea : "ya",
        imgdemo : " https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AASvGYU.img?h=630&w=1119&m=6&q=60&o=f&l=f"
    })  //秀出lab.ejs的內容
})