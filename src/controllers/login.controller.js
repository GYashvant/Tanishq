const express = require("express");
const Login = require("../models/login.model");
const router = express.Router();




router.post("",async(req,res)=>{
   const detail = await Login.create(req.body)
   return res.send(detail)
})





router.get("",async(req,res)=>{
    const detail = await Login.find().lean().exec()
    
    return res.render("login",{
        detail:detail,
   
    })
 })



 router.get("/signups",async(req,res)=>{
    const detail = await Login.find().lean().exec()
    
     res.render("signups")
 })

 
 router.get("/indexs",async(req,res)=>{


     res.render("index")
 })

 module.exports = router