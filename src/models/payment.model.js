const mongoose = require("mongoose");
const paymentSchema = new mongoose.Schema({
    name: {type:String,required:true},
    price: {type:String,required:true},
    Image: {type:String,required:true}
},{
    versionKey:false
})

const Payment = mongoose.model("payment",paymentSchema)

module.exports = Payment;