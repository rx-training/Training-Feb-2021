const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json())

app.get("/", (req, res) => {
    res.json("Have a good day");
});

app.post("/login", (req, res, next) => {
    let userdata = {
        username: req.body.username,
        password: req.body.password
    };
    if (userdata.username == "admin" && userdata.password == "admin") {
        res.status(200).json({
            message: 'Login Successful'
        });
    }
    else {
        res.status(401).json({
            message: 'Login Failed'
        });
    }

});

app.listen(3000, (err) => {
    if (!err) console.log("server started successfully at port 3000");
});

