const mongoose = require("mongoose")

const propertySchema = new mongoose.Schema({
    Property_Type_id : Number,
	Property_Name : String,
	Property_Type_Name : String,
	Property_City : String,
	Property_Address : String,
	Property_Explore : String,
	Property_Owner_Name : String,
	Property_Marketer : String 
})

const Property = mongoose.model("Property",propertySchema)

exports.Property = Property
