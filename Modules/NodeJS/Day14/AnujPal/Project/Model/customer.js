const mongoose=require('mongoose')
const customerSchema= new mongoose.Schema({
  custId:{
      type:Number,
      required:true,
      unique:true
  },
  accountNo:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Account'
  },
  phoneNo:{
      type:String,
      required:true
  },
  city:{
      type:String
  }

})