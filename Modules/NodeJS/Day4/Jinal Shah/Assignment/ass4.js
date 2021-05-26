/* Write a Nodejs server that serve as a RESTFUL API that accepts a file content and writes them to the disk. 
   ( for upload functionality. you need to keep one html file in your local system and then you need to 
    read that file with the help of fs and send the response to the server in another folder )  */

    const http = require('http')
    const fs = require('fs')

    http.createServer((req,res) => {
        if(req.url == '/upload'){
            fs.readFile('./html.html',(err,data) =>{
                res.write(data)
                res.end()
            })
        }
    }).listen(3001)