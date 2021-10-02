const express = require("express")

const Cart = require("../models/cart.model")

const router = express.Router()
let cart_items = [];
let sum = 0;
const item_set = new Set();

router.get("/:name", async(req, res)=>{
    let count =0;
   
    let cart_data = await Cart.find({name:req.params.name})
    item_set.forEach((name) => {
        if(name === cart_data[0].name){
            count++
        }
    })
    if(count === 0){
    cart_items.push(cart_data[0])
    sum = sum + cart_data[0].price
    }
    console.log(cart_items)
    item_set.add(req.params.name)
    res.render("cart",{
        cart_items,
        sum,
        cart_data
    })
})

module.exports = router