const mongoose = require("mongoose")

const studschema = new mongoose.Schema({
    ID: {type: Number, required: true},
    Name: {type: String, required: true},
    Address: {type: String, required: true},
    Fees: Object,
    Result: Object
});
module.exports = mongoose.model("students" , studschema);
