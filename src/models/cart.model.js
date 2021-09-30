const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    name: {type:String,required:true},
    price: {type:String,required:true},
    Image: {type:String,required:true}
},{
    versionKey:false
})

const Cart = mongoose.model("cart",cartSchema)

module.exports = Cart;