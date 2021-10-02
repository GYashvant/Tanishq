const express = require("express")
const cartController = require('./cartController')
const earringController = require('./earringController')
const priceController = require('./priceController')

function getController(){
    const router = express.Router()
    earringController(router)
    cartController(router);
    priceController(router)
    return router
}

module.exports = { getController }