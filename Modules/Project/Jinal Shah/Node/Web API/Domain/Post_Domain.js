const post = require('../models/PostModel');

class postLogic{

    async all(req,res){
        const sdata =await post.find().populate('userID','userID userName -_id')
        res.send(sdata)
    }

    async getbyid(req,res){
        const ID1 = req.params.id
        const sdata =await post.find({ postID : ID1}).populate('userID','userID userName -_id')
        if(sdata.length == 0) res.status(404).send("user not found..") 
        res.send(sdata)
    }

    async insert(req,res) {
        const newdata = req.body
        const data1 = new post(newdata)
        try{
            const result = await data1.save();
            res.send(result)
        }
        catch(ex){
            for(let field in ex.errors)
                console.log(ex.errors[field].message)
        }
    }

    async update(req,res)  {
        const ID1 = req.params.id
        const selData = await post.find({ postID : ID1 })
        if(selData.length == 0) res.status(404).send("user not found..")
        const newdata = req.body
        for(let i in newdata){
            selData[0][i] = newdata[i]
        }
        const result = await selData[0].save();
        res.send(result)
    }

    async delete(req,res)  {
        const ID1 = req.params.id
        const selData = await post.find({ postID : ID1 })
        if(selData.length == 0) res.status(404).send("user not found..")
        const remove = await post.remove({ postID : ID1 })
        res.send(selData)
    }
}

module.exports = postLogic