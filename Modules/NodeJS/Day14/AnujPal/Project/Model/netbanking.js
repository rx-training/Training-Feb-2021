const mongoose=require('mongoose');
const netBankingSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        unique:true
    },
    pass:{
        type:String,
        required:true,
    }
})
module.exports=netBankingSchema;