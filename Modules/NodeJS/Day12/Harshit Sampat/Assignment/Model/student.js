const mongoose = require('mongoose') //module import

//create schema
const studentSchema =new mongoose.Schema({
        studentID:
        {
            type:Number,
            required:true
        },
        studentName:{
            type:String,
            required:true
        },
        result:
            {
                English:
                {
                    type:Number,
                    required:true
                },
                Math:
                {
                    type:Number,
                    required:true
                },
                science:
                {
                    type:Number,
                    required:true
                },
            },
        Fees:{
               feesId:
               {
                    type:Number,
                    required:true
               },
               studentId:
               {
                type:Number,
                required:true
                },
               stundeName:
               {
                   type:String,
                   required:true
               },
               Fees_status:
               {
                   type:Boolean,
                  required:true
               }
            }   

        });

        //create model
        const Student  = mongoose.model('Student',studentSchema)

        //export model
        module.exports = Student