const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('Hello World!!!')
        res.end()
    } 

    if (req.url == '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]))
        res.end()
    }
})

server.on('connection', (socket) => {
    console.log('New Connection...')
})

server.listen(3000)

console.log('Lisning on port 3000...')


//server is an EventEmitter so we can use all methods like server.on()