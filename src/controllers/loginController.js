const express = require("express")

const router = express.Router()

router.get("",async(req, res)=>{
    res.render('login')
})

module.exports = router