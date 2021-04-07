/*2. Write a Nodejs server that serves as a RESTFUL API that takes two parameters in a GET call and produces their sum*/

var http = require("http")
var url = require("url");
var addr = "http://localhost:3001/product?param1=5&param2=10"

http.createServer((req,res) => {
    if (req.url == "/product?param1=5&param2=10") {
        
    
    var q = url.parse(req.url,true).query;
    console.log(q.param1)

    var c = parseInt(q.param1) + parseInt(q.param2);
    console.log(c)
    res.write(c.toString())
    res.end()
    }
}).listen(3001)
