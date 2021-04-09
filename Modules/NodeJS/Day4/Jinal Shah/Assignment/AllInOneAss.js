/* Write a Nodejs server that listen on port 3001 and which will read person.json and return a response in 
   JSON format. */

   const http = require('http');
   var fs = require('fs');

   const url = require('url');
   var url1 = "http://localhost:3001/product?param1=5&param2=10"

   var url2 = " http://localhost:3001/vowefind?input=rita"

   const server = http.createServer((req,res) => {

       fs.readFile("./person.json",(err,data) => {
           if(req.url === '/'){
               if(err) console.log(err)
               else if(data){
                   res.write(data.toString())
                   res.end()
               }
           }

           else if(req.url == '/product?param1=5&param2=10'){

            var a = url.parse(url1,true).query;
            
            var n1 = (a.param1)
            var n2 = (a.param2)

            var c = parseInt(n1) + parseInt(n2)
            res.write(`Sum of ${n1} and ${n2} is = ${(c.toString())}`)
            
            res.end()
            }

            else if(req.url == '/vowefind?input=rita'){

                var a = url.parse(url2,true).query;
                console.log(a.input)
    
                var b = '[aeiouAEIOU]'
                var c = (a.input).search(b)
                //console.log(c)
                //console.log((a.input).charAt(c))
                console.log(`First vowel character in string '${a.input}' is : ${(a.input).charAt(c)}`)
                res.write(`First vowel character in string '${a.input}' is : ${(a.input).charAt(c)}`)
                res.end()
            }

            else if(req.url == '/upload'){
                fs.readFile('./html.html',(err,data) =>{
                    res.write(data)
                    res.end()
                })
            }

       })
   });

   server.listen(3001);