const express = require('express');
var http = require('http');
let app = express();

const assignment = require("../Assignment2/assignment_route");
app.use("/emps/empID/child/assignments", assignment);

http.createServer(app).listen(3000, () => {
    console.log("Server started on port 3000");
});