const express = require("express")

const Earring = require("../models/earring.model")

const router = express.Router()

//-------cruds for price filters-----------//

router.get("", async(req, res)=>{
    const details = await Earring.find({$and: [{price:{$gt:0}},{price:{$lt:10000}}]})

    res.render("earrings",{
        details
    })
})

module.exports = router;