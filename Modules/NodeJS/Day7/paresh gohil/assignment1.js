const express = require("express");
const app = express();
const employees1 = require("./controller/assignment2")

app.use(function (req,res,next) {
    console.log(`${req.url}- ${req.method} and ${new Date()}`);
    next();
})

app.use(function (err,req,res,next) {
    if(err) console.log(err);
    next();
})

/*router middleware*/
app.use("/emps" , employees1);

app.listen(3000, (err) => {
    if(err) return err;
})


