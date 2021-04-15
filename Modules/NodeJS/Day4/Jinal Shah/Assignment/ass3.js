/* Write a Nodejs server that serves as a RESTFUL API that accepts a string as an input name and 
   returns the first vowel character from the string. */

   const http = require('http');
   const url = require('url');
   var url1 = " http://localhost:3001/vowefind?input=rita"

   const server = http.createServer((req,res) => {

        if(req.url == '/vowefind?input=rita'){

            var a = url.parse(url1,true).query;
            console.log(a.input)

            var b = '[aeiouAEIOU]'
            var c = (a.input).search(b)
            //console.log(c)
            //console.log((a.input).charAt(c))
            console.log(`First vowel character in string '${a.input}' is : ${(a.input).charAt(c)}`)
            res.write(`First vowel character in string '${a.input}' is : ${(a.input).charAt(c)}`)
            res.end()
        }
});

server.listen(3001);