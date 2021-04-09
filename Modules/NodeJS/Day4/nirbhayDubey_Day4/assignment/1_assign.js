const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    fs.readFile('./person.json','utf8',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.write(data);
        res.end();
    });
}).listen(3000,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Server started in port number 3000');
});

