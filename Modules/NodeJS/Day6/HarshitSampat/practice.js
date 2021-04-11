const express = require('express')
const app = express()

app.use(express.json())

const port = process.env.PORT||3000
app.listen(port,()=>console.log(`Listening on port ${port}..`));

const customers = [{id:1,name:"Harshit",address:"ahmedabad"},
        {id:2,name:"Jay",address:"Surat"},
        {id:3,name:"John Doe",address:"Sanfransico"}
]

app.get('/',(req,res)=>{
    res.send("Hello are you waiting for Somthing??Just chang url and get it Dear!")
})

app.get('/customers',(req,res)=>{
    res.send(customers)
})

app.get('/customers/:id',(req,res)=>{
    const customer = customers.find(c =>c.id === parseInt(req.params.id));
    
    if(!customer) res.status(404).send('<h2> Sorry Customer is not there!</h2>');
    res.send(customer)
})

app.post('/customers',(req,res)=>{
    console.log(req.body.name , req.body.address)
    const customer = {
        id:customers.length +1,
        name:req.body.name,
        address:req.body.address
    };
    customers.push(customer)
    res.send(customer);
})

app.put('/customer/:id',(req,res)=>{
    const customer = customers.find(c=>c.id === parseInt(req.params.id))
    
    if(!customer)res.status(404).send('<h1 style="color":"red">Hey buddy not find this customer kindly check id</h1>')
    customer.name =req.body.name
    customer.address= req.body.address
    res.send(customer) 
})
    
app.delete('/customers/:id',(req,res)=>{
    const customer =   customers.find(c=>c.id === parseInt(req.params.id))

    if(!customer)res.status(404).send('<h1 style="color":"red">Hey buddy not find this customer kindly check id</h1>')
    const index = customers.indexOf(customer)
    customers.splice(index,1)
    res.send(customer)
})