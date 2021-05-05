//const _ = require("lodash")
const bcrypt = require("bcrypt")
const express = require("express")
const app = express()
const router = express.Router()
const {User} = require("../../model/user")

app.use(express.json())

class users{
    static async all(req,res){
        const user1 = await User.find()
        res.send(user1)
    }
    static async one(req,res){
        const user1 = await User.find({UserID : req.params.UserID})
        //res.send(_.pick(user1, ['UserID','User_Type','UserName','User_Mobole_No','User_Email']))
        res.send(user1)
    }
    static async posts(req,res){
        let user = await User.findOne({User_Email : req.body.User_Email})
        if(user) return res.status(400).send("User already registered")

        const user1 = new User(req.body)
        const salt = await bcrypt.genSalt(10)
        user1.User_Password = await bcrypt.hash(user1.User_Password,salt)
        const result = await user1.save()
        res.send(result)
    }
    static async puts(req,res){
        const user1 = User.find({UserID : req.params.UserID})
        const user2 = await User.updateOne(user1,req.body)
        res.send(user2)
    }
    static async deletes(req,res){
        const user1 = User.find({UserID : req.params.UserID})
        const user2 = await User.deleteOne(user1)
        res.send(user2)
    }
}

router.get("/",users.all)

router.get("/:UserID",users.one)

router.post("/",users.posts)

router.put("/:UserID",users.puts)

router.delete("/:UserID",users.deletes)

module.exports = router
