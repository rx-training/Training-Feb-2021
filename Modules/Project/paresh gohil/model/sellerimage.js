const mongoose = require("mongoose")

const sellerimageSchema = new mongoose.Schema({
    Property_Type_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Property"
    },
    imageid : Number,
	Images : {
        data : Buffer,
        contentType : String
    }
})

const Sellerimage = mongoose.model("Sellerimage",sellerimageSchema)

exports.Sellerimage = Sellerimage
