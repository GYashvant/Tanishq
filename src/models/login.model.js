const mongoose = require("mongoose");
const loginSchema = new mongoose.Schema({
    name: {type:String,required:true},
    price: {type:String,required:true},
    Image: {type:String,required:true}
},{
    versionKey:false
})

const Login = mongoose.model("login",loginSchema)

module.exports = Login;