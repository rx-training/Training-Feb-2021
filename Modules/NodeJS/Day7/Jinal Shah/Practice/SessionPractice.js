
const express = require('express');
const router = express.Router();
const logger = require('./logger1')
const app = express()
app.use(express.json());

//app.use(logger);

app.use("/logger",logger).listen(3000)

/* app.get('/',(req,res) => {
    res.send('Hello World');
}).listen(3000) */