/* Create a Restful API to create an employee,get all employees, get an employees,get an employee,update and employee
   http://localhost:3000/emps */

   
        const express = require('express');
        const fs = require('fs');
        const router = express.Router();
        const emp = require('./emp1')
        const app = express()
        app.use(express.json());


        app.use("/",emp).listen(3000)
        
        /* app.use(function (req, res, next) {
            console.log('Time:', Date.now())
            next()
        }) */

        app.use(function (err, req, res, next) {
                console.error(err.stack)
                res.status(500).send('Something broke!')
        })
            
