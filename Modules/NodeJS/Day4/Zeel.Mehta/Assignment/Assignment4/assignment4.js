const url=require('url');
var fs =require('fs');
var http=require('http');
const { isString } = require('util');

var url1="http://localhost:3001/upload";
http.createServer((req,res)=>{
    
    if(req.url=="/upload")
    {
        
        fs.readFile('ass.html', 'utf8', function(err, data) {
            console.log(data);
            res.write(`${data}`);
            res.end();
            
            
          })
          
          fs.rename('ass.html', '../ass.html', (err) => {
            if (err) throw err;
            console.log('Rename complete!');
          }); 
          
        
          
    }
    
//res.end();
}).listen(3001,()=>{
    console.log("Server Started");
})
