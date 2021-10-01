const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
   cart :[]
},{
    versionKey:false
})

const Cart = mongoose.model("cart",cartSchema)

module.exports = Cart;