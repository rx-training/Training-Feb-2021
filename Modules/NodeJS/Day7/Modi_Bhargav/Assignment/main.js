const express = require('express');
const employee = require("./controller/employee")
const app = express();
app.use(express.json())

app.use("/emps",employee);

app.listen(3000, () => {
  console.log("this 3000 port susscesfully run")
})
