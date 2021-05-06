const mongoose = require('mongoose');

/* mongoose.connect('mongodb://localhost/instagram',{ useNewUrlParser :true, useUnifiedTopology : true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));   */

const followSchema = new mongoose.Schema({
    ID :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'userAccount'
    },
    followers : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'userAccount'
    }],
    followings : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'userAccount'
    }]
})

const follow = mongoose.model('followInfo',followSchema)
module.exports = follow

async function addUser(){

    const d1 = new follow ({
        ID : '60867cdf1c76210870718212',
        followers :['60867b73db9bb103bceeb364','60867c8b1c76210870718211','60867d341c76210870718213'],
        followings : ['60867b73db9bb103bceeb364','60867d341c76210870718213']
    });
    
    try{
        const result = await d1.save();
        console.log(result)
    }
    catch(ex){
        for(field in ex.errors)
            console.log(ex.errors[field].message)
    }    
} 

//addUser()

/*

{
    "ID" : "608953d02344d01328d97b53", //jinal
    "followers" :["608952f6cdcb1b3dec1fc3c0","608958227dd6c42e08c8a3b5"], // dhruti , shweta
    "followings" : ["608952f6cdcb1b3dec1fc3c0"]  //dhruti
}

{
    "ID" : "608952f6cdcb1b3dec1fc3c0", //dhruti
    "followers" :["608953d02344d01328d97b53","608958227dd6c42e08c8a3b5"],
    "followings" : ["608958227dd6c42e08c8a3b5","608953d02344d01328d97b53"]
}

*/