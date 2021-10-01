const express = require("express")

const Earring = require("../models/earring.model")

const router = express.Router()
let count =0;
//------cruds for products----------//

router.post("", async(req, res)=>{
    const details = await Earring.create(req.body)

    return res.status(201).send({details})
})

router.get("/page2", async(req, res)=>{
    
    count++
    console.log(count);
    let details;
    if(count==1){
         details = await Earring.find().limit(30);
    }else{
        count=0
        details = await Earring.find().limit(15);
    }
    res.render("earrings",{
        details
    })
})



router.get("", async(req, res)=>{
   const details = await Earring.find().limit(15)
     res.render("earrings",{
         details,
     })
 })



router.get("/:name", async(req, res)=>{
    const details = await Earring.find({name: req.params.name})

    res.render("order",{
        details
    })
})

module.exports = router