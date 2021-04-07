const http = require('http')
// const url = require('url')
const path = require('path')
const fs = require('fs')

/*note:
The URL constructor is accessible as a property on the global object. It can also be imported from the built-in url module:

console.log(URL === require('url').URL); // Prints 'true'.
*/

const person = require('./person')

const server = http.createServer((req, res) => {

    let urlVar = 'http://'
    urlVar += path.join(req.headers.host, req.url)

    let myUrl = new URL(urlVar) 
    // let myUrl = url.parse(urlVar)

    // console.log(myUrl)

    //1.Write a Nodejs server that listen on port 3001 and which will read person.json and return a response in JSON format.
    //http://localhost:3001
    if(myUrl.pathname == '/') {
        res.writeHead(200, 'application/json')
        res.write(JSON.stringify(person))
        res.end()
    }

    //2. Write a Nodejs server that serves as a RESTFUL API that takes two parameters in a GET call and produces their sum.
    //http://localhost:3001/product?param1=5&param2=10
    else if(myUrl.pathname == '/product') {
        let param1 = myUrl.searchParams.get('param1')
        let param2 = myUrl.searchParams.get('param2')
        
        res.writeHead(200, 'text/html')
        // res.end(`<h3 style="color: #333; padding: 20px;">Sum is: ${+param1 + +param2}</h3>`)
        res.end(`<h1 style="color: blue; font-size:5em; margin-left: 20px">Sum is: ${+param1 + +param2}</h1>`)
    }
  
    //3. Write a Nodejs server that serves as a RESTFUL API that accepts a string as an input name and returns the first vowel character from the string.
    //http://localhost:3001/vowefind?input=rita
    else if(myUrl.pathname == '/vowefind') {
        let inp = myUrl.searchParams.get('input')

        res.end(`<h1 style="color: #333; font-size:5em; margin-left: 20px">Name: ${inp}</h1>`)
        
    }

    // 4. Write a Nodejs server that serve as a RESTFUL API that accepts a file content and writes them to the disk.
    // http://localhost:3001/upload
    else if(myUrl.pathname == '/upload') {
        fs.readFile('files/index.html', 'utf8', (err, data) => {
            if(err) {
                res.end('Error: ', err)
            } else {
                fs.writeFile('upload/myFile.html', data, (err) => {
                    if (err) {
                        res.end('Error: ', err)
                    }
                })
                res.writeHead(200, 'text/html')
                res.end(data)
            }
        })
    }

    else {
        res.writeHead(404)
        res.end('<h1 style="color: red; line-height: 100vh; font-size:10em; margin-left: 20px">Page Not Found!!!</h1>')
    }


})

server.listen(3001, () => {
    console.log('server running on port 3001')
    console.log('http://localhost:3001')
})