require('dotenv').config()

const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')
const { send } = require('node:process')

app.use(express.json())

let refreshTokens = []

app.post('/token', (req,res) => {
    const refreshToken = req.body.token

    if(refreshToken == null) return res.sendStatus(401)
    if(refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err,user) =>{
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({ name : user.name })
        res.json({ accessToken : accessToken })
    })
})


app.post('/login',(req,res) => {

    //authenticate user
    const username = req.body.username
    const user = { name : username }

    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)

    refreshTokens.push(refreshToken)

    //require('crypto').randomBytes(64).toString('hex')

    res.json({ accessToken : accessToken , refreshToken : refreshToken})

})

/* function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token){
        return res.sendStatus(401)
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}
 */


function generateAccessToken(user){
    jwt.sign(user,process.env.ACCESS_TOKEN_SECRET , {  expiresIn : '15s' })
}

app.listen(4000)