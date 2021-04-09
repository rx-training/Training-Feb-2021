const http=require('http');
const querystring=require('querystring');
const fs=require('fs');

http.createServer((req,res)=>{
    if(req.url=='/upload'){
        let data='';
        req.on('data', chunk =>{
            data+=chunk;
        });
        req.on('end',()=>{
            fs.writeFile('./disk.txt',data,(err)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log('Data written in disk.txt');
            });
            res.end();
        });
    }
}).listen(3001,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Server running on port no 3001');
});