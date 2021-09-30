const mongoose = require("mongoose");
const indexSchema = new mongoose.Schema({
    name: {type:String,required:true},
 
},{
    versionKey:false
})

const Index = mongoose.model("index",indexSchema)

module.exports = Index;