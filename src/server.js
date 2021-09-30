const express = require("express")

const mongoose = require("mongoose")

const app = express()

app.use(express.json())

app.set("view engine", "ejs")

const connect = () => {
    return mongoose.connect("mongodb+srv://Tanishq:Tanishq123@tanishq.rxt9e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

const earringSchema = new mongoose.Schema({
    name:{type:String, required:true},
    price:{type:Number, required:true},
    image:{type:String, required:true}
},{
    versionKey:false
})

const Earring = mongoose.model("earring", earringSchema);

app.post("/earrings", async(req, res)=>{
    const details = await Earring.create(req.body)

    return res.status(201).send({details})
})

app.get("/earrings", async(req, res)=>{
    const details = await Earring.find()

    res.render("earrings1",{
        details
    })
})
app.get("/:name", async(req, res)=>{
    const details = await Earring.find({name: req.params.name})

    res.render("order",{
        details
    })
})



app.use(express.static("public"))

app.listen(3000, async function(){
    await connect()

    console.log("server running");
})