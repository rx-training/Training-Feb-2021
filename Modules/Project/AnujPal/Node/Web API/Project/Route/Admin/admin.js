const mongoose = require("mongoose");
const express = require("express");
const adminRouter = express();
const netbanking = require("../../Model/netbanking");
const admin=require('../../Model/admin')
const Admin=mongoose.model('Admin',admin)
const NetBanking = mongoose.model("netbankings", netbanking);
const user = require("../../Model/netbanking");
// const admin=require('../../Model/admin')
// const Admin=mongoose.model('Admin',admin)
var cryptr = require("cryptr"),
  cryptr = new cryptr("Anuj");
const jwt = require("jsonwebtoken");

class demoAdmin {
  static async getAllUser(req, res) {

    const users = await NetBanking.find();
    res.json(users);

  }
  static async getAllAdmin(req, res) {

    const users = await Admin.find();
    res.json(users);

  }

  static async DeleteUser(req, res) {
    // if (count1 === 0) {
    //     res.json("You do not have accessto this page");
    // }
    // else {
    const user = await NetBanking.deleteOne({ accountNo: req.body.accountNo });
    res.json(user);
    // }
  }
  static async registerAdmin(req,res){
      const admin= new Admin({
          userId:req.body.userId,
          password:req.body.password,
          email:req.body.email
      })
      const a1= await admin.save()
      res.json(a1)
  }
}

// API for see all the users registered
adminRouter.get("/users", demoAdmin.getAllUser);
// API for see all the Admin registered
adminRouter.get("/getAllAdmin", demoAdmin.getAllAdmin);

// API for delete a particular customer
adminRouter.post("/delete", demoAdmin.DeleteUser);

// API fro register admin
adminRouter.post('/register',demoAdmin.registerAdmin)

module.exports = adminRouter;

async function adminLogin(req, res, next) {
  var count = 0;
  const users = await NetBanking.find();

  for (const iterator of users) {
    var userId = cryptr.decrypt(iterator.userId);
    var pass = cryptr.decrypt(iterator.pass);
    var role = iterator.role;
    if (
      userId === req.body.userId &&
      pass === req.body.pass &&
      role === "admin"
    ) {
      count = 1;
    }
  }
  count1 = count;
  console.log(count1);

  next();
}
