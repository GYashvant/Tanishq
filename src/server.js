const path = require("path")
const bodyParser = require("body-parser");
const express = require("express")
const connect = require("./configs/db");

const app = express();
app.use(express.json())
const earringController = require("./controllers/earring.controller");
const loginController = require("./controllers/login.controller")
const signupController = require("./controllers/signup.controller")
const paymentController = require("./controllers/payment.controller")
const cartController = require("./controllers/cart.controller")
const indexController = require("./controllers/index.controller")

// app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended: true}));


app.use("/earrings",earringController)
app.use("/logins",loginController)
app.use("/signups",signupController)
app.use("/payments",paymentController)
app.use("/carts",cartController)
app.use("/indexs",indexController)
app.use(express.static("public"))

app.listen(3000,async(req,res)=>{
    await connect();
    console.log("Listening to 3000")
})