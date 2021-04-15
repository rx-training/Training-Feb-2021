/* Write a Nodejs server that serves as a RESTFUL API that takes two parameters in a GET call and 
   produces their sum. */

   const http = require('http');
   const url = require('url');
   var url1 = "http://localhost:3001/product?param1=5&param2=10"

   const server = http.createServer((req,res) => {

        if(req.url == '/product?param1=5&param2=10'){

            var a = url.parse(url1,true).query;
            
            var n1 = (a.param1)
            var n2 = (a.param2)

            var c = parseInt(n1) + parseInt(n2)
            res.write(`Sum of ${n1} and ${n2} is = ${(c.toString())}`)
            
            res.end()
        }
});

server.listen(3001);