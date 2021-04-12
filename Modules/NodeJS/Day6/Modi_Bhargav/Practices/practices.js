const http = require('http');
const express = require('express');
const fs = require('fs');
const Joi = require('joi')
const app = express();
app.use(express.json())
const customers = require('./customer.json');

/*1.Create a Restful API, which will return Customer list in JSON format.
http://localhost:3000/customers*/
http.createServer(app).listen(3000,function(){
  console.log("this 3000 port susscesfully run")
})

app.get('/customers',(req,res) => {

  res.send({"Data":customers});
  res.end()
})

/*2. Create a Restful API which will search a particular record from the customer list.
http://localhost:3000/customers/1*/

app.get('/customers/:customerID',(req,res) => {

  let customer = customers.find(i => i.customerID === parseInt(req.params.customerID))
  if(!customer) res.status(404).send("Your Customer Id Is Not Found")
  res.send({customer});
  res.end()
})

// find select id to selected data
/*app.get('/customers/:customerID/:customerName',(req,res) => {

  let customer = customers.find(i => i.customerID === parseInt(req.params.customerID))
  if(!customer) res.status(404).send("Your Customer Id Is Not Found")
  res.send({customerName:customer.customerName});
  res.end()
})*/

/*3. Create a Restful API which will insert a new customer object in the customer list.
http://localhost:3000/customer*/

app.post('/customers',(req,res) => {
  console.log(req.body.customerName)
  const {error} = validateCustomer(req.body)
  if(error){
    res.status(404).send(error.details[0].message)
  }
  const newCustomers = {
    customerID : customers.length + 1,
    customerName : req.body.customerName,
    customerAddress : req.body.customerAddress
  }
  customers.push(newCustomers)
  fs.writeFile('./customer.json',JSON.stringify(customers),(error) => {
        console.log(error)
      });
  res.send(customers);
  res.end();
});

function validateCustomer(customer) {
  const schema = {
   customerName: Joi.string().min(3).required()
  };
  return Joi.validate(customer, schema);
  }
  
/*4. Create a Restful API which update a name of existing customer whose customer ID is 1
http://locahost:3000/customer*/

app.put('/customers/:customerID',(req,res) => {
  let customer = customers.find(n => n.customerID === parseInt(req.params.customerID))
  if(!customer) res.status(404).send("Your Customer Id Is Not Found")
  let index = customers.indexOf(customer)
  customers[index].customerName = req.body.customerName;
  fs.writeFile('./customer.json',JSON.stringify(customers),(error) => {
    console.log(error)
  });
  res.send(customers);
  res.end();
})

/*5. Create a Restful API which will delete a record from the customer list.
http://localhost:3000/customer*/

app.delete('/customers/:customerID',(req,res) => {
  let customer = customers.find(d => d.customerID === parseInt(req.params.customerID))
  // console.log(customer)
  let index = customers.indexOf(customer)
  customers.splice(index,1)
  fs.writeFile('./customer.json',JSON.stringify(customers),(error) => {
    console.log(error)
  });
  res.send(customers)
  res.end()
});