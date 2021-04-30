const postLike = require('../models/PostLikeModel');

class postLikeLogic{

    async all(req,res){
        const sdata =await postLike.find()
        //.populate('pID likedBY','userID userName -_id')
        .populate({
            path :'pID',
            populate :{
                path : 'userID',
                select : 'userID userName -_id'
            }
        })
        .populate('likedBY','userID -_id')
        res.send(sdata)
    }

    async insert(req,res){
        const newdata = req.body
        const data1 = new postLike(newdata)
        try{
            const result = await data1.save();
            res.send(result)
        }
        catch(ex){
            for(let field in ex.errors)
                console.log(ex.errors[field].message)
        }
    }

    async getbyid(req,res){
        const ID1 = req.params.id
        const sdata =await postLike.find({ likeID : ID1}).populate({
            path :'pID',
            populate :{
                path : 'userID',
                select : 'userID userName -_id'
            }
        })
        .populate('likedBY','userID -_id')
        if(sdata.length == 0) res.status(404).send("user not found..") 
        else {
            res.send(sdata)
        }
    }

    async update(req,res)  {
        const ID1 = req.params.id
        const selData = await postLike.find({ likeID : ID1 }).populate({
            path :'pID',
            populate :{
                path : 'userID',
                select : 'userID userName -_id'
            }
        })
        .populate('likedBY','userID -_id')

        if(selData.length == 0) res.status(404).send("user not found..")
        const newdata = req.body
        for(let i in newdata){
            selData[0][i] = newdata[i]
        }
        try{
            const result = await selData[0].save();
            res.send(result)
        }
        catch(ex){
            for(let field in ex.errors)
                console.log(ex.errors[field].message)
        }
    }
    
    async delete(req,res)  {
        const ID1 = req.params.id
        const selData = await postLike.find({ likeID : ID1 }).populate({
            path :'pID',
            populate :{
                path : 'userID',
                select : 'userID userName -_id'
            }
        })
        .populate('likedBY','userID -_id')
        if(selData.length == 0) res.status(404).send("user not found..")
        const remove = await postLike.remove({ likeID : ID1 })
        res.send(selData)
    }
}

module.exports = postLikeLogic