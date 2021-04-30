const mongoose = require('mongoose');

/* mongoose.connect('mongodb://localhost/instagram',{ useNewUrlParser :true, useUnifiedTopology : true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));    */
 

const postLikeSchema = new mongoose.Schema({
    likeID :{
        type : String,
        required : true
    },
    pID :{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'userPost'
    },
    likedBY : [{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'userAccount'
    }]
})

const postLike = mongoose.model('PostLike',postLikeSchema)
module.exports = postLike

async function add(){

    const d1 = new postLike ({
        likeID : 'PL001',
        pID : '60895c9e3b7819018c8441de',
        likedBY : ['608952f6cdcb1b3dec1fc3c0','608953d02344d01328d97b53']
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

//add()

/*

{ 
    "likeID" : "AC001", 
    "pID" : "608953d02344d01328d97b53", 
    "likedBY" : ["608952f6cdcb1b3dec1fc3c0","608958227dd6c42e08c8a3b5"]
   
}

*/