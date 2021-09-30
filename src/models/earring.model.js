const mongoose = require("mongoose");
const earringSchema = new mongoose.Schema({
    name: {type:String,required:true},
    price: {type:String,required:true},
    Image: {type:String,required:true}
},{
    versionKey:false
})

const Earring = mongoose.model("earring",earringSchema)

module.exports = Earring;