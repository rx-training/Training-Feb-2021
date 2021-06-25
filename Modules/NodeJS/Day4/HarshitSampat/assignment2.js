var http = require('http')
var url = require('url')
var addr ='http://localhost:3001/product?param1=5&param2=10'

http.createServer((req,res)=>{
    if(req.url==="/product?param1=5&param2=10"){
        var passurl =url.parse(addr,true).query
        console.log(passurl.param1)
        console.log(passurl.param2)

        var sum =parseInt(passurl.param1)+parseInt(passurl.param2);
        console.log(sum)
        res.write("Sum of Passed parameter is "+sum.toString())
        res.end()
    }
}).listen(3001)