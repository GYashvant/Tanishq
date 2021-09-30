const express = require("express")

const app = express()

app.use(express.json())

app.set("view engine", "ejs")


const connect = require("./configs/db")

const earringController = require("./controllers/earring.controller")
const priceController = require("./controllers/price.controller")

app.use("/price",priceController)

app.use("/earrings",earringController)

app.use("", earringController)

app.use(express.static("public"))

app.listen(3000, async function(){
    await connect()

    console.log("server running");
})