const helmet = require('helmet')
const morgan = require('morgan')
const config = require('config')
//const debug = require('debug')('app:startup') //if only on debuger needed
const startupDebugger = require('debug')('app:startup') 
const dbDebugger = require('debug')('app:db')

const express = require('express');
const fs = require('fs')
const logger = require('./middleware/logger')

const courses = require('./routes/courses')
const home = require('./routes/home')


const app = express();

//setting view 
//no need of require pug just npm i pug
app.set('view engine', 'pug')
app.set('views', './views')//default


//built in middleware
//middleware to get json data from req and return output as req.body
app.use(express.json())

//get encoded data from url like key=value&key=value and output as req.body
app.use(express.urlencoded({extended: true}))

//to set a static folder for css, js etc files 
//we can serve static content like /readme.txt
app.use(express.static('public'))

//create custom middleware function
// app.use(function (req, res, next) {
//     console.log('Logging...');
//     next();
// });

app.use(logger);    

app.use(function (req, res, next) {
    console.log('Authenticating...');
    next();
});

//third party middleware

//helmet helps secure your app by setting various http headers
app.use(helmet())

//morgan http request logger
// app.use(morgan('tiny'))

//get current environment dev/production

console.log(`node env: ${process.env.NODE_ENV}`)

//or
console.log(`app: ${app.get('env')}`)

if(app.get('env') === 'development') {
    app.use(morgan('tiny'))
    // console.log('morgan enabled...')
    startupDebugger('morgan enabled...')
}

//to set env
// set NODE_ENV=production or in mac export NODE_ENV=production

//config
console.log(`Application name: ${config.get('name')}`)
console.log(`Mail Server: ${config.get('mail.host')}`)
console.log(`Mail Password: ${config.get('mail.password')}`)

//set appname_password=1234 to store password

//db work
dbDebugger('connected to the database')

//set DEBUG=app:startup to change debug mode/namespace
//set DEBUG=app:db
//set DEBUG=* to see all namespaces
//set DEBUG=app:db,app:startup for multiple namespaces
//set DEBUG= to reset debuger

//set DEBUG=app:db nodemon index.js

//routes


// app.get('/', (req, res) => {
//     res.render('index', { title: 'My Express App', message: 'Hello!!!'})
// })

app.use('/', home)

app.use('/api/courses', courses)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`server running on port ${port}`))