const express=require("express")
const user=require("../src/models/usermodel")

const router = express.Router()

//creating a user
router.post("",async (req,res) =>{
    const myuser=await user.create(req.body)

    res.send(myuser)
})
module.exports=router

