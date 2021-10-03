const mongoose = require("mongoose")

//-------creating a schema for earrings products--------//

const cartSchema = new mongoose.Schema({
    name:{type:String, required:true},
    price:{type:Number, required:true},
    image:{type:String, required:true}
},{
    versionKey:false
})

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;