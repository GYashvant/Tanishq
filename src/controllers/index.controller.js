const express = require("express");
const Index = require("../models/index.model");
const router = express.Router();



router.get("",async(req,res)=>{
    res.render("index")
})

module.exports = router