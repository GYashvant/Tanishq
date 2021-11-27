const express = require("express")

const app = express()
require("dotenv").config()

app.use(express.json())
const connect = require("./configs/db")

app.set("view engine", "ejs")

const indexController = require("./controllers/indexController")
const loginController = require("./controllers/loginController")
const signupController = require("./controllers/signupController")
const earringController = require("./controllers/earringController")
const priceController = require("./controllers/priceController")
const cartController = require("./controllers/cartController")
const paymentController = require("./controllers/paymentController")
const payController = require("./controllers/payController.js")

app.use("/earrings/",priceController)
app.use("/cart", cartController)
app.use("/earrings",earringController)
app.use("/payment",paymentController)
app.use("/pay", payController)
app.use("/",indexController)
app.use("/index",indexController)
app.use("/login",loginController)
app.use("/signup",signupController)




 app.use(express.static('public')) 
/* app.use(express.static(__dirname)); */


app.listen(process.env.PORT || 3000, async function(){
    await connect()

    console.log("server running");
})
