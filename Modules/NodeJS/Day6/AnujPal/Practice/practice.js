const express = require('express');
const Joi = require('joi');
const fs = require('fs');
const app = express();
app.use(express.json());
var customers = require('./customer.json');
app.get('/', (req, res) => {
    res.send("Hello World");
});

// 1)  Create a Restful API, which will return Customer list in JSON format.

app.get('/customers', (req, res) => {
    res.send(customers);
});

// 2)  Create a Restful API which will search a particular record from the customer list.

app.get('/customers/:id', (req, res) => {
    const customer = customers.find(c => c.CustomerID === parseInt(req.params.id));
    if (!customer) return res.status(404).send("customeris not found");
    res.send(customer);
});

// 3)  Create a Restful API which will insert a new customer object in the customer list.

app.post('/customers', (req, res) => {

    const { error } = validateCource(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return
    }

    const customer =
    {
        Customerid: customers.length + 1,
        CustomerName: req.body.CustomerName
    }
    customers.push(customer);
    res.send(customers);
    fs.writeFile('./customer.json', JSON.stringify(customers), (err) => {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log("Data Appended to json file succesfully");
        }

    })

});

//  4) Create a Restful API which update a name of existing customer whose customer ID is 1.

app.put('/customers/:id', (req, res) => {
    const customer = customers.find(c => c.CustomerID === parseInt(req.params.id));
    if (!customer) return res.status(404).send('customer  not found.');

    const { error } = validateCource(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return
    }

    customer.CustomerName = req.body.CustomerName;
    res.send(customer);
    fs.writeFile('./customer.json', JSON.stringify(customers), (err) => {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log("Data Appended to json file succesfully");
        }

    })
});

app.listen(3000, () => {
    console.log("Server is started on port 3000");
});

//  5) Create a Restful API which will delete a record from the customer list.

app.delete('/customers/:id', (req, res) => {
    const customer = customers.find(c => c.Customerid === parseInt(req.params.id));
    if (!customer) {
        res.status(404).send('customer not found.');
        return
    }

    const index = customers.indexOf(customer);
    customers.splice(index, 1);
    res.send(customer);
    fs.writeFile('./customer.json', JSON.stringify(customers), (err) => {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log("Data Appended to json file succesfully");
        }

    })

})


function validateCource(customer) {
    const schema =
    {
        CustomerName: Joi.string().min(3).required()
    };

    return Joi.validate(customer, schema);
}
