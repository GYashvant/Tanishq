const express = require("express")

const Earring = require('../models/earrings.model')
const Cart = require("../models/cart.model")

const router = express.Router()
let cart_items = [];
let sum = 0;
let count = 1;  
let cart_data;
const item_set = new Set();

router.get('/cartItems', async(req, res) => {
    cart_items = await Cart.find({})
    res.render("cart",{
        cart_items,
        sum,
    })
})

router.get("/:name", async(req, res)=>{
     cart_data = await Earring.find({name:req.params.name})

     item_set.forEach((item_name) => {
        if(item_name === cart_data[0].name){
            count = 0 
        }
        else{
            count = 1
        }
    })
    
    if(count === 1){
    await Cart.insertMany(cart_data)
     cart_items = await Cart.find({})
    item_set.add(cart_data[0].name)
    sum = sum + cart_data[0].price
    }
     res.redirect('/cart/cartItems');
});



router.get("/delete_item/:name", async(req, res)=>{
    let delete_item = await Cart.find({name:req.params.name})
    sum = Math.abs(sum - delete_item[0].price)
    item_set.delete(delete_item[0].name)
    await Cart.deleteOne({name: delete_item[0].name})
    cart_items = await Cart.find({})
    res.redirect('/cart/cartItems');

})

module.exports = router