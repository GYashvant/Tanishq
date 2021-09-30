const mongoose = require("mongoose")

//-------creating a schema for earrings products--------//

const earringSchema = new mongoose.Schema({
    name:{type:String, required:true},
    price:{type:Number, required:true},
    image:{type:String, required:true}
},{
    versionKey:false
})

const Earring = mongoose.model("earring", earringSchema);

module.exports = Earring;
