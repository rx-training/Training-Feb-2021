const f1 = require('../models/FollowModel')

class FollowDomain{

    async all(req,res){
        const sdata =await f1.find().populate('ID followers followings','userID -_id')
        var i=0;
        var data = [];
        for(i; i<sdata.length; i++){
            var v1 = "UserID = " + sdata[i].ID + " Followers = " + sdata[i].followers + " Followings = " +  
                      sdata[i].followings
            data.push(v1)
        }
        res.send(data)

        //res.send("UserID = " + sdata[0].ID + "<br>Followers = " + sdata[0].followers + "<br>Followings = " + sdata[0].followings)
    }

    async id(req,res){
        const ID1 = req.params.id
        const sdata =await f1.find().populate('ID followers followings','userID -_id')
        var index;
        var i=0;
        var data = [];
        for(i; i<sdata.length; i++){
            var v2 = sdata[i].ID.userID
            if(v2 === ID1) {
                index = i;
                var v1 = "UserID = " + sdata[i].ID + " Followers = " + sdata[i].followers + " Followings = " +  
                sdata[i].followings
                data.push(v1) 
            } 
        }  
        if(data.length == 0) res.send('Record not found..')
        res.send("UserID = " + sdata[index].ID + "<br>Followers = " + sdata[index].followers + "<br>Followings = " + sdata[index].followings)
    }

    async follower(req,res){
        const ID1 = req.params.id
        const sdata =await f1.find().populate('ID followers followings','userID -_id')
        var index;
        var i=0;
        var data = [];
        for(i; i<sdata.length; i++){
            var v2 = sdata[i].ID.userID
            if(v2 === ID1) {
                index = i;
                var v1 = "UserID = " + sdata[i].ID + " Followers = " + sdata[i].followers + " Followings = " +  
                sdata[i].followings
                data.push(v1) 
            } 
        }  
        if(data.length == 0) res.send('Record not found..')
        res.send("Followers = " + sdata[index].followers)
    }

    async following(req,res){
        const ID1 = req.params.id
        const sdata =await f1.find().populate('ID followers followings','userID -_id')
        var index;
        var i=0;
        var data = [];
        for(i; i<sdata.length; i++){
            var v2 = sdata[i].ID.userID
            if(v2 === ID1) {
                index = i;
                var v1 = "UserID = " + sdata[i].ID + " Followers = " + sdata[i].followers + " Followings = " +  
                sdata[i].followings
                data.push(v1) 
            } 
        }  
        if(data.length == 0) res.send('Record not found..')
        res.send("Followings = " + sdata[index].followings)
    }

    async insert(req,res){
        const newdata = req.body
        const data1 = new f1(newdata)
        try{
            const result = await data1.save();
            res.send(result)
        }
        catch(ex){
            for(let field in ex.errors)
                console.log(ex.errors[field].message)
        }
    }

    async update(req,res){

        const ID1 = req.params.id
        const sdata =await f1.find().populate('ID followers followings')
        var index;
        var i=0;
        var data = [];
        for(i; i<sdata.length; i++){
            var v2 = sdata[i].ID.userID
            if(v2 === ID1) {
                index = i;
                var v1 =  sdata[i]
                data.push(v1) 
            } 
        }  
        if(data.length == 0) res.send('Record not found..')
        res.send(data)
        const newdata = req.body
        console.log(newdata)


        /*
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
        } */
    }

    async delete(req,res)  {

        const ID1 = req.params.id
        console.log(ID1)
        const sdata =await f1.find().populate('ID followers followings')
        res.send(sdata)
        var index, i=0 ;
        for(i; i<sdata.length; i++){
            var v2 = sdata[i].ID.userID
            if(v2 === ID1) {
                index = i;
                var v1 =  sdata[i]
            } 
        }  
        

        console.log(sdata[index].ID.userID)
        var a = sdata[index].ID.userID
      
        //const remove = await f1.find(ID : '60867b73db9bb103bceeb364')
        console.log('remove = '+ remove)
        if(v1.length == 0) res.status(404).send("record not found..")
    
    }
}

module.exports = FollowDomain