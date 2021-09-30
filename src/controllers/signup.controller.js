const express = require("express");
const Signup = require("../models/signup.model");
const router = express.Router();




router.post("",async(req,res)=>{
   const detail = await Signup.create(req.body)
   return res.send(detail)
})



router.get("",async(req,res)=>{
    const detail = await Signup.find().lean().exec()
    
    return res.render("signups")
 })

 router.get("/logins",async(req,res)=>{
    const detail = await Signup.find().lean().exec()
    
    return res.render("login")
 })

 module.exports = router