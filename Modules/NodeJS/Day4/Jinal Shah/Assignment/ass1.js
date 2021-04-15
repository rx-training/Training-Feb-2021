/* Write a Nodejs server that listen on port 3001 and which will read person.json and return a response in 
   JSON format. */

    const http = require('http');
    var fs = require('fs');

    const server = http.createServer((req,res) => {

        fs.readFile("./person.json",(err,data) => {
            if(req.url === '/'){
                if(err) console.log(err)
                else if(data){
                    res.write(data.toString())
                    res.end()
                }
            }
        })
    });

    server.listen(3001);