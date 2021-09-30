const express = require("express");
const Cart = require("../models/cart.model");
const router = express.Router();




router.post("",async(req,res)=>{
   const detail = await Cart.create(req.body)
   return res.send(detail)
})


router.get("",async(req,res)=>{
    const detail = await Cart.find().lean().exec()
  
    return res.render("cart",{
        detail:detail,
 
    })
 })


 module.exports = router