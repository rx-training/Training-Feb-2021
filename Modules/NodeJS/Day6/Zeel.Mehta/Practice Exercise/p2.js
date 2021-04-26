let http=require('http');
let express=require('express');
let app=express();
app.use(express.json());
let fs=require('fs');
let customer=require('./customer.json');

http.createServer(app).listen(3000,function()
{
    console.log("Application started at port number 3000")
});

//1.Create a Restful API, which will return Customer list in JSON format.
app.get("/customers",(req,res)=>{
    // res.send("Welcome");
    console.log(customer);
    res.json({"Data of Customer ":customer})
    res.end();
});

//2. Create a Restful API which will search a particular record from the customer list.
app.get("/customers/:CustomerID",(req,res)=>{
    const cust=customer.find(c => c.CustomerID ===parseInt(req.params.CustomerID));
    res.send(cust);
    res.end();
    
})

//3. Create a Restful API which will insert a new customer object in the customer list.
app.post("/customers",(req,res)=>{
    var obj=req.body;
    customer.push(obj);
    fs.writeFile("./customer.json",JSON.stringify(customer),function(error){
        console.log(error);
    });
    res.send(customer);
    res.end(); 
    console.log(req.body);
})

// 4. Create a Restful API which update a name of existing customer whose customer ID is 1
app.put("/customers/:CustomerID",(req,res)=>{
    const cust=customer.find(c => c.CustomerID ===parseInt(req.params.CustomerID));
    cust.Name=req.body.Name;
    fs.writeFile("./customer.json",JSON.stringify(customer),function(error){
        console.log(error);
    });
    res.send(cust);
    res.end();
})

// Create a Restful API which will delete a record from the customer list.
app.delete("/customers/:CustomerID",(req,res)=>{
    const cust=customer.find(c => c.CustomerID ===parseInt(req.params.CustomerID));
    const index=customer.indexOf(cust);
    customer.splice(index,1);
    fs.writeFile("./customer.json",JSON.stringify(customer),function(error){
        console.log(error);
    });
    res.send(cust);
    res.end();
})

// app.delete("/customers",(req,res)=>{
//     customer.splice(0);
//     fs.writeFile("./customer.json",JSON.stringify(customer),function(error){
//         console.log(error);
//     });
//     res.send(customer);
//     res.end();
// })

