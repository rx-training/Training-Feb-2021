const express = require("express");
const StudentRoute = require("./controllers/student");
const mongoose = require("mongoose");
const app = express();

mongoose.set("useFindAndModify", false);
mongoose.connect(
  "mongodb://localhost/reactstudent",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Error while connecting to mongodb..");
    } else {
      console.log("Successfully connected to mongodb..");
    }
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", StudentRoute);

app.listen(5000, () => {
  console.log(`server is running at port no. 5000`);
});
