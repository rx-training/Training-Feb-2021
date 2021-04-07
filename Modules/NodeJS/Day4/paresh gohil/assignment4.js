/*4. Write a Nodejs server that serve as a RESTFUL API that accepts a file content and writes them to the disk.*/

var http = require("http")
var file =  require("fs")
http.createServer((req, res) =>{
    if (req.url == "/upload") {
        file.readFile("./upload.html",(err,data) => {
            res.write(data)
            res.end()
        })
    }
}).listen(3001)
