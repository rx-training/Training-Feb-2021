const express = require('express');
const app = express();
const mongoose = require('mongoose');

//  starting the server

app.listen(3000, (err) => {
    if (err) console.log("Server not started");
    console.log("Server started on port 3000");

});

// connecting to the database
mongoose.connect('mongodb://localhost/Day13-Assignment', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', function () {
    console.log("We Are connected to Database");
});