const mongoose = require("mongoose");
const signupSchema = new mongoose.Schema({
    name: {type:String,required:true},
    price: {type:String,required:true},
    Image: {type:String,required:true}
},{
    versionKey:false
})

const Signup = mongoose.model("signup",signupSchema)

module.exports = Signup;