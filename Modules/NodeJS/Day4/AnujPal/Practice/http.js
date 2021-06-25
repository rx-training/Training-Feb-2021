var http = require('http');
http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello World");
        res.end();
    }

    if(req.url === "/api/cources")
    {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }


}).listen(3005);