const { isString } = require('util');
//var url2="http://localhost:3001/vowefind?input=rita";
const url=require('url');
//var url1="http://localhost:3001/product?param1=5&param2=10";
var http=require('http');
var file=require('fs');
var fs =require('fs');

http.createServer((req,res)=>{
    var Mypath=new URL('http://localhost:3001'+req.url)
    
    if(Mypath.pathname==="/")
    {
        file.readFile("./person.json",(err,data)=>{
            console.log(JSON.parse(data.toString()));
           var value=data.toString();
           res.write(value);
           res.end();
        });
        
    }
    else if(Mypath.pathname==="/product")
    {
        
        var result 
        let n1=parseInt(Mypath.searchParams.get("param1"));
        let n2=parseInt(Mypath.searchParams.get("param2"));
        result=n1+n2;
                console.log("Result of "+n1+" & " +n2+ " = " +result);
       
              res.write("Result of "+n1+" & " +n2+ " = " +result.toString());
              res.end();
        
    }
    else if(Mypath.pathname==="/vowefind")
    {
        let str=(Mypath.searchParams.get("input"));
        console.log("String : "+str);
         let r = str.split("");
       for(i=0; i<str.length; i++)
        {
            let m = r[i].match(/[aeiou]/gi)
            if(m!=null)
            {
                console.log("First Vowel : " +m)
                res.write(` First Vowel :  ${m} \n`);
                break;
            }
        } 
           res.end();
    }
    else if(Mypath.pathname==="/upload")
    {
        
        fs.readFile('ass.html', 'utf8', function(err, data) {
            console.log(data);
            res.write(`${data}`);
            res.end();
          })
           
          fs.createWriteStream("Files/ass1.txt");
          fs.copyFile('ass.html', 'Files/ass1.txt', (err) => {
            if (err) throw err;
            console.log('Rename complete!');
          });   
    }
//res.end();
}).listen(3001,()=>{
    console.log("Server Started");
})
