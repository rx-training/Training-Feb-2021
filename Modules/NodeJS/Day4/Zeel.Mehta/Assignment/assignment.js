
const { isString } = require('util');

var url2="http://localhost:3001/vowefind?input=rita";
const url=require('url');
var url1="http://localhost:3001/product?param1=5&param2=10";
var http=require('http');
var file=require('fs');
http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=="/")
    {
        file.readFile("./person.json",(err,data)=>{
            console.log(JSON.parse(data.toString()));
           var value=data.toString();
           res.write(value);
           res.end();
        });
        
    }
    else if(req.url=="/product?param1=5&param2=10")
    {
        var str =url.parse(url1,true).query;
        var param1=(str.param1);
        var param2=(str.param2);
        var result=Number(param1)+Number(param2);

           res.write(`Result :  ${result}`);
           res.end();
    }
    else if(req.url=="/vowefind?input=rita")
    {
        var str =url.parse(url2,true).query;
        var istring=(str.input);

         const r = istring.split("");

       for(i=0; i<istring.length; i++)
        {
            let m = r[i].match(/[aeiou]/gi)
            if(m!=null)
            {
                res.write(` First Vowel :  ${m} \n`);
                break;
            }
        }
    
        
           res.end();
    }
//res.end();
}).listen(3001,()=>{
    console.log("Server Started");
})
