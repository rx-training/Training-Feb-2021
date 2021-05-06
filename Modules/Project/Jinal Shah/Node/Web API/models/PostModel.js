const mongoose = require('mongoose');

/* mongoose.connect('mongodb://localhost/instagram',{ useNewUrlParser :true, useUnifiedTopology : true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));   */
 

const postSchema = new mongoose.Schema({
    postID :{
        type : String,
        required : true
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'userAccount'
    },
    caption : {
        type : String
    },
    timePosted : {
        type : Date,
        default : Date.now
    }
})


const post = mongoose.model('userPost',postSchema)
module.exports = post

async function addPost(){

    const d1 = new post ({
        postID : 'AC001',
        userID : '60854159e322e127f4b8da25',
        caption : 'Life is beautiful'
       // timePosted : Date()
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

//addPost()

/*

{
       "postID" : "CH001",
        "userID" : "608952f6cdcb1b3dec1fc3c0",
        "timePosted" : {{ISO_Date}}
}

{
       "postID" : "CH001",
        "userID" : "608952f6cdcb1b3dec1fc3c0",
        "caption" : "Live life in your own terms"
}


*/

