const express = require("express");
const Earring = require("../models/earring.model");
const router = express.Router();




router.post("",async(req,res)=>{
   const detail = await Earring.create(req.body)
   return res.send(detail)
})


router.get("",async(req,res)=>{
    const detail = await Earring.find().lean().exec()
    const pagetitle = "Welcome ji";
    return res.render("alluser",{
        detail:detail,
        pagetitle
    })
 })


 module.exports = router