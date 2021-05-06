var http = require('http')
var  url    = require('url')
var addr =  'http://localhost:3001/vowefind?input=rita'

http.createServer((req,res)=>{
    if(req.url==='/vowefind?input=rita'){
        
        var get_string =url.parse(req.url,true).query;
        console.log(get_string.input)
        var transferstring =get_string.input;
        var checkVovels='[aeiouAEIOU]'
        var result=transferstring.search(checkVovels)
        console.log(transferstring.charAt(result))
        res.write("The first vovel is "+transferstring.charAt(result))
        res.end();
    }
}).listen(3001)