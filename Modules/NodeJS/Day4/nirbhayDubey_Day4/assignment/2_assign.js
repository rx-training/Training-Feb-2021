const http=require('http');
const url=require('url');

http.createServer((req,res)=>{
    let regex=/\/product\?param1=[0-9]&param2=[0-9]/;
    if(regex.test(req.url)){
        let param=url.parse(req.url,true).query;
        let no1=Number(param.param1);
        let no2=Number(param.param2);
        console.log(param);
        res.write(`<h1>Sum equals to ${no1+no2} </h1>`);
        res.end();
    }
}).listen(3001,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('Server started at port number 3001');
});

// let param=new URLSearchParams(req.url.replace('/?',''));
// let no1=Number(param.get('param1'));
// let no2=Number(param.get('param2'));