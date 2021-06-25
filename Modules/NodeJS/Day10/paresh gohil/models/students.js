const mongoose = require("mongoose")

const studschema = new mongoose.Schema({
    ID: Number,
    Name: String,
    Address: String,
    Fees: Object,
    Result: Object
});
module.exports = mongoose.model("students" , studschema);
