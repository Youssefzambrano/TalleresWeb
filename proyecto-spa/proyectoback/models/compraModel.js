const mongoose = require("mongoose"); 


const BillSchema = mongoose.Schema({
    fecha : Date,
    user : String,
    producto: String,
    precio: Number
});

module.exports = mongoose.model("bill",BillSchema);