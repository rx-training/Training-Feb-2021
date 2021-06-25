// import modules
const jwt = require('jsonwebtoken');

// login
const login = (req, res) => {
    // get data from req.body
    const userdata = {
        username: req.body.username,
        password: req.body.password
    }

    // generate token
    const token = jwt.sign(
        userdata,
        global.auth.secretKey,
        {
            algorithm: global.auth.algorithm,
            expiresIn: '50m'
        }
    )

    // input varification
    if(userdata.username == "admin", userdata.password == "admin") {
        res.status(200)
            .json({
                message: 'login successful!!!',
                jwtoken: token 
            })
    } else {
        res.status(401)
            .json({
                message: 'login failed!!!'
            })
    }
}

module.exports = login