require('dotenv').config()
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken")

app.use(express.json())

//users api
app.get("/users", authenticateToken , (req,res) => {

    var user = {
            "username" : req.body.username,
            "password" : req.body.password
        }
     
    res.json(user)
})

//users login
app.post("/users/login", (req,res) => {
    //Authentication user
    var user = {
        "username" : req.body.username,
        "password" : req.body.password
    }
    //create token for register user
    const accesstoken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accesstoken})
})

//authorized
function authenticateToken(req, res, next) {
    
    //pass token in post when function call and select authorization
    const authHeader = req.headers['authorization']
    
    //token = Barear Token
    const token = authHeader && authHeader.split(' ')[1] 
    if(token == null)return res.sendStatus(401)

    //verify token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

//server started at 3000 portNo.
app.listen(3000, () => {
    console.log("server started..")
})