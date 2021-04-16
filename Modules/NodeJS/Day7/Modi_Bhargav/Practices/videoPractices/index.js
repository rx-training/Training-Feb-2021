const http = require('http');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const startdebug = require('debug')('app:startap');
const dbdebug = require('debug')('app:db')
const fs = require('fs');
const logger = require('./logger')
const customers = require('./customer.json');
const app = express();
app.use(express.json())
app.use(logger)
app.use(express.urlencoded({ extended : true}))
app.use(express.static('public'))
app.use(helmet());

// configuration
console.log(`Application Name: ${config.get("name")}`)
console.log(`mail Name: ${config.get("mail.host")}`)
// console.log(`mail password: ${config.get("mail.password")}`)


console.log(`env: ${app.get('env')}`)
if(app.get('env') === 'development'){
  app.use(morgan('tiny'));
  console.log('morgan enable')
  // startdebug("morgan enabled...")
}

// db work
// dbdebug("connected to the database")
/*1.Create a Restful API, which will return Customer list in JSON format.
http://localhost:3000/customers*/

http.createServer(app).listen(3000,function(){
  console.log("this 3000 port susscesfully run")
})

app.get('/customers',(req,res) => {
  res.send({"Data":customers});
  res.end()
})