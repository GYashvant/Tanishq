const express = require("express")

const Earring = require("../models/earrings.model")

const router = express.Router()

//------cruds for products----------//

router.post("", async(req, res)=>{
    const details = await Earring.create(req.body)

    return res.status(201).send({details})
})

router.get("", async(req, res)=>{
    const details = await Earring.find().limit(15)

    res.render("earrings",{
        details
    })
})

router.get("/page2", async(req, res)=>{
    const details = await Earring.find().limit(15)

    res.render("earrings",{
        details
    })
})

router.get("/:name", async(req, res)=>{
    const details = await Earring.find({name: req.params.name})

    res.render("order",{
        details
    })
})

module.exports = router