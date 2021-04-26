let http = require('http');
let express = require('express');
const router = express.Router();
let log = require('./middleware/log');
let fs = require('fs');
let app = express();


app.use(log);
let order = require("./controller/order");
let restaurant = require("./controller/restaurant");
let customer = require("./controller/customer");


// app.use(express.json());
app.use("/order",order);
app.use("/restaurant",restaurant);
app.use("/customer",customer);


http.createServer(app).listen(3000,function()
{
    console.log("Application started at port number 3000")
})


