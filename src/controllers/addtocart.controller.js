const express=require("express")
const { request } = require("http")
const router=express.Router()

const user=require("../src/models/usermodel")

router.get("/:userid/:productid",async (req,res) =>{
    const myuser=req.params.userid

    const myproduct=req.params.productid

    const searchresult=await user.findByIdAndUpdate(  myuser,{ $push: { cart: myproduct } })

    res.send({searchresult})
})

module.exports=router


