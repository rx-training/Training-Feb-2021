const fs = require('fs');
const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url="/")
    {
        fs.readFile('./person.json','utf8',(err,data)=>{
            if(err){
                console.log(`Error : ${err}`);
            }
            else if(data){
                //parse json string to json object
                res.write(data.toString())
                res.end()
            
            }
        
        })
    }
    
}).listen(3000);