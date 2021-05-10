const express = require('express');
global.config = require('./config_Data/config')
const app = express();
const mongoose = require('mongoose');
const admin = require("./controller/adminController/adminindex")
const main = require("./controller/userController/main")
mongoose.connect('mongodb://localhost/ola', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to mongoDB...", err))

app.use(express.json())

app.use("/olacab", admin);

app.use("/olacab", main);

//catch 404 anf forward to error handling
app.use((req, res, next) => {
  next(createError(404));
});

//error handling
app.use((err, req, res, next) => {
  // only providing error in devlopment
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "devlopment" ? err : {};

  // sending error message
  res.status(err.status || 500).send("something error")
});


app.listen(3000, () => {
  console.log("this 3000 port susscesfully run")
})