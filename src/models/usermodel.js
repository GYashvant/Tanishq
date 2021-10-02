const mongoose = require("mongoose")

const userSchema=mongoose.Schema({
    userName: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    cart:[],
    carttotal:{type:Number,required:false},
})
const user=mongoose.model("user",userSchema)

module.exports=user