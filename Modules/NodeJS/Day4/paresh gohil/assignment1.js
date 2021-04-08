/*1.Write a Nodejs server that listen on port 3001 and which will read person.json and return a response in JSON format*/
/*2. Write a Nodejs server that serves as a RESTFUL API that takes two parameters in a GET call and produces their sum*/
/*3. Write a Nodejs server that serves as a RESTFUL API that accepts a string as an input name and returns the first vowel character from the string*/
/*4. Write a Nodejs server that serve as a RESTFUL API that accepts a file content and writes them to the disk.*/

var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer((req,res) => {
    if (req.url == "/") {
        fs.readFile("./person.json",(err,data) => {
                if(err) console.log(err)
                else if(data){
                    res.write(data.toString())
                    res.end()
                }            
        })
    }
    else if (req.url == "/product?param1=5&param2=10") 
    {
        var q = url.parse(req.url,true).query;
        console.log(q.param1)    
        var c = parseInt(q.param1) + parseInt(q.param2);
        console.log(c)
        res.write(c.toString())
        res.end()
    }
    else if (req.url == "/vowefind?input=rita") {
        var q = url.parse(req.url,true).query;
        console.log(q.input)
        var c = q.input;
        var d = '[aeiouAEIOU]'
        var e = c.search(d)
        console.log(c.charAt(e))
        res.write(c.charAt(e))
        res.end()
    }
    else if (req.url == "/upload") {        
        fs.readFile("./upload.html",(err,data) => {
            fs.writeFile("./upload1.html",data ,(err) => {
                if(err) console.log(err)
            })
        })
        res.end();
    }

}).listen(3001)

