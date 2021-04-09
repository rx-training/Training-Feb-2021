const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile('person.json', (err, data) => {
            if (err) {
                console.error(err.message);
            }
            else {

                res.write(data.toString());
                res.end();
            }
        })

    }

    if (req.url === "/product") {
        const url = require('url');
        http.createServer((req, res) => {

            let temp = url.parse(req.url, true).query;
            let num1 = temp.param1;
            let num2 = temp.param2;
            let sum = Number(num1) + Number(num2);
            console.log(sum, num1, num2, temp);
            res.write(`The Addition of two number is ${sum}`);
            res.end();

        }

        if (req.url === "/vowelfind") {
            let temp = url.parse(req.url, true).query;
            console.log(temp);
            var name = temp.name;
            console.log(name);
            let count = 0;
            let firstoccurance = "";
            for (const iterator of name) {


                if (iterator == 'a' || iterator == 'e' || iterator == 'i' || iterator == 'o' || iterator == 'u' || iterator == 'A' || iterator == 'E' || iterator == 'I' || iterator == 'O' || iterator == 'U') {

                    count++;
                    if (count == 1) {
                        firstoccurance = iterator;
                    }

                }
            }
            if (count == 0) {
                res.write(`There is no vowel in the name.`);
                res.end();
            }
            if (count > 1) {
                res.write(`The first occurance of vowel is ${firstoccurance}`);
                res.end();
            }


        }

        if (req.url === "/upload") {
            let data = '';
            req.on('data', chunk => {
                data += chunk;
            })
            req.on('end', () => {
                fs.writeFile('demo1.txt', data, (err) => {
                    if (err) {
                        console.log("Error Occured");
                    }
                    else {
                        console.log("File is written in disk successfuly");
                    }
                })
                res.end();
            })
        }

    }).listen(3001,(err)=>
    {
        if(err)
        {
            console.error(err.message);
        }
        else
        {
            console.log("Server started on port no 3001");
        }

    });
