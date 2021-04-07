const http=require('http');
const path=require('path');

http.createServer((req,res)=>{
    res.write(path.join("http:",req.headers.host,req.url));
    res.end();
}).listen(3000,(err)=>{
    console.log("Server started on port:3000");
});

