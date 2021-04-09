const express = require('express');
const fs = require('fs')
const customers = require('./data/customers.json')

const app = express();

//middleware to get json data from req.body
app.use(express.json())

// 1.Create a Restful API, which will return Customer list in JSON format.
// http://localhost:3000/customers

app.get('/customers', (req, res) => {
    res.status(200).send(customers)
})

// 2. Create a Restful API which will search a particular record from the customer list.
// http://localhost:3000/customers/1

app.get('/customers/:id', (req, res) => {
    const customer = customers.find((c) => c.id == req.params.id)
    res.send(customer)
})

// 3. Create a Restful API which will insert a new customer object in the customer list.
// http://localhost:3000/customer

app.post('/customer', (req, res) => {
    // console.log(req.body)
    // res.send(req.body)

    if(!req.body.name) return res.send('Need to provide name of the customer')

    const newCustomer = {
        "id": customers.length + 1,
        "name": req.body.name
    }

    customers.push(newCustomer)

    fs.writeFile('data/customers.json', JSON.stringify(customers), (err) => {
        if(err) return res.send(err)
    })

    res.send(newCustomer)
})

// 3. Create a Restful API which update a name of existing customer whose customer ID is 1
// http://locahost:3000/customers/8

app.put('/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id == req.params.id) 

    if(!customer) return res.send('Customer with this id does not exist')
    if(!req.body.name) return res.send('Need to provide name of the customer')

    const index = customers.indexOf(customer)

    customers[index].name = req.body.name

    fs.writeFile('data/customers.json', JSON.stringify(customers), (err) => {
        if(err) return res.send(err)
    })

    res.send(customers[index])
})

// 4. Create a Restful API which will delete a record from the customer list.
// http://localhost:3000/customers/8

app.delete('/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id == req.params.id) 

    if(!customer) return res.send('Customer with this id does not exist')

    const index = customers.indexOf(customer)

    customers.splice(index, 1)

    fs.writeFile('data/customers.json', JSON.stringify(customers), (err) => {
        if(err) return res.send(err)
    })

    res.send(customer)
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`server running on port ${port}`))