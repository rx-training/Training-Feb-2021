/* 1.Create a Restful API, which will return Customer list in JSON format.
     http://localhost:3000/customers  */


        let express = require('express');
        const fs = require('fs')

        let app =express();
        app.use(express.json())

        let customer = require('./customer.json')

        app.get("/customers",(req,res) => {
            console.log(customer)
            res.json(customer);
            res.end();
        }).listen(3000)   


/* 2.Create a Restful API which will search a particular record from the customer list.
    http://localhost:3000/customers/1  */

        app.get('/customers/:id', (req, res) => {
            //console.log(req.params.id)
            const data = customer.find((c) => c.ID == req.params.id)

            if (!data) res.status(404).send('Ooops... Can not find what you are looking for!</h2>');
            res.send(data);


            console.log(data)
            //res.send(data)
        })


/* 3.Create a Restful API which will insert a new customer object in the customer list.
     http://localhost:3000/customer */

        app.post('/customer', (req, res) => {
            
            console.log(req.body)
        
            var object = req.body;
            console.log(object)

            customer.push(object)
            console.log(customer)

            fs.writeFile('./customer.json', JSON.stringify(customer), (err) => {
                if(err) return res.send(err)
            })
        
        })

/* 4. Create a Restful API which update a name of existing customer whose customer ID is 1
      http://locahost:3000/customer */

        app.put('/customer/:id', (req, res) => {

            const data = customer.find(c => c.ID == req.params.id) 

            console.log(data)
            console.log(req.body.Name)

            var i = customer.indexOf(data)
            console.log(i)
            console.log(customer[i].Name)

            customer[i].Name = req.body.Name
            console.log(customer[i])

            var Name1 = req.body.Name
            console.log(Name1)

            fs.writeFile('./customer.json', JSON.stringify(customer), (err) => {
                if(err) return res.send(err)
            })
        
        })

/* 5. Create a Restful API which will delete a record from the customer list.
      http://localhost:3000/customer */

        app.delete('/customer/:id', (req, res) => {
            const data = customer.find(c => c.ID == req.params.id) 

            if(!data) return res.send('Customer with this id does not exist')

            const i = customer.indexOf(data)

            customer.splice(i, 1)

            fs.writeFile('./customer.json', JSON.stringify(customer), (err) => {
                if(err) return res.send(err)
            })

            res.send(data)
        })

