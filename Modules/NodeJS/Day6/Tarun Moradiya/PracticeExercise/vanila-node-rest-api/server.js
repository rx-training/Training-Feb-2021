const http = require('http');
const {getProduct} = require('./controllers/productcontroller')


const server = http.createServer((req, res) => {
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'text/html')

    if(req.url === '/api/products' && req.method === 'GET') {
        // res.writeHead(200, {'Content-Type': 'application/json'})
        // // res.write(JSON.stringify(products))
        // res.end(JSON.stringify(products))

        getProducts(req, res)
    } else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET'){
        const id = req.url.split('/')[3]

        getProduct(req, res, id)
    }if(req.url === '/api/products' && req.method === 'POST') {
        createProduct(req, res)
    }else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'not found'}))
    }

    
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})