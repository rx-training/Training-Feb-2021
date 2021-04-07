/*3. Write a Nodejs server that serves as a RESTFUL API that accepts a string as an input name and returns the first vowel character from the string*/

var http = require("http")
var url = require("url");
var addr = "http://localhost:3001/vowefind?input=rita"


http.createServer((req,res) => {
    if (req.url == "/vowefind?input=rita") {
        
    
    var q = url.parse(req.url,true).query;
    console.log(q.input)
    var c = q.input;
    var d = '[aeiouAEIOU]'
    var e = c.search(d)
    console.log(c.charAt(e))
    res.write(c.charAt(e))
    res.end()
    }
}).listen(3001)
