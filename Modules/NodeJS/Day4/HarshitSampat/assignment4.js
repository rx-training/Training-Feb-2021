const fs = require('fs')
const http = require('http')

http.createServer((req,res)=>{
    if(req.url==='/upload'){
        fs.readFile('./hello.html','utf8',(err,data)=>{
            if(err){
                res.write("Something Went Wrong",err)
                res.end();
            }
            else if(data){
                res.write(data)
                res.end();
            }
        })
    }
}).listen(3001)