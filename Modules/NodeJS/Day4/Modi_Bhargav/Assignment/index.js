const http = require('http');
const fs = require('fs');
const url = require('url');

/* 1.Write a Nodejs server that listen on port 3001 and which will read person.json and return a response in JSON format.
Person.json content as follows:*/

const server = http.createServer((req, res) => {

  var Mypath = new URL('http://localhost:3001' + req.url)

  if (Mypath.pathname === '/') {
    fs.readFile('./Person.json', 'utf8', (error, data) => {
      if (error) {
        console.log(err);
        return;
      }
      res.write(data)
      res.end();
    });
  }
  /*2. Write a Nodejs server that serves as a RESTFUL API that takes two parameters in a GET call and produces their sum.
  http://localhost:3001/product?param1=5&param2=10*/

  else if (Mypath.pathname === '/product') {
    const n1 = parseInt(Mypath.searchParams.get('param1'));
    const n2 = parseInt(Mypath.searchParams.get('param2'));
    res.write(`Number1:${n1} And Number2:${n2} Total addition Is: ${n1 + n2}`)
    res.end()
  }

  /*3. Write a Nodejs server that serves as a RESTFUL API that accepts a string as an input name and returns the first vowel character from the string.
  http://localhost:3001/vowefind?input=rita*/
  else if (Mypath.pathname == '/vowefind') {
    const str = Mypath.searchParams.get('input');
    const lowstr = str.toLowerCase();
    for (i = 0; i <= str.length; i++) {
      if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
        res.write(`First Vowel Character Is:${str[i]}`)
        res.end();
        break;
      }
    }
  }
  /*4. Write a Nodejs server that serve as a RESTFUL API that accepts a file content and writes them to the disk.
  for upload functionality. you need to keep one html file in your local system and then you need to read that file with the help of fs and send the response to the server in another folder.
  http://localhost:3001/upload*/

  else if (Mypath.pathname == '/upload') {
    fs.readFile('./view.html', 'utf8', (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      fs.writeFile('./disk.html', data, (error) => {
        if (error) {
          console.log(error);
          return;
        }
        res.write(data);
        res.end()
      })
    })
  }

})


server.listen(3001);

console.log('listing on port 3001')