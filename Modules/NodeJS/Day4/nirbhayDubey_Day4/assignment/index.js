const http=require('http');
const url=require('url');
const querystring=require('querystring');
const fs=require('fs');

http.createServer((req,res)=>{
    
    let regex1=/\/product\?param1=[0-9]{1,3}&param2=[0-9]{1,3}/;
    let regex2=/\/vowefind\?input=[a-zA-Z]/;
    if(regex1.test(req.url)){
        let param=url.parse(req.url,true).query;
        let no1=Number(param.param1);
        let no2=Number(param.param2);
        console.log(param);
        res.write(`<h1>Sum equals to ${no1+no2} </h1>`);
        res.end();
    }
    else if(regex2.test(req.url)){
        let tmp=querystring.parse(req.url.replace('/vowefind?',''));
        let strname=tmp.input;
        let vowel='';
        for (let ch of strname) {
            if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u' || ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U'){
                vowel=ch;
                break;
            }
        }
        res.write(`<h1> First vowel character from the string is '${vowel}' `);
        res.end();
    }
    else if(req.url=='/upload'){
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
    else{
        fs.readFile('./person.json','utf8',(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
            res.write(data);
            res.end();
        });
    }

}).listen(3000,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Server started in port number 3000');
});
