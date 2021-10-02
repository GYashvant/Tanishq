const express = require("express")

const app = express()

app.use(express.json())
const connect = require("./configs/db")

app.set("view engine", "ejs")


const earringController = require("./controllers/earringController")
const priceController = require("./controllers/priceController")
const cartController = require("./controllers/cartController")


app.use("/cart", cartController)
app.use("/",earringController)
app.use("/price",priceController)


 app.use(express.static('public')) 
/* app.use(express.static(__dirname)); */


app.listen(3000, async function(){
    await connect()

    console.log("server running");
})