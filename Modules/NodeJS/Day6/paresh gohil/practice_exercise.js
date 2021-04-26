/*1.Create a Restful API, which will return Customer list in JSON format.*/

const express = require("express")
const app = express();
app.use(express.json())

const customers = [
    {"id":1 , "CName":"Roy" , "Address":"Ahmedabad"},
    {"id":2 , "CName":"Veer" , "Address":"Surat"},
    {"id":3 , "CName":"Mayank" , "Address":"Mumabai"}
]
var server = app.listen(3000, () => {
    console.log("server is running")
})

app.get("/customers",(req,res) => {
    res.send(customers)
})


/*2. Create a Restful API which will search a particular record from the customer list.*/

app.get("/customers/:id",(req,res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id))

    if(!customer) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>')
    res.send(customer)
})

/*3. Create a Restful API which will insert a new customer object in the customer list.*/

app.post("/customers",(req,res) => {
    const customer1 = {"id":req.body.id , "CName": req.body.CName , "Address":req.body.Address};
    customers.push(customer1)
    res.send(customer1)
})

/*4. Create a Restful API which update a name of existing customer whose customer ID is 1*/

app.put("/customers/:id",(req,res) => {
    const customer2 = customers.find(c => c.id === parseInt(req.params.id))
    customer2.CName = req.body.CName
    res.send(customer2)
})

/*5. Create a Restful API which will delete a record from the customer list.*/

app.delete("/customers/:id",(req,res) => {
    const customer3 = customers.find(c => c.id === parseInt(req.params.id))
    const index = customers.indexOf(customer3)
    customers.slice(index,1)
    res.send(customer3)
})