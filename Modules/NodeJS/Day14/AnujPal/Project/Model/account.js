const mongoose=require('mongoose')

const accountSchema = new mongoose.Schema({
    accountNo:{
        type: String,
        required:true,
        unique:true
    },

    accountHolderName:{
        type:String,
        required:true
    },
    CIF:{
        type:String,
        required:true
    },
    branchCode:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Branch'
    }
})