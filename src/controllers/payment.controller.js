const express = require("express");
const Payment = require("../models/payment.model");
const router = express.Router();




router.post("",async(req,res)=>{
   const detail = await Payment.create(req.body)
   return res.send(detail)
})


router.get("",async(req,res)=>{
    const detail = await Payment.find().lean().exec()
    
    return res.render("payment")
    
   
  
 })


 module.exports = router