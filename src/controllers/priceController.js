const express = require("express")

const Earring = require("../models/earrings.model")

const router = express.Router()
//-------cruds for price filters-----------//

router.get("/price=0-10000", async(req, res)=>{
    const details = await Earring.find({$and: [{price:{$gt:0}},{price:{$lt:10000}}]})
    res.render("earrings",{
        details
    })
})

router.get("/price=10000-25000", async(req, res)=>{
    const details = await Earring.find({$and: [{price:{$gt:10000}},{price:{$lt:25000}}]})

    res.render("earrings",{
        details
    })
})

router.get("/price=25000-50000", async(req, res)=>{
    const details = await Earring.find({$and: [{price:{$gt:25000}},{price:{$lt:50000}}]})

    res.render("earrings",{
        details
    })
})

router.get("/price=50000-200000", async(req, res)=>{
    const details = await Earring.find({$and: [{price:{$gt:50000}},{price:{$lt:200000}}]})

    res.render("earrings",{
        details
    })
})

module.exports = router;